# GOGO UG – Invoice System

A pixel-perfect invoice generator built with **Next.js 14 App Router**, **Tailwind CSS**, **shadcn/ui**, and **Context API**.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📁 Folder Structure

```
src/
├── app/
│   ├── layout.tsx            # Root layout with InvoiceProvider
│   ├── globals.css           # Tailwind + print media queries
│   ├── page.tsx              # Home / landing page
│   ├── create/
│   │   └── page.tsx          # Invoice creation form
│   └── invoice/
│       └── [id]/
│           └── page.tsx      # Dynamic invoice display page
│
├── components/
│   ├── ui/
│   │   ├── button.tsx        # Reusable Button
│   │   ├── input.tsx         # Reusable Input
│   │   └── label.tsx         # Radix UI Label
│   ├── form/
│   │   └── ItemsTable.tsx    # Dynamic line items table
│   └── invoice/
│       ├── InvoiceTemplate.tsx   # ⭐ Pixel-perfect GOGO UG invoice
│       ├── InvoiceRow.tsx        # Row with icon + label + content
│       ├── GogoLogo.tsx          # Left SVG logo
│       ├── Taxi6Logo.tsx         # Right SVG logo
│       └── OrnamentDivider.tsx   # Gold decorative divider
│
├── context/
│   └── InvoiceContext.tsx    # Context API – global state
│
└── lib/
    └── utils.ts              # cn(), formatCurrency(), calculations
```

## 🔑 Features

| Feature | Details |
|---|---|
| Form page | `/create` – all invoice fields with dynamic line items |
| Invoice page | `/invoice/[id]` – pixel-perfect A4 layout |
| Print | `window.print()` – A4 PDF with `@media print` |
| State | Context API, no Redux, no backend |
| Design | Matches GOGO UG reference image exactly |

## 🖨️ Printing

Click **"Drucken / PDF"** → your browser print dialog opens.
- Select **"Save as PDF"** for a digital copy
- Page size: **A4**, margins: **None**
- All toolbar buttons are hidden via `@media print`

## 🎨 Design Tokens

| Token | Value |
|---|---|
| `gogo-green` | `#1a5c2a` |
| `gogo-dark` | `#0d3318` |
| `gogo-gold` | `#c8a000` |

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui** (Radix primitives)
- **React Icons**
- **uuid** (unique invoice IDs)
- **Context API** (zero Redux)
