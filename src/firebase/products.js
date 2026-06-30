export async function getProducts() {
  return [
    {
      id: "rose-drop-earrings",
      name: "Chandbali Gold Earrings",
      category: "earrings",
      price: 1999,
      currency: "NPR",
      thumbnailUrl: "https://upload.wikimedia.org/wikipedia/commons/4/40/Chandbali_Earrings.jpg",
      tryOnImageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/40/Chandbali_Earrings.jpg",
      arSupported: true
    },
    {
      id: "midnight-sunglasses",
      name: "Oakley Shield Sunglasses",
      category: "sunglasses",
      price: 2499,
      currency: "NPR",
      thumbnailUrl: "https://upload.wikimedia.org/wikipedia/commons/7/71/Oakley_sunglasses.jpg",
      tryOnImageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/71/Oakley_sunglasses.jpg",
      arSupported: true
    },
    {
      id: "gold-pendant-necklace",
      name: "Extendible Gold Necklace",
      category: "necklace",
      price: 3199,
      currency: "NPR",
      thumbnailUrl: "https://upload.wikimedia.org/wikipedia/commons/0/08/Extendible_gold_necklace_with_two_clasps.jpg",
      tryOnImageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/08/Extendible_gold_necklace_with_two_clasps.jpg",
      arSupported: true
    },
    {
      id: "minimalist-watch",
      name: "Minimalist Watch",
      category: "watch",
      price: 4299,
      currency: "NPR",
      modelKind: "watch",
      thumbnailUrl: "/assets/earrings/sample-earring.png",
      arSupported: false
    }
  ];
}
