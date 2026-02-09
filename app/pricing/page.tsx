import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Compare AudioSlicer Free and Pro plans and start your monthly subscription.",
};

export default function PricingPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-semibold text-slate-900">Pricing</h1>
        <p className="mt-4 text-sm text-slate-600">
          Choose the plan that fits your workflow. Pro is a single monthly
          subscription managed securely by Paddle.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-900">Free</h2>
          <p className="mt-2 text-sm text-slate-600">$0</p>
          <ul className="mt-5 space-y-3 text-sm text-slate-600">
            <li>Basic slicing tools.</li>
            <li>Standard exports.</li>
            <li>Local projects and manual organization.</li>
          </ul>
          <p className="mt-6 text-xs uppercase tracking-[0.25em] text-slate-400">
            Included
          </p>
        </div>

        <div className="rounded-2xl border border-slate-900 bg-slate-900 p-6 text-white">
          <h2 className="text-xl font-semibold">Pro</h2>
          <p className="mt-2 text-sm text-slate-200">Monthly subscription</p>
          <ul className="mt-5 space-y-3 text-sm text-slate-200">
            <li>Batch slicing workflows.</li>
            <li>Advanced trim and preview tools.</li>
            <li>Priority updates and feature drops.</li>
            <li>License activation via Paddle Subscription ID.</li>
          </ul>
          <Link
            href="https://checkout.paddle.com/"
            className="mt-6 inline-flex items-center rounded-full bg-white px-5 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-100"
          >
            Purchase AudioSlicer Pro
          </Link>
        </div>
      </div>

      <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6">
        <h3 className="text-lg font-semibold text-slate-900">Billing notes</h3>
        <ul className="mt-4 space-y-3 text-sm text-slate-600">
          <li>Subscriptions renew monthly until canceled.</li>
          <li>
            You can cancel any time via the Manage Subscription link provided by
            Paddle.
          </li>
          <li>
            The app refreshes your license on open when near renewal or expired.
            Internet access is required around the renewal date.
          </li>
          <li>
            A short grace period may apply if renewal is pending; Pro features
            resume once the license refresh succeeds.
          </li>
        </ul>
        <div className="mt-6 text-sm text-slate-600">
          Questions about billing? Visit{" "}
          <Link href="/support" className="font-medium text-slate-900">
            Support
          </Link>.
        </div>
      </div>
    </div>
  );
}
