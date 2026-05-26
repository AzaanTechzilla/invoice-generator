"use client";

import { useRouter } from "next/navigation";
import { useInvoice } from "@/context/InvoiceContext";
import InvoiceTemplate from "@/components/invoice/InvoiceTemplate";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  FiPrinter,
  FiArrowLeft,
  FiEdit,
  FiAlertCircle,
} from "react-icons/fi";

export default function InvoicePage({
  params,
}: {
   params: { id: string };
}) {
  const { id } = params;
  const { getInvoice } = useInvoice();
  const router = useRouter();
  const invoice = getInvoice(id);

  if (!invoice) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center bg-white rounded-2xl shadow p-10 max-w-sm">
          <FiAlertCircle className="mx-auto text-amber-500 text-5xl mb-4" />
          <h2 className="text-xl font-black text-gray-800 mb-2">
            Rechnung nicht gefunden
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Diese Rechnung existiert nicht oder wurde noch nicht erstellt.
            Bitte erstelle eine neue Rechnung.
          </p>
          <Link href="/create">
            <Button variant="default" size="lg">
              Neue Rechnung erstellen
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* ── Toolbar ──────────────────────────────────────── */}
      <div className="no-print sticky top-0 z-50 bg-[#1a5c2a] shadow-lg">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => router.back()}
              className="text-white/70 hover:text-white transition-colors"
            >
              <FiArrowLeft size={20} />
            </button>
            <div className="w-px h-6 bg-white/20" />
            <div>
              <p className="text-white font-black text-sm leading-tight">
                Rechnung #{invoice.invoiceNumber || "—"}
              </p>
              <p className="text-white/50 text-xs">{invoice.clientName}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link href="/create">
              <Button
                variant="outline"
                size="sm"
                className="border-white/30 text-white hover:bg-white hover:text-[#1a5c2a]"
              >
                <FiEdit size={13} />
                Neue Rechnung
              </Button>
            </Link>
            <Button variant="gold" size="sm" onClick={handlePrint}>
              <FiPrinter size={14} />
              Drucken / PDF
            </Button>
          </div>
        </div>
      </div>

      {/* ── Invoice preview area ──────────────────────────── */}
      <div className="no-print py-8 px-4 flex justify-center">
        <div
          className="shadow-2xl rounded-sm"
          style={{ transform: "scale(1)", transformOrigin: "top center" }}
        >
          <InvoiceTemplate data={invoice} />
        </div>
      </div>

      {/* ── Print-only: render invoice directly ───────────── */}
      <div className="print-only hidden">
        <InvoiceTemplate data={invoice} />
      </div>
    </div>
  );
}
