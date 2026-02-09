import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "AudioSlicer refund policy and Paddle billing guidance.",
};

export default function RefundPolicyPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-semibold text-slate-900">Refund Policy</h1>
      <p className="mt-3 text-sm text-slate-500">Last updated: February 9, 2026</p>
      <p className="mt-6 text-sm text-slate-600">
        AudioSlicer is sold as a subscription. Payments are processed by
        Paddle.com, who acts as the Merchant of Record for these transactions.
      </p>

      <div className="mt-8 space-y-6 rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Refund eligibility
          </h2>
          <p className="mt-2">
            If you believe you were charged in error or you’re unhappy with your
            purchase, you may request a refund within 14 days of the initial
            purchase or renewal date.
          </p>
          <p className="mt-2">
            After 14 days, refund requests may be considered on a case-by-case
            basis, or where required by applicable consumer laws.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            How to request a refund
          </h2>
          <p className="mt-2">To request a refund, please contact us:</p>
          <p className="mt-2">
            Support: <span className="font-medium text-slate-900">mmyworldsart@gmail.com</span>
          </p>
          <p className="mt-3">Include:</p>
          <ul className="mt-2 space-y-2">
            <li>The email used at checkout (if applicable)</li>
            <li>Your Paddle order details (if available)</li>
            <li>A brief reason for the request</li>
          </ul>
          <p className="mt-3">
            If you purchased via Paddle, you may also be able to manage purchase
            details and request support through Paddle’s checkout/portal
            experience.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Cancellations</h2>
          <p className="mt-2">
            You can cancel your subscription at any time. Cancellation stops
            future renewals; it does not automatically refund past charges.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Chargebacks & abuse
          </h2>
          <p className="mt-2">
            Chargebacks and fraudulent activity may result in loss of access to
            AudioSlicer Pro.
          </p>
        </div>
      </div>
    </div>
  );
}

