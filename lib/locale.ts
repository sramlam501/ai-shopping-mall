export function detectLocale() {
  if (typeof navigator === "undefined") return "de-CH";
  return navigator.language || "de-CH";
}

export function currencyForLocale(locale: string) {
  const l = locale.toLowerCase();
  if (l.includes("ch")) return "CHF";
  if (l.includes("de") || l.includes("at") || l.includes("nl") || l.includes("fi") || l.includes("it") || l.includes("fr") || l.includes("es")) return "EUR";
  if (l.includes("gb") || l.includes("uk")) return "GBP";
  return "USD";
}

export function fmtCurrency(n:number, currency:string, locale:string) {
  try { return new Intl.NumberFormat(locale, { style: "currency", currency, maximumFractionDigits: 0 }).format(n); }
  catch { return `${currency} ${n}`; }
}
