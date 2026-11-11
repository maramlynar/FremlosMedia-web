import Image from "next/image";

type Client = {
  name: string;
  // Path under /public, a logo on a transparent background. CSS turns every
  // logo pure white so the strip looks uniform. Without one the client's name
  // is shown as a text wordmark.
  logo?: string;
  // Round or square marks need more height to read as big as wide wordmarks.
  badge?: boolean;
};

// Only clients who agreed to be shown. Source files are in /loga, the
// prepared copies in public/logos/clients/.
const CLIENTS: Client[] = [
  { name: "MotoGP", logo: "/logos/clients/motogp.svg" },
  { name: "Dormer Pramet", logo: "/logos/clients/dormer-pramet.svg" },
  { name: "Na Páka", logo: "/logos/clients/napana.png", badge: true },
  { name: "Strange Training", logo: "/logos/clients/strange.png" },
  { name: "Botas", logo: "/logos/clients/botas.svg" },
  { name: "NIKK Services", logo: "/logos/clients/nikk.svg" },
  { name: "Yerb.", logo: "/logos/clients/yerb.png", badge: true },
  { name: "How to Brand", logo: "/logos/clients/howtobrand.svg" },
  { name: "Solárko", logo: "/logos/clients/solarko.png", badge: true },
  { name: "Hook & Tell", logo: "/logos/clients/hook-and-tell.svg" },
  { name: "Drz volant", logo: "/logos/clients/drzvolant.png" },
  { name: "Vitom", logo: "/logos/clients/vitom.svg", badge: true },
  { name: "Partners", logo: "/logos/clients/partners.svg" },
  { name: "Nejkola", logo: "/logos/clients/nejkola-alpha.png" },
  { name: "Benefit", logo: "/logos/clients/benefit-mark.png", badge: true },
  { name: "Liftor", logo: "/logos/clients/liftor.svg" },
  { name: "Meet&Deal", logo: "/logos/clients/meetdeal.svg" },
  { name: "Digisemestr", logo: "/logos/clients/digisemestr.svg" },
  { name: "Fatfuck", logo: "/logos/clients/fatfuck-alpha.png" },
];

function ClientMark({ client }: { client: Client }) {
  if (client.logo) {
    return (
      <Image
        alt={client.name}
        className={`logo-carousel__img${client.badge ? " logo-carousel__img--badge" : ""}`}
        height={64}
        // The strip moves, so logos must be ready before they slide in.
        loading="eager"
        src={client.logo}
        width={200}
      />
    );
  }
  return <span className="logo-carousel__wordmark">{client.name}</span>;
}

export function LogoCarousel({ label, className = "" }: { label: string; className?: string }) {
  // The list is rendered twice and the track slides by exactly half its
  // width, which makes the loop seamless.
  const track = [...CLIENTS, ...CLIENTS];

  return (
    <section aria-label={label} className={`logo-carousel ${className}`}>
      <p className="logo-carousel__label">{label}</p>
      <div className="logo-carousel__viewport">
        <ul className="logo-carousel__track">
          {track.map((client, i) => (
            <li aria-hidden={i >= CLIENTS.length} className="logo-carousel__item" key={`${client.name}-${i}`}>
              <ClientMark client={client} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
