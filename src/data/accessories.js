export const accessories = [
  {
    id: "earring-01",
    name: "Earring 01",
    category: "earrings",
    thumbnailUrl: "/assets/products/earring-01.svg",
    tryOnImageUrl: "/assets/products/earring-01.svg",
    modelUrl: "/assets/earring_01.glb",
    placement: "ears",
    modelScale: 0.9,
    yOffset: 0.3
  },
  {
    id: "earring-02",
    name: "Earring 02",
    category: "earrings",
    thumbnailUrl: "/assets/products/earring-02.svg",
    tryOnImageUrl: "/assets/products/earring-02.svg",
    modelUrl: "/assets/earring_02.glb",
    placement: "ears",
    modelScale: 0.82,
    yOffset: 0.28
  },
  {
    id: "earring-03",
    name: "Earring 03",
    category: "earrings",
    thumbnailUrl: "/assets/products/earring-03.svg",
    tryOnImageUrl: "/assets/products/earring-03.svg",
    modelUrl: "/assets/earring_03.glb",
    placement: "ears",
    modelScale: 1.05,
    yOffset: 0.34
  },
  {
    id: "earring-stoned",
    name: "Stoned Earring",
    category: "earrings",
    thumbnailUrl: "/assets/products/earring-stoned.svg",
    tryOnImageUrl: "/assets/products/earring-stoned.svg",
    modelUrl: "/assets/earring_stoned.glb",
    placement: "ears",
    modelScale: 0.92,
    yOffset: 0.3
  },
  {
    id: "glasses-01",
    name: "Glasses 01",
    category: "sunglasses",
    thumbnailUrl: "/assets/products/glasses-01.svg",
    tryOnImageUrl: "/assets/products/glasses-01.svg",
    modelUrl: "/assets/glasses_01.glb",
    placement: "eyes",
    modelScale: 0.62,
    yOffset: -0.03
  },
  {
    id: "pendant-01",
    name: "Pendant 01",
    category: "necklace",
    thumbnailUrl: "/assets/products/pendant-01.svg",
    tryOnImageUrl: "/assets/products/pendant-01.svg",
    modelUrl: "/assets/pendant_01.glb",
    placement: "neck",
    modelScale: 1,
    yOffset: 0
  },
  {
    id: "necklace-woman-01",
    name: "Woman Necklace 01",
    category: "necklace",
    thumbnailUrl: "/assets/products/necklace-woman-01.svg",
    tryOnImageUrl: "/assets/products/necklace-woman-01.svg",
    modelUrl: "/assets/necklace_woman_01.glb",
    placement: "neck",
    modelScale: 0.95,
    yOffset: 0
  }
];

export function getAccessoryById(accessoryId) {
  return accessories.find((item) => item.id === accessoryId) ?? accessories[0];
}
