"use client";

import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState, type ChangeEvent, type FormEvent, type MouseEvent } from "react";

type Language = "cs" | "en" | "de";

type PageCopy = {
  label: string;
  heroTop: string;
  heroBottom: string;
  heroLead: string;
  ctaPrimary: string;
  ctaSecondary: string;
  reelLabel: string;
  showreelLabel: string;
  showreelTitle: string;
  showreelItems: Array<{ title: string; meta: string; tone: string; href: string }>;
  aboutLabel: string;
  aboutTitle: string;
  aboutLead: string;
  aboutMembers: Array<{ name: string; role: string; note: string; video: string }>;
  sectionsLabel: string;
  sectionTitle: string;
  services: Array<{ title: string; desc: string; tag: string }>;
  processTitle: string;
  process: string[];
  contactTitle: string;
  contactLead: string;
  contactButton: string;
};

const copy: Record<Language, PageCopy> = {
  cs: {
    label: "",
    heroTop: "Točíme",
    heroBottom: "videa.",
    heroLead: "Reklamní, eventový, firemní.",
    ctaPrimary: "Napiš nám",
    ctaSecondary: "Portfolio",
    reelLabel: "FREMLOS MEDIA / CINEMATIC / FAST DELIVERY /",
    showreelLabel: "",
    showreelTitle: "Co točíme",
    showreelItems: [
      {
        title: "Eventové videa",
        meta: "",
        tone: "",
        href: "/showreel/eventove-videa",
      },
      {
        title: "Reklamní videa",
        meta: "",
        tone: "",
        href: "/showreel/reklamni-videa",
      },
      {
        title: "Firemní videa",
        meta: "",
        tone: "",
        href: "/showreel/firemni-videa",
      },
    ],
    aboutLabel: "",
    aboutTitle: "Tým",
    aboutLead: "Klikni na medailonek a přehraj video se zvukem.",
    aboutMembers: [
      {
        name: "Dominik",
        role: "DP & Sales",
        note: "Budu se o vás starat, řešit vaše přání a požadavky – a potkáte mě na place s kamerou v ruce.",
        video: "/video/dominik1.mov",
      },
      {
        name: "Mára",
        role: "Edit & FPV",
        note: "Primárně střihám videa, koukám na videa s marketingovým přesahem a proháním FPV drony.",
        video: "/video/mara.mov",
      },
    ],
    sectionsLabel: "SLUŽBY",
    sectionTitle: "Co doručíme",
    services: [
      {
        title: "Brand Film",
        desc: "Silný příběh pro launch produktu, web i paid kampaně.",
        tag: "01",
      },
      {
        title: "Event Recap",
        desc: "Rychlý střih highlightů se sound designem a dynamikou.",
        tag: "02",
      },
      {
        title: "Social Burst",
        desc: "Sada short-form videí optimalizovaných pro výkon.",
        tag: "03",
      },
    ],
    processTitle: "Jak to funguje",
    process: [
      "Ozveš se",
      "Probereme co chceš",
      "Pošleme nabídku",
      "Natočíme",
      "Dodáme",
    ],
    contactTitle: "Řekni nám o svém projektu.",
    contactLead: "Odpovídáme do 24 hodin.",
    contactButton: "info@fremlosmedia.cz",
  },
  en: {
    label: "",
    heroTop: "We film",
    heroBottom: "videos.",
    heroLead: "Commercial, event, corporate.",
    ctaPrimary: "Write to us",
    ctaSecondary: "Portfolio",
    reelLabel: "FREMLOS MEDIA / CINEMATIC / FAST DELIVERY /",
    showreelLabel: "",
    showreelTitle: "What we shoot",
    showreelItems: [
      {
        title: "Event videos",
        meta: "",
        tone: "",
        href: "/showreel/eventove-videa",
      },
      {
        title: "Commercial videos",
        meta: "",
        tone: "",
        href: "/showreel/reklamni-videa",
      },
      {
        title: "Corporate videos",
        meta: "",
        tone: "",
        href: "/showreel/firemni-videa",
      },
    ],
    aboutLabel: "",
    aboutTitle: "Team",
    aboutLead: "Click on a profile card and play the video with sound.",
    aboutMembers: [
      {
        name: "Dominik",
        role: "DP & Sales",
        note: "I’ll take care of you, handle your wishes and requirements — and you’ll meet me on set with a camera in my hand.",
        video: "/video/dominik1.mov",
      },
      {
        name: "Mára",
        role: "Edit & FPV",
        note: "I primarily edit videos, look at videos through a marketing lens, and fly FPV drones.",
        video: "/video/mara.mov",
      },
    ],
    sectionsLabel: "SERVICES",
    sectionTitle: "What we deliver",
    services: [
      {
        title: "Brand Film",
        desc: "Narrative-first videos for launches, websites, and ads.",
        tag: "01",
      },
      {
        title: "Event Recap",
        desc: "High-energy event highlights with designed sound and pace.",
        tag: "02",
      },
      {
        title: "Social Burst",
        desc: "A short-form package tuned for paid and organic channels.",
        tag: "03",
      },
    ],
    processTitle: "How it works",
    process: [
      "You reach out",
      "We discuss what you want",
      "We send an offer",
      "We shoot",
      "We deliver",
    ],
    contactTitle: "Tell us about your project.",
    contactLead: "We reply within 24 hours.",
    contactButton: "info@fremlosmedia.cz",
  },
  de: {
    label: "",
    heroTop: "Wir drehen",
    heroBottom: "Videos.",
    heroLead: "Werbe-, Event- und Unternehmensvideos.",
    ctaPrimary: "Schreib uns",
    ctaSecondary: "Portfolio",
    reelLabel: "FREMLOS MEDIA / CINEMATIC / FAST DELIVERY /",
    showreelLabel: "",
    showreelTitle: "Was wir drehen",
    showreelItems: [
      {
        title: "Eventvideos",
        meta: "",
        tone: "",
        href: "/showreel/eventove-videa",
      },
      {
        title: "Werbevideos",
        meta: "",
        tone: "",
        href: "/showreel/reklamni-videa",
      },
      {
        title: "Unternehmensvideos",
        meta: "",
        tone: "",
        href: "/showreel/firemni-videa",
      },
    ],
    aboutLabel: "",
    aboutTitle: "Team",
    aboutLead: "Klicke auf ein Profil und spiele das Video mit Ton ab.",
    aboutMembers: [
      {
        name: "Dominik",
        role: "DP & Sales",
        note: "Ich kümmere mich um euch, löse eure Wünsche und Anforderungen – und ihr trefft mich am Set mit der Kamera in der Hand.",
        video: "/video/dominik1.mov",
      },
      {
        name: "Mára",
        role: "Edit & FPV",
        note: "Ich schneide hauptsächlich Videos, schaue auf Videos mit Marketing-Blick und jage FPV-Drohnen.",
        video: "/video/mara.mov",
      },
    ],
    sectionsLabel: "LEISTUNGEN",
    sectionTitle: "Was wir liefern",
    services: [
      {
        title: "Brand Film",
        desc: "Starke Story für Produktlaunch, Website und Paid-Kampagnen.",
        tag: "01",
      },
      {
        title: "Event Recap",
        desc: "Schneller Highlightschnitt mit Sounddesign und Dynamik.",
        tag: "02",
      },
      {
        title: "Social Burst",
        desc: "Kurzvideo-Paket, optimiert für Performance.",
        tag: "03",
      },
    ],
    processTitle: "So funktioniert es",
    process: [
      "Du meldest dich",
      "Wir besprechen, was du willst",
      "Wir schicken ein Angebot",
      "Wir drehen",
      "Wir liefern",
    ],
    contactTitle: "Erzähl uns von deinem Projekt.",
    contactLead: "Wir antworten innerhalb von 24 Stunden.",
    contactButton: "info@fremlosmedia.cz",
  },
};

