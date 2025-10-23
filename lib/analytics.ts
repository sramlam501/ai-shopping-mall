// lib/analytics.ts
export function track(event: string, props: Record<string, any> = {}) {
  const payload = { event, ts: Date.now(), ...props };
  if (typeof window !== "undefined" && (window as any).dataLayer) {
    (window as any).dataLayer.push(payload);
  }
  // Dev visibility:
  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.log("[analytics]", payload);
  }
}
