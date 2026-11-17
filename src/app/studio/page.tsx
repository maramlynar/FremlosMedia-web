import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/seo";
import { StudioInquiryForm } from "./StudioInquiryForm";

export const metadata: Metadata = pageMetadata({
  title: "Podcast studio Brno",
  description:
    "Podcast na klíč v Brně od 9 990 Kč za díl. Kameraman, střih i videa na sítě, hotový díl do 7 dní. Pronájem podcast a foto studia na Cejlu od 800 Kč za hodinu.",
  path: "/studio",
});

// The page sells podcasts first, studio rental second and other studio
// services third. Prices come from KUKIN_STUDIO_CENIK.pdf and
// KUKIN_PODCAST_CENIK.pdf (Nov 2026); copy follows "KUKIN 2027 – strategie".

const EMAIL = "info@fremlosmedia.cz";
const PHONE = "+420\u00a0739\u00a0803\u00a0734";

// Every "ask for an offer" button opens the inquiry form with its option
// already chosen; see StudioInquiryForm.
const PILOT_HREF = "#poptat-pilot";

const heroFacts = [
  ["od\u00a09\u00a0990\u00a0Kč", "za\u00a0díl do\u00a060\u00a0minut"],
  ["do\u00a07\u00a0dní", "máš hotový díl"],
];

const benefits = [
  {
    title: "Kompletní produkce",
    text: "Kameraman, světla, zvuk i\u00a0střih. Ty si jen sedneš k\u00a0mikrofonu a\u00a0mluvíš.",
  },
  {
    title: "Videa na\u00a0sítě",
    text: "Z\u00a0dílu nastříháme krátká videa na\u00a0výšku pro\u00a0Instagram, TikTok nebo\u00a0YouTube Shorts.",
  },
  {
    title: "Hotovo do\u00a07\u00a0dní",
    text: "Hotový díl dodáme do\u00a0týdne. Spěcháš? Expresně ho máš do\u00a048\u00a0hodin.",
  },
  {
    title: "Za\u00a0studiem je produkce",
    text: "Točíme i\u00a0reklamy a\u00a0firemní videa. Podcast tak vypadá jako značka, ne jako call z\u00a0obýváku.",
  },
];

const steps = [
  ["Napíšeš nám", "Pár vět o\u00a0tom, o\u00a0čem má podcast být. Ozveme se\u00a0do\u00a024\u00a0hodin."],
  ["Domluvíme termín", "Rezervaci potvrdíš zálohou 50\u00a0%. Storno je zdarma do\u00a048\u00a0hodin předem."],
  ["Natočíme", "Přijdeš do\u00a0studia na\u00a0Cejlu. Technika je připravená, ty jen mluvíš."],
  ["Dodáme", "Do\u00a07\u00a0dní máš hotový díl a\u00a0podle balíčku i\u00a0videa na\u00a0sítě."],
];

type Plan = {
  name: string;
  badge?: string;
  price: string;
  unit?: string;
  pitch: string;
  includes: string[];
  cta: string;
  href: string;
  featured?: boolean;
};

const plans: Plan[] = [
  {
    name: "Pilot",
    badge: "Na\u00a0vyzkoušení",
    price: "4\u00a0990\u00a0Kč",
    pitch: "Vyzkoušej si, jak\u00a0ti to před\u00a0kamerou jde, bez\u00a0velkého závazku.",
    includes: ["1 díl do\u00a060\u00a0minut", "3 videa na\u00a0výšku pro\u00a0sociální sítě", "Kameraman, střih a\u00a0dodání v\u00a0ceně"],
    cta: "Chci pilot",
    href: PILOT_HREF,
  },
  {
    name: "Série",
    badge: "Nejvýhodnější",
    price: "14\u00a0990\u00a0Kč",
    unit: "měsíc",
    pitch: "Pravidelný podcast bez\u00a0starostí. Každý měsíc nový obsah na\u00a0YouTube i\u00a0sítě.",
    includes: [
      "2 díly každý měsíc",
      "6 videí na\u00a0výšku každý měsíc",
      "Moderátor jen za\u00a01\u00a0000\u00a0Kč / měsíc",
      "O\u00a0víc než\u00a06\u00a0000\u00a0Kč levnější než\u00a0díly a\u00a0videa zvlášť",
    ],
    cta: "Chci sérii",
    href: "#poptat-serie",
    featured: true,
  },
  {
    name: "Jeden díl",
    price: "9\u00a0990\u00a0Kč",
    pitch: "Jednorázový díl, třeba rozhovor s\u00a0hostem nebo\u00a0speciál.",
    includes: [
      "1 díl do\u00a060\u00a0minut na\u00a0šířku, např. na\u00a0YouTube",
      "Kameraman, střih a\u00a0dodání v\u00a0ceně",
      "Každý další díl natočený najednou za\u00a05\u00a0990\u00a0Kč",
    ],
    cta: "Objednat díl",
    href: "#poptat-dil",
  },
];

