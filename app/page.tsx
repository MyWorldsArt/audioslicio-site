import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AudioSlicer",
  description:
    "AudioSlicer is a Windows desktop tool for slicing audio and extracting audio from video with fast, precise edits.",
};

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.06),_transparent_60%)]" />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
              Windows Desktop App
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
              AudioSlicer
            </h1>
            <p className="mt-5 text-base leading-7 text-slate-600">
              AudioSlicer is a Windows desktop audio and video-audio slicing
              editor built for fast, precise edits. Trim, split, and organize
              audio in seconds without bloated workflows.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/pricing"
                className="inline-flex items-center rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                Get AudioSlicer Pro
              </Link>
              <Link
                href="/download"
                className="inline-flex items-center rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
              >
                Download
              </Link>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Fast slicing",
                body: "Slice audio or audio-from-video with clean, frame-accurate control.",
              },
              {
                title: "Batch-ready",
                body: "Handle multiple clips quickly with consistent export settings.",
              },
              {
                title: "Built for Windows",
                body: "Optimized for desktop workflows with minimal setup.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Features</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>Non-destructive slicing with precise time controls.</li>
              <li>Extract audio from video clips instantly.</li>
              <li>Quick export presets for consistent output.</li>
              <li>Simple UI designed for repeatable workflows.</li>
              <li>Offline-friendly once activated.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">How it works</h3>
            <ol className="mt-4 space-y-4 text-sm text-slate-600">
              <li>Download the AudioSlicer Windows app.</li>
              <li>Subscribe to AudioSlicer Pro through Paddle.</li>
              <li>Activate in-app using your Paddle Subscription ID.</li>
            </ol>
            <p className="mt-4 text-xs text-slate-500">
              Pro licenses refresh near renewal and require internet access at
              renewal time.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-900">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 text-white">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold">Pricing at a glance</h2>
              <p className="mt-3 text-sm text-slate-200">
                Start free, then upgrade when you need pro slicing and
                automation.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold">Free</h3>
                <p className="mt-2 text-sm text-slate-200">
                  Basic slicing and exports for casual edits.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
                <h3 className="text-lg font-semibold">Pro</h3>
                <p className="mt-2 text-sm text-slate-200">
                  Batch workflows, advanced controls, and priority updates.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <Link
              href="/pricing"
              className="inline-flex items-center rounded-full bg-white px-5 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-100"
            >
              View full pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="rounded-2xl border border-slate-200 bg-white p-8">
          <h2 className="text-2xl font-semibold text-slate-900">
            Support & contact
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Need help or a refund? Email our support team and include your
            subscription details when possible.
          </p>
          <p className="mt-4 text-sm font-medium text-slate-900">
            mmyworldsart@gmail.com
          </p>
          <div className="mt-6">
            <Link
              href="/support"
              className="inline-flex items-center rounded-full border border-slate-300 px-5 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
            >
              Visit Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
