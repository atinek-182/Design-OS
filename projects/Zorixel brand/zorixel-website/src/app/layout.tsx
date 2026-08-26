import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZORIXEL — Web Design & AI Operating Systems",
  description: "Educational platform, interactive component vault, and AI OS workflows built for developers, designers, and vibe coders.",
  keywords: ["Zorixel", "Web Design", "AI OS", "Next.js 15", "Component Vault", "Vibe Coding"],
  icons: {
    icon: "/vectors/favicon.svg",
  },
  openGraph: {
    title: "ZORIXEL — Web Design & AI Operating Systems",
    description: "Educational brand & AI automation hub.",
    url: "https://zorixel.com",
    siteName: "ZORIXEL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full antialiased">
      <head>
        <link rel="stylesheet" href="/fonts/fonts.css" />
      </head>
      <body className="min-h-full flex flex-col bg-[#0D0E12] text-[#FAF8F5] selection:bg-[#D61C2C] selection:text-white">
        <main className="flex-1 w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
