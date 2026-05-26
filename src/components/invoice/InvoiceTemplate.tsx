"use client";

import { InvoiceData } from "@/context/InvoiceContext";
import { formatCurrency, calculateSubtotal, calculateGrandTotal } from "@/lib/utils";
import GogoLogo from "./GogoLogo";
import Taxi6Logo from "./Taxi6Logo";
import OrnamentDivider from "./OrnamentDivider";
import InvoiceRow from "./InvoiceRow";
import {
  FiUser,
  FiCalendar,
  FiHome,
  FiShield,
  FiTruck,
  FiDollarSign,
  FiInfo,
  FiPhone,
  FiMail,
  FiBriefcase,
  FiHash,
} from "react-icons/fi";
import { MdLocalTaxi } from "react-icons/md";

interface InvoiceTemplateProps {
  data: InvoiceData;
}

export default function InvoiceTemplate({ data }: InvoiceTemplateProps) {
  const subtotal = calculateSubtotal(data.items);
  const grandTotal = calculateGrandTotal(subtotal, data.taxRate, data.discount);

  return (
    <div
      id="invoice-page"
      className="relative bg-white overflow-hidden"
      style={{
        width: "210mm",
        minHeight: "297mm",
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        fontSize: "11px",
      }}
    >
      {/* ── Corner Gold Decorations ──────────────────────── */}
      <div
        className="absolute top-0 left-0 pointer-events-none"
        style={{ zIndex: 0 }}
      >
        <svg width="130" height="130" viewBox="0 0 130 130">
          <path d="M0 0 L130 0 L0 130 Z" fill="#c8a000" opacity="0.18" />
          <path d="M0 0 L90 0 L0 90 Z" fill="#1a5c2a" opacity="0.12" />
        </svg>
      </div>
      <div
        className="absolute bottom-0 right-0 pointer-events-none"
        style={{ zIndex: 0 }}
      >
        <svg width="130" height="130" viewBox="0 0 130 130">
          <path d="M130 130 L0 130 L130 0 Z" fill="#c8a000" opacity="0.18" />
          <path d="M130 130 L40 130 L130 40 Z" fill="#1a5c2a" opacity="0.12" />
        </svg>
      </div>

      {/* ── Watermark ────────────────────────────────────── */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        style={{ zIndex: 0 }}
      >
        <span
          style={{
            fontSize: "120px",
            fontWeight: 900,
            color: "rgba(26,92,42,0.04)",
            transform: "rotate(-30deg)",
            userSelect: "none",
            letterSpacing: "-4px",
          }}
        >
          GOGO UG
        </span>
      </div>

      {/* ── CONTENT ──────────────────────────────────────── */}
      <div className="relative px-8 pt-6 pb-8" style={{ zIndex: 1 }}>

        {/* ── HEADER ─────────────────────────────────────── */}
        <header className="flex items-center justify-between mb-1">
          {/* Left Logo */}
          <GogoLogo size={88} />

          {/* Center brand */}
          <div className="text-center flex-1 px-4">
            <h1
              className="font-black tracking-tight text-[#0d3318] leading-none"
              style={{ fontSize: "32px" }}
            >
              GOGO UG
            </h1>
            <p className="text-[#c8a000] italic font-semibold" style={{ fontSize: "11px" }}>
              (haftungsbeschränkt)
            </p>

            <OrnamentDivider className="my-2" />

            <p className="text-[#1a5c2a] font-medium tracking-wide" style={{ fontSize: "9px" }}>
              Krankentransport &nbsp;•&nbsp; Flughafentransfers &nbsp;•&nbsp; Kurierfahrten &nbsp;•&nbsp; Dialysefahrten
            </p>

            <div className="flex items-center justify-center gap-1.5 mt-1.5 text-gray-600" style={{ fontSize: "10px" }}>
              <svg width="10" height="12" viewBox="0 0 24 28" fill="#1a5c2a">
                <path d="M12 0C7.6 0 4 3.6 4 8c0 7 8 20 8 20s8-13 8-20c0-4.4-3.6-8-8-8zm0 11a3 3 0 110-6 3 3 0 010 6z" />
              </svg>
              <span>Austr. 31, 91126 Schwabach, Deutschland</span>
            </div>
          </div>

          {/* Right Logo */}
          <Taxi6Logo size={88} />
        </header>

        {/* ── Thick gold border line ──────────────────────── */}
        <div className="gold-divider my-3" />

        {/* ── Client + Meta row ───────────────────────────── */}
        <div className="flex justify-between items-start mb-4 mt-1">
          {/* Client address block */}
          <div>
            <p className="font-bold text-gray-800" style={{ fontSize: "11px" }}>
              {data.clientName || "Stadtkrankenhaus SC"}
            </p>
            <p className="text-gray-600" style={{ fontSize: "10px" }}>
              {data.clientStreet || "Regelsbacher Str 7"}
            </p>
            <p className="text-gray-600" style={{ fontSize: "10px" }}>
              {data.clientCity || "91126 Schwabach"}
            </p>
          </div>

          {/* Date + Invoice Number */}
          <div className="text-right space-y-1">
            <div className="flex items-center justify-end gap-2">
              <span className="text-gray-600" style={{ fontSize: "10px" }}>
                Schwabach, den
              </span>
              <span
                className="border-b border-gray-400 min-w-[100px] text-right font-medium"
                style={{ fontSize: "10px" }}
              >
                {data.date || "___________"}
              </span>
              <span className="text-gray-600" style={{ fontSize: "10px" }}>2026</span>
            </div>
            <div className="flex items-center justify-end gap-2">
              <span className="text-gray-600" style={{ fontSize: "10px" }}>
                Rechnungsnummer:
              </span>
              <span
                className="border-b border-gray-400 min-w-[100px] text-right font-medium"
                style={{ fontSize: "10px" }}
              >
                {data.invoiceNumber || "___________"}
              </span>
            </div>
          </div>
        </div>

        {/* ── RECHNUNG TITLE ──────────────────────────────── */}
        <div className="text-center mb-4">
          <h2
            className="font-black text-[#0d3318] tracking-wider"
            style={{ fontSize: "28px", fontFamily: "Georgia, serif" }}
          >
            RECHNUNG
          </h2>
          <OrnamentDivider className="mt-1" />
        </div>

        {/* ── PATIENT ─────────────────────────────────────── */}
        <div className="space-y-0">
          <InvoiceRow icon={<FiUser size={16} />} label="PATIENT">
            <div className="border-b border-gray-300 pb-0.5 min-h-[20px]">
              <span className="text-gray-700">{data.patientName || ""}</span>
            </div>
          </InvoiceRow>

          <InvoiceRow icon={<FiCalendar size={16} />} label="GEBURTSDATUM">
            <div className="border-b border-gray-300 pb-0.5 min-h-[20px]">
              <span className="text-gray-700">{data.patientDob || ""}</span>
            </div>
          </InvoiceRow>

          <InvoiceRow icon={<FiHome size={16} />} label="ADRESSE">
            <div className="border-b border-gray-300 pb-0.5 min-h-[20px]">
              <span className="text-gray-700">{data.patientAddress || ""}</span>
            </div>
          </InvoiceRow>

          <InvoiceRow icon={<FiShield size={16} />} label={`VERSICHERUNGS-\nNUMMER`}>
            <div className="border-b border-gray-300 pb-0.5 min-h-[20px]">
              <span className="text-gray-700">{data.insuranceNumber || ""}</span>
            </div>
          </InvoiceRow>

          {/* ── LEISTUNGEN (Services Table) ───────────────── */}
          <InvoiceRow icon={<MdLocalTaxi size={16} />} label="LEISTUNGEN" noBorder>
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              {/* Table header */}
              <div
                className="grid font-black text-white px-3 py-2"
                style={{
                  background: "#1a5c2a",
                  gridTemplateColumns: "1fr 100px",
                  fontSize: "10px",
                  letterSpacing: "0.08em",
                }}
              >
                <span>BESCHREIBUNG</span>
                <span className="text-right">BETRAG</span>
              </div>

              {/* Items */}
              {data.items.length > 0 ? (
                data.items.map((item, idx) => (
                  <div
                    key={item.id}
                    className="grid px-3 py-1.5 border-b border-gray-100 last:border-b-0"
                    style={{
                      gridTemplateColumns: "1fr 100px",
                      fontSize: "11px",
                      backgroundColor: idx % 2 === 0 ? "white" : "#f9fafb",
                    }}
                  >
                    <div>
                      <span className="text-gray-800">{item.description}</span>
                      {item.quantity > 1 && (
                        <span className="text-gray-400 ml-2 text-xs">
                          × {item.quantity}
                        </span>
                      )}
                    </div>
                    <div className="text-right text-gray-800">
                      {formatCurrency(item.total)}
                    </div>
                  </div>
                ))
              ) : (
                /* Default route like the reference image */
                <div className="px-3 py-2 text-gray-600" style={{ fontSize: "11px" }}>
                  <div>Stadtkrankenhaus Schwabach</div>
                  <div>Nach</div>
                  <div>Süd Klinikum Nürnberg Zentrallabor</div>
                </div>
              )}

              {/* Subtotal if discount/tax applied */}
              {(data.discount > 0 || data.taxRate > 0) && data.items.length > 0 && (
                <>
                  <div
                    className="grid px-3 py-1.5 border-t border-gray-200"
                    style={{ gridTemplateColumns: "1fr 100px", fontSize: "10px" }}
                  >
                    <span className="text-gray-500">Zwischensumme</span>
                    <span className="text-right text-gray-700">{formatCurrency(subtotal)}</span>
                  </div>
                  {data.taxRate > 0 && (
                    <div
                      className="grid px-3 py-1"
                      style={{ gridTemplateColumns: "1fr 100px", fontSize: "10px" }}
                    >
                      <span className="text-gray-500">MwSt. ({data.taxRate}%)</span>
                      <span className="text-right text-gray-700">
                        {formatCurrency(subtotal * (data.taxRate / 100))}
                      </span>
                    </div>
                  )}
                  {data.discount > 0 && (
                    <div
                      className="grid px-3 py-1"
                      style={{ gridTemplateColumns: "1fr 100px", fontSize: "10px" }}
                    >
                      <span className="text-gray-500">Rabatt ({data.discount}%)</span>
                      <span className="text-right text-red-600">
                        -{formatCurrency(subtotal * (data.discount / 100))}
                      </span>
                    </div>
                  )}
                </>
              )}

              {/* GESAMT row */}
              <div
                className="grid px-3 py-2 border-t-2 border-gray-300"
                style={{ gridTemplateColumns: "1fr 100px" }}
              >
                <span className="font-black text-gray-800" style={{ fontSize: "12px" }}>
                  GESAMT
                </span>
                <span
                  className="text-right font-black text-gray-900"
                  style={{ fontSize: "15px" }}
                >
                  {data.items.length > 0
                    ? formatCurrency(grandTotal)
                    : "59,00€"}
                </span>
              </div>
            </div>
          </InvoiceRow>
        </div>

        {/* ── GESAMTBETRAG ────────────────────────────────── */}
        <div className="dotted-sep" />
        <div className="flex gap-4 items-center py-3 dotted-sep">
          <div className="icon-circle">
            <FiDollarSign size={16} />
          </div>
          <div className="w-36 flex-shrink-0">
            <span className="text-xs font-black tracking-widest text-[#1a5c2a] uppercase">
              GESAMTBETRAG
            </span>
          </div>
          <div className="flex-1 flex items-center justify-between">
            <div>
              <p className="text-gray-700" style={{ fontSize: "11px" }}>
                Gesamtbetrag der ausgeführten Fahrten
              </p>
              <p className="text-gray-500" style={{ fontSize: "10px" }}>
                (inkl. {data.taxRate > 0 ? `${data.taxRate}%` : "7%"} MwSt)
              </p>
            </div>
            <span
              className="font-black text-[#1a5c2a]"
              style={{ fontSize: "18px" }}
            >
              {data.items.length > 0 ? formatCurrency(grandTotal) : "59,00€"}
            </span>
          </div>
        </div>

        {/* ── ZAHLUNGSHINWEIS ──────────────────────────────── */}
        <div className="flex gap-4 items-center py-3 dotted-sep">
          <div className="icon-circle">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
              <path d="M3 3h18a2 2 0 012 2v14a2 2 0 01-2 2H3a2 2 0 01-2-2V5a2 2 0 012-2zm0 4v10h18V7H3zm2 2h4v2H5V9zm0 4h4v2H5v-2zm6-4h6v2h-6V9zm0 4h6v2h-6v-2z" />
            </svg>
          </div>
          <div className="w-36 flex-shrink-0">
            <span className="text-xs font-black tracking-widest text-[#1a5c2a] uppercase">
              ZAHLUNGS-
              <br />
              HINWEIS
            </span>
          </div>
          <div className="flex-1">
            <p className="text-gray-700" style={{ fontSize: "11px" }}>
              Bitte überweisen Sie den anfallenden Betrag an das{" "}
              <span className="font-bold underline">unter genannte Konto.</span>
            </p>
            {data.notes && (
              <p className="text-gray-500 mt-1 italic" style={{ fontSize: "10px" }}>
                {data.notes}
              </p>
            )}
          </div>
        </div>

        {/* ── FOOTER: KONTAKT + BANKVERBINDUNG ─────────────── */}
        <div className="mt-4 grid grid-cols-2 gap-6">
          {/* Left: Kontakt */}
          <div>
            <h4
              className="font-black text-[#0d3318] tracking-widest mb-2 border-b-2 border-[#1a5c2a] pb-1"
              style={{ fontSize: "10px" }}
            >
              KONTAKT
            </h4>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-gray-700" style={{ fontSize: "10px" }}>
                <FiPhone size={11} className="text-[#1a5c2a] flex-shrink-0" />
                <span>+49 170 523 0 935</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700" style={{ fontSize: "10px" }}>
                <FiMail size={11} className="text-[#1a5c2a] flex-shrink-0" />
                <span>ranashahzadalam4786@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600" style={{ fontSize: "10px" }}>
                <FiBriefcase size={11} className="text-[#1a5c2a] flex-shrink-0" />
                <span>
                  Institutionskennzeichen Nr.:
                  <span className="border-b border-gray-400 ml-1 inline-block w-20" />
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-600" style={{ fontSize: "10px" }}>
                <FiHash size={11} className="text-[#1a5c2a] flex-shrink-0" />
                <span>
                  Steuernummer:
                  <span className="border-b border-gray-400 ml-1 inline-block w-24" />
                </span>
              </div>
            </div>
          </div>

          {/* Right: Bankverbindung */}
          <div>
            <h4
              className="font-black text-[#0d3318] tracking-widest mb-2 border-b-2 border-[#1a5c2a] pb-1"
              style={{ fontSize: "10px" }}
            >
              BANKVERBINDUNG
            </h4>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2" style={{ fontSize: "10px" }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="#1a5c2a">
                  <path d="M2 8h20v12H2V8zM12 2L2 7h20L12 2zm0 8a2 2 0 110 4 2 2 0 010-4z" />
                </svg>
                <span className="font-bold text-[#1a5c2a]">SHAHZAD ALAM RANA</span>
              </div>
              <div
                className="font-black text-gray-800"
                style={{ fontSize: "18px", fontFamily: "Georgia, serif" }}
              >
                Postbank
              </div>
              <div style={{ fontSize: "9px" }} className="text-gray-600 space-y-0.5">
                <div>
                  <span className="font-bold text-gray-700">IBAN: </span>
                  <span>DE61100703240080013600</span>
                </div>
                <div>
                  <span className="font-bold text-gray-700">BIC: </span>
                  <span>DEUTDEDBP30</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── SIGNATURE LINE ───────────────────────────────── */}
        <div className="mt-6 flex flex-col items-center gap-1">
          <OrnamentDivider className="w-40" />
          <p className="text-gray-500 tracking-widest" style={{ fontSize: "9px" }}>
            Unterschrift
          </p>
        </div>
      </div>

      {/* ── Side gold bars ──────────────────────────────── */}
      <div
        className="absolute top-0 left-0 bottom-0 w-1.5"
        style={{
          background: "linear-gradient(to bottom, #c8a000, #1a5c2a 50%, #c8a000)",
          zIndex: 2,
        }}
      />
      <div
        className="absolute top-0 right-0 bottom-0 w-1.5"
        style={{
          background: "linear-gradient(to bottom, #c8a000, #1a5c2a 50%, #c8a000)",
          zIndex: 2,
        }}
      />
    </div>
  );
}
