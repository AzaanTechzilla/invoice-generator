import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("de-DE", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount) + "€";
}

export function calculateSubtotal(items: { total: number }[]): number {
  return items.reduce((sum, item) => sum + item.total, 0);
}

export function calculateTax(subtotal: number, taxRate: number): number {
  return subtotal * (taxRate / 100);
}

export function calculateDiscount(subtotal: number, discount: number): number {
  return subtotal * (discount / 100);
}

export function calculateGrandTotal(
  subtotal: number,
  taxRate: number,
  discount: number
): number {
  const tax = calculateTax(subtotal, taxRate);
  const disc = calculateDiscount(subtotal, discount);
  return subtotal + tax - disc;
}
