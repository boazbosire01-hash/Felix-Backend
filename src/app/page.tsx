export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl text-center space-y-6">
        <span className="px-3 py-1 text-xs font-semibold tracking-wider uppercase bg-indigo-500/20 text-indigo-400 rounded-full border border-indigo-500/30">
          AI Guardian & Creator Sidekick
        </span>
        <h1 className="text-5xl font-extrabold tracking-tight">
          Meet <span className="text-indigo-500">Felix</span>
        </h1>
        <p className="text-zinc-400 text-lg">
          Manage noisy notifications across apps, block scam links in real time, and get AI-powered viral growth ideas—all in one lightweight Android app.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left pt-4">
          <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800">
            <h3 className="font-bold text-indigo-400">Smart Digest</h3>
            <p className="text-sm text-zinc-400 mt-1">Summarizes WhatsApp, Discord & TikTok alerts into what actually matters.</p>
          </div>
          <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800">
            <h3 className="font-bold text-rose-400">Scam Shield</h3>
            <p className="text-sm text-zinc-400 mt-1">Detects phishing, fake giveaways, and mobile money scams before you tap.</p>
          </div>
          <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800">
            <h3 className="font-bold text-emerald-400">Growth Coach</h3>
            <p className="text-sm text-zinc-400 mt-1">Generates viral hooks and posting ideas tailored to your favorite platforms.</p>
          </div>
        </div>

        <div className="pt-6">
          <a
            href="#download-coming-soon"
            className="inline-block px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-bold text-white transition shadow-lg shadow-indigo-600/25"
          >
            Download Felix APK (v1.0)
          </a>
          <p className="text-xs text-zinc-500 mt-3">Android 8.0+ • Free • Built for Creators</p>
        </div>
      </div>
    </main>
  );
}
