import type { Metadata } from "next";
import Link from "next/link";
import { getBaseUrl, getHostname } from "@/lib/domains";

export async function generateMetadata(): Promise<Metadata> {
  const hostname = await getHostname();
  const baseUrl = getBaseUrl(hostname);

  return {
    title: "Support",
    description: "Support resources and contact options for MyWorldsArt.",
    alternates: {
      canonical: new URL("/support", baseUrl),
    },
  };
}

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-6 py-16">
        <header>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            Support
          </p>
          <h1 className="mt-4 text-3xl font-semibold text-white">
            Help, updates, and direct contact.
          </h1>
          <p className="mt-3 text-sm text-slate-300">
            We are building a full support hub. For now, reach out by email and
            include the product name plus a short summary of what you need.
          </p>
        </header>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-lg font-semibold text-white">Contact</h2>
          <p className="mt-2 text-sm text-slate-300">
            Email: <span className="text-slate-100">support@myworldsart.world</span>
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.3em] text-slate-500">
            Placeholder address
          </p>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-lg font-semibold text-white">Popular Links</h2>
          <div className="mt-4 flex flex-wrap gap-4">
            <Link
              href="/autoslicio"
              className="inline-flex items-center rounded-full border border-white/20 px-4 py-2 text-sm text-white hover:border-white/40"
            >
              AutoSlicio
            </Link>
            <Link
              href="/privacy"
              className="inline-flex items-center rounded-full border border-white/20 px-4 py-2 text-sm text-white hover:border-white/40"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="inline-flex items-center rounded-full border border-white/20 px-4 py-2 text-sm text-white hover:border-white/40"
            >
              Terms
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
