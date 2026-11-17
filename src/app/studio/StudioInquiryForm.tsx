"use client";

import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from "react";

// Inquiry form for the studio page. It posts to the same /api/contact route
// as the homepage form, so studio inquiries arrive in the same inbox.
//
// Buttons elsewhere on the page link to "#poptat-<option>" (for example
// "#poptat-pilot"). The form then preselects that option and scrolls into
// view, so choosing a package takes one click.

export const STUDIO_OPTIONS = [
  { id: "pilot", label: "Podcast – Pilot (4 990 Kč)" },
  { id: "serie", label: "Podcast – Série (14 990 Kč / měsíc)" },
  { id: "dil", label: "Podcast – Jeden díl (9 990 Kč)" },
  { id: "pronajem", label: "Pronájem studia" },
  { id: "talking-head", label: "Talking head videa" },
  { id: "portrety", label: "Firemní portréty a medailonky" },
  { id: "foceni", label: "Kreativní a produktové focení" },
  { id: "jine", label: "Něco jiného" },
] as const;

type OptionId = (typeof STUDIO_OPTIONS)[number]["id"];

const EMPTY = {
  name: "",
  email: "",
  phone: "",
  option: "pilot" as OptionId,
  date: "",
  message: "",
  website: "",
};

const MESSAGE_HINT: Record<OptionId, string> = {
  pilot: "O čem bude podcast, kolik lidí bude mluvit…",
  serie: "O čem bude podcast, kolik lidí bude mluvit, jak často chcete točit…",
  dil: "O čem bude díl, kolik lidí bude mluvit…",
  pronajem: "Co budete točit nebo fotit a na jak dlouho…",
  "talking-head": "Pro koho jsou videa a kolik jich potřebujete…",
  portrety: "Kolik lidí budeme fotit nebo natáčet…",
  foceni: "Co budeme fotit a kde fotky použijete…",
  jine: "Napiš, co máš v hlavě…",
};

export function StudioInquiryForm() {
  const [data, setData] = useState(EMPTY);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const pick = (hash: string) => {
      const match = hash.match(/^#poptat-(.+)$/);
      const option = STUDIO_OPTIONS.find((item) => item.id === match?.[1]);
      if (!option) return false;
      setData((prev) => ({ ...prev, option: option.id }));
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      // Put the cursor in the first field once the page has scrolled there.
      window.setTimeout(() => formRef.current?.querySelector("input")?.focus({ preventScroll: true }), 900);
      return true;
    };
    // Clicks are caught directly, so pressing the same button twice still
    // scrolls to the form (the hash would not change the second time).
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.('a[href^="#poptat-"]');
      if (!link) return;
      const hash = link.getAttribute("href") ?? "";
      if (pick(hash)) {
        event.preventDefault();
        history.replaceState(null, "", hash);
      }
    };
    // A link from another page, e.g. /studio#poptat-pronajem.
    pick(window.location.hash);
    document.addEventListener("click", onClick);

    // While the form is on screen the sticky mobile button would only cover
    // it, so the page hides that button (see .studio-sticky-cta in CSS).
    const root = document.documentElement;
    const observer = new IntersectionObserver(([entry]) => {
      root.dataset.studioFormVisible = entry.isIntersecting ? "true" : "false";
    });
    if (formRef.current) observer.observe(formRef.current);

    return () => {
      document.removeEventListener("click", onClick);
      observer.disconnect();
      delete root.dataset.studioFormVisible;
    };
  }, []);

  const setField =
    (field: keyof typeof EMPTY) =>
    (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const value = event.target.value;
      setData((prev) => ({ ...prev, [field]: value }));
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setFeedback("");

    const option = STUDIO_OPTIONS.find((item) => item.id === data.option)!;
    // The API has no phone field, so the phone number goes at the top of the
    // message, where it is the first thing the team sees.
    const message = [data.phone ? `Telefon: ${data.phone}` : "", data.message].filter(Boolean).join("\n\n");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          company: "",
          category: `Studio: ${option.label.replace(/ /g, " ")}`,
          budget: "",
          deadline: data.date,
          message,
          website: data.website,
        }),
      });
      let payload: { ok?: boolean; message?: string } = {};
      try {
        payload = (await response.json()) as typeof payload;
      } catch {
        payload = {};
      }
      if (!response.ok || !payload.ok) {
        throw new Error("send failed");
      }
      setStatus("success");
      setFeedback("Díky, poptávku máme. Ozveme se do 24 hodin.");
      setData({ ...EMPTY, option: data.option });
    } catch {
      setStatus("error");
      setFeedback("Odeslání se nepovedlo. Zkus to znovu, nebo nám zavolej či napiš na info@fremlosmedia.cz.");
    }
  };

  return (
    <form className="contact-form studio-form" id="poptavka" onSubmit={handleSubmit} ref={formRef}>
      <p className="text-sm tracking-[0.18em] text-zinc-300 uppercase">Poptávkový formulář</p>
      <p className="mt-2 text-zinc-300">Vyplň pár řádků a&nbsp;ozveme se do&nbsp;24&nbsp;hodin.</p>

      <label className="mt-6">
        Co chceš natočit
        <select onChange={setField("option")} value={data.option}>
          {STUDIO_OPTIONS.map((item) => (
            <option key={item.id} value={item.id}>
              {item.label}
            </option>
          ))}
        </select>
      </label>

      <div className="form-row">
        <label>
          Jméno
          <input autoComplete="name" onChange={setField("name")} required type="text" value={data.name} />
        </label>
        <label>
          E-mail
          <input autoComplete="email" onChange={setField("email")} required type="email" value={data.email} />
        </label>
      </div>

      <div className="form-row">
        <label>
          Telefon <span className="studio-form-optional">(nepovinné)</span>
          <input autoComplete="tel" onChange={setField("phone")} type="tel" value={data.phone} />
        </label>
        <label>
          Kdy by se ti hodilo <span className="studio-form-optional">(nepovinné)</span>
          <input onChange={setField("date")} type="date" value={data.date} />
        </label>
      </div>

      <label>
        Zpráva
        <textarea
          onChange={setField("message")}
          placeholder={MESSAGE_HINT[data.option]}
          required
          rows={4}
          value={data.message}
        />
      </label>

      <input
        aria-hidden
        autoComplete="off"
        className="honeypot"
        onChange={setField("website")}
        tabIndex={-1}
        type="text"
        value={data.website}
      />

      {status === "success" || status === "error" ? (
        <p aria-live="polite" className={`form-feedback mt-5 ${status === "success" ? "is-success" : "is-error"}`}>
          {feedback}
        </p>
      ) : null}

      <button className="btn-primary btn-fx mt-5" disabled={status === "submitting"} type="submit">
        {status === "submitting" ? "Odesílám…" : "Odeslat poptávku"}
        <span aria-hidden>↗</span>
      </button>
    </form>
  );
}
