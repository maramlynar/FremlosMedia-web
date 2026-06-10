import Image from "next/image";
import Link from "next/link";

const pdfSections = [
  {
    title: "Myšlenka",
    paragraphs: [
      "Chtěli jsme to stavět kolem imposter syndromu, toho hlasu v hlavě, který říká že nejsi dost. A ukázat, že to trápí všechny. Jak „normální“ lidi. Tak i profi sportovce. Dva různé životy. Profi trenérka, která sportem žije a bojí se prohrát závod. Studentka, která se bojí, že nezvládne zkoušku. Na první pohled jiný svět, jiné problémy, ale ve skutečnosti stejné pochybnosti, stejný strach, stejný pocit. A běh je ten ústřední motiv, který spojuje ty dvě linky a kde se vlastně potkávají.",
    ],
  },
  {
    title: "Koncept",
    paragraphs: [
      "Video má dvě paralelní linky, které jedou vedle sebe a na konci se protnou.",
      "První pasáž je o nejistotě. Bára přichází na místo, připravuje se na běh. Tempo je klidnější ale hudba vybraná tak, ať vyvolává pocit tlaku, času a emotions. Buduje se napětí. A končí voiceoverem „bojím se prohry.“ Matchcut na obličej z Báry na Aničku. Ta navazuje: „bojím se, že to nezvládnu“ – záběry jak se nervózně učí. Pasáž končí zase voiceoverem „všichni před něčím utíkáme, ať už před myšlenkama“ – střih na Báru. „Nebo před soupeřem.“",
      "Změna hudby. Nastoupí dynamická hudba, SFX, kinetický střih, energie, odhodlání. A zase končí slow motionem a voiceoverem „stejně ale miluju tu přítomnost.“",
      "Změna hudby na klidnou, emocionální. Střih na Aničku jak běží po náplavce ve městě. „Miluju ten pocit ticha.“ Matchcut z Aničky, pohled zepředu na Báru. Obě na stejném místě. Voiceover: „Když běžím, ten hlas v mojí hlavě...“ Záběr jak obě přicházejí na výhled. „...ztichne.“",
      "A pak závěrečný text.",
    ],
  },
  {
    title: "Voiceover",
    paragraphs: [
      "Chtěli jsme aby voiceover zněl jako myšlenky. Psali jsme ho stručně a kolem tří věcí. Imposter syndrom, ten hlas který říká že nejsi dost. Paralela útěku, běh jako fyzická aktivita a zároveň útěk před něčím. A ten moment ticha a pocit úlevy, kdy přestaneš myslet a jsi prostě přítomný.",
      "Finální voiceover: Bojím se prohry. Bojím se, že to nezvládnu. Všichni před něčím utíkáme. Ať už před myšlenkama. Nebo před soupeřem. Stejně ale miluju tu přítomnost. Miluju ten pocit ticha. Když běžím, ten hlas v mojí hlavě... ztichne.",
      "A závěrečný text na dokreslení myšlenky: Všichni máme vlastní životy. Vlastní strachy. Vlastní sny. A přesto existuje místo, kde všechny rozdíly mizí. Kde nejsi ani dost, ani málo. Kde jsi prostě ty. Každý to najde jinde. Ale ten pocit? Ten je stejný.",
    ],
  },
  {
    title: "Hudba",
    paragraphs: [
      "Hudba je jedna z nejdůležitějších součástí, co se týče vyvolávání emocí a pocitu z videa.",
      "První pasáž jsme chtěli ať buduje napětí, vyvolává tlak a nejistotu. Možná trošku pocit, že utíká čas. A vygraduje to do nějaké akce.",
      "Rychlá pasáž Báry naopak potřebovala dynamičtější, lehce epickou hudbu. Vyvolat pocit odhodlání a bojovnosti.",
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
      <section className="mx-auto w-full max-w-6xl px-5 pt-10 md:px-10">
        <div className="scroll-reveal is-visible">
          <Link className="back-link" href="/#showreel">
            ← Zpět na homepage
          </Link>
          <p className="mt-8 text-xs font-bold tracking-[0.26em] text-orange-300 uppercase">Case study</p>
          <h1 className="headline mt-4 text-6xl md:text-8xl">Life Passion</h1>
          <p className="mt-5 max-w-3xl text-xl text-zinc-100 md:text-2xl">
            Jak vzniká video, které má mít víc než jen hezký obraz?
          </p>
          <p className="mt-4 max-w-2xl text-zinc-300">
            Mrkni do našeho procesu od nápadu, přes natáčecí den, až po střih, zvuk a finální výstup.
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
            <h2 className="headline mt-3 text-4xl md:text-6xl">Od myšlenky k hotovému videu</h2>
            <p className="mt-4 max-w-2xl text-zinc-300">
              Case study ukazuje, že dobrý výstup nestojí jen na kameře. Důležité je rozhodnutí, co má divák cítit,
              jak se mají paralelní linky potkat a jak se celý pocit dotáhne hudbou, střihem a sound designem.
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
