"use client";

import { InvoiceItem } from "@/context/InvoiceContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FiPlus, FiTrash2 } from "react-icons/fi";
import { v4 as uuidv4 } from "uuid";

interface ItemsTableProps {
  items: InvoiceItem[];
  onChange: (items: InvoiceItem[]) => void;
}

export default function ItemsTable({ items, onChange }: ItemsTableProps) {
  const addItem = () => {
    onChange([
      ...items,
      { id: uuidv4(), description: "", quantity: 1, price: 0, total: 0 },
    ]);
  };

  const removeItem = (id: string) => {
    onChange(items.filter((item) => item.id !== id));
  };

  const updateItem = (id: string, field: keyof InvoiceItem, value: string | number) => {
    onChange(
      items.map((item) => {
        if (item.id !== id) return item;
        const updated = { ...item, [field]: value };
        if (field === "quantity" || field === "price") {
          updated.total = Number(updated.quantity) * Number(updated.price);
        }
        return updated;
      })
    );
  };

  return (
    <div className="space-y-3">
      {/* Header */}
      <div className="grid grid-cols-12 gap-2 text-xs font-bold text-white bg-[#1a5c2a] rounded-lg px-3 py-2">
        <div className="col-span-5">BESCHREIBUNG</div>
        <div className="col-span-2 text-center">MENGE</div>
        <div className="col-span-2 text-right">PREIS (€)</div>
        <div className="col-span-2 text-right">GESAMT</div>
        <div className="col-span-1" />
      </div>

      {/* Rows */}
      {items.map((item) => (
        <div key={item.id} className="grid grid-cols-12 gap-2 items-center">
          <div className="col-span-5">
            <Input
              placeholder="Beschreibung der Leistung..."
              value={item.description}
              onChange={(e) => updateItem(item.id, "description", e.target.value)}
            />
          </div>
          <div className="col-span-2">
            <Input
              type="number"
              min="1"
              placeholder="1"
              value={item.quantity}
              onChange={(e) => updateItem(item.id, "quantity", parseFloat(e.target.value) || 0)}
              className="text-center"
            />
          </div>
          <div className="col-span-2">
            <Input
              type="number"
              min="0"
              step="0.01"
              placeholder="0.00"
              value={item.price}
              onChange={(e) => updateItem(item.id, "price", parseFloat(e.target.value) || 0)}
              className="text-right"
            />
          </div>
          <div className="col-span-2">
            <div className="h-10 flex items-center justify-end px-3 bg-gray-50 rounded-lg border border-gray-200 text-sm font-semibold text-[#1a5c2a]">
              {item.total.toFixed(2)}€
            </div>
          </div>
          <div className="col-span-1 flex justify-center">
            <button
              onClick={() => removeItem(item.id)}
              className="text-red-400 hover:text-red-600 p-1.5 rounded-md hover:bg-red-50 transition-colors"
            >
              <FiTrash2 size={15} />
            </button>
          </div>
        </div>
      ))}

      {/* Add Row */}
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={addItem}
        className="w-full border-dashed"
      >
        <FiPlus size={14} />
        Leistung hinzufügen
      </Button>
    </div>
  );
}
