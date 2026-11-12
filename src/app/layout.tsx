import type { Metadata } from "next";
import { Bebas_Neue, Manrope } from "next/font/google";
import "./globals.css";
import { OG_IMAGE } from "@/lib/seo";
import { InstagramLink } from "./InstagramLink";

const siteUrl = "https://www.kukinmedia.cz";

const HOME_TITLE = "Videoprodukce Brno | KUKIN Media";
const HOME_DESCRIPTION =
  "Videoprodukce z Brna. Natáčíme firemní, reklamní a eventová videa, aftermovie, podcasty i záběry z FPV dronu. Jezdíme po celé ČR i EU.";

const heading = Bebas_Neue({
  variable: "--font-heading",
  weight: "400",
  subsets: ["latin"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: HOME_TITLE,
    template: "%s | KUKIN Media",
  },
  description: HOME_DESCRIPTION,
  keywords: [
    "videoprodukce Brno",
    "video produkce",
    "kameraman Brno",
    "firemní video",
    "reklamní video",
    "eventové video",
    "aftermovie",
    "podcast studio Brno",
    "natáčení dronem",
    "KUKIN Media",
    "Dominik Freml",
    "Mára Mlynář",
  ],
  authors: [
    { name: "Dominik Freml" },
    { name: "Mára Mlynář" },
  ],
  creator: "Dominik Freml, Mára Mlynář",
  publisher: "KUKIN Media",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    url: siteUrl,
    siteName: "KUKIN Media",
    locale: "cs_CZ",
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [OG_IMAGE.url],
  },
  icons: {
    icon: [
      { url: "/favicon-kukin.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/favicon-kukin.svg", type: "image/svg+xml" },
    ],
    shortcut: [{ url: "/favicon-kukin.ico", type: "image/x-icon" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "KUKIN Media",
    description: HOME_DESCRIPTION,
    url: siteUrl,
    logo: `${siteUrl}/logo/kukin-media-weblogo-v2.png`,
    image: `${siteUrl}${OG_IMAGE.url}`,
    email: "info@fremlosmedia.cz",
    telephone: "+420739803734",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Cejl 29/76",
      addressLocality: "Brno",
      postalCode: "602 00",
      addressCountry: "CZ",
    },
    areaServed: [
      { "@type": "City", name: "Brno" },
      { "@type": "Country", name: "Česko" },
      { "@type": "Place", name: "Evropská unie" },
    ],
    sameAs: [
      "https://www.instagram.com/kukinmedia/",
      "https://www.instagram.com/kukinstudio/",
      "https://www.google.com/search?kgmid=/g/11vy133vzf",
    ],
    founder: [
      {
        "@type": "Person",
        name: "Dominik Freml",
      },
      {
        "@type": "Person",
        name: "Mára Mlynář",
        alternateName: "Marek Mlynář",
      },
    ],
  };

  return (
    <html lang="cs">
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          type="application/ld+json"
        />
      </head>
      <body className={`${heading.variable} ${body.variable} antialiased`}>
        <div className="site-shell">
          <div className="site-content">{children}</div>
          <footer className="site-footer">
            <InstagramLink />
          </footer>
        </div>
      </body>
    </html>
  );
}
