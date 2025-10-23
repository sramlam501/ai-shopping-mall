// /data/products.ts

export type Product = {
  id: string;
  slug: string;
  title: string;
  brand?: string;
  category: "top" | "bottom" | "shoes" | "accessory";
  gender: "female" | "male" | "unisex";
  price: number;
  currency: "CHF" | "USD" | "EUR";
  image: string; // /public/... or absolute URL
  url: string;   // merchant product URL (no affiliate params)
  vibes?: string[];       // ["Streetwear","Minimal",...]
  undertones?: string[];  // ["cool","warm","neutral"]
  shapes?: string[];      // ["hourglass","pear","rectangle","inverted"]
  color?: string;
};

export const products: Product[] = [
  {
    id: "p-top-001",
    slug: "tee-classic-white",
    title: "Classic Cotton Tee",
    brand: "NOVA",
    category: "top",
    gender: "unisex",
    price: 24.9,
    currency: "CHF",
    image: "/images/tee-white.jpg",
    url: "https://merchant.example.com/products/classic-tee-white",
    vibes: ["Minimal", "Clean", "Streetwear"],
    undertones: ["cool", "neutral", "warm"],
    shapes: ["rectangle","hourglass","pear","inverted"],
    color: "white",
  },
  {
    id: "p-btm-001",
    slug: "denim-straight-blue",
    title: "Straight Denim",
    brand: "NOVA",
    category: "bottom",
    gender: "unisex",
    price: 59.0,
    currency: "CHF",
    image: "/images/jeans-straight.jpg",
    url: "https://merchant.example.com/products/straight-denim-blue",
    vibes: ["Streetwear", "Clean"],
    undertones: ["cool","neutral"],
    shapes: ["rectangle","inverted","hourglass"],
    color: "indigo",
  },
  {
    id: "p-shoe-001",
    slug: "sneaker-retro-white",
    title: "Retro Sneakers",
    brand: "NOVA",
    category: "shoes",
    gender: "unisex",
    price: 89.0,
    currency: "CHF",
    image: "/images/sneaker-white.jpg",
    url: "https://merchant.example.com/products/retro-sneakers-white",
    vibes: ["Streetwear", "Y2K", "Clean"],
    undertones: ["neutral","warm","cool"],
    shapes: ["rectangle","hourglass","pear","inverted"],
    color: "white",
  },
  {
    id: "p-acc-001",
    slug: "cap-minimal-black",
    title: "Minimal Cap",
    brand: "NOVA",
    category: "accessory",
    gender: "unisex",
    price: 19.0,
    currency: "CHF",
    image: "/images/cap-black.jpg",
    url: "https://merchant.example.com/products/minimal-cap-black",
    vibes: ["Minimal","Streetwear"],
    undertones: ["neutral","cool","warm"],
    shapes: ["rectangle","hourglass","pear","inverted"],
    color: "black",
  },
  // add a few more per category as you grow the seed
];

export const productBySlug = new Map(products.map(p => [p.slug, p]));
