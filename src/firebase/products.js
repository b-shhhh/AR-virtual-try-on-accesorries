import { apiRequest } from "../services/api";

const fallbackProducts = [
  {
    id: "earring-01",
    name: "Earring 01",
    category: "earrings",
    price: 1999,
    currency: "NPR",
    thumbnailUrl: "/assets/products/earring-01.svg",
    tryOnImageUrl: "/assets/products/earring-01.svg",
    modelUrl: "/assets/earring_01.glb",
    arSupported: true
  },
  {
    id: "earring-02",
    name: "Earring 02",
    category: "earrings",
    price: 1499,
    currency: "NPR",
    thumbnailUrl: "/assets/products/earring-02.svg",
    tryOnImageUrl: "/assets/products/earring-02.svg",
    modelUrl: "/assets/earring_02.glb",
    arSupported: true
  },
  {
    id: "earring-03",
    name: "Earring 03",
    category: "earrings",
    price: 2299,
    currency: "NPR",
    thumbnailUrl: "/assets/products/earring-03.svg",
    tryOnImageUrl: "/assets/products/earring-03.svg",
    modelUrl: "/assets/earring_03.glb",
    arSupported: true
  },
  {
    id: "earring-stoned",
    name: "Stoned Earring",
    category: "earrings",
    price: 1799,
    currency: "NPR",
    thumbnailUrl: "/assets/products/earring-stoned.svg",
    tryOnImageUrl: "/assets/products/earring-stoned.svg",
    modelUrl: "/assets/earring_stoned.glb",
    arSupported: true
  },
  {
    id: "glasses-01",
    name: "Glasses 01",
    category: "sunglasses",
    price: 1299,
    currency: "NPR",
    thumbnailUrl: "/assets/products/glasses-01.svg",
    tryOnImageUrl: "/assets/products/glasses-01.svg",
    modelUrl: "/assets/glasses_01.glb",
    arSupported: true
  },
  {
    id: "pendant-01",
    name: "Pendant 01",
    category: "necklace",
    price: 3199,
    currency: "NPR",
    thumbnailUrl: "/assets/products/pendant-01.svg",
    tryOnImageUrl: "/assets/products/pendant-01.svg",
    modelUrl: "/assets/pendant_01.glb",
    arSupported: true
  },
  {
    id: "necklace-woman-01",
    name: "Woman Necklace 01",
    category: "necklace",
    price: 2899,
    currency: "NPR",
    thumbnailUrl: "/assets/products/necklace-woman-01.svg",
    tryOnImageUrl: "/assets/products/necklace-woman-01.svg",
    modelUrl: "/assets/necklace_woman_01.glb",
    arSupported: true
  }
];

export async function getProducts() {
  try {
    return await apiRequest("/api/products");
  } catch {
    return fallbackProducts;
  }
}
