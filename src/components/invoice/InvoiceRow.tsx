import { ReactNode } from "react";

interface InvoiceRowProps {
  icon: ReactNode;
  label: string;
  children: ReactNode;
  noBorder?: boolean;
}

export default function InvoiceRow({ icon, label, children, noBorder }: InvoiceRowProps) {
  return (
    <div
      className={`flex gap-4 items-start py-3 ${
        !noBorder ? "dotted-sep" : ""
      }`}
    >
      {/* Icon */}
      <div className="icon-circle mt-0.5">{icon}</div>

      {/* Label */}
      <div className="w-36 flex-shrink-0">
        <span className="text-xs font-black tracking-widest text-[#1a5c2a] uppercase leading-tight">
          {label}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1">{children}</div>
    </div>
  );
}
