import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support",
  description: "Contact AudioSlicer support for help with billing or product questions.",
};

export default function SupportPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-semibold text-slate-900">Support</h1>
      <p className="mt-4 text-sm text-slate-600">
        We are here to help with licensing, billing, and product questions.
      </p>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-slate-900">Contact</h2>
        <p className="mt-3 text-sm text-slate-600">
          Email support: <span className="font-medium text-slate-900">mmyworldsart@gmail.com</span>
        </p>
        <p className="mt-2 text-xs text-slate-500">
          Expected response time: 1-2 business days.
        </p>
      </div>

      <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-slate-900">What to include</h2>
        <ul className="mt-4 space-y-3 text-sm text-slate-600">
          <li>Your Paddle subscription email or Subscription ID.</li>
          <li>The version of AudioSlicer you are running.</li>
          <li>Any error message or screenshot details.</li>
        </ul>
      </div>
    </div>
  );
}

