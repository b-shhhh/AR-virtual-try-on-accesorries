export async function getProducts() {
  return [
    {
      id: "rose-drop-earrings",
      name: "Rose Drop Earrings",
      category: "earrings",
      price: 1999,
      currency: "NPR",
      modelKind: "earrings",
      thumbnailUrl: "/assets/products/rose-drop-earrings.svg",
      arSupported: true
    },
    {
      id: "midnight-sunglasses",
      name: "Midnight Sunglasses",
      category: "sunglasses",
      price: 2499,
      currency: "NPR",
      modelKind: "sunglasses",
      thumbnailUrl: "/assets/products/midnight-sunglasses.svg",
      arSupported: true
    },
    {
      id: "gold-pendant-necklace",
      name: "Gold Pendant Necklace",
      category: "necklace",
      price: 3199,
      currency: "NPR",
      modelKind: "necklace",
      thumbnailUrl: "/assets/products/gold-pendant-necklace.svg",
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
