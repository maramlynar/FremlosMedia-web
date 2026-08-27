import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case study: NIKK Services",
  description:
    "Jak se video stalo součástí systému, který NIKK Services pomáhá získávat větší a komplexnější zakázky.",
};

const metrics = [
  {
    value: "víc než 2x",
    label: "vyšší hodnota větší realizace",
    context: "z cca 200 tis. na 400-500 tis. Kč",
  },
  {
    value: "8",
    label: "velkých realizací ročně",
    context: "před rokem zhruba 3",
  },
  {
    value: "lepší",
    label: "video než konkurence",
    context: "podle majitele NIKK Services",
  },
];

const sections = [
  {
    kicker: "01",
    title: "Problém nebyl v kvalitě práce",
    paragraphs: [
      "NIKK Services uměl realizovat dlažby, bazény, terasy i další práce kolem domu. Jeho prezentace ale neodpovídala úrovni, na kterou se chtěl posunout.",
      "Firma potřebovala během několika sekund ukázat rozsah realizací, lidi za firmou, kvalitu práce a důvod, proč jí svěřit projekt za stovky tisíc korun.",
      "Cílem proto nebylo jen natočit hezké firemní video. Bylo potřeba změnit způsob, jakým firma působí navenek.",
    ],
  },
  {
    kicker: "02",
    title: "Video jako první důležitý kontakt",
    paragraphs: [
      "Vytvořili jsme firemní video, které se stalo jedním z hlavních vizuálních prvků NIKK Services.",
      "Místo statických fotografií a textu mohl potenciální klient vidět firmu, její tým i realizace v pohybu. Video se dostalo na web a Instagram, kde zůstává připnuté mezi prvními kontakty se značkou.",
      "Postupně jsme ho doplnili dalšími reels a část obsahu NIKK Services využil také v placených kampaních.",
      "Výsledkem není jedno video schované v galerii. Je to obsah, se kterým se potenciální zákazník setkává na více místech během rozhodování o poptávce.",
    ],
    quote: "Video máme. A máme to lepší než konkurence.",
    quoteSource: "Dominik, NIKK Services",
  },
  {
    kicker: "03",
    title: "Co se změnilo po roce?",
    paragraphs: [
      "NIKK Services dnes realizuje přibližně 8 velkých zakázek ročně místo původních 3.",
      "Zároveň se výrazně zvedla průměrná hodnota větší realizace.",
      "Podle odhadu majitele si přibližně třetina letošních poptávek vybavuje video nebo další obsah NIKK Services.",
      "Zákazníci zmiňují Instagram, říkají, že firmu pořád někde vidí, nebo při poptávce pochválí její web.",
    ],
    bullets: [
      "přibližně 8 velkých zakázek ročně místo původních 3",
      "výrazně vyšší průměrná hodnota větší zakázky",
      "většina nových poptávek přes cílené Google Ads",
      "přibližně 20 specializovaných podstránek pro konkrétní služby a lokality",
      "část poptávek také z placených video kampaní",
    ],
  },
  {
    kicker: "04",
    title: "Video samo o sobě růst nezpůsobilo",
    paragraphs: [
      "Bylo by nepřesné tvrdit, že samotné firemní video způsobilo růst ze 3 na 8 velkých realizací.",
      "NIKK Services během stejného období pracoval také na výkonnostním marketingu, webu, specializovaných podstránkách a placených kampaních.",
      "Video je ale součástí systému, který dnes firmě pomáhá získávat větší klienty.",
      "Reklama může člověka přivést na web. Prezentace rozhoduje o tom, co si o vás pomyslí, když tam dorazí. A právě tam má video svoji práci.",
    ],
  },
  {
    kicker: "05",
    title: "Další krok: ještě větší a komplexnější projekty",
    paragraphs: [
      "NIKK Services nechce pouze navyšovat počet zakázek.",
      "Chce stabilně získávat větší a komplexnější realizace, omezit drobné práce a postupně cílit na movitější klientelu, která hledá kompletní řešení kolem svého domu.",
      "S tím přichází i další rozvoj firmy: interní systémy, automatizace a prezentace, která bude ještě lépe odpovídat prémiovému segmentu.",
      "Protože když roste úroveň práce, měla by s ní růst i úroveň toho, jak ji firma prezentuje.",
    ],
  },
];

