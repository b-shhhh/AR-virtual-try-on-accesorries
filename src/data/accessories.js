export const accessories = [
  {
    id: "chandbali-gold-earrings",
    name: "Chandbali Gold Earrings",
    category: "earrings",
    thumbnailUrl: "/assets/products/chandbali-gold.svg",
    tryOnImageUrl: "/assets/products/chandbali-gold.svg",
    modelUrl: "/assets/earring_01.glb",
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
    modelUrl: "/assets/earring_02.glb",
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
    modelUrl: "/assets/earring_03.glb",
    placement: "ears",
    modelScale: 1.05,
    yOffset: 0.34
  },
  {
    id: "ruby-stone-earrings",
    name: "Ruby Stone Earrings",
    category: "earrings",
    thumbnailUrl: "/assets/products/ruby-stone-earrings.svg",
    tryOnImageUrl: "/assets/products/ruby-stone-earrings.svg",
    modelUrl: "/assets/earring_stoned.glb",
    placement: "ears",
    modelScale: 0.92,
    yOffset: 0.3
  },
  {
    id: "classic-sunglasses",
    name: "Classic Sunglasses",
    category: "sunglasses",
    thumbnailUrl: "/assets/products/classic-sunglasses.svg",
    tryOnImageUrl: "/assets/products/classic-sunglasses.svg",
    modelUrl: "/assets/glasses_01.glb",
    placement: "eyes",
    modelScale: 0.62,
    yOffset: -0.03
  },
  {
    id: "lotus-pendant-necklace",
    name: "Lotus Pendant Necklace",
    category: "necklace",
    thumbnailUrl: "/assets/products/lotus-necklace.svg",
    tryOnImageUrl: "/assets/products/lotus-necklace.svg",
    modelUrl: "/assets/pendant_01.glb",
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
    modelUrl: "/assets/necklace_woman_01.glb",
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
    modelUrl: "/assets/earring_stoned.glb",
    placement: "nose",
    modelScale: 1,
    xOffset: -0.12,
    yOffset: 0.02
  }
];

export function getAccessoryById(accessoryId) {
  return accessories.find((item) => item.id === accessoryId) ?? accessories[0];
}
