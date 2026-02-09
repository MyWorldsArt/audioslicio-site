import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of service for AudioSlicer software and website.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-semibold text-slate-900">Terms of Service</h1>
      <p className="mt-4 text-sm text-slate-600">
        By using AudioSlicer, you agree to the following terms and conditions.
      </p>

      <div className="mt-8 space-y-6 rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">License</h2>
          <p className="mt-2">
            AudioSlicer grants you a non-transferable, non-exclusive license to
            install and use the software on your devices in accordance with your
            subscription tier.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Acceptable use</h2>
          <p className="mt-2">
            You agree not to reverse engineer, redistribute, or resell the
            software without written permission.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Updates</h2>
          <p className="mt-2">
            We may deliver updates to improve performance, security, or features.
            Continued use indicates acceptance of updated terms.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Disclaimers</h2>
          <p className="mt-2">
            The software is provided "as is" without warranties of any kind. We
            do not guarantee uninterrupted or error-free operation.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Limitation of liability</h2>
          <p className="mt-2">
            To the maximum extent permitted by law, MyWorldsArt shall not be
            liable for any indirect or consequential damages arising from use of
            AudioSlicer.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Governing law</h2>
          <p className="mt-2">
            These terms are governed by the laws of the jurisdiction where
            MyWorldsArt is registered. Please contact support for details.
          </p>
        </div>
      </div>
    </div>
  );
}