const galleryImages = [
  {
    alt: "NIKK Services realizace z dronu",
    height: 1969,
    src: "/images/case-studies/nikk-services/dron-ns-4.jpg",
    width: 3500,
  },
  {
    alt: "NIKK Services bazén a dlažba",
    height: 2333,
    src: "/images/case-studies/nikk-services/bazen-4.jpg",
    width: 3500,
  },
  {
    alt: "NIKK Services realizace Ostravice 11",
    height: 2333,
    src: "/images/case-studies/nikk-services/ostravice-11.jpg",
    width: 3500,
  },
  {
    alt: "NIKK Services realizace Ostravice 16",
    height: 2333,
    src: "/images/case-studies/nikk-services/ostravice-16.jpg",
    width: 3500,
  },
  {
    alt: "NIKK Services realizace Ostravice 17",
    height: 2333,
    src: "/images/case-studies/nikk-services/ostravice-17.jpg",
    width: 3500,
  },
];

const sectionVisualGroups = [
  [galleryImages[2], galleryImages[1]],
  [galleryImages[3], galleryImages[4]],
  [galleryImages[0]],
];

export default function NikkServicesCaseStudyPage() {
  const youtubeEmbedUrl = "https://www.youtube-nocookie.com/embed/0Eg2YkJj7hU?rel=0&modestbranding=1";

  return (
    <main className="category-page pb-18">
      <section className="mx-auto w-full max-w-6xl px-5 pt-10 md:px-10">
        <div className="scroll-reveal is-visible">
          <Link className="back-link" href="/#case-studies">
            ← Zpět na case studies
          </Link>
          <p className="mt-8 text-xs font-bold tracking-[0.26em] text-orange-300 uppercase">
            Case study: FremlosMedia × NIKK Services
          </p>
          <h1 className="headline nikk-hero-title mt-4 max-w-4xl text-5xl leading-[0.95] md:text-7xl">
            Z 3 na 8 velkých realizací za rok
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-zinc-100 md:text-2xl">
            NIKK Services více než zdvojnásobil průměrnou hodnotu zakázky. Video se stalo součástí systému,
            který mu pomáhá získávat větší klienty.
          </p>
        </div>

        <div className="metrics-grid mt-10">
          {metrics.map((metric) => (
            <article className="metric-card" key={metric.label}>
              <p>{metric.value}</p>
              <span>{metric.label}</span>
              <small>{metric.context}</small>
            </article>
          ))}
        </div>

        <div className="case-study-video mt-10">
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            src={youtubeEmbedUrl}
            title="NIKK Services case study video"
          />
        </div>

        <section className="case-study-copy case-study-copy-wide mt-12">
          <article className="case-study-copy-section case-study-lead-card">
            <div className="case-study-lead-split">
              <div>
                <p className="case-study-step">Výsledek po roce</p>
                <h2>Z 3 na 8 velkých realizací za rok.</h2>
              </div>
              <div>
                <p>
                  NIKK Services dnes realizuje přibližně 8 velkých zakázek ročně. Před rokem jich byly zhruba 3.
                </p>
                <p>
                  Zároveň se výrazně zvedla průměrná hodnota větší realizace.
                </p>
              </div>
            </div>
            <div className="case-study-note">
              <p>
                Video nebylo jedinou příčinou růstu. Stalo se ale důležitou součástí prezentace, díky které
                NIKK Services působí jako partner pro větší a komplexnější projekty.
              </p>
            </div>
          </article>

          {sections.map((section, index) => (
            <div className="case-study-flow-item" key={section.title}>
              <article className="case-study-copy-section">
                <p className="case-study-step">{section.kicker}</p>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets ? (
                  <ul className="case-study-list">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
                {section.quote ? (
                  <blockquote className="case-study-quote">
                    <p>„{section.quote}“</p>
                    <cite>{section.quoteSource}</cite>
                  </blockquote>
                ) : null}
              </article>
              {sectionVisualGroups[index] ? (
                <div className={`case-study-image-pair ${sectionVisualGroups[index].length === 1 ? "is-single" : ""}`}>
                  {sectionVisualGroups[index].map((image) => (
                    <figure className="case-study-inline-visual" key={image.src}>
                      <Image
                        alt={image.alt}
                        height={image.height}
                        sizes="(max-width: 768px) 100vw, 430px"
                        src={image.src}
                        width={image.width}
                      />
                    </figure>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </section>

        <section className="mt-12" id="case-study-contact">
          <article className="cta-shell">
            <p className="text-xs tracking-[0.24em] text-zinc-300 uppercase">Děláte lepší práci, než jak vypadáte navenek?</p>
            <h2 className="headline mt-3 text-4xl md:text-6xl">Ať nerozhoduje jen cena.</h2>
            <p className="mt-4 max-w-2xl text-zinc-300">
              Napište nám a probereme, jak může video, web a obsahová strategie pomoct vaší firmě působit
              jako partner pro větší zakázky.
            </p>
            <Link className="btn-primary btn-fx mt-7" href="/#contact-form">
              Chci podobný posun
              <span aria-hidden>↗</span>
            </Link>
          </article>
        </section>
      </section>
    </main>
  );
}
