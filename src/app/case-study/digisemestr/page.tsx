import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case study: Digisemestr",
  description:
    "Jak testimonial videa skutečných absolventů pomohla Digisemestru prodávat další ročník programu.",
};

const metrics = [
  {
    value: "4",
    label: "hotová testimonial videa",
    context: "pro kampaně a organický obsah",
  },
  {
    value: "3 ze 4",
    label: "se výrazně chytila v Meta Ads",
    context: "podle zpětné vazby Digisemestru",
  },
  {
    value: "TOP 5",
    label: "nejvýkonnějších reklam",
    context: "hlavní testimonial v kampani",
  },
];

const sections = [
  {
    kicker: "01",
    title: "Neříkat, že kurz funguje. Ukázat lidi, kterým pomohl.",
    paragraphs: [
      "Cílem bylo podpořit prodej 11. ročníku pražského Digisemestru.",
      "Digisemestr přišel s jasnou vizí, konkrétním zadáním a absolventy, které chtěl ve videích ukázat.",
      "Mohli jsme natočit klasické promo. Lektoři, prostory, atmosféra, pár silných claimů a CTA na konci.",
      "Jenže člověk, který přemýšlí, jestli do vzdělávání investovat svůj čas a peníze, řeší mnohem jednodušší otázku: Bude to mít smysl právě pro mě?",
      "Proto jsme postavili obsah na skutečných absolventech a jejich příbězích. Nešlo jen o testimonial. Šlo o social proof, který měl dát budoucím studentům důvod Digisemestru věřit.",
    ],
  },
  {
    kicker: "02",
    title: "Emoce, kterou do pěti hvězdiček nenapíšete",
    paragraphs: [
      "Reference mohly vzniknout jako text na webu nebo citace na grafice. Video ale dovolilo zachytit něco, co se do uvozovek nevejde.",
      "Vidíte konkrétního člověka. Slyšíte, jak o své zkušenosti mluví. Vidíte jeho nadšení, vzpomínky i momenty, kdy ho vlastní příběh dojme.",
      "Vedle kariérního posunu se ve výpovědích podařilo zachytit ještě jednu důležitou část produktu: Digisemestr není jen několik měsíců výuky. Je to čas offline s dalšími lidmi z oboru, vztahy a kontakty, které pokračují i po skončení kurzu.",
    ],
  },
  {
    kicker: "03",
    title: "Produkce, o kterou se klient nemusí starat",
    paragraphs: [
      "Digisemestr měl základní koncept v hlavě přibližně rok. Od začátku ale věděl, že tentokrát nechce obsah vyrábět interně.",
      "Reference absolventů měly reprezentovat prestiž samotného programu.",
      "Ve studiu jsme připravili prostředí, světla, kamery, zvuk i celý produkční setup tak, aby se tým Digisemestru mohl během natáčení soustředit prakticky jen na jednu věc: na lidi a jejich příběhy.",
      "Technickou část nemuseli řešit. Každý absolvent dostal prostor a prostředí, ve kterém se mohl uvolnit a mluvit přirozeně.",
    ],
  },
  {
    kicker: "04",
    title: "Jedno natáčení. Mnohem víc než čtyři videa.",
    paragraphs: [
      "Digisemestr od nás dostal 4 hotová testimonial videa, která mohl okamžitě nasadit do Meta Ads a organického obsahu.",
      "Spolu s nimi jsme předali také barevně a zvukově zpracovaný materiál, se kterým mohl jejich interní marketingový tým dál pracovat.",
      "Z původního natáčení postupně vznikly další video varianty, kariérní příběhy na web, fotografie pro statické Meta Ads a bannery i fotografie pro samotné absolventy a jejich LinkedIn.",
      "Jeden produkční den tak nevytvořil obsah pro jeden post. Vznikla knihovna materiálu, kterou mohl Digisemestr dál stříhat, testovat a recyklovat.",
    ],
    bullets: [
      "4 hotová videa od FremlosMedia",
      "cca 4 další vlastní video varianty",
      "3 kariérní příběhy / case studies na web",
      "fotografie pro Meta Ads, bannery a LinkedIn",
    ],
  },
  {
    kicker: "05",
    title: "A pak šla videa do kampaní",
    paragraphs: [
      "Videa se začala v Meta Ads používat od června. První měsíce běžela všechna čtyři a tři ze čtyř se podle Digisemestru jasně chytila.",
      "Hlavní testimonial běžel v kampani nepřetržitě přibližně 2-3 měsíce a zařadil se mezi TOP 5 nejvýkonnějších reklam Digisemestru.",
      "A přitom nešlo o rychlý TikTokový střih snažící se každou sekundu získat zpět pozornost. Fungovalo klasicky zpracované video postavené na dobrém příběhu a člověku, kterému divák věří.",
    ],
  },
  {
    kicker: "06",
    title: "Výkon reklamy je jedna věc. Tohle nás baví ještě víc.",
    paragraphs: [
      "Čísla z reklam ukazují, že obsah fungoval. Ještě zajímavější feedback ale přišel mimo Ads Manager.",
      "Při pohovorech s uchazeči se Digisemestr opakovaně setkával s tím, že lidé sami zmiňovali videa s absolventy jako jeden z důvodů, proč se rozhodli přihlásit.",
      "Nemáme izolovaný A/B test, ze kterého bychom mohli tvrdit, že naše videa způsobila konkrétní počet přihlášek. Máme ale dva signály, které nás zajímají víc než samotné views: videa patřila mezi nejvýkonnější reklamy kampaně a potenciální studenti sami říkali, že jim pomohla se rozhodnout.",
    ],
  },
  {
    kicker: "07",
    title: "Obsah, který nekončí prvním exportem",
    paragraphs: [
      "Po několika měsících Digisemestr natočený materiál používá dál.",
      "Jednotlivé příběhy přestříhává, vytahuje nové úhly a kombinuje je s dalšími formáty. Ne proto, že by původní obsah přestal fungovat, ale protože reklamní kreativa se postupně okouká.",
      "Jedno natáčení. Několik měsíců marketingového materiálu.",
    ],
    quote:
      "Pokud chceš partnera, který zaštítí všechno, čemu sám nerozumíš a rozumět nechceš, zároveň tě navede ke konceptu a přinese vlastní nápady do produkce, je to jasná volba.",
    quoteSource: "Aneta, Digisemestr",
  },
];

