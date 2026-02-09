import type { Metadata } from "next";
import Link from "next/link";
import { getBaseUrl, getHostname, isAutoslicioHost } from "@/lib/domains";

export async function generateMetadata(): Promise<Metadata> {
  const hostname = await getHostname();
  const baseUrl = getBaseUrl(hostname);
  const canonicalUrl = isAutoslicioHost(hostname)
    ? new URL("/", baseUrl)
    : new URL("/autoslicio", baseUrl);

  return {
    title: "AutoSlicio",
    description:
      "AutoSlicio is a focused audio slicing and editing tool designed for fast, precise workflows.",
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: "AutoSlicio",
      description:
        "A focused audio slicing and editing tool designed for fast, precise workflows.",
      url: canonicalUrl,
      siteName: "AutoSlicio",
      type: "website",
    },
  };
}

export default function AutoSlicioPage() {
  return (
    <div className="min-h-screen bg-[#0b0b12] text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.18),_transparent_55%),radial-gradient(circle_at_80%_20%,_rgba(251,191,36,0.12),_transparent_45%)]" />
      <div className="relative">
        <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-8">
          <div className="text-sm uppercase tracking-[0.35em] text-slate-400">
            AutoSlicio
          </div>
          <nav className="flex items-center gap-6 text-sm text-slate-300">
            <Link href="#pricing" className="hover:text-white">
              Pricing
            </Link>
            <Link href="#faq" className="hover:text-white">
              FAQ
            </Link>
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
          </nav>
        </header>

        <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 pb-24 pt-10">
          <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
                Audio Slicing Suite
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">
                Slice, polish, and ship audio faster with AutoSlicio.
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                AutoSlicio is a precision audio slicing and editing tool built
                for creators who need clean cuts, fast iteration, and reliable
                exports without the bloat of a full DAW.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="#pricing"
                  className="inline-flex items-center justify-center rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-sky-300"
                >
                  Get AutoSlicio Pro
                </Link>
                <Link
                  href="#download"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
                >
                  Download
                </Link>
              </div>
              <p className="mt-4 text-xs uppercase tracking-[0.3em] text-slate-500">
                Official product page for Paddle compliance review
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="rounded-2xl border border-white/10 bg-[#111827] p-6">
                <p className="text-sm text-slate-400">Workflow Highlights</p>
                <ul className="mt-4 space-y-3 text-sm text-slate-200">
                  <li>Waveform-first slicing with keyboard precision.</li>
                  <li>Batch export presets for podcasts and loops.</li>
                  <li>Low-latency scrubbing and instant preview.</li>
                </ul>
              </div>
              <div className="mt-4 rounded-2xl border border-white/10 bg-[#0f172a] p-6">
                <p className="text-sm text-slate-400">Built For</p>
                <p className="mt-3 text-sm text-slate-200">
                  Editors, podcasters, sound designers, and producers who want
                  clean audio at speed.
                </p>
              </div>
            </div>
          </section>

          <section
            id="pricing"
            className="rounded-3xl border border-white/10 bg-white/5 p-8"
          >
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-2xl font-semibold text-white">Pricing</h2>
              <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Simple Tiers
              </span>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-[#0b0b12] p-6">
                <h3 className="text-lg font-semibold text-white">Free</h3>
                <p className="mt-2 text-sm text-slate-300">
                  Core slicing tools with standard export presets.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  <li>Basic slicing and trims</li>
                  <li>Standard export formats</li>
                  <li>Community updates</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-sky-400/40 bg-sky-400/10 p-6">
                <h3 className="text-lg font-semibold text-white">Pro</h3>
                <p className="mt-2 text-sm text-slate-200">
                  All Free features plus advanced automation.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-200">
                  <li>Unlimited batch slicing</li>
                  <li>Advanced export presets</li>
                  <li>Priority updates</li>
                </ul>
                <button className="mt-6 inline-flex items-center rounded-full bg-sky-400 px-5 py-2 text-sm font-semibold text-slate-900">
                  Choose Pro
                </button>
              </div>
            </div>
          </section>

          <section
            id="faq"
            className="rounded-3xl border border-white/10 bg-white/5 p-8"
          >
            <h2 className="text-2xl font-semibold text-white">FAQ</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-base font-semibold text-white">
                  How do I activate Pro?
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  After subscribing, enter your Paddle subscription ID inside
                  AutoSlicio to unlock Pro features instantly.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">
                  Can I use AutoSlicio offline?
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  Yes. AutoSlicio works offline and only needs a quick refresh
                  around renewal time to verify your subscription.
                </p>
              </div>
            </div>
          </section>

          <section
            id="download"
            className="rounded-3xl border border-white/10 bg-white/5 p-8"
          >
            <h2 className="text-2xl font-semibold text-white">Download</h2>
            <p className="mt-3 text-sm text-slate-300">
              Download links will be available soon. Stay tuned for the first
              release.
            </p>
          </section>
        </main>

        <footer className="border-t border-white/10 py-10">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 px-6 text-sm text-slate-400 sm:flex-row sm:items-center">
            <span>© {new Date().getFullYear()} AutoSlicio</span>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white">
                Terms
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
