export const accessories = [
  {
    id: "chandbali-gold-earrings",
    name: "Chandbali Gold Earrings",
    category: "earrings",
    thumbnailUrl: "/assets/products/chandbali-gold.svg",
    tryOnImageUrl: "/assets/products/chandbali-gold.svg",
    modelUrl: "/assets/models/chandbali-gold-earring.glb",
    placement: "ears",
    modelScale: 0.9,
    yOffset: 0.3
  },
  {
    id: "pearl-hoop-earrings",
    name: "Pearl Hoop Earrings",
    category: "earrings",
    thumbnailUrl: "/assets/products/pearl-hoop.svg",
    tryOnImageUrl: "/assets/products/pearl-hoop.svg",
    modelUrl: "/assets/models/pearl-hoop-earring.glb",
    placement: "ears",
    modelScale: 0.82,
    yOffset: 0.28
  },
  {
    id: "temple-jhumka-earrings",
    name: "Temple Jhumka Earrings",
    category: "earrings",
    thumbnailUrl: "/assets/products/temple-jhumka.svg",
    tryOnImageUrl: "/assets/products/temple-jhumka.svg",
    modelUrl: "/assets/models/temple-jhumka-earring.glb",
    placement: "ears",
    modelScale: 1.05,
    yOffset: 0.34
  },
  {
    id: "lotus-pendant-necklace",
    name: "Lotus Pendant Necklace",
    category: "necklace",
    thumbnailUrl: "/assets/products/lotus-necklace.svg",
    tryOnImageUrl: "/assets/products/lotus-necklace.svg",
    modelUrl: "/assets/models/lotus-pendant-necklace.glb",
    placement: "neck",
    modelScale: 1,
    yOffset: 0
  },
  {
    id: "classic-gold-choker",
    name: "Classic Gold Choker",
    category: "necklace",
    thumbnailUrl: "/assets/products/classic-choker.svg",
    tryOnImageUrl: "/assets/products/classic-choker.svg",
    modelUrl: "/assets/models/classic-gold-choker.glb",
    placement: "neck",
    modelScale: 0.95,
    yOffset: 0
  },
  {
    id: "rose-nose-pin",
    name: "Rose Gold Nose Pin",
    category: "nose pin",
    thumbnailUrl: "/assets/products/rose-nose-pin.svg",
    tryOnImageUrl: "/assets/products/rose-nose-pin.svg",
    modelUrl: "/assets/models/rose-nose-pin.glb",
    placement: "nose",
    modelScale: 1,
    xOffset: -0.12,
    yOffset: 0.02
  }
];

export function getAccessoryById(accessoryId) {
  return accessories.find((item) => item.id === accessoryId) ?? accessories[0];
}
