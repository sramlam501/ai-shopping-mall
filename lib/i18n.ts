export const dict = {
  en: {
    comfortable: "Comfortable Living",
    adjustProfile: "Adjust profile",
    placeholder: "Plaza content placeholder. Hook endpoints here.",
    styleMe: "Style me",
  },
  de: {
    comfortable: "Komfortables Leben",
    adjustProfile: "Profil anpassen",
    placeholder: "Platzhalter. Endpunkte hier anbinden.",
    styleMe: "Style mich",
  },
  fr: {
    comfortable: "Confort de vie",
    adjustProfile: "Ajuster le profil",
    placeholder: "Espace réservé. Connectez vos endpoints ici.",
    styleMe: "Stylise-moi",
  }
} as const;

export function pickLang(locale:string) {
  const l = locale.toLowerCase();
  if (l.startsWith("de")) return "de";
  if (l.startsWith("fr")) return "fr";
  return "en";
}
