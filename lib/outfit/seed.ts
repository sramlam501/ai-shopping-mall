export type Undertone = "cool" | "warm" | "neutral";
export type BodyShape = "hourglass" | "pear" | "apple" | "rectangle" | "petite" | "tall";
export type Category = "top" | "bottom" | "shoes" | "accessory";

export type Product = {
  id: string;
  name: string;
  brand?: string;
  category: Category;
  gender: "female" | "male" | "unisex";
  vibes: string[];                // e.g., ["Streetwear","Minimal"]
  undertones: Undertone[];        // compatible undertones
  bodyShapes?: BodyShape[];       // best fits
  color: string;                  // simple label
  price: number;                  // CHF by default
  image?: string;                 // placeholder ok
  affiliateUrl: string;           // your affiliate link
};

export const seedProducts: Product[] = [
  // TOPS
  { id: "t1", name: "Oversized Graphic Tee", brand: "Nova", category: "top", gender: "unisex",
    vibes: ["Streetwear","Y2K"], undertones: ["neutral","warm","cool"], bodyShapes: ["rectangle","apple","tall"],
    color: "black", price: 39, affiliateUrl: "#" },
  { id: "t2", name: "Cropped Cardigan", brand: "Nova", category: "top", gender: "female",
    vibes: ["Soft girl","Classy","Minimal"], undertones: ["cool","neutral"], bodyShapes: ["petite","hourglass","pear"],
    color: "cream", price: 59, affiliateUrl: "#" },
  { id: "t3", name: "Oxford Shirt", brand: "Nova", category: "top", gender: "male",
    vibes: ["Clean","Classy","Minimal"], undertones: ["cool","neutral"], bodyShapes: ["rectangle","tall","apple"],
    color: "light blue", price: 69, affiliateUrl: "#" },

  // BOTTOMS
  { id: "b1", name: "Wide-Leg Cargo Pants", category: "bottom", gender: "unisex",
    vibes: ["Streetwear","Grunge"], undertones: ["neutral","warm"], bodyShapes: ["rectangle","apple","tall"],
    color: "olive", price: 79, affiliateUrl: "#" },
  { id: "b2", name: "High-Rise Straight Jeans", category: "bottom", gender: "female",
    vibes: ["Minimal","Soft girl","Classy"], undertones: ["cool","neutral"], bodyShapes: ["hourglass","pear","petite"],
    color: "mid wash", price: 89, affiliateUrl: "#" },
  { id: "b3", name: "Tapered Chinos", category: "bottom", gender: "male",
    vibes: ["Clean","Classy","Minimal"], undertones: ["warm","neutral"], bodyShapes: ["rectangle","apple","tall"],
    color: "sand", price: 79, affiliateUrl: "#" },

  // SHOES
  { id: "s1", name: "Chunky Sneakers", category: "shoes", gender: "unisex",
    vibes: ["Streetwear","Y2K"], undertones: ["neutral","cool","warm"], color: "white", price: 99, affiliateUrl: "#" },
  { id: "s2", name: "Classic Loafers", category: "shoes", gender: "unisex",
    vibes: ["Classy","Minimal","Clean"], undertones: ["neutral","cool"], color: "espresso", price: 129, affiliateUrl: "#" },
  { id: "s3", name: "Chelsea Boots", category: "shoes", gender: "unisex",
    vibes: ["Clean","Grunge","Classy"], undertones: ["warm","neutral"], color: "black", price: 139, affiliateUrl: "#" },

  // ACCESSORIES
  { id: "a1", name: "Minimal Leather Belt", category: "accessory", gender: "unisex",
    vibes: ["Clean","Minimal","Classy"], undertones: ["warm","neutral","cool"], color: "black", price: 39, affiliateUrl: "#" },
  { id: "a2", name: "Gold Huggie Earrings", category: "accessory", gender: "female",
    vibes: ["Soft girl","Classy","Minimal"], undertones: ["warm","neutral"], color: "gold", price: 45, affiliateUrl: "#" },
  { id: "a3", name: "Steel Link Watch", category: "accessory", gender: "unisex",
    vibes: ["Clean","Classy"], undertones: ["cool","neutral"], color: "silver", price: 149, affiliateUrl: "#" },
];
