import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download",
  description:
    "Download AudioSlicer for Windows and get started with fast audio slicing.",
};

export default function DownloadPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-semibold text-slate-900">Download</h1>
      <p className="mt-4 text-sm text-slate-600">
        AudioSlicer is currently available for Windows. The installer will be
        posted here.
      </p>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
        <button
          type="button"
          className="inline-flex items-center rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white"
        >
          Download for Windows (Coming soon)
        </button>
        <p className="mt-3 text-xs text-slate-500">
          Placeholder link. A signed .exe installer will be provided here.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-slate-900">
            System requirements
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li>Windows 10 or Windows 11 (64-bit).</li>
            <li>4 GB RAM minimum (8 GB recommended).</li>
            <li>200 MB of free disk space.</li>
            <li>Internet access for activation and updates.</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-slate-900">Install steps</h2>
          <ol className="mt-4 space-y-3 text-sm text-slate-600">
            <li>Download the AudioSlicer installer.</li>
            <li>Run the .exe and follow the prompts.</li>
            <li>Launch AudioSlicer and activate if you have Pro.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
