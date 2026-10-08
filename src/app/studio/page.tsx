import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "Fremlos Studio v Brně pro podcasty, rozhovory, talking head videa, produktové foto a video i firemní obsah.",
  alternates: {
    canonical: "/studio",
  },
};

const useCases = [
  {
    title: "Podcasty & rozhovory",
    text: "Dva lidé, dobrý zvuk, čistý obraz a výstupy připravené pro web i sítě.",
    image: "/studio/images/cards/podcast-generated.svg",
  },
  {
    title: "Talking head",
    text: "Obsah pro foundery, experty a týmy, co chtějí svoje skills a know-how předat ve formě odpovídající jejich úrovni.",
    image: "/studio/images/cards/company-generated.svg",
  },
  {
    title: "Produkty",
    text: "Kontrolované světlo, detail a formáty pro e-shop, kampaň nebo social content.",
    image: "/studio/images/cards/product-generated.svg",
  },
  {
    title: "Firemní obsah",
    text: "Medailonky, recruitment, interní komunikace a obsah, který nepůsobí jako školení z roku 2012.",
    image: "/studio/images/cards/company-generated.svg",
  },
];

const process = [
  "Přijdeš s cílem nebo nápadem.",
  "Připravíme produkci, setup a natáčecí plán.",
  "Ve studiu vyřešíme kamery, světla a zvuk.",
  "Dodáme vymazlený finální výstup.",
];

const facts = [
  ["Brno", "blízko centra"],
  ["Produkce", "video, foto, zvuk"],
  ["Formáty", "podcast, rozhovor, produkt, social"],
  ["Pronájem", "pro zkušené tvůrce a produkce"],
];

export default function StudioPage() {
  return (
    <main className="studio-page">
      <section className="studio-hero">
        <div className="studio-video-bg" aria-hidden="true">
          <video autoPlay className="video-bg" loop muted playsInline preload="auto" src="/studio/video/herovideo1.mp4" />
          <div className="video-overlay" />
        </div>

        <header className="topbar studio-topbar">
          <Link className="brand-lockup" href="/" aria-label="KUKIN Media">
            <Image alt="KUKIN Media" className="brand-logo" height={800} src="/logo/kukin-media-weblogo-v2.png" width={2000} />
          </Link>
        </header>

        <div className="studio-hero-inner">
          <p className="text-xs font-bold tracking-[0.26em] text-orange-300 uppercase">Fremlos Studio / Brno</p>
          <h1 className="headline studio-hero-title">
            Content
            <span>studio.</span>
          </h1>
          <p className="studio-hero-lead">
            Podcast, video, foto. Klidně přijď jen s nápadem. Kamery, světla, zvuk a produkci nech na nás.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#kontakt" className="btn-primary btn-fx">
              Poptat natáčení <span aria-hidden>↗</span>
            </a>
            <a href="#sluzby" className="btn-secondary btn-fx">
              Co tu vytvoříš <span aria-hidden>→</span>
            </a>
          </div>
        </div>

        <div className="marquee studio-marquee">
          <div>FREMLOS STUDIO / CONTENT STUDIO BRNO / PODCAST / VIDEO / FOTO / PRODUCTION / </div>
        </div>
      </section>

      <section className="studio-section" id="sluzby">
        <div className="studio-section-heading">
          <p className="text-xs font-bold tracking-[0.26em] text-orange-300 uppercase">Co tu vytvoříš</p>
          <h2 className="headline studio-nowrap-title mt-3 text-5xl md:text-7xl">Víc než místnost s mikrofony.</h2>
          <p>Studio je postavené kolem výsledku. Ne kolem toho, aby sis musel vybrat objektiv, světlo a kabel.</p>
        </div>
        <div className="studio-use-grid">
          {useCases.map((item) => (
            <article className="studio-use-card" key={item.title}>
              <Image alt="" fill sizes="(max-width: 768px) 100vw, 25vw" src={item.image} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="studio-section" id="prostor">
        <article className="studio-access-panel">
          <div className="studio-access-heading">
            <p className="text-xs font-bold tracking-[0.26em] text-orange-300 uppercase">Jak to funguje</p>
            <h2 className="headline mt-3 text-5xl md:text-7xl">Studio nemusíš řešit sám.</h2>
            <p>
              Hlavní nabídka je studio i s produkcí. Přijdeš se zadáním a my řešíme techniku, natáčení i finální
              výstup.
            </p>
          </div>
          <div className="studio-access-grid">
            <article className="studio-access-card studio-access-card-primary">
              <p>Pro koncové klienty</p>
              <h3>Pronájem studia + video produkce</h3>
              <span>
                Ideální, když chceš vytvořit obsah a hledáš prostor i tým, který tě provede produkcí.
              </span>
            </article>
            <article className="studio-access-card">
              <p>Pro profíky</p>
              <h3>Jen prostor</h3>
              <span>
                Samostatný pronájem je pro fotografy, videomakery, agentury a produkční týmy, které přijedou s
                vlastním workflow.
              </span>
            </article>
          </div>
        </article>
      </section>

      <section className="studio-section" id="prostor-detail">
        <article className="studio-panel studio-split">
          <div>
            <p className="text-xs font-bold tracking-[0.26em] text-orange-300 uppercase">Prostor</p>
            <h2 className="headline mt-3 text-5xl md:text-7xl">Cool studio.</h2>
            <p>
              Klidné studiové prostředí v Brně pro podcasty, rozhovory, talking head videa, produkty i menší
              firemní produkce.
            </p>
          </div>
          <div className="studio-facts">
            {facts.map(([title, text]) => (
              <div key={title}>
                <strong>{title}</strong>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="studio-section">
        <article className="studio-panel">
          <p className="text-xs font-bold tracking-[0.26em] text-orange-300 uppercase">Produkce na klíč</p>
          <h2 className="headline mt-3 text-5xl md:text-7xl">Ty řešíš co, my řešíme jak.</h2>
          <div className="studio-process-grid">
            {process.map((item, index) => (
              <article className="studio-process-card" key={item}>
                <p>{String(index + 1).padStart(2, "0")}</p>
                <span>{item}</span>
              </article>
            ))}
          </div>
        </article>
      </section>

      <section className="studio-section" id="pronajem">
        <article className="studio-panel studio-rental">
          <div className="studio-rental-heading">
            <p className="text-xs font-bold tracking-[0.26em] text-orange-300 uppercase">Pro profíky</p>
            <h2 className="headline mt-3 text-5xl md:text-6xl">Víš, co děláš? Pronajmi si prostor.</h2>
          </div>
          <div className="studio-rental-copy">
            <p>
              Pronájem je sekundární nabídka pro fotografy, videomakery, agentury a produkční týmy. Detaily,
              podmínky a technické parametry doladíme podle konkrétní produkce.
            </p>
            <a className="btn-secondary btn-fx" href="#kontakt">
              Pronájem pro profesionály <span aria-hidden>→</span>
            </a>
          </div>
        </article>
      </section>

      <section className="studio-section" id="kontakt">
        <article className="studio-contact">
          <p className="text-xs font-bold tracking-[0.26em] text-orange-300 uppercase">Kontakt</p>
          <h2 className="headline mt-3 text-5xl md:text-7xl">Řekni nám, co chceš vytvořit.</h2>
          <p>
            Stačí stručně. Podcast, rozhovor, produkt, firemní obsah nebo cokoli co tě napadne.
          </p>
          <a className="btn-primary btn-fx mt-7" href="mailto:info@fremlosmedia.cz?subject=Poptavka%20Fremlos%20Studio">
            Pošli nám mail
          </a>
        </article>
      </section>
    </main>
  );
}
