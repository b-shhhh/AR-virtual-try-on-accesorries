const productTemplates = [
  {
    baseId: "earring-01",
    name: "Classic Pearl Drop Earring",
    category: "earrings",
    price: 1999,
    thumbnailUrl: "https://source.unsplash.com/DRbPrVTyTyA/800x800",
    tryOnImageUrl: "/assets/products/earring-01.svg",
    modelUrl: "/assets/earring_01.glb",
    accessoryId: "earring-01"
  },
  {
    baseId: "earring-02",
    name: "Minimal Gold Hoop Earring",
    category: "earrings",
    price: 1499,
    thumbnailUrl: "https://source.unsplash.com/DRbPrVTyTyA/800x800",
    tryOnImageUrl: "/assets/products/earring-02.svg",
    modelUrl: "/assets/earring_02.glb",
    accessoryId: "earring-02"
  },
  {
    baseId: "earring-03",
    name: "Statement Drop Earring",
    category: "earrings",
    price: 2299,
    thumbnailUrl: "https://source.unsplash.com/800x800/?statement-earrings,jewelry,product",
    tryOnImageUrl: "/assets/products/earring-03.svg",
    modelUrl: "/assets/earring_03.glb",
    accessoryId: "earring-03"
  },
  {
    baseId: "earring-stoned",
    name: "Stone Accent Earring",
    category: "earrings",
    price: 1799,
    thumbnailUrl: "https://source.unsplash.com/800x800/?rhinestone-earrings,jewelry,product",
    tryOnImageUrl: "/assets/products/earring-stoned.svg",
    modelUrl: "/assets/earring_stoned.glb",
    accessoryId: "earring-stoned"
  },
  {
    baseId: "glasses-01",
    name: "Soft Square Sunglasses",
    category: "sunglasses",
    price: 1299,
    thumbnailUrl: "https://source.unsplash.com/lSl94SZHRgA/800x800",
    tryOnImageUrl: "/assets/products/glasses-01.svg",
    modelUrl: "/assets/glasses_01.glb",
    accessoryId: "glasses-01"
  },
  {
    baseId: "pendant-01",
    name: "Delicate Pendant",
    category: "necklace",
    price: 3199,
    thumbnailUrl: "https://source.unsplash.com/800x800/?gold-pendant-necklace,jewelry,product",
    tryOnImageUrl: "/assets/products/pendant-01.svg",
    modelUrl: "/assets/pendant_01.glb",
    accessoryId: "pendant-01"
  },
  {
    baseId: "necklace-woman-01",
    name: "Layered Necklace",
    category: "necklace",
    price: 2899,
    thumbnailUrl: "https://source.unsplash.com/800x800/?layered-necklace,jewelry,product",
    tryOnImageUrl: "/assets/products/necklace-woman-01.svg",
    modelUrl: "/assets/necklace_woman_01.glb",
    accessoryId: "necklace-woman-01"
  }
];

const styles = [
  "Rose",
  "Luna",
  "Maya",
  "Asha",
  "Nira",
  "Sita",
  "Kira",
  "Tara",
  "Anika",
  "Niva",
  "Riya",
  "Mira",
  "Sona",
  "Isha",
  "Zara"
];

export function createProductCatalog(total = 100) {
  return Array.from({ length: total }, (_, index) => {
    const template = productTemplates[index % productTemplates.length];
    const variant = Math.floor(index / productTemplates.length) + 1;
    const style = styles[index % styles.length];
    const priceStep = (index % 9) * 120;

    return {
      id: `${template.baseId}-variant-${String(variant).padStart(2, "0")}`,
      name: `${style} ${template.name}`,
      category: template.category,
      price: template.price + priceStep,
      currency: "NPR",
      thumbnailUrl: template.thumbnailUrl,
      tryOnImageUrl: template.tryOnImageUrl,
      modelUrl: template.modelUrl,
      accessoryId: template.accessoryId,
      arSupported: true
    };
  });
}

export const fallbackProducts = createProductCatalog(100);