type PriceRow = {
  name: string;
  note: string;
  price: string;
  unit?: string;
  badge?: string;
};

const podcastExtras: PriceRow[] = [
  { name: "Video na\u00a0výšku pro\u00a0sociální sítě", note: "Krátký sestřih z\u00a0dílu", price: "1\u00a0190\u00a0Kč", unit: "ks" },
  { name: "Balíček 5 videí na\u00a0výšku", note: "Z\u00a0jednoho dílu", price: "3\u00a0990\u00a0Kč" },
  { name: "Expresní dodání", note: "Hotový díl do\u00a048\u00a0hodin", price: "+1\u00a0500\u00a0Kč" },
  { name: "Moderátor", note: "Příprava, call a\u00a0moderace dílu. V\u00a0Sérii 1\u00a0000\u00a0Kč / měsíc", price: "1\u00a0490\u00a0Kč", unit: "díl" },
];

const rentalIncluded = ["Celý prostor", "Světla", "Podcast kout", "Fotoplátna", "Gauč"];

const rentalRows: PriceRow[] = [
  { name: "Hodina", note: "Minimálně 2\u00a0hodiny", price: "800\u00a0Kč", unit: "hod" },
  { name: "Půlden", note: "4\u00a0hodiny", price: "2\u00a0500\u00a0Kč" },
  { name: "Celý den", note: "8\u00a0hodin", price: "3\u00a0900\u00a0Kč", badge: "Nejvýhodnější" },
  { name: "Technik na\u00a0place", note: "Nastaví světla, zvuk a\u00a0kamery, pohlídá nahrávání", price: "+980\u00a0Kč", unit: "hod" },
];

const services = [
  {
    title: "Talking head videa",
    form: "talking-head",
    text: "Obsah pro\u00a0foundery, experty a\u00a0týmy. Za\u00a0jeden den natočíme videa na\u00a0celý měsíc.",
    image: "/studio/images/gallery/talking-head.jpg",
    alt: "Natáčení talking head videa ve\u00a0studiu",
  },
  {
    title: "Firemní portréty a\u00a0medailonky",
    form: "portrety",
    text: "Fotky a\u00a0krátká videa vašeho týmu pro\u00a0web, LinkedIn i\u00a0nábor.",
    image: "/studio/images/gallery/portret-stul.jpg",
    alt: "Firemní portrét u\u00a0stolu ve\u00a0studiu",
  },
  {
    title: "Kreativní a\u00a0produktové focení",
    form: "foceni",
    text: "Kontrolované světlo, fotoplátna a\u00a0set přesně podle kampaně nebo\u00a0e-shopu.",
    image: "/studio/images/gallery/kreativni-set.jpg",
    alt: "Kreativní focení před stěnou s plakáty",
  },
];

