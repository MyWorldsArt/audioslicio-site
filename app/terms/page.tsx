import type { Metadata } from "next";
import { getBaseUrl, getHostname } from "@/lib/domains";

export async function generateMetadata(): Promise<Metadata> {
  const hostname = getHostname();
  const baseUrl = getBaseUrl(hostname);

  return {
    title: "Terms of Service",
    description: "Terms of service for MyWorldsArt software subscriptions.",
    alternates: {
      canonical: new URL("/terms", baseUrl),
    },
  };
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-6 py-16 text-sm leading-7 text-slate-300">
        <header className="text-slate-100">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            Terms of Service
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-white">
            Terms of Service
          </h1>
          <p className="mt-2 text-sm text-slate-300">Last updated: February 9, 2026</p>
        </header>

        <section className="space-y-3">
          <p>
            By accessing or using MyWorldsArt software products, you agree to
            these terms. If you do not agree, do not use the services.
          </p>
          <p>
            Subscriptions renew automatically unless canceled before the end of
            the current billing period. You can manage or cancel your subscription
            through the checkout provider or within the product where available.
          </p>
          <p>
            We grant you a personal, non-transferable license to use the
            software. You agree not to resell, reverse engineer, or misuse the
            service in ways that violate applicable law.
          </p>
          <p>
            The software is provided "as is" without warranties of any kind.
            To the maximum extent permitted by law, MyWorldsArt will not be
            liable for indirect, incidental, or consequential damages.
          </p>
          <p>
            For questions about these terms, contact
            {" "}
            <span className="text-slate-100">legal@myworldsart.world</span>.
          </p>
        </section>
      </div>
    </div>
  );
}
