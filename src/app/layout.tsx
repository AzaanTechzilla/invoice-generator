import type { Metadata } from "next";
import "./globals.css";
import { InvoiceProvider } from "@/context/InvoiceContext";

export const metadata: Metadata = {
  title: "GOGO UG – Invoice System",
  description: "Professional invoice generator for GOGO UG transport services",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <InvoiceProvider>{children}</InvoiceProvider>
      </body>
    </html>
  );
}
