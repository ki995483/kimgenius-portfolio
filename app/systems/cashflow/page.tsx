import { requireCEO } from "@/lib/auth/ceo";

export const metadata = {
  title: "CashFlow | KIMGENIUS",
  description: "Private CEO trading and financial intelligence system.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function CashFlowPage() {
  await requireCEO();

  return (
    <main className="min-h-screen bg-[#05070b] px-6 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <header className="border-b border-white/10 pb-8">
          <p className="text-xs font-semibold tracking-[0.35em] text-blue-400">
            KIMGENIUS | XYZ TECH
          </p>

          <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-5xl">
            CashFlow
          </h1>

          <p className="mt-3 text-sm tracking-[0.18em] text-white/50">
            KG HQ fx Trade · MQL5
          </p>

          <div className="mt-6 inline-flex rounded-full border border-blue-400/30 px-4 py-2 text-xs tracking-widest text-blue-300">
            CEO PRIVATE SYSTEM
          </div>
        </header>

        <section className="grid gap-5 py-10 sm:grid-cols-2 lg:grid-cols-3">
          <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-xs tracking-widest text-white/40">ENGINE</p>
            <h2 className="mt-3 text-xl font-semibold">KG MQL5</h2>
            <p className="mt-2 text-sm text-white/50">
              Multi-asset Expert Advisor engineering.
            </p>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-xs tracking-widest text-white/40">VALIDATION</p>
            <h2 className="mt-3 text-xl font-semibold">Demo Trading</h2>
            <p className="mt-2 text-sm text-white/50">
              Forward testing and performance verification.
            </p>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-xs tracking-widest text-white/40">SECURITY</p>
            <h2 className="mt-3 text-xl font-semibold">CEO Access</h2>
            <p className="mt-2 text-sm text-white/50">
              Restricted server-side authorization.
            </p>
          </article>
        </section>

        <footer className="border-t border-white/10 pt-6 text-xs tracking-widest text-white/35">
          PRIVATE · ENCRYPTED ACCESS · KIMGENIUS / XYZ
        </footer>
      </div>
    </main>
  );
}