const galleryImages = [
  {
    alt: "Digisemestr testimonial natáčení ve studiu",
    height: 5835,
    src: "/images/case-studies/digisemestr/fre-6173.jpg",
    width: 3890,
  },
  {
    alt: "Digisemestr absolvent během natáčení",
    height: 6000,
    src: "/images/case-studies/digisemestr/fre-6223.jpg",
    width: 4000,
  },
  {
    alt: "Digisemestr produkce testimonial videí",
    height: 6240,
    src: "/images/case-studies/digisemestr/dscf-2836.jpg",
    width: 4160,
  },
  {
    alt: "Digisemestr backstage natáčení",
    height: 6240,
    src: "/images/case-studies/digisemestr/dscf-2969.jpg",
    width: 4160,
  },
];

const sectionVisualGroups = [
  [galleryImages[0], galleryImages[1]],
  [galleryImages[2], galleryImages[3]],
];

export default function DigisemestrCaseStudyPage() {
  return (
    <main className="category-page pb-18">
      <section className="mx-auto w-full max-w-6xl px-5 pt-10 md:px-10">
        <div className="scroll-reveal is-visible">
          <Link className="back-link" href="/#case-studies">
            ← Zpět na case studies
          </Link>
          <div className="case-study-client-row mt-8">
            <p className="text-xs font-bold tracking-[0.26em] text-orange-300 uppercase">
              Case study: FremlosMedia × Digisemestr
            </p>
            <a
              className="case-study-client-logo"
              href="https://www.digisemestr.cz/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                alt="Digisemestr"
                height={400}
                src="/images/case-studies/digisemestr/digi-logo-square-new.png"
                width={400}
              />
            </a>
          </div>
          <h1 className="headline mt-4 max-w-4xl text-5xl leading-[0.95] md:text-7xl">
            Když nejlepší reklamu na váš produkt udělají vaši zákazníci
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-zinc-100 md:text-2xl">
            Pro Digisemestr jsme natočili příběhy skutečných absolventů. Tři ze čtyř videí se výrazně chytila a
            jedno dokonce patřilo mezi jejich TOP 5 nejvýkonnějších reklam.
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

        <div className="case-study-video case-study-video-portrait mt-10">
          <video controls playsInline preload="metadata" src="/video/case-studies/digisemestr/main-reelsko.mp4" />
        </div>

        <section className="case-study-copy case-study-copy-wide mt-12">
          <article className="case-study-copy-section case-study-lead-card">
            <div className="case-study-lead-split">
              <div>
                <p className="case-study-step">Princip</p>
                <h2>Nejlepším důkazem kvality byli absolventi.</h2>
              </div>
              <div>
                <p>
                  Digisemestr učí digitální marketing. A když marketéři prodávají marketingový kurz, nestačí
                  říct, že potřebují nějaký content.
                </p>
                <p>
                  Potřebovali obsah, který pomůže prodat další ročník, zvýší důvěryhodnost programu a ukáže
                  skutečné lidi a jejich kariérní příběhy.
                </p>
              </div>
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
                <div className="case-study-image-pair case-study-image-pair-portrait">
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
            <p className="text-xs tracking-[0.24em] text-zinc-300 uppercase">
              Máte spokojené zákazníky? Nechte je prodávat za vás.
            </p>
            <h2 className="headline mt-3 text-4xl md:text-6xl">Ať to řeknou lidé, kterým jste pomohli.</h2>
            <p className="mt-4 max-w-2xl text-zinc-300">
              Nemusíte o sobě říkat, že jste dobří. Mnohem silnější je, když to řeknou vaši zákazníci.
            </p>
            <Link className="btn-primary btn-fx mt-7" href="/#contact-form">
              Natočit testimonial
              <span aria-hidden>↗</span>
            </Link>
          </article>
        </section>
      </section>
    </main>
  );
}
