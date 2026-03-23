import { NextRequest, NextResponse } from "next/server";

const rateLimitWindowMs = 60_000;
const rateLimitMax = 8;
const requestsByIp = new Map<string, number[]>();

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  category?: string;
  budget?: string;
  deadline?: string;
  message?: string;
  website?: string;
};

function clean(value: unknown, max = 300) {
  if (typeof value !== "string") {
    return "";
  }
  return value.trim().slice(0, max);
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function checkRateLimit(ip: string) {
  const now = Date.now();
  const history = requestsByIp.get(ip) ?? [];
  const fresh = history.filter((timestamp) => now - timestamp < rateLimitWindowMs);
  fresh.push(now);
  requestsByIp.set(ip, fresh);
  return fresh.length <= rateLimitMax;
}

async function sendViaResend(payload: {
  name: string;
  email: string;
  company: string;
  category: string;
  budget: string;
  deadline: string;
  message: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO || "info@fremlosmedia.cz";
  const from = process.env.CONTACT_FROM || "Fremlos Media <onboarding@resend.dev>";
  const allowLogOnly = process.env.CONTACT_ALLOW_LOG_ONLY === "true";

  if (!apiKey || !to) {
    if (allowLogOnly) {
      return { sent: false, mode: "log-only" as const };
    }
    throw new Error("Missing contact email configuration.");
  }

  const html = `
    <h2>New inquiry</h2>
    <p><strong>Name:</strong> ${payload.name}</p>
    <p><strong>Email:</strong> ${payload.email}</p>
    <p><strong>Company:</strong> ${payload.company || "-"}</p>
    <p><strong>Category:</strong> ${payload.category}</p>
    <p><strong>Budget:</strong> ${payload.budget || "-"}</p>
    <p><strong>Deadline:</strong> ${payload.deadline || "-"}</p>
    <p><strong>Message:</strong><br/>${payload.message.replace(/\n/g, "<br/>")}</p>
  `;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: `New inquiry: ${payload.category}`,
      reply_to: payload.email,
      html,
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Resend error: ${details}`);
  }

  return { sent: true, mode: "resend" as const };
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (!checkRateLimit(ip)) {
    return NextResponse.json({ ok: false, message: "Too many requests." }, { status: 429 });
  }

  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid JSON body." }, { status: 400 });
  }

  if (clean(body.website, 120)) {
    return NextResponse.json({ ok: true, message: "Accepted." });
  }

  const name = clean(body.name, 120);
  const email = clean(body.email, 160);
  const company = clean(body.company, 140);
  const category = clean(body.category, 80);
  const budget = clean(body.budget, 80);
  const deadline = clean(body.deadline, 40);
  const message = clean(body.message, 4000);

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, message: "Name, email and message are required." }, { status: 400 });
  }

  if (!isEmail(email)) {
    return NextResponse.json({ ok: false, message: "Invalid email." }, { status: 400 });
  }

  try {
    const delivery = await sendViaResend({
      name,
      email,
      company,
      category,
      budget,
      deadline,
      message,
    });

    if (delivery.mode === "log-only") {
      console.info("[contact] log-only submission", { name, email, company, category, budget, deadline, message });
      return NextResponse.json(
        { ok: true, message: "Accepted in log-only mode (CONTACT_ALLOW_LOG_ONLY=true)." },
        { status: 202 }
      );
    }

    return NextResponse.json({ ok: true, message: "Inquiry sent." });
  } catch (error) {
    console.error("[contact] failed", error);
    const message = error instanceof Error ? error.message : "Failed to send inquiry.";
    return NextResponse.json({ ok: false, message }, { status: 502 });
  }
}
