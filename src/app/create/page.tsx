"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { useInvoice, InvoiceData, InvoiceItem } from "@/context/InvoiceContext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import ItemsTable from "@/components/form/ItemsTable";
import Link from "next/link";
import { FiArrowLeft, FiEye, FiFileText } from "react-icons/fi";

const defaultItems: InvoiceItem[] = [
  {
    id: uuidv4(),
    description: "Stadtkrankenhaus Schwabach Nach Süd Klinikum Nürnberg Zentrallabor",
    quantity: 1,
    price: 59,
    total: 59,
  },
];

export default function CreatePage() {
  const router = useRouter();
  const { addInvoice } = useInvoice();

  const [form, setForm] = useState({
    clientName: "Stadtkrankenhaus SC",
    clientStreet: "Regelsbacher Str 7",
    clientCity: "91126 Schwabach",
    patientName: "",
    patientDob: "",
    patientAddress: "",
    insuranceNumber: "",
    invoiceNumber: "",
    date: new Date().toLocaleDateString("de-DE"),
    taxRate: 7,
    discount: 0,
    notes: "",
  });

  const [items, setItems] = useState<InvoiceItem[]>(defaultItems);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const update = (field: string, value: string | number) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.invoiceNumber.trim()) e.invoiceNumber = "Rechnungsnummer ist erforderlich";
    if (!form.date.trim()) e.date = "Datum ist erforderlich";
    if (items.length === 0) e.items = "Mindestens eine Leistung erforderlich";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    const id = uuidv4();
    const invoice: InvoiceData = { id, ...form, items, clientAddress: `${form.clientStreet}, ${form.clientCity}`, };
    addInvoice(invoice);
    router.push(`/invoice/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Topbar */}
      <div className="bg-[#1a5c2a] text-white px-6 py-4 flex items-center justify-between shadow-lg no-print">
        <div className="flex items-center gap-3">
          <Link href="/" className="text-white/70 hover:text-white transition-colors">
            <FiArrowLeft size={20} />
          </Link>
          <div className="w-px h-6 bg-white/20" />
          <FiFileText size={20} className="text-[#c8a000]" />
          <h1 className="font-black text-lg tracking-tight">Neue Rechnung erstellen</h1>
        </div>
        <p className="text-white/50 text-sm hidden md:block">GOGO UG (haftungsbeschränkt)</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">

        {/* ── Client Info ─── */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="font-black text-[#1a5c2a] text-sm tracking-widest uppercase mb-4 flex items-center gap-2">
            <span className="w-1 h-4 bg-[#c8a000] rounded-full" />
            Rechnungsempfänger
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-3">
              <Label htmlFor="clientName">Einrichtung / Firmenname</Label>
              <Input
                id="clientName"
                value={form.clientName}
                onChange={(e) => update("clientName", e.target.value)}
                placeholder="z.B. Stadtkrankenhaus SC"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="clientStreet">Straße & Hausnummer</Label>
              <Input
                id="clientStreet"
                value={form.clientStreet}
                onChange={(e) => update("clientStreet", e.target.value)}
                placeholder="Regelsbacher Str 7"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="clientCity">PLZ & Ort</Label>
              <Input
                id="clientCity"
                value={form.clientCity}
                onChange={(e) => update("clientCity", e.target.value)}
                placeholder="91126 Schwabach"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="invoiceNumber">
                Rechnungsnummer{" "}
                <span className="text-red-500">*</span>
              </Label>
              <Input
                id="invoiceNumber"
                value={form.invoiceNumber}
                onChange={(e) => update("invoiceNumber", e.target.value)}
                placeholder="RE-2026-001"
                className={`mt-1 ${errors.invoiceNumber ? "border-red-400" : ""}`}
              />
              {errors.invoiceNumber && (
                <p className="text-red-500 text-xs mt-1">{errors.invoiceNumber}</p>
              )}
            </div>
            <div>
              <Label htmlFor="date">
                Datum <span className="text-red-500">*</span>
              </Label>
              <Input
                id="date"
                value={form.date}
                onChange={(e) => update("date", e.target.value)}
                placeholder="25.05.2026"
                className={`mt-1 ${errors.date ? "border-red-400" : ""}`}
              />
              {errors.date && (
                <p className="text-red-500 text-xs mt-1">{errors.date}</p>
              )}
            </div>
          </div>
        </section>

        {/* ── Patient Info ─── */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="font-black text-[#1a5c2a] text-sm tracking-widest uppercase mb-4 flex items-center gap-2">
            <span className="w-1 h-4 bg-[#c8a000] rounded-full" />
            Patientendaten
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="patientName">Patient (Name, Vorname)</Label>
              <Input
                id="patientName"
                value={form.patientName}
                onChange={(e) => update("patientName", e.target.value)}
                placeholder="Mustermann, Max"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="patientDob">Geburtsdatum</Label>
              <Input
                id="patientDob"
                value={form.patientDob}
                onChange={(e) => update("patientDob", e.target.value)}
                placeholder="01.01.1980"
                className="mt-1"
              />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="patientAddress">Adresse des Patienten</Label>
              <Input
                id="patientAddress"
                value={form.patientAddress}
                onChange={(e) => update("patientAddress", e.target.value)}
                placeholder="Musterstraße 1, 91126 Schwabach"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="insuranceNumber">Versicherungsnummer</Label>
              <Input
                id="insuranceNumber"
                value={form.insuranceNumber}
                onChange={(e) => update("insuranceNumber", e.target.value)}
                placeholder="A123456789"
                className="mt-1"
              />
            </div>
          </div>
        </section>

        {/* ── Services ─── */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="font-black text-[#1a5c2a] text-sm tracking-widest uppercase mb-4 flex items-center gap-2">
            <span className="w-1 h-4 bg-[#c8a000] rounded-full" />
            Leistungen
          </h2>
          <ItemsTable items={items} onChange={setItems} />
          {errors.items && (
            <p className="text-red-500 text-xs mt-2">{errors.items}</p>
          )}
        </section>

        {/* ── Tax & Discount ─── */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="font-black text-[#1a5c2a] text-sm tracking-widest uppercase mb-4 flex items-center gap-2">
            <span className="w-1 h-4 bg-[#c8a000] rounded-full" />
            Steuer & Rabatt
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="taxRate">MwSt. (%)</Label>
              <Input
                id="taxRate"
                type="number"
                min="0"
                max="100"
                value={form.taxRate}
                onChange={(e) => update("taxRate", parseFloat(e.target.value) || 0)}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="discount">Rabatt (%)</Label>
              <Input
                id="discount"
                type="number"
                min="0"
                max="100"
                value={form.discount}
                onChange={(e) => update("discount", parseFloat(e.target.value) || 0)}
                className="mt-1"
              />
            </div>
            <div className="col-span-2">
              <Label htmlFor="notes">Hinweise / Anmerkungen</Label>
              <Input
                id="notes"
                value={form.notes}
                onChange={(e) => update("notes", e.target.value)}
                placeholder="Zusätzliche Informationen..."
                className="mt-1"
              />
            </div>
          </div>
        </section>

        {/* ── Submit ─── */}
        <div className="flex justify-end gap-3 pb-4">
          <Link href="/">
            <Button variant="ghost" size="lg">Abbrechen</Button>
          </Link>
          <Button variant="gold" size="lg" onClick={handleSubmit}>
            <FiEye size={16} />
            Rechnung erstellen
          </Button>
        </div>
      </div>
    </div>
  );
}