const faq = [
  {
    q: "Musím mít moderátora?",
    a: "Nemusíš. Moderátor v\u00a0ceně není, takže můžeš přijít ve\u00a0dvou s\u00a0vlastní přípravou. Nebo\u00a0si ho připlatíš za\u00a01\u00a0490\u00a0Kč za\u00a0díl, v\u00a0Sérii jen za\u00a01\u00a0000\u00a0Kč měsíčně. Postará se\u00a0o\u00a0přípravu, call předem i\u00a0moderaci.",
  },
  {
    q: "Kdy dostanu hotový díl?",
    a: "Do\u00a07\u00a0dní od\u00a0natáčení. Když\u00a0spěcháš, expresní dodání do\u00a048\u00a0hodin stojí 1\u00a0500\u00a0Kč navíc.",
  },
  {
    q: "Jak\u00a0probíhá rezervace?",
    a: "Napíšeš nám nebo\u00a0zavoláš, domluvíme termín a\u00a0rezervaci potvrdíš zálohou 50\u00a0%. Storno je zdarma do\u00a048\u00a0hodin předem.",
  },
  {
    q: "Můžu Sérii zrušit?",
    a: "Ano. Série běží na\u00a0dobu neurčitou a\u00a0výpovědní lhůta jsou 3 měsíce.",
  },
  {
    q: "Jsou ceny s\u00a0DPH?",
    a: "Nejsme plátci DPH, takže ceny v\u00a0ceníku jsou konečné.",
  },
  {
    q: "Kde studio najdu?",
    a: "Na\u00a0Cejlu 29/76 v\u00a0Brně, kousek od\u00a0centra.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

function PriceList({ rows }: { rows: PriceRow[] }) {
  return (
    <ul className="studio-price-list">
      {rows.map((row) => (
        <li className={`studio-price-row${row.badge ? " studio-price-row-highlight" : ""}`} key={row.name}>
          <div>
            <h4>
              {row.name}
              {row.badge ? <span className="studio-price-badge">{row.badge}</span> : null}
            </h4>
            <p>{row.note}</p>
          </div>
          <div className="studio-price-value">
            <strong>{row.price}</strong>
            {row.unit ? <small>/ {row.unit}</small> : null}
          </div>
        </li>
      ))}
    </ul>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="text-xs font-bold tracking-[0.26em] text-orange-300 uppercase">{children}</p>;
}

export default function StudioPage() {
  return (
    <main className="studio-page">
      <script dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} type="application/ld+json" />

      <section className="studio-hero">
        <div className="studio-video-bg" aria-hidden="true">
          <video autoPlay className="video-bg" loop muted playsInline preload="auto" src="/studio/video/herovideo1.mp4" />
          <div className="video-overlay" />
        </div>

        <header className="topbar studio-topbar">
          <Link className="brand-lockup" href="/" aria-label="KUKIN Studio, zpět na KUKIN Media">
            <Image
              alt="KUKIN Studio"
              className="brand-logo studio-brand-logo"
              height={145}
              priority
              src="/studio/logo/kukin-studio-white.png"
              width={579}
            />
          </Link>
          <a className="studio-topbar-phone" href={`tel:${PHONE.replace(/\s/g, "")}`}>
            {PHONE}
          </a>
        </header>

        <div className="studio-hero-inner">
          <Eyebrow>Podcast studio · Cejl, Brno</Eyebrow>
          <h1 className="headline studio-hero-title">
            Podcast
            <span>na&nbsp;klíč.</span>
          </h1>
          <p className="studio-hero-lead">
            Přijdeš, mluvíš, odcházíš. Kamery, světla, zvuk, střih i&nbsp;videa na&nbsp;sítě řešíme my. Hotový díl máš do&nbsp;7
            dní.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={PILOT_HREF} className="btn-primary btn-fx">
              Vyzkoušet pilot za&nbsp;4&nbsp;990&nbsp;Kč <span aria-hidden>↗</span>
            </a>
            <a href="#cenik" className="btn-secondary btn-fx">
              Ceník podcastů <span aria-hidden>→</span>
            </a>
          </div>
          <ul className="studio-hero-facts">
            {heroFacts.map(([value, label]) => (
              <li key={value}>
                <strong>{value}</strong>
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="studio-section" id="proc">
        <div className="studio-section-heading">
          <Eyebrow>Proč podcast u&nbsp;nás</Eyebrow>
          <h2 className="headline mt-3 text-5xl md:text-7xl">Ty řešíš co, my řešíme jak.</h2>
          <p>
            Víš, že&nbsp;je čas začít točit, ale&nbsp;nemáš na&nbsp;to čas, techniku ani střihače? Přesně tohle za&nbsp;tebe vyřešíme.
          </p>
        </div>
        <div className="studio-benefits">
          {benefits.map((item, index) => (
            <article className="studio-benefit" key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="studio-section" id="jak-to-funguje">
        <article className="studio-panel">
          <Eyebrow>Jak&nbsp;to funguje</Eyebrow>
          <h2 className="headline mt-3 text-5xl md:text-7xl">Od&nbsp;nápadu k&nbsp;dílu za&nbsp;týden.</h2>
          <div className="studio-process-grid">
            {steps.map(([title, text], index) => (
              <article className="studio-process-card studio-step" key={title}>
                <p>{String(index + 1).padStart(2, "0")}</p>
                <h3>{title}</h3>
                <span>{text}</span>
              </article>
            ))}
          </div>
        </article>
      </section>

      <section className="studio-section" id="cenik">
        <div className="studio-section-heading">
          <Eyebrow>Ceník podcastů 2026</Eyebrow>
          <h2 className="headline mt-3 text-5xl md:text-7xl">Vyber si, jak&nbsp;začneš.</h2>
          <p>
            Díl do&nbsp;60&nbsp;minut, kameraman, střih a&nbsp;dodání jsou vždy v&nbsp;ceně. Nejsme plátci DPH, takže ceny jsou konečné.
          </p>
        </div>

        <div className="studio-plans">
          {plans.map((plan) => (
            <article className={`studio-plan${plan.featured ? " studio-plan-featured" : ""}`} key={plan.name}>
              <div className="studio-plan-head">
                <h3>{plan.name}</h3>
                {plan.badge ? <span className="studio-price-badge">{plan.badge}</span> : null}
              </div>
              <p className="studio-plan-price">
                <strong>{plan.price}</strong>
                {plan.unit ? <small>/ {plan.unit}</small> : null}
              </p>
              <p className="studio-plan-pitch">{plan.pitch}</p>
              <ul>
                {plan.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a className={`${plan.featured ? "btn-primary" : "btn-secondary"} btn-fx studio-plan-cta`} href={plan.href}>
                {plan.cta} <span aria-hidden>↗</span>
              </a>
            </article>
          ))}
        </div>

        <article className="studio-panel studio-price-panel">
          <div className="studio-price-main">
            <Eyebrow>Příplatky k&nbsp;podcastu</Eyebrow>
            <p className="studio-price-intro">
              <strong>Moderátor v&nbsp;ceně není</strong> – přijď ve&nbsp;dvou s&nbsp;vlastní přípravou, nebo&nbsp;si ho připlať.
            </p>
            <PriceList rows={podcastExtras} />
          </div>
          <div className="studio-price-photos">
            <Image
              alt="Podcast u kulatého stolu ve studiu"
              className="studio-price-photo-wide"
              height={1200}
              sizes="(max-width: 900px) 100vw, 40vw"
              src="/studio/images/gallery/podcast-sirka.jpg"
              width={1800}
            />
            <Image
              alt="Host podcastu u mikrofonu"
              height={1200}
              sizes="(max-width: 900px) 50vw, 20vw"
              src="/studio/images/gallery/podcast-detail.jpg"
              width={1800}
            />
            <Image
              alt="Podcastový rozhovor ve studiu"
              height={1200}
              sizes="(max-width: 900px) 50vw, 20vw"
              src="/studio/images/gallery/podcast-host.jpg"
              width={1800}
            />
          </div>
        </article>
      </section>

      <section className="studio-section" id="galerie">
        <div className="studio-section-heading">
          <Eyebrow>Ze&nbsp;studia</Eyebrow>
          <h2 className="headline mt-3 text-5xl md:text-7xl">Takhle to u&nbsp;nás vypadá.</h2>
          <p>Podcast kout, fotoplátna, světla a&nbsp;kamery. Všechno připravené na&nbsp;jednom místě na&nbsp;Cejlu.</p>
        </div>
        <div className="studio-space">
          <figure>
            <Image
              alt="Celý prostor KUKIN Studia se světly, kamerami a stěnou s policemi"
              height={1200}
              sizes="(max-width: 900px) 100vw, 760px"
              src="/studio/images/gallery/zakulisi-studio.jpg"
              width={1800}
            />
          </figure>
          <figure>
            <Image
              alt="Bílé fotoplátno se světly při focení ve studiu"
              height={1800}
              sizes="(max-width: 900px) 100vw, 400px"
              src="/studio/images/gallery/platno-celek.jpg"
              width={1200}
            />
          </figure>
        </div>
      </section>

      <section className="studio-section" id="pronajem">
        <article className="studio-panel studio-price-panel">
          <div className="studio-price-main">
            <Eyebrow>Pronájem studia</Eyebrow>
            <h2 className="headline studio-price-title">Víš, co děláš? Pronajmi si prostor.</h2>
            <p className="studio-price-intro">Pro&nbsp;fotografy, videomakery, agentury a&nbsp;týmy s&nbsp;vlastním workflow.</p>
            <div className="studio-included">
              <span>V&nbsp;ceně</span>
              <ul>
                {rentalIncluded.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <PriceList rows={rentalRows} />
            <a
              className="btn-secondary btn-fx mt-6"
              href="#poptat-pronajem"
            >
              Rezervovat pronájem <span aria-hidden>↗</span>
            </a>
          </div>
          <div className="studio-price-photos studio-price-photos-single">
            <Image
              alt="Focení s velkým softboxem ve studiu"
              height={1800}
              sizes="(max-width: 900px) 100vw, 35vw"
              src="/studio/images/gallery/foceni-svetlo.jpg"
              width={1200}
            />
          </div>
        </article>
      </section>

      <section className="studio-section" id="sluzby">
        <div className="studio-section-heading">
          <Eyebrow>Další služby ve&nbsp;studiu</Eyebrow>
          <h2 className="headline mt-3 text-5xl md:text-7xl">Natočíme i&nbsp;další obsah.</h2>
          <p>Studio stojí na&nbsp;produkci KUKIN Media. Cenu připravíme podle rozsahu, napiš nám, co potřebuješ.</p>
        </div>
        <div className="studio-services">
          {services.map((item) => (
            <article className="studio-service" key={item.title}>
              <div className="studio-service-photo">
                <Image alt={item.alt} fill sizes="(max-width: 900px) 100vw, 33vw" src={item.image} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <a href={`#poptat-${item.form}`}>
                Poptat <span aria-hidden>↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="studio-section" id="faq">
        <div className="studio-section-heading">
          <Eyebrow>Časté otázky</Eyebrow>
          <h2 className="headline mt-3 text-5xl md:text-7xl">Než&nbsp;nám napíšeš.</h2>
        </div>
        <div className="studio-faq">
          {faq.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="studio-section" id="kontakt">
        <article className="studio-contact studio-contact-grid">
          <div className="studio-contact-intro">
            <Eyebrow>Kontakt</Eyebrow>
            <h2 className="headline mt-3 text-5xl md:text-6xl">Řekni nám, co chceš natočit.</h2>
            <p>Stačí pár řádků ve&nbsp;formuláři. Ozveme se&nbsp;do&nbsp;24&nbsp;hodin, nebo&nbsp;zavolej rovnou.</p>
            <address className="studio-contact-details">
              <a href={`tel:${PHONE.replace(/\s/g, "")}`}>{PHONE}</a>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              <span>
                KUKIN Studio
                <br />
                Cejl 29/76, 602&nbsp;00 Brno
              </span>
              <a href="https://www.instagram.com/kukinstudio/" rel="noopener noreferrer" target="_blank">
                @kukinstudio
              </a>
            </address>
          </div>
          <StudioInquiryForm />
        </article>
      </section>

      <a className="studio-sticky-cta" href={PILOT_HREF}>
        Vyzkoušet pilot · 4&nbsp;990&nbsp;Kč <span aria-hidden>↗</span>
      </a>
    </main>
  );
}
