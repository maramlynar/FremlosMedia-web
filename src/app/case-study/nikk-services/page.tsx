import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Case study: NIKK Services",
  description:
    "Jak se video stalo součástí systému, který NIKK Services pomáhá získávat větší a komplexnější zakázky.",
  path: "/case-study/nikk-services",
});

const metrics = [
  {
    value: "víc než\u00a02x",
    label: "vyšší hodnota větší realizace",
    context: "z\u00a0cca 200\u00a0tis. na\u00a0400-500\u00a0tis. Kč",
  },
  {
    value: "8",
    label: "velkých realizací ročně",
    context: "před\u00a0rokem zhruba 3",
  },
  {
    value: "lepší",
    label: "video než\u00a0konkurence",
    context: "podle majitele NIKK Services",
  },
];

const sections = [
  {
    kicker: "01",
    title: "Problém nebyl v\u00a0kvalitě práce",
    paragraphs: [
      "NIKK Services uměl realizovat dlažby, bazény, terasy i\u00a0další práce kolem domu. Jeho prezentace ale\u00a0neodpovídala úrovni, na\u00a0kterou se\u00a0chtěl posunout.",
      "Firma potřebovala během několika sekund ukázat rozsah realizací, lidi za\u00a0firmou, kvalitu práce a\u00a0důvod, proč jí svěřit projekt za\u00a0stovky tisíc korun.",
      "Cílem proto nebylo jen natočit hezké firemní video. Bylo potřeba změnit způsob, jakým firma působí navenek.",
    ],
  },
  {
    kicker: "02",
    title: "Video jako první důležitý kontakt",
    paragraphs: [
      "Vytvořili jsme firemní video, které se\u00a0stalo jedním z\u00a0hlavních vizuálních prvků NIKK Services.",
      "Místo statických fotografií a\u00a0textu mohl potenciální klient vidět firmu, její tým i\u00a0realizace v\u00a0pohybu. Video se\u00a0dostalo na\u00a0web a\u00a0Instagram, kde zůstává připnuté mezi prvními kontakty se\u00a0značkou.",
      "Postupně jsme ho doplnili dalšími reels a\u00a0část obsahu NIKK Services využil také v\u00a0placených kampaních.",
      "Výsledkem není jedno video schované v\u00a0galerii. Je to obsah, se\u00a0kterým se\u00a0potenciální zákazník setkává na\u00a0více místech během rozhodování o\u00a0poptávce.",
    ],
    quote: "Video máme. A\u00a0máme to lepší než\u00a0konkurence.",
    quoteSource: "Dominik, NIKK Services",
  },
  {
    kicker: "03",
    title: "Co se\u00a0změnilo po\u00a0roce?",
    paragraphs: [
      "NIKK Services dnes realizuje přibližně 8 velkých zakázek ročně místo původních 3.",
      "Zároveň se\u00a0výrazně zvedla průměrná hodnota větší realizace.",
      "Podle odhadu majitele si přibližně třetina letošních poptávek vybavuje video nebo\u00a0další obsah NIKK Services.",
      "Zákazníci zmiňují Instagram, říkají, že\u00a0firmu pořád někde vidí, nebo\u00a0při\u00a0poptávce pochválí její web.",
    ],
    bullets: [
      "přibližně 8 velkých zakázek ročně místo původních 3",
      "výrazně vyšší průměrná hodnota větší zakázky",
      "většina nových poptávek přes\u00a0cílené Google Ads",
      "přibližně 20 specializovaných podstránek pro\u00a0konkrétní služby a\u00a0lokality",
      "část poptávek také z\u00a0placených video kampaní",
    ],
  },
  {
    kicker: "04",
    title: "Video samo o\u00a0sobě růst nezpůsobilo",
    paragraphs: [
      "Bylo by nepřesné tvrdit, že\u00a0samotné firemní video způsobilo růst ze\u00a03 na\u00a08 velkých realizací.",
      "NIKK Services během stejného období pracoval také na\u00a0výkonnostním marketingu, webu, specializovaných podstránkách a\u00a0placených kampaních.",
      "Video je ale\u00a0součástí systému, který dnes firmě pomáhá získávat větší klienty.",
      "Reklama může člověka přivést na\u00a0web. Prezentace rozhoduje o\u00a0tom, co si o\u00a0vás pomyslí, když\u00a0tam dorazí. A\u00a0právě tam má video svoji práci.",
    ],
  },
  {
    kicker: "05",
    title: "Další krok: ještě větší a\u00a0komplexnější projekty",
    paragraphs: [
      "NIKK Services nechce pouze navyšovat počet zakázek.",
      "Chce stabilně získávat větší a\u00a0komplexnější realizace, omezit drobné práce a\u00a0postupně cílit na\u00a0movitější klientelu, která hledá kompletní řešení kolem svého domu.",
      "S\u00a0tím přichází i\u00a0další rozvoj firmy: interní systémy, automatizace a\u00a0prezentace, která bude ještě lépe odpovídat prémiovému segmentu.",
      "Protože když\u00a0roste úroveň práce, měla by s\u00a0ní růst i\u00a0úroveň toho, jak\u00a0ji firma prezentuje.",
    ],
  },
];

const galleryImages = [
  {
    alt: "NIKK Services realizace z\u00a0dronu",
    height: 1969,
    src: "/images/case-studies/nikk-services/dron-ns-4.jpg",
    width: 3500,
  },
  {
    alt: "NIKK Services bazén a\u00a0dlažba",
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
      <section className="mx-auto w-full max-w-6xl 2xl:max-w-[1400px] px-5 pt-10 md:px-10">
        <div className="scroll-reveal is-visible">
          <Link className="back-link" href="/#case-studies">
            ← Zpět na&nbsp;case studies
          </Link>
          <p className="mt-8 text-xs font-bold tracking-[0.26em] text-orange-300 uppercase">
            Case study: KUKIN Media × NIKK Services
          </p>
          <h1 className="headline nikk-hero-title mt-4 max-w-4xl text-5xl leading-[0.95] md:text-7xl">
            Z&nbsp;3 na&nbsp;8 velkých realizací za&nbsp;rok
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-zinc-100 md:text-2xl">
            NIKK Services více než&nbsp;zdvojnásobil průměrnou hodnotu zakázky. Video se&nbsp;stalo součástí systému,
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
                <p className="case-study-step">Výsledek po&nbsp;roce</p>
                <h2>Z&nbsp;3 na&nbsp;8 velkých realizací za&nbsp;rok.</h2>
              </div>
              <div>
                <p>
                  NIKK Services dnes realizuje přibližně 8 velkých zakázek ročně. Před&nbsp;rokem jich byly zhruba 3.
                </p>
                <p>
                  Zároveň se&nbsp;výrazně zvedla průměrná hodnota větší realizace.
                </p>
              </div>
            </div>
            <div className="case-study-note">
              <p>
                Video nebylo jedinou příčinou růstu. Stalo se&nbsp;ale&nbsp;důležitou součástí prezentace, díky které
                NIKK Services působí jako partner pro&nbsp;větší a&nbsp;komplexnější projekty.
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
            <p className="text-xs tracking-[0.24em] text-zinc-300 uppercase">Děláte lepší práci, než&nbsp;jak&nbsp;vypadáte navenek?</p>
            <h2 className="headline mt-3 text-4xl md:text-6xl">Ať nerozhoduje jen cena.</h2>
            <p className="mt-4 max-w-2xl text-zinc-300">
              Napište nám a&nbsp;probereme, jak&nbsp;může video, web a&nbsp;obsahová strategie pomoct vaší firmě působit
              jako partner pro&nbsp;větší zakázky.
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
