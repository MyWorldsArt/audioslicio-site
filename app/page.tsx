import type { Metadata } from "next";
import Link from "next/link";
import { getBaseUrl, getHostname } from "@/lib/domains";

export async function generateMetadata(): Promise<Metadata> {
  const hostname = await getHostname();
  const baseUrl = getBaseUrl(hostname);

  return {
    title: "MyWorldsArt",
    description:
      "MyWorldsArt is an umbrella studio for creative software, audio tools, and future projects.",
    alternates: {
      canonical: new URL("/", baseUrl),
    },
    openGraph: {
      title: "MyWorldsArt",
      description:
        "An umbrella studio for creative software, audio tools, and future projects.",
      url: baseUrl,
      siteName: "MyWorldsArt",
      type: "website",
    },
  };
}

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.15),_transparent_55%),radial-gradient(circle_at_20%_20%,_rgba(244,114,182,0.15),_transparent_40%)]" />
      <div className="relative">
        <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-8">
          <div className="text-lg font-semibold tracking-[0.3em] text-slate-200">
            MyWorldsArt
          </div>
          <nav className="flex items-center gap-6 text-sm text-slate-300">
            <Link href="#projects" className="hover:text-white">
              Projects
            </Link>
            <Link href="/support" className="hover:text-white">
              Support
            </Link>
            <Link href="#contact" className="hover:text-white">
              Contact
            </Link>
          </nav>
        </header>

        <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 pb-24 pt-12">
          <section className="flex flex-col gap-6">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
              Creative Studio
            </p>
            <h1 className="max-w-2xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Building focused tools for audio, art, and everyday creativity.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-300">
              MyWorldsArt is the home for a growing family of projects. Each
              product is designed to feel simple, fast, and personal while we
              explore new creative worlds.
            </p>
          </section>

          <section
            id="projects"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_40px_120px_-80px_rgba(0,0,0,0.9)]"
          >
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-2xl font-semibold text-white">Projects</h2>
              <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Now + Next
              </span>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-6">
                <h3 className="text-xl font-semibold text-white">AutoSlicio</h3>
                <p className="mt-2 text-sm text-slate-300">
                  Precision audio slicing and editing with a pro workflow.
                </p>
                <Link
                  href="/autoslicio"
                  className="mt-4 inline-flex items-center text-sm font-medium text-sky-300 hover:text-sky-200"
                >
                  Explore AutoSlicio
                </Link>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-6">
                <h3 className="text-xl font-semibold text-white">AudioSlicer</h3>
                <p className="mt-2 text-sm text-slate-300">
                  A future-ready slicing toolkit for batch workflows.
                </p>
                <span className="mt-4 inline-flex text-xs uppercase tracking-[0.25em] text-slate-500">
                  Placeholder
                </span>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-6">
                <h3 className="text-xl font-semibold text-white">Clothing</h3>
                <p className="mt-2 text-sm text-slate-300">
                  Art-forward apparel drops with collaborative design.
                </p>
                <span className="mt-4 inline-flex text-xs uppercase tracking-[0.25em] text-slate-500">
                  Placeholder
                </span>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-6">
                <h3 className="text-xl font-semibold text-white">Food</h3>
                <p className="mt-2 text-sm text-slate-300">
                  Small-batch food experiments and sensory storytelling.
                </p>
                <span className="mt-4 inline-flex text-xs uppercase tracking-[0.25em] text-slate-500">
                  Placeholder
                </span>
              </div>
            </div>
          </section>

          <section className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h2 className="text-2xl font-semibold text-white">Support</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Need help with a product or want to collaborate? Visit the
                support hub for updates, guides, and request forms.
              </p>
              <Link
                href="/support"
                className="mt-6 inline-flex items-center rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-white transition hover:border-white/40"
              >
                Go to Support
              </Link>
            </div>
            <div
              id="contact"
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <h2 className="text-2xl font-semibold text-white">Contact</h2>
              <p className="mt-3 text-sm text-slate-300">
                Email: <span className="text-slate-100">hello@myworldsart.world</span>
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-slate-500">
                Placeholder address
              </p>
            </div>
          </section>
        </main>

        <footer className="border-t border-white/10 py-8 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} MyWorldsArt. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
