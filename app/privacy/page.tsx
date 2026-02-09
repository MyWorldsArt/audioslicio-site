import type { Metadata } from "next";
import { getBaseUrl, getHostname } from "@/lib/domains";

export async function generateMetadata(): Promise<Metadata> {
  const hostname = getHostname();
  const baseUrl = getBaseUrl(hostname);

  return {
    title: "Privacy Policy",
    description: "Privacy policy for MyWorldsArt software subscriptions.",
    alternates: {
      canonical: new URL("/privacy", baseUrl),
    },
  };
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-6 py-16 text-sm leading-7 text-slate-300">
        <header className="text-slate-100">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            Privacy Policy
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-white">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-slate-300">Last updated: February 9, 2026</p>
        </header>

        <section className="space-y-3">
          <p>
            MyWorldsArt respects your privacy. This policy explains what data
            we collect, how we use it, and the choices you have when using our
            software products and subscription services.
          </p>
          <p>
            We collect basic account information (such as email address) and
            subscription details needed to deliver Pro features. Payment data is
            processed by our payment partner and is not stored on our servers.
          </p>
          <p>
            We may collect product usage analytics to improve performance and
            reliability. You can opt out of non-essential analytics inside the
            product settings where available.
          </p>
          <p>
            We do not sell your personal data. We may share limited data with
            trusted service providers (such as billing, email, and hosting) to
            operate the service.
          </p>
          <p>
            For privacy questions or requests, contact us at
            {" "}
            <span className="text-slate-100">privacy@myworldsart.world</span>.
          </p>
        </section>
      </div>
    </div>
  );
}
