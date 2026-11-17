import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Case study: Life Passion",
  description:
    "Jak vzniká video, které má mít víc než jen hezký obraz? Proces od nápadu přes natáčecí den až po střih, zvuk a finální výstup.",
  path: "/case-study/life-passion",
});

const pdfSections = [
  {
    title: "Myšlenka",
    paragraphs: [
      "Chtěli jsme to stavět kolem imposter syndromu, toho hlasu v\u00a0hlavě, který říká že\u00a0nejsi dost. A\u00a0ukázat, že\u00a0to trápí všechny. Jak\u00a0„normální“ lidi. Tak i\u00a0profi sportovce. Dva různé životy. Profi trenérka, která sportem žije a\u00a0bojí se\u00a0prohrát závod. Studentka, která se\u00a0bojí, že\u00a0nezvládne zkoušku. Na\u00a0první pohled jiný svět, jiné problémy, ale\u00a0ve\u00a0skutečnosti stejné pochybnosti, stejný strach, stejný pocit. A\u00a0běh je ten ústřední motiv, který spojuje ty dvě linky a\u00a0kde se\u00a0vlastně potkávají.",
    ],
  },
  {
    title: "Koncept",
    paragraphs: [
      "Video má dvě paralelní linky, které jedou vedle sebe a\u00a0na\u00a0konci se\u00a0protnou.",
      "První pasáž je o\u00a0nejistotě. Bára přichází na\u00a0místo, připravuje se\u00a0na\u00a0běh. Tempo je klidnější ale\u00a0hudba vybraná tak, ať vyvolává pocit tlaku, času a\u00a0emotions. Buduje se\u00a0napětí. A\u00a0končí voiceoverem „bojím se\u00a0prohry.“ Matchcut na\u00a0obličej z\u00a0Báry na\u00a0Aničku. Ta navazuje: „bojím se, že\u00a0to nezvládnu“ – záběry jak\u00a0se\u00a0nervózně učí. Pasáž končí zase voiceoverem „všichni před\u00a0něčím utíkáme, ať už před\u00a0myšlenkama“ – střih na\u00a0Báru. „Nebo\u00a0před\u00a0soupeřem.“",
      "Změna hudby. Nastoupí dynamická hudba, SFX, kinetický střih, energie, odhodlání. A\u00a0zase končí slow motionem a\u00a0voiceoverem „stejně ale\u00a0miluju tu přítomnost.“",
      "Změna hudby na\u00a0klidnou, emocionální. Střih na\u00a0Aničku jak\u00a0běží po\u00a0náplavce ve\u00a0městě. „Miluju ten pocit ticha.“ Matchcut z\u00a0Aničky, pohled zepředu na\u00a0Báru. Obě na\u00a0stejném místě. Voiceover: „Když\u00a0běžím, ten hlas v\u00a0mojí hlavě...“ Záběr jak\u00a0obě přicházejí na\u00a0výhled. „...ztichne.“",
      "A\u00a0pak závěrečný text.",
    ],
  },
  {
    title: "Voiceover",
    paragraphs: [
      "Chtěli jsme aby\u00a0voiceover zněl jako myšlenky. Psali jsme ho stručně a\u00a0kolem tří věcí. Imposter syndrom, ten hlas který říká že\u00a0nejsi dost. Paralela útěku, běh jako fyzická aktivita a\u00a0zároveň útěk před\u00a0něčím. A\u00a0ten moment ticha a\u00a0pocit úlevy, kdy přestaneš myslet a\u00a0jsi prostě přítomný.",
      "Finální voiceover: Bojím se\u00a0prohry. Bojím se, že\u00a0to nezvládnu. Všichni před\u00a0něčím utíkáme. Ať už před\u00a0myšlenkama. Nebo\u00a0před\u00a0soupeřem. Stejně ale\u00a0miluju tu přítomnost. Miluju ten pocit ticha. Když\u00a0běžím, ten hlas v\u00a0mojí hlavě... ztichne.",
      "A\u00a0závěrečný text na\u00a0dokreslení myšlenky: Všichni máme vlastní životy. Vlastní strachy. Vlastní sny. A\u00a0přesto existuje místo, kde všechny rozdíly mizí. Kde nejsi ani dost, ani málo. Kde jsi prostě ty. Každý to najde jinde. Ale\u00a0ten pocit? Ten je stejný.",
    ],
  },
  {
    title: "Hudba",
    paragraphs: [
      "Hudba je jedna z\u00a0nejdůležitějších součástí, co se\u00a0týče vyvolávání emocí a\u00a0pocitu z\u00a0videa.",
      "První pasáž jsme chtěli ať buduje napětí, vyvolává tlak a\u00a0nejistotu. Možná trošku pocit, že\u00a0utíká čas. A\u00a0vygraduje to do\u00a0nějaké akce.",
      "Rychlá pasáž Báry naopak potřebovala dynamičtější, lehce epickou hudbu. Vyvolat pocit odhodlání a\u00a0bojovnosti.",
    ],
  },
];

const visualGroups: Record<
  string,
  Array<{ alt: string; className?: string; height: number; src: string; width: number }>
