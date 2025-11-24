import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Simple currency formatter you can reuse everywhere
export function fmtCurrency(
  amount: number,
  currency: string = "CHF",
  locale: string = "de-CH"
) {
  if (isNaN(amount)) return "-"
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount)
}
