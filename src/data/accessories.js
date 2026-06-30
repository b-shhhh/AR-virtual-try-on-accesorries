export const accessories = [
  {
    id: "rose-drop-earrings",
    name: "Chandbali Gold Earrings",
    category: "earrings",
    thumbnailUrl: "https://upload.wikimedia.org/wikipedia/commons/4/40/Chandbali_Earrings.jpg",
    tryOnImageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/40/Chandbali_Earrings.jpg",
    placement: "ears",
    modelScale: 0.9,
    yOffset: 0.3
  },
  {
    id: "midnight-sunglasses",
    name: "Oakley Shield Sunglasses",
    category: "sunglasses",
    thumbnailUrl: "https://upload.wikimedia.org/wikipedia/commons/7/71/Oakley_sunglasses.jpg",
    tryOnImageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/71/Oakley_sunglasses.jpg",
    placement: "eyes",
    modelScale: 1.05,
    yOffset: -0.02
  },
  {
    id: "gold-pendant-necklace",
    name: "Extendible Gold Necklace",
    category: "necklace",
    thumbnailUrl: "https://upload.wikimedia.org/wikipedia/commons/0/08/Extendible_gold_necklace_with_two_clasps.jpg",
    tryOnImageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/08/Extendible_gold_necklace_with_two_clasps.jpg",
    placement: "neck",
    modelScale: 1.1,
    yOffset: 0
  }
];

export function getAccessoryById(accessoryId) {
  return accessories.find((item) => item.id === accessoryId) ?? accessories[0];
}
