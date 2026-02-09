import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://audioslicer.myworldsart.world";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AudioSlicer",
    template: "%s | AudioSlicer",
  },
  description:
    "AudioSlicer is a Windows desktop audio and video-audio slicing editor built for fast, precise edits.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "AudioSlicer",
    description:
      "A Windows desktop audio and video-audio slicing editor for fast, precise edits.",
    url: siteUrl,
    siteName: "AudioSlicer",
    type: "website",
  },
};

const navLinks = [
  { href: "/pricing", label: "Pricing" },
  { href: "/download", label: "Download" },
  { href: "/support", label: "Support" },
  { href: "/refund-policy", label: "Refund Policy" },
];

const footerLinks = [
  { href: "/pricing", label: "Pricing" },
  { href: "/download", label: "Download" },
  { href: "/refund-policy", label: "Refund Policy" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
  { href: "/support", label: "Contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-slate-50 text-slate-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <header className="border-b border-slate-200/80 bg-white/80 backdrop-blur">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
              <Link href="/" className="text-lg font-semibold tracking-tight">
                AudioSlicer
              </Link>
              <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="transition hover:text-slate-900"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <Link
                href="/pricing"
                className="inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                Get AudioSlicer Pro
              </Link>
            </div>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="border-t border-slate-200/80 bg-white">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10">
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
                {footerLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="transition hover:text-slate-900"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="text-xs text-slate-500">
                © {new Date().getFullYear()} AudioSlicer. Company/Publisher:
                MyWorldsArt.
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
