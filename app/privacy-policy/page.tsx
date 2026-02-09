import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "AudioSlicer privacy policy for the website and desktop app.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-semibold text-slate-900">Privacy Policy</h1>
      <p className="mt-4 text-sm text-slate-600">
        This policy explains how AudioSlicer collects and uses information when
        you visit our website or use the desktop app.
      </p>

      <div className="mt-8 space-y-6 rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Information we collect</h2>
          <ul className="mt-2 space-y-2">
            <li>Website analytics data (if enabled), such as page views and browser type.</li>
            <li>Subscription identifiers used for license activation (Paddle Subscription ID).</li>
            <li>Support communications you send to us.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-900">How we use data</h2>
          <ul className="mt-2 space-y-2">
            <li>To activate and validate Pro licenses.</li>
            <li>To provide customer support and troubleshooting.</li>
            <li>To improve the app and website experience.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Payments via Paddle</h2>
          <p className="mt-2">
            Paddle acts as our Merchant of Record. Payment details are processed
            by Paddle and are not stored on our servers. We receive limited
            customer information needed for support and licensing.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Data retention</h2>
          <p className="mt-2">
            We keep support and licensing data only as long as needed to provide
            service and comply with legal obligations.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Contact</h2>
          <p className="mt-2">
            Questions about privacy can be sent to <span className="font-medium text-slate-900">support@audioslicer.myworldsart.world</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
