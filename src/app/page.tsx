import Link from "next/link";
import { FiFileText, FiArrowRight } from "react-icons/fi";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0d3318] via-[#1a5c2a] to-[#0d3318] flex items-center justify-center p-6">
      <div className="text-center max-w-lg">
        {/* Logo area */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 rounded-full bg-white/10 border-2 border-[#c8a000]/50 flex items-center justify-center">
            <span className="text-3xl font-black text-[#c8a000]">GOGO</span>
          </div>
        </div>

        <h1 className="text-4xl font-black text-white mb-2 tracking-tight">
          GOGO UG
        </h1>
        <p className="text-[#c8a000] font-medium mb-2">(haftungsbeschränkt)</p>
        <p className="text-white/60 mb-10 text-sm">
          Krankentransport • Flughafentransfers • Kurierfahrten • Dialysefahrten
        </p>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <FiFileText className="mx-auto text-[#c8a000] text-5xl mb-4" />
          <h2 className="text-white text-2xl font-bold mb-3">Invoice Generator</h2>
          <p className="text-white/70 mb-6 text-sm leading-relaxed">
            Create professional invoices matching GOGO UG's official template. Fill in the details and generate a print-ready PDF instantly.
          </p>
          <Link
            href="/create"
            className="inline-flex items-center gap-2 bg-[#c8a000] hover:bg-[#e8c840] text-[#0d3318] font-bold px-8 py-3 rounded-xl transition-all duration-200 shadow-lg hover:shadow-[#c8a000]/30 text-sm"
          >
            Create New Invoice
            <FiArrowRight />
          </Link>
        </div>

        <p className="text-white/30 text-xs mt-6">
          Austr. 31, 91126 Schwabach, Deutschland
        </p>
      </div>
    </main>
  );
}
