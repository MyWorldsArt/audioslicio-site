import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "AudioSlicer refund policy and Paddle billing guidance.",
};

export default function RefundPolicyPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-semibold text-slate-900">Refund Policy</h1>
      <p className="mt-4 text-sm text-slate-600">
        AudioSlicer subscriptions are processed by Paddle, our Merchant of
        Record. Refunds are handled by our support team in coordination with
        Paddle.
      </p>

      <div className="mt-8 space-y-6 rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Eligibility</h2>
          <p className="mt-2">
            If you believe you were billed in error or the product did not meet
            expectations, contact support within 14 days of your most recent
            charge to request a review.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-900">How to request</h2>
          <p className="mt-2">
            Email <span className="font-medium text-slate-900">support@audioslicer.myworldsart.world</span> and include your
            Paddle subscription email or Subscription ID. We will verify your
            purchase and respond with next steps.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Processing</h2>
          <p className="mt-2">
            Approved refunds are issued through Paddle and may take several
            business days to appear on your statement.
          </p>
        </div>
      </div>
    </div>
  );
}
