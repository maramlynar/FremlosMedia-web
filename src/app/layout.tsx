import type { Metadata } from "next";
import { Bebas_Neue, Manrope } from "next/font/google";
import "./globals.css";

const siteUrl = "https://www.fremlosmedia.cz";

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
    default: "Fremlos Media | Dominik Freml & Mára Mlynář",
    template: "%s | Fremlos Media",
  },
  description:
    "Fremlos Media tvoří Dominik Freml a Mára Mlynář. Video produkce pro značky, eventy, reklamy a sociální sítě.",
  keywords: [
    "Fremlos Media",
    "Dominik Freml",
    "Mára Mlynář",
    "Marek Mlynář",
    "video produkce",
    "reklamní video",
    "eventové video",
    "firemní video",
  ],
  authors: [
    { name: "Dominik Freml" },
    { name: "Mára Mlynář" },
  ],
  creator: "Dominik Freml, Mára Mlynář",
  publisher: "Fremlos Media",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Fremlos Media | Dominik Freml & Mára Mlynář",
    description:
      "Video produkce Fremlos Media: Dominik Freml a Mára Mlynář tvoří reklamní, eventová a firemní videa.",
    url: siteUrl,
    siteName: "Fremlos Media",
    locale: "cs_CZ",
    type: "website",
    images: [
      {
        url: "/logo/fremlos-media-logo-colour.png",
        width: 591,
        height: 591,
        alt: "Fremlos Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fremlos Media | Dominik Freml & Mára Mlynář",
    description: "Video produkce pro značky, eventy, reklamy a sociální sítě.",
    images: ["/logo/fremlos-media-logo-colour.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-fremlos-2026.ico", type: "image/x-icon" },
      { url: "/favicon-fremlos-2026.svg", type: "image/svg+xml" },
    ],
    shortcut: [{ url: "/favicon-fremlos-2026.ico", type: "image/x-icon" }],
    apple: [{ url: "/apple-touch-icon.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Fremlos Media",
    url: siteUrl,
    logo: `${siteUrl}/logo/fremlos-media-logo-colour.png`,
    email: "info@fremlosmedia.cz",
    sameAs: ["https://www.instagram.com/fremlosmedia/"],
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
            <a
              aria-label="Fremlos Media on Instagram"
              className="ig-link"
              href="https://www.instagram.com/fremlosmedia/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg aria-hidden="true" className="ig-icon" viewBox="0 0 24 24">
                <path
                  d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 1.9A3.9 3.9 0 0 0 3.9 7.8v8.4a3.9 3.9 0 0 0 3.9 3.9h8.4a3.9 3.9 0 0 0 3.9-3.9V7.8a3.9 3.9 0 0 0-3.9-3.9H7.8Zm9.4 1.5a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.9a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </footer>
        </div>
      </body>
    </html>
  );
}
