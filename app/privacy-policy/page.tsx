import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "AudioSlicer privacy policy for the website and desktop app.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-semibold text-slate-900">Privacy Policy</h1>
      <p className="mt-3 text-sm text-slate-500">Last updated: February 9, 2026</p>
      <p className="mt-6 text-sm text-slate-600">
        This Privacy Policy explains how AudioSlicer (“we”, “us”) collects and
        uses information when you use:
      </p>
      <ul className="mt-3 space-y-2 text-sm text-slate-600">
        <li>the AudioSlicer website at audioslicer.myworldsart.world</li>
        <li>the AudioSlicer desktop application (“App”)</li>
      </ul>

      <div className="mt-8 space-y-6 rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Information we collect
          </h2>
          <div className="mt-3">
            <p className="font-medium text-slate-900">Website</p>
            <p className="mt-2">
              Basic analytics data (such as page views, device/browser type, and
              approximate location) may be collected to understand website
              traffic and improve the site.
            </p>
            <p className="mt-2">
              If you submit a contact form, we collect the information you
              provide (such as name, email, and message).
            </p>
          </div>
          <div className="mt-4">
            <p className="font-medium text-slate-900">Desktop App</p>
            <p className="mt-2">
              AudioSlicer is designed to function locally on your computer. We
              do not automatically upload your audio/video files.
            </p>
            <p className="mt-2">If you use AudioSlicer Pro subscription features, the App may store and transmit:</p>
            <ul className="mt-2 space-y-2">
              <li>your Paddle Subscription ID (provided by you)</li>
              <li>
                a license token issued by our licensing service (used to unlock
                Pro features)
              </li>
              <li>
                timestamps related to license refresh (e.g., last successful
                check)
              </li>
            </ul>
            <p className="mt-2">
              Optional anti-sharing protections (if enabled) may include a
              non-reversible device hash generated from your machine for license
              binding.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">Payments</h2>
          <p className="mt-2">
            Payments and subscription billing are handled by Paddle.com. We do
            not receive or store your full payment card details. Paddle may
            provide us limited transaction/subscription information required for
            support and access control.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            How we use information
          </h2>
          <ul className="mt-2 space-y-2">
            <li>provide and maintain AudioSlicer Pro access</li>
            <li>verify subscription status and renewals (license refresh)</li>
            <li>respond to support requests</li>
            <li>improve the website/app experience and security</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">Data retention</h2>
          <p className="mt-2">
            Support messages are kept as long as necessary to respond and
            maintain records.
          </p>
          <p className="mt-2">
            Subscription/license identifiers are retained while your
            subscription is active and for a reasonable period after for
            accounting, fraud prevention, or support.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">Sharing</h2>
          <p className="mt-2">We do not sell your personal data. We only share data:</p>
          <ul className="mt-2 space-y-2">
            <li>with Paddle as part of payment/subscription processing</li>
            <li>
              with service providers required to run our
              website/licensing infrastructure (hosting, database), limited to
              what is necessary
            </li>
            <li>when required by law</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">Security</h2>
          <p className="mt-2">
            We take reasonable steps to protect data. No method of storage or
            transmission is 100% secure.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">Your choices</h2>
          <p className="mt-2">
            You may request access, correction, or deletion of personal
            information by contacting:
          </p>
          <p className="mt-2">
            Support: <span className="font-medium text-slate-900">mmyworldsart@gmail.com</span>
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">Changes</h2>
          <p className="mt-2">
            We may update this policy from time to time. The “Last updated” date
            will reflect changes.
          </p>
        </div>
      </div>
    </div>
  );
}

