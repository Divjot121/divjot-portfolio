import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://divjotsingh.com"),
  title: "Divjot Singh Arora | Developer, Youth Leader, Enterpreneur & Speaker",
  description:
    "Portfolio of Divjot Singh Arora, a developer, builder, TEDx speaker, community leader, and young entrepreneur turning ideas into useful technology.",
  keywords: [
    "Divjot Singh Arora",
    "developer",
    "young entrepreneur",
    "TEDx speaker",
    "community builder",
    "GDG Ludhiana",
    "Literating India",
  ],
  authors: [{ name: "Divjot Singh Arora" }],
  creator: "Divjot Singh Arora",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: "Divjot Singh Arora | Build Before You're Ready",
    description: "Developer, builder, speaker, and community leader creating technology that moves people forward.",
    siteName: "Divjot Singh Arora",
    images: [{ url: "/profile.jpg", width: 800, height: 1200, alt: "Divjot Singh Arora" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Divjot Singh Arora | Developer, Builder & Speaker",
    description: "Turning ideas into real products and helping others do the same.",
    creator: "@Divjot121",
    images: ["/profile.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#05070a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Divjot Singh Arora",
    url: "https://divjotsingh.com",
    image: "https://divjotsingh.com/profile.jpg",
    jobTitle: "Developer, Builder, Speaker and Community Leader",
    sameAs: [
      "https://github.com/divjot121",
      "https://www.linkedin.com/in/divjot-aroraa/",
      "https://x.com/Divjot121",
    ],
  };

  return (
    <html lang="en" className="dark">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        {children}
      </body>
    </html>
  );
}
