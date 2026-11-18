import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Plus_Jakarta_Sans, Syne } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#08090b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Syed Mohammed Ehaab — Full-Stack Developer & AI Engineering",
  description:
    "I'm Syed Mohammed Ehaab — a full-stack developer based in Mangalore, India, exploring the intersection of web engineering, backend systems, and practical AI applications.",
  keywords: [
    "Syed Mohammed Ehaab",
    "Full-Stack Developer",
    "AI Engineering",
    "Python RAG Pipeline",
    "Next.js Developer",
    "React 19",
    "ChromaDB",
    "FastAPI",
    "Mangalore",
  ],
  authors: [{ name: "Syed Mohammed Ehaab", url: "https://github.com/Ehaabsyed" }],
  creator: "Syed Mohammed Ehaab",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/Ehaabsyed",
    siteName: "Syed Mohammed Ehaab Portfolio",
    title: "Syed Mohammed Ehaab — Full-Stack Developer & AI Engineering",
    description:
      "I build products, not just interfaces. Exploring web engineering, backend systems, and practical AI applications.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syed Mohammed Ehaab — Full-Stack Developer & AI Engineering",
    description:
      "Full-stack developer exploring the intersection of web engineering, backend systems, and practical AI applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark scroll-smooth ${jetbrainsMono.variable} ${plusJakartaSans.variable} ${syne.variable}`}
    >
      <body className="min-h-screen bg-[#090a0c] text-[#f4f5f7] font-sans antialiased selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