export default function Home() {
  const [language, setLanguage] = useState<Language>("cs");
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [heroFrameAspectRatio, setHeroFrameAspectRatio] = useState("16 / 9");
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    category: "eventove-videa",
    budget: "",
    deadline: "",
    message: "",
    website: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formMessage, setFormMessage] = useState("");

  const content = useMemo(() => copy[language], [language]);
  const rootRef = useRef<HTMLElement>(null);
  const aboutVideoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  useEffect(() => {
    let value = 0;

    const timer = window.setInterval(() => {
      value = Math.min(100, value + Math.random() * 16 + 6);
      setProgress(Math.round(value));

      if (value >= 100) {
        window.clearInterval(timer);
        window.setTimeout(() => setLoading(false), 620);
      }
    }, 88);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const previousRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    return () => {
      window.history.scrollRestoration = previousRestoration;
    };
  }, []);

  useEffect(() => {
    if (!showreelOpen) {
      return;
    }

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [showreelOpen]);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-animate]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );

    elements.forEach((el) => observer.observe(el));

    const onScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>("[data-tilt]");

    const onMove = (el: HTMLElement, ev: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (ev.clientX - rect.left) / rect.width;
      const y = (ev.clientY - rect.top) / rect.height;
      const rx = (0.5 - y) * 14;
      const ry = (x - 0.5) * 18;
      el.style.setProperty("--rx", `${rx}deg`);
      el.style.setProperty("--ry", `${ry}deg`);
      el.style.setProperty("--tz", "14px");
    };

    const handlers = Array.from(cards).map((el) => {
      const move = (ev: PointerEvent) => onMove(el, ev);
      const leave = () => {
        el.style.setProperty("--rx", "0deg");
        el.style.setProperty("--ry", "0deg");
        el.style.setProperty("--tz", "0px");
      };

      el.addEventListener("pointermove", move);
      el.addEventListener("pointerleave", leave);

      return { el, move, leave };
    });

    return () => {
      handlers.forEach(({ el, move, leave }) => {
        el.removeEventListener("pointermove", move);
        el.removeEventListener("pointerleave", leave);
      });
    };
  }, []);

  useEffect(() => {
    if (loading || !rootRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: "power4.out" } });
      intro
        .from(".hero-line", { yPercent: 110, duration: 1, stagger: 0.1 })
        .from(".hero-sub", { y: 35, opacity: 0, duration: 0.7 }, "-=0.65")
        .from(".btn-primary, .btn-secondary", { y: 28, opacity: 0, duration: 0.5, stagger: 0.12 }, "-=0.45")
        .from(".video-frame", { scale: 0.85, opacity: 0, rotate: 6, duration: 0.8, clearProps: "transform" }, "-=0.55")
        .from(".marquee", { opacity: 0, y: 20, duration: 0.5 }, "-=0.45");
    }, rootRef);

    return () => ctx.revert();
  }, [loading]);

  useEffect(() => {
    if (loading || !rootRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".lang-animate",
        { y: 20, opacity: 0, filter: "blur(8px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.56, ease: "power3.out", stagger: 0.04 },
      );
    }, rootRef);

    return () => ctx.revert();
  }, [language, loading]);

  const heroOffset = Math.min(scrollY * 0.16, 120);
  const orbitOffset = Math.min(scrollY * 0.11, 92);
  const formCopy =
    language === "cs"
      ? {
          title: "Kontaktní formulář",
          lead: "Napiš stručně zadání a my se ozveme do 24 hodin.",
          name: "Jméno",
          email: "E-mail",
          company: "Firma",
          category: "Typ videa",
          budget: "Rozpočet",
          deadline: "Termín",
          message: "Zpráva",
          submit: "Odeslat poptávku",
          success: "Díky, poptávku máme. Brzy se ozveme.",
          error: "Odeslání se nepovedlo. Zkus to znovu nebo napiš na info@fremlosmedia.cz.",
        }
      : language === "de"
        ? {
            title: "Kontaktformular",
            lead: "Beschreibe kurz deine Anfrage und wir melden uns innerhalb von 24 Stunden.",
            name: "Name",
            email: "E-Mail",
            company: "Firma",
            category: "Video-Typ",
            budget: "Budget",
            deadline: "Termin",
            message: "Nachricht",
            submit: "Anfrage senden",
            success: "Danke, wir haben deine Anfrage erhalten und melden uns in Kürze.",
            error: "Senden fehlgeschlagen. Versuche es erneut oder schreibe an info@fremlosmedia.cz.",
          }
      : {
          title: "Contact form",
          lead: "Share your brief and we will get back within 24 hours.",
          name: "Name",
          email: "E-mail",
          company: "Company",
          category: "Video type",
          budget: "Budget",
          deadline: "Deadline",
          message: "Message",
          submit: "Send inquiry",
          success: "Thanks, we got your inquiry and will reply shortly.",
          error: "Sending failed. Please try again or contact info@fremlosmedia.cz.",
        };

  const setField =
    (field: keyof typeof formData) =>
    (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus("submitting");
    setFormMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const payload = (await response.json()) as { ok?: boolean; message?: string };

      if (!response.ok || !payload.ok) {
        throw new Error(payload.message || "Request failed");
      }

      setFormStatus("success");
      setFormMessage(formCopy.success);
      setFormData({
        name: "",
        email: "",
        company: "",
        category: "eventove-videa",
        budget: "",
        deadline: "",
        message: "",
        website: "",
      });
    } catch {
      setFormStatus("error");
      setFormMessage(formCopy.error);
    }
  };

  const toggleAboutCard = (index: number) => {
    const target = aboutVideoRefs.current[index];
    if (!target) {
      return;
    }

    if (target.paused) {
      target.muted = false;
      void target.play();
      return;
    }

    target.pause();
  };

  const scrollToPortfolioCenter = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const target = document.getElementById("portfolio-cards");
    if (!target) {
      return;
    }

    target.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  };

  return (
    <>
      <div className={`loading-screen ${loading ? "is-active" : ""}`}>
        <div className="loading-panel loading-panel-left" />
        <div className="loading-panel loading-panel-right" />
        <div className="loading-core">
          <Image
            alt="Fremlos Media"
            className="loading-logo"
            height={591}
            priority
            src="/logo/fremlos-media-logo-white.png"
            width={591}
          />
          <p className="loading-percent">{progress}%</p>
          <div className="loading-bar">
            <span style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>

      <main className="relative overflow-hidden pb-24" id="top" ref={rootRef}>
        <div className="video-bg-wrap" aria-hidden>
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="video-bg"
            src="https://videos.pexels.com/video-files/854769/854769-hd_1920_1080_30fps.mp4"
          />
          <div className="video-overlay" />
        </div>

        <div className="noise-layer" />
        <div className="orb orb-a" style={{ transform: `translateY(${orbitOffset}px)` }} />
        <div className="orb orb-b" style={{ transform: `translateY(${-orbitOffset}px)` }} />

        <section className="mx-auto min-h-screen w-full max-w-6xl px-5 pt-7 md:px-10">
          <header className="scroll-reveal mb-14 flex items-center justify-between" data-animate>
            <a className="brand-lockup" href="#top">
              <Image alt="Fremlos Media" className="brand-logo" height={591} src="/logo/fremlos-media-logo-white.png" width={591} />
            </a>
            <div className="lang-switch">
              <button onClick={() => setLanguage("cs")} type="button" className={language === "cs" ? "active" : ""}>
                CZ
              </button>
              <button onClick={() => setLanguage("en")} type="button" className={language === "en" ? "active" : ""}>
                EN
              </button>
              <button onClick={() => setLanguage("de")} type="button" className={language === "de" ? "active" : ""}>
                DE
              </button>
            </div>
          </header>

          <div className="grid items-end gap-8 md:grid-cols-[1.5fr_1fr]">
            <div className="scroll-reveal" data-animate>
              <p className="lang-animate mb-5 text-xs font-bold tracking-[0.25em] text-orange-300 uppercase">{content.label}</p>
              <h1 className="headline text-7xl leading-[0.85] md:text-[9.5rem]" style={{ transform: `translateY(${heroOffset}px)` }}>
                <span className="hero-line lang-animate block">{content.heroTop}</span>
                <span className="hero-line lang-animate block text-orange-300">{content.heroBottom}</span>
              </h1>
              <p className="hero-sub lang-animate mt-6 max-w-lg text-base text-zinc-300 md:text-lg">{content.heroLead}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact-form" className="btn-primary btn-fx lang-animate">
                  {content.ctaPrimary}
                  <span aria-hidden>↗</span>
                </a>
                <a href="#portfolio-cards" className="btn-secondary btn-fx lang-animate" onClick={scrollToPortfolioCenter}>
                  {content.ctaSecondary}
                  <span aria-hidden>→</span>
                </a>
              </div>
            </div>

            <div className="scroll-reveal" data-animate>
              <article
                className="video-frame hero-showreel-card"
                onClick={() => setShowreelOpen(true)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setShowreelOpen(true);
                  }
                }}
                role="button"
                tabIndex={0}
              >
                <div className="frame-badge">LIVE CUT</div>
                <div className="frame-inner" style={{ aspectRatio: heroFrameAspectRatio }}>
                  <video
                    autoPlay
                    className="frame-video"
                    loop
                    muted
                    onLoadedMetadata={(event) => {
                      const { videoWidth, videoHeight } = event.currentTarget;
                      if (videoWidth > 0 && videoHeight > 0) {
                        setHeroFrameAspectRatio(`${videoWidth} / ${videoHeight}`);
                      }
                    }}
                    playsInline
                    preload="auto"
                    src="/video/showreel.mp4"
                  />
                </div>
                <p className="mt-4 text-xs tracking-[0.22em] text-zinc-300 uppercase">SHOWREEL</p>
              </article>
            </div>
          </div>

          <div className="marquee mt-16">
            <div>{content.reelLabel.repeat(5)}</div>
          </div>
        </section>

        <section className="mx-auto mt-20 w-full max-w-6xl px-5 md:px-10" id="showreel">
          <div className="mb-10 scroll-reveal" data-animate>
            <p className="lang-animate text-xs tracking-[0.26em] text-zinc-300 uppercase">{content.showreelLabel}</p>
            <h2 className="headline lang-animate mt-3 text-5xl md:text-7xl">{content.showreelTitle}</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3" id="portfolio-cards">
            {content.showreelItems.map((item, idx) => (
              <Link
                className="showreel-card tilt-target scroll-reveal lang-animate"
                data-animate
                data-tilt
                key={item.title}
                href={item.href}
                style={{ transitionDelay: `${idx * 120}ms` }}
              >
                {item.tone ? <p className="showreel-tone">{item.tone}</p> : null}
                <h3 className="showreel-title text-2xl font-bold">{item.title}</h3>
                {item.meta ? <p className="mt-2 text-zinc-200">{item.meta}</p> : null}
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-24 w-full max-w-6xl px-5 md:px-10">
          <div className="scroll-reveal is-visible">
            <p className="text-xs tracking-[0.26em] text-zinc-300 uppercase">{content.aboutLabel}</p>
            <h2 className="headline mt-3 text-5xl md:text-7xl">{content.aboutTitle}</h2>
            <p className="mt-4 max-w-xl text-zinc-200">{content.aboutLead}</p>
          </div>

          <div className="about-stage">
            {content.aboutMembers.map((member, index) => {
              const roleColor = index % 2 === 0 ? "var(--orange)" : "var(--cyan)";

              return (
                <article
                  className="about-card"
                  key={`${member.name}-${index}`}
                  onClick={() => toggleAboutCard(index)}
                >
                  <div className="about-card-media">
                    <video
                      muted
                      onLoadedData={(event) => {
                        event.currentTarget.pause();
                        event.currentTarget.currentTime = 0;
                      }}
                      playsInline
                      preload="auto"
                      ref={(el) => {
                        aboutVideoRefs.current[index] = el;
                      }}
                      src={member.video}
                    />
                  </div>
                  <div className="about-card-meta about-card-meta-inline">
                    <h3 className="text-3xl font-bold">{member.name}</h3>
                    <p className="text-sm tracking-[0.14em] uppercase" style={{ color: roleColor }}>
                      {member.role}
                    </p>
                    <p className="mt-3 text-zinc-200">{member.note}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mx-auto mt-24 w-full max-w-6xl px-5 md:px-10">
          <article className="process-shell scroll-reveal lang-animate" data-animate>
            <h2 className="headline text-4xl md:text-6xl">{content.processTitle}</h2>
            <div className="process-grid mt-7">
              {content.process.map((step, idx) => (
                <article className="process-card" key={step}>
                  <p className="process-num">{idx + 1}</p>
                  <p className="process-text">{step}</p>
                </article>
              ))}
            </div>
          </article>
        </section>

        <section className="mx-auto mt-24 w-full max-w-6xl px-5 md:px-10" id="contact-form">
          <article className="cta-shell scroll-reveal lang-animate" data-animate>
            <h2 className="headline text-4xl md:text-7xl">{content.contactTitle}</h2>
            <p className="mt-4 text-zinc-200">{content.contactLead}</p>
            <div className="contact-grid mt-8">
              <a className="cta-mail" href="mailto:info@fremlosmedia.cz">
                {content.contactButton}
              </a>
              <form className="contact-form" id="contact-form-form" onSubmit={handleSubmit}>
                <p className="text-sm tracking-[0.18em] text-zinc-300 uppercase">{formCopy.title}</p>
                <p className="mt-2 text-zinc-300">{formCopy.lead}</p>

                <div className="form-row mt-6">
                  <label>
                    {formCopy.name}
                    <input onChange={setField("name")} required type="text" value={formData.name} />
                  </label>
                  <label>
                    {formCopy.email}
                    <input onChange={setField("email")} required type="email" value={formData.email} />
                  </label>
                </div>

                <div className="form-row">
                  <label>
                    {formCopy.company}
                    <input onChange={setField("company")} type="text" value={formData.company} />
                  </label>
                  <label>
                    {formCopy.category}
                    <select onChange={setField("category")} value={formData.category}>
                      <option value="eventove-videa">
                        {language === "cs" ? "Eventové videa" : language === "de" ? "Eventvideos" : "Event videos"}
                      </option>
                      <option value="reklamni-videa">
                        {language === "cs" ? "Reklamní videa" : language === "de" ? "Werbevideos" : "Commercial videos"}
                      </option>
                      <option value="firemni-videa">
                        {language === "cs" ? "Firemní videa" : language === "de" ? "Unternehmensvideos" : "Corporate videos"}
                      </option>
                    </select>
                  </label>
                </div>

                <div className="form-row">
                  <label>
                    {formCopy.budget}
                    <select onChange={setField("budget")} value={formData.budget}>
                      <option value="">
                        {language === "cs" ? "Vyber rozpočet" : language === "de" ? "Budget auswählen" : "Select budget"}
                      </option>
                      <option value="do-20000">
                        {language === "cs" ? "do 20 000 Kč" : language === "de" ? "bis 20.000 CZK" : "up to CZK 20,000"}
                      </option>
                      <option value="20000-30000">
                        {language === "cs" ? "20 000 – 30 000 Kč" : language === "de" ? "20.000 – 30.000 CZK" : "CZK 20,000 – 30,000"}
                      </option>
                      <option value="30000-50000">
                        {language === "cs" ? "30 000 – 50 000 Kč" : language === "de" ? "30.000 – 50.000 CZK" : "CZK 30,000 – 50,000"}
                      </option>
                      <option value="50000-100000">
                        {language === "cs" ? "50 000 – 100 000 Kč" : language === "de" ? "50.000 – 100.000 CZK" : "CZK 50,000 – 100,000"}
                      </option>
                      <option value="nad-100000">
                        {language === "cs" ? "nad 100 000 Kč" : language === "de" ? "über 100.000 CZK" : "over CZK 100,000"}
                      </option>
                    </select>
                  </label>
                  <label>
                    {formCopy.deadline}
                    <input onChange={setField("deadline")} type="date" value={formData.deadline} />
                  </label>
                </div>

                <label>
                  {formCopy.message}
                  <textarea onChange={setField("message")} required rows={5} value={formData.message} />
                </label>

                <input
                  aria-hidden
                  autoComplete="off"
                  className="honeypot"
                  onChange={setField("website")}
                  tabIndex={-1}
                  type="text"
                  value={formData.website}
                />

                <button className="btn-primary btn-fx mt-5" disabled={formStatus === "submitting"} type="submit">
                  {formStatus === "submitting" ? "Sending..." : formCopy.submit}
                  <span aria-hidden>↗</span>
                </button>

                {formStatus !== "idle" && (
                  <p className={`form-feedback ${formStatus === "success" ? "is-success" : "is-error"}`}>{formMessage}</p>
                )}
              </form>
            </div>
          </article>
        </section>
      </main>

      {showreelOpen && (
        <div
          className="showreel-modal"
          onClick={() => setShowreelOpen(false)}
          role="button"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "Escape" || event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              setShowreelOpen(false);
            }
          }}
        >
          <div className="showreel-modal-shell" onClick={(event) => event.stopPropagation()}>
            <button className="showreel-close" onClick={() => setShowreelOpen(false)} type="button">
              {language === "cs" ? "Zavřít" : language === "de" ? "Schließen" : "Close"}
            </button>
            <video autoPlay className="showreel-modal-video" controls playsInline preload="auto" src="/video/showreel.mp4" />
          </div>
        </div>
      )}
    </>
  );
}
