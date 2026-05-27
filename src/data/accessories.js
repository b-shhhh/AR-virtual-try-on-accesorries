export const accessories = [
  {
    id: "rose-drop-earrings",
    name: "Rose Drop Earrings",
    category: "3D earrings",
    thumbnailUrl: "/assets/products/rose-drop-earrings.svg",
    modelKind: "earrings",
    placement: "ears",
    modelScale: 1,
    yOffset: 0.3
  },
  {
    id: "midnight-sunglasses",
    name: "Midnight Sunglasses",
    category: "3D eyewear",
    thumbnailUrl: "/assets/products/midnight-sunglasses.svg",
    modelKind: "sunglasses",
    placement: "eyes",
    modelScale: 1,
    yOffset: -0.02
  },
  {
    id: "gold-pendant-necklace",
    name: "Gold Pendant Necklace",
    category: "3D necklace",
    thumbnailUrl: "/assets/products/gold-pendant-necklace.svg",
    modelKind: "necklace",
    placement: "neck",
    modelScale: 1,
    yOffset: 0
  }
];

export function getAccessoryById(accessoryId) {
  return accessories.find((item) => item.id === accessoryId) ?? accessories[0];
}