> = {
  Myšlenka: [
    {
      alt: "Life Passion moodboard",
      className: "case-study-media-wide",
      height: 719,
      src: "/images/case-studies/life-passion/milanote.jpg",
      width: 1600,
    },
  ],
  Koncept: [
    {
      alt: "Life Passion časový harmonogram",
      height: 1600,
      src: "/images/case-studies/life-passion/casovy-harmonogram.png",
      width: 1065,
    },
    {
      alt: "Life Passion gear list",
      height: 1600,
      src: "/images/case-studies/life-passion/gear-list.png",
      width: 1065,
    },
  ],
  Hudba: [
    {
      alt: "Life Passion timeline",
      className: "case-study-media-wide",
      height: 1039,
      src: "/images/case-studies/life-passion/timeline.jpg",
      width: 1600,
    },
  ],
};

const btsAssets = [
  { alt: "Life Passion BTS 1", height: 1600, src: "/images/case-studies/life-passion/bts-1.jpg", width: 1066 },
  { alt: "Life Passion BTS 2", height: 1600, src: "/images/case-studies/life-passion/bts-2.jpg", width: 1066 },
  { alt: "Life Passion BTS 3", height: 1066, src: "/images/case-studies/life-passion/bts-3.jpg", width: 1600 },
  { alt: "Life Passion BTS 4", height: 1600, src: "/images/case-studies/life-passion/bts-4.jpg", width: 1066 },
  { alt: "Life Passion BTS 5", height: 1600, src: "/images/case-studies/life-passion/bts-5.jpg", width: 1066 },
  { alt: "Life Passion BTS 6", height: 1600, src: "/images/case-studies/life-passion/bts-6.jpg", width: 1066 },
];

export default function LifePassionCaseStudyPage() {
  const youtubeEmbedUrl = "https://www.youtube-nocookie.com/embed/bk22D26IphY?rel=0&modestbranding=1";

  return (
    <main className="category-page pb-18">
      <section className="mx-auto w-full max-w-6xl 2xl:max-w-[1400px] px-5 pt-10 md:px-10">
        <div className="scroll-reveal is-visible">
          <Link className="back-link" href="/#showreel">
            ← Zpět na&nbsp;homepage
          </Link>
          <p className="mt-8 text-xs font-bold tracking-[0.26em] text-orange-300 uppercase">Case study</p>
          <h1 className="headline mt-4 text-6xl md:text-8xl">Life Passion</h1>
          <p className="mt-5 max-w-3xl text-xl text-zinc-100 md:text-2xl">
            Jak&nbsp;vzniká video, které má mít víc než&nbsp;jen hezký obraz?
          </p>
          <p className="mt-4 max-w-2xl text-zinc-300">
            Mrkni do&nbsp;našeho procesu od&nbsp;nápadu, přes&nbsp;natáčecí den, až po&nbsp;střih, zvuk a&nbsp;finální výstup.
          </p>
        </div>

        <div className="case-study-video mt-10">
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            src={youtubeEmbedUrl}
            title="Life Passion case study video"
          />
        </div>

        <section className="case-study-copy mt-12">
          {pdfSections.map((section, index) => (
            <div className="case-study-flow-item" key={section.title}>
              <article className="case-study-copy-section">
                <p className="case-study-step">{String(index + 1).padStart(2, "0")}</p>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </article>
              {visualGroups[section.title] ? (
                <div className="case-study-visual-strip">
                  {visualGroups[section.title].map((image) => (
                    <figure className={`case-study-gallery-card ${image.className ?? ""}`} key={image.src}>
                      <Image
                        alt={image.alt}
                        height={image.height}
                        sizes="(max-width: 768px) 100vw, 44vw"
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

        <section className="mt-12">
          <div className="mb-6">
            <p className="text-xs tracking-[0.24em] text-zinc-300 uppercase">Natáčecí den</p>
            <h2 className="headline mt-3 text-4xl md:text-6xl">BTS fotky</h2>
          </div>
          <div className="case-study-bts-grid">
            {btsAssets.map((image) => (
              <figure className="case-study-gallery-card" key={image.src}>
                <Image
                  alt={image.alt}
                  height={image.height}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  src={image.src}
                  width={image.width}
                />
              </figure>
            ))}
          </div>
        </section>

        <section className="mt-12" id="case-study-contact">
          <article className="cta-shell">
            <p className="text-xs tracking-[0.24em] text-zinc-300 uppercase">Výsledek</p>
            <h2 className="headline mt-3 text-4xl md:text-6xl">Od&nbsp;myšlenky k&nbsp;hotovému videu</h2>
            <p className="mt-4 max-w-2xl text-zinc-300">
              Case study ukazuje, že&nbsp;dobrý výstup nestojí jen na&nbsp;kameře. Důležité je rozhodnutí, co má divák cítit,
              jak&nbsp;se&nbsp;mají paralelní linky potkat a&nbsp;jak&nbsp;se&nbsp;celý pocit dotáhne hudbou, střihem a&nbsp;sound designem.
            </p>
            <Link className="btn-primary btn-fx mt-7" href="/#contact-form">
              Chci podobné video
              <span aria-hidden>↗</span>
            </Link>
          </article>
        </section>
      </section>
    </main>
  );
}
