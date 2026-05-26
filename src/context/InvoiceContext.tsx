"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  price: number;
  total: number;
}

export interface InvoiceData {
  id: string;
  clientName: string;
  clientAddress: string;
  clientStreet: string;
  clientCity: string;
  patientName: string;
  patientDob: string;
  patientAddress: string;
  insuranceNumber: string;
  invoiceNumber: string;
  date: string;
  items: InvoiceItem[];
  taxRate: number;
  discount: number;
  notes: string;
}

interface InvoiceContextType {
  invoices: Record<string, InvoiceData>;
  currentInvoice: InvoiceData | null;
  addInvoice: (invoice: InvoiceData) => void;
  getInvoice: (id: string) => InvoiceData | undefined;
  setCurrentInvoice: (invoice: InvoiceData | null) => void;
}

const InvoiceContext = createContext<InvoiceContextType | undefined>(undefined);

export function InvoiceProvider({ children }: { children: ReactNode }) {
  const [invoices, setInvoices] = useState<Record<string, InvoiceData>>({});
  const [currentInvoice, setCurrentInvoice] = useState<InvoiceData | null>(null);

  const addInvoice = (invoice: InvoiceData) => {
    setInvoices((prev) => ({ ...prev, [invoice.id]: invoice }));
  };

  const getInvoice = (id: string) => invoices[id];

  return (
    <InvoiceContext.Provider
      value={{ invoices, currentInvoice, addInvoice, getInvoice, setCurrentInvoice }}
    >
      {children}
    </InvoiceContext.Provider>
  );
}

export function useInvoice() {
  const ctx = useContext(InvoiceContext);
  if (!ctx) throw new Error("useInvoice must be used within InvoiceProvider");
  return ctx;
}
