import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of service for AudioSlicer software and website.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-semibold text-slate-900">Terms of Service</h1>
      <p className="mt-3 text-sm text-slate-500">Last updated: February 9, 2026</p>
      <p className="mt-6 text-sm text-slate-600">
        These Terms govern your use of the AudioSlicer website and desktop
        application (“Software”). By accessing or using AudioSlicer, you agree
        to these Terms.
      </p>

      <div className="mt-8 space-y-6 rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">1) The Software</h2>
          <p className="mt-2">
            AudioSlicer is a Windows desktop application for editing/slicing
            audio and/or audio from video. Features may change over time.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-900">2) Free vs Pro</h2>
          <p className="mt-2">AudioSlicer includes:</p>
          <ul className="mt-2 space-y-2">
            <li>Free tier features available without payment</li>
            <li>Pro tier features available by subscription</li>
          </ul>
          <p className="mt-2">
            Pro access requires an active subscription and a valid
            authorization/license state.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            3) Subscriptions, billing, and renewals
          </h2>
          <p className="mt-2">Pro is sold as a recurring subscription.</p>
          <p className="mt-2">
            Billing and payments are processed by Paddle.com (Merchant of
            Record).
          </p>
          <p className="mt-2">
            Your subscription renews automatically unless canceled.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            4) Activation method (no email)
          </h2>
          <p className="mt-2">
            To activate Pro, you may be required to paste your Paddle
            Subscription ID into the Software. The Software uses this identifier
            to request a license authorization from our licensing service.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            5) Internet requirement at renewal time
          </h2>
          <p className="mt-2">
            AudioSlicer Pro is designed to work offline in normal use, but it
            may require an internet connection to:
          </p>
          <ul className="mt-2 space-y-2">
            <li>refresh Pro authorization near renewal/expiration</li>
            <li>restore Pro access after expiration/grace</li>
          </ul>
          <p className="mt-2">
            If the Software cannot refresh authorization at renewal time, Pro
            features may be limited until connectivity is restored.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            6) License restrictions and anti-sharing
          </h2>
          <p className="mt-2">
            A subscription/license is for your use. We may implement reasonable
            measures to prevent abuse, including:
          </p>
          <ul className="mt-2 space-y-2">
            <li>device binding (using a non-reversible device hash)</li>
            <li>limiting excessive activations or refresh attempts</li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-900">7) Acceptable use</h2>
          <p className="mt-2">You agree not to:</p>
          <ul className="mt-2 space-y-2">
            <li>reverse engineer or bypass licensing protections unlawfully</li>
            <li>distribute the Software in a way that violates these Terms</li>
            <li>use the Software for illegal purposes</li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-900">8) Refunds</h2>
          <p className="mt-2">
            Refunds are described in our Refund Policy page. Refund eligibility
            is time-limited and subject to applicable laws.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-900">9) Disclaimer</h2>
          <p className="mt-2">
            The Software is provided “as is” without warranties of any kind to
            the maximum extent permitted by law.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            10) Limitation of liability
          </h2>
          <p className="mt-2">
            To the maximum extent permitted by law, we are not liable for
            indirect, incidental, special, or consequential damages, or loss of
            data or profits.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-900">11) Termination</h2>
          <p className="mt-2">
            We may suspend or terminate access to Pro features for fraud, abuse,
            chargebacks, or violations of these Terms.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-900">12) Contact</h2>
          <p className="mt-2">
            For support: <span className="font-medium text-slate-900">mmyworldsart@gmail.com</span>
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-900">13) Governing law</h2>
          <p className="mt-2">
            These Terms are governed by the laws of the State of Georgia, United States.
          </p>
        </div>
      </div>
    </div>
  );
}
