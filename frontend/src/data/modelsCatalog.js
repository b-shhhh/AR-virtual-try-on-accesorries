// Product catalog for 3D models - will be uploaded to Firebase Storage
// All models are stored in '3d models' folder and will be served from Firebase

const modelMetadata = [
  {
    id: "8bit_sunglassesheart",
    name: "8-bit Heart Sunglasses",
    category: "sunglasses",
    price: 2499,
    description: "Unique heart-shaped sunglasses with a retro 8-bit aesthetic. Perfect for making a bold fashion statement.",
    modelFile: "8bit_sunglassesheart.glb",
    arSupported: true
  },
  {
    id: "balenciaga_sunglasses",
    name: "Balenciaga Style Sunglasses",
    category: "sunglasses",
    price: 3999,
    description: "High-end designer-inspired sunglasses with sleek modern frames. Features premium materials and UV protection.",
    modelFile: "balenciaga_sunglasses.glb",
    arSupported: true
  },
  {
    id: "beads_earrings_gold_teardrops_hoop_earings",
    name: "Gold Teardrop Beaded Earrings",
    category: "earrings",
    price: 1899,
    description: "Elegant gold teardrop earrings adorned with delicate beads. Lightweight and perfect for any occasion.",
    modelFile: "beads_earrings_gold_teardrops_hoop_earings.glb",
    arSupported: true
  },
  {
    id: "bimbo_thicc_earring",
    name: "Thick Bimbo Earrings",
    category: "earrings",
    price: 1599,
    description: "Bold and chunky earrings that make a statement. Features oversized design for maximum impact.",
    modelFile: "bimbo_thicc_earring.glb",
    arSupported: true
  },
  {
    id: "bose_frames_alto_audio_sunglasses",
    name: "Bose Audio Sunglasses",
    category: "sunglasses",
    price: 4999,
    description: "Premium audio sunglasses with built-in speakers. Combines sun protection with wireless audio technology.",
    modelFile: "bose__frames__alto__audio_sunglasses.glb",
    arSupported: true
  },
  {
    id: "bronze_age_necklace",
    name: "Bronze Age Necklace",
    category: "necklace",
    price: 2799,
    description: "Ancient-inspired bronze necklace with historical design elements. Features intricate detailing reminiscent of ancient civilizations.",
    modelFile: "bronze_age_necklace._s1272.glb",
    arSupported: true
  },
  {
    id: "cat_eye_glasses",
    name: "Cat Eye Glasses",
    category: "sunglasses",
    price: 1999,
    description: "Classic cat-eye sunglasses with a feminine silhouette. Timeless style that complements any face shape.",
    modelFile: "cat_eye_glasses.glb",
    arSupported: true
  },
  {
    id: "cazal_sunglasses",
    name: "Cazal Sunglasses",
    category: "sunglasses",
    price: 2899,
    description: "Vintage-inspired Cazal-style sunglasses with distinctive frame design. Retro luxury at its finest.",
    modelFile: "cazal_sunglasses.glb",
    arSupported: true
  },
  {
    id: "cuban_iced_out_chain",
    name: "Cuban Iced Out Chain",
    category: "necklace",
    price: 4599,
    description: "Luxurious Cuban link chain covered in dazzling stones. Hip-hop inspired design for bold style.",
    modelFile: "cuban_iced_out_chain.glb",
    arSupported: true
  },
  {
    id: "dalai_earings",
    name: "Dalai Earrings",
    category: "earrings",
    price: 1799,
    description: "Spiritual-inspired earrings with unique cultural design elements. Handcrafted for meaningful style.",
    modelFile: "dalai_earings.glb",
    arSupported: true
  },
  {
    id: "diamond_crossover_hoop_earrings",
    name: "Diamond Crossover Hoop Earrings",
    category: "earrings",
    price: 2299,
    description: "Stunning crossover hoop earrings with diamond accents. Adds sparkle and sophistication to any look.",
    modelFile: "diamond_crossover_hoop_earrings.glb",
    arSupported: true
  },
  {
    id: "earring_ruby_light",
    name: "Ruby Light Earrings",
    category: "earrings",
    price: 2199,
    description: "Elegant ruby-inspired earrings that catch the light. Features deep red tones for a luxurious feel.",
    modelFile: "earring_ruby_light.glb",
    arSupported: true
  },
  {
    id: "earring",
    name: "Classic Earrings",
    category: "earrings",
    price: 1299,
    description: "Versatile everyday earrings with a timeless design. Perfect for layering or wearing solo.",
    modelFile: "earring.glb",
    arSupported: true
  },
  {
    id: "earrings_seleucid_empire",
    name: "Seleucid Empire Earrings",
    category: "earrings",
    price: 1999,
    description: "Ancient Mesopotamian-inspired earrings with historical motifs. Unique piece for collectors.",
    modelFile: "earrings_seleucid_empire_305_-_224_bce.glb",
    arSupported: true
  },
  {
    id: "free_low_poly_ruby_diamond_gold_necklace",
    name: "Low Poly Ruby Diamond Necklace",
    category: "necklace",
    price: 3299,
    description: "Modern low-poly design necklace featuring rubies and diamonds. Geometric style meets luxury.",
    modelFile: "free_low_poly_ruby__diamond_gold_necklace.glb",
    arSupported: true
  },
  {
    id: "free_sunglasses_3d_model_by_arham_abdullah",
    name: "Arham's Sunglasses",
    category: "sunglasses",
    price: 1799,
    description: "Contemporary sunglasses with clean lines and modern aesthetic. Designed for everyday wear.",
    modelFile: "free_sunglasses_3d_model_by_arham_abdullah.glb",
    arSupported: true
  },
  {
    id: "giant_red_oval_hoops_earings",
    name: "Giant Red Oval Hoops",
    category: "earrings",
    price: 1699,
    description: "Bold oversized oval hoop earrings in vibrant red. Makes a dramatic fashion statement.",
    modelFile: "giant_red_oval_hoops_earings.glb",
    arSupported: true
  },
  {
    id: "glasses_1",
    name: "Modern Glasses",
    category: "sunglasses",
    price: 1499,
    description: "Sleek modern sunglasses with a minimalist frame design. Lightweight and comfortable.",
    modelFile: "glasses_1.0.glb",
    arSupported: true
  },
  {
    id: "glasses_2",
    name: "Classic Wayfarer",
    category: "sunglasses",
    price: 1599,
    description: "Iconic wayfarer-style sunglasses with durable construction. A timeless favorite.",
    modelFile: "glasses_2.glb",
    arSupported: true
  },
  {
    id: "glasses_05",
    name: "Vintage Round Glasses",
    category: "sunglasses",
    price: 1399,
    description: "Retro round sunglasses with vintage charm. Perfect for achieving a classic look.",
    modelFile: "glasses_05.glb",
    arSupported: true
  },
  {
    id: "glasses",
    name: "Basic Sunglasses",
    category: "sunglasses",
    price: 999,
    description: "Essential sunglasses with reliable UV protection. Great everyday accessory.",
    modelFile: "glasses.glb",
    arSupported: true
  },
  {
    id: "heart_necklace",
    name: "Heart Pendant Necklace",
    category: "necklace",
    price: 1899,
    description: "Romantic heart-shaped pendant necklace. Perfect gift for someone special.",
    modelFile: "heart_necklace.glb",
    arSupported: true
  },
  {
    id: "heart-shaped_glasses",
    name: "Heart Shaped Glasses",
    category: "sunglasses",
    price: 1699,
    description: "Playful heart-shaped sunglasses for a fun, flirty look. Unique design stands out.",
    modelFile: "heart-shaped_glasses.glb",
    arSupported: true
  },
  {
    id: "huggie_earrings_with_carat_of_diamonds",
    name: "Diamond Huggie Earrings",
    category: "earrings",
    price: 3499,
    description: "Luxurious huggie earrings adorned with multiple carats of diamonds. Premium sparkle for special occasions.",
    modelFile: "huggie_earrings_with_carat_of_diamonds.glb",
    arSupported: true
  },
  {
    id: "jewelry",
    name: "Mixed Jewelry Set",
    category: "earrings",
    price: 2599,
    description: "Versatile jewelry piece with mixed materials. Can be worn as earrings or pendant.",
    modelFile: "jewelry.glb",
    arSupported: true
  },
  {
    id: "lara_sunglasses",
    name: "Lara Sunglasses",
    category: "sunglasses",
    price: 2199,
    description: "Elegant Lara-style sunglasses with sophisticated frame. Perfect for professional settings.",
    modelFile: "lara_sunglasses.glb",
    arSupported: true
  },
  {
    id: "metal_sunflower_earrings",
    name: "Sunflower Metal Earrings",
    category: "earrings",
    price: 1499,
    description: "Cheerful sunflower-shaped earrings with metallic finish. Brings sunshine to any outfit.",
    modelFile: "metal_sunflower_earrings.glb",
    arSupported: true
  },
  {
    id: "model",
    name: "Generic Model",
    category: "earrings",
    price: 1199,
    description: "Basic 3D model for testing and development. Simple design for customization.",
    modelFile: "model.glb",
    arSupported: true
  },
  {
    id: "necklace_01",
    name: "Free Necklace Model",
    category: "necklace",
    price: 1999,
    description: "Elegant free-form necklace with artistic design. One-of-a-kind style.",
    modelFile: "necklace_01_-_free.glb",
    arSupported: true
  },
  {
    id: "necklace_b",
    name: "Necklace B",
    category: "necklace",
    price: 2099,
    description: "Alternative necklace design with modern aesthetic. Features clean lines and simple elegance.",
    modelFile: "necklace_b.glb",
    arSupported: true
  },
  {
    id: "oculos_kita",
    name: "Oculos Kita Glasses",
    category: "sunglasses",
    price: 1899,
    description: "Distinctive Oculos Kita style sunglasses with unique frame shape. Stands out from the crowd.",
    modelFile: "oculos_kita.glb",
    arSupported: true
  },
  {
    id: "pendant_necklace",
    name: "Pendant Necklace",
    category: "necklace",
    price: 2299,
    description: "Classic pendant necklace with elegant chain. Features a beautiful centerpiece.",
    modelFile: "pendant_necklace.glb",
    arSupported: true
  },
  {
    id: "raflesia_2_layer",
    name: "Raflesia 2-Layer Necklace",
    category: "necklace",
    price: 2699,
    description: "Stunning two-layer necklace inspired by Raflesia flower. Unique botanical design.",
    modelFile: "raflesia_2_layer.glb",
    arSupported: true
  },
  {
    id: "ray-ban_sunglasses",
    name: "Ray-Ban Style Sunglasses",
    category: "sunglasses",
    price: 2799,
    description: "Iconic Ray-Ban inspired sunglasses with classic aviator design. Timeless American style.",
    modelFile: "ray-ban_sunglasses.glb",
    arSupported: true
  },
  {
    id: "romantic_floral_clay_locket",
    name: "Romantic Floral Clay Locket",
    category: "necklace",
    price: 2399,
    description: "Handcrafted clay locket with romantic floral design. Holds precious memories close to heart.",
    modelFile: "romantic_floral_clay_locket.glb",
    arSupported: true
  },
  {
    id: "scarab_necklace",
    name: "Scarab Necklace",
    category: "necklace",
    price: 2199,
    description: "Ancient Egyptian-inspired scarab necklace. Symbol of protection and transformation.",
    modelFile: "scarab_necklace.glb",
    arSupported: true
  },
  {
    id: "stars_earrings",
    name: "Stars Earrings",
    category: "earrings",
    price: 1399,
    description: "Celestial-themed star earrings that sparkle like the night sky. Perfect for dreamers.",
    modelFile: "stars_earrings.glb",
    arSupported: true
  },
  {
    id: "sunglass_by_bazskooo_3d",
    name: "Bazskooo 3D Sunglasses",
    category: "sunglasses",
    price: 1599,
    description: "Creative 3D designed sunglasses with unique artistic flair. One-of-a-kind style.",
    modelFile: "sunglass_-_by_bazskooo_3d.glb",
    arSupported: true
  },
  {
    id: "sunglasses_flow",
    name: "Flow Sunglasses",
    category: "sunglasses",
    price: 1799,
    description: "Sleek flow-designed sunglasses with aerodynamic frame. Modern and dynamic.",
    modelFile: "sunglasses_flow.glb",
    arSupported: true
  },
  {
    id: "sunglasses_mechanics",
    name: "Mechanics Sunglasses",
    category: "sunglasses",
    price: 1999,
    description: "Industrial-inspired sunglasses with mechanical design elements. For the tech enthusiast.",
    modelFile: "sunglasses_mechanics_of_the_object_homework.glb",
    arSupported: true
  },
  {
    id: "sunglasses_model_no1_cravatta",
    name: "Cravatta Sunglasses",
    category: "sunglasses",
    price: 2099,
    description: "Elegant Cravatta style sunglasses with sophisticated detailing. Premium Italian-inspired design.",
    modelFile: "sunglasses_model_no1_cravatta.glb",
    arSupported: true
  },
  {
    id: "sunglasses_v1",
    name: "Sunglasses V1",
    category: "sunglasses",
    price: 1499,
    description: "Version 1 sunglasses with balanced design. Great everyday pair.",
    modelFile: "sunglasses_v1.glb",
    arSupported: true
  },
  {
    id: "sunglasses",
    name: "Basic Sunglasses",
    category: "sunglasses",
    price: 1199,
    description: "Essential sunglasses with classic design. Reliable UV protection at affordable price.",
    modelFile: "sunglasses.glb",
    arSupported: true
  },
  {
    id: "tigiw_saga_beads_necklace",
    name: "Tigiw Saga Beads Necklace",
    category: "necklace",
    price: 2499,
    description: "Intricate beaded necklace with saga-inspired design. Handcrafted with attention to detail.",
    modelFile: "tigiw_saga_beads_necklace.glb",
    arSupported: true
  },
  {
    id: "turkish_earring_no2",
    name: "Turkish Earrings No. 2",
    category: "earrings",
    price: 1799,
    description: "Authentic Turkish-inspired earrings with cultural motifs. Traditional design with modern appeal.",
    modelFile: "turkish_earring_exclusive_for_the_first_time_no2.glb",
    arSupported: true
  },
  {
    id: "turkish_earring_no3",
    name: "Turkish Earrings No. 3",
    category: "earrings",
    price: 1899,
    description: "Another beautiful Turkish-inspired earring design. Features unique patterns and textures.",
    modelFile: "turkish_earring_exclusive_for_the_first_time_no3.glb",
    arSupported: true
  },
  {
    id: "white_sunglasses",
    name: "White Sunglasses",
    category: "sunglasses",
    price: 1699,
    description: "Clean white sunglasses with minimalist aesthetic. Perfect for summer style.",
    modelFile: "white_sunglasses.glb",
    arSupported: true
  }
];

export function getModelCatalog() {
  return modelMetadata;
}

export function getModelById(id) {
  return modelMetadata.find(model => model.id === id);
}

export function getModelsByCategory(category) {
  return modelMetadata.filter(model => model.category === category);
}

export function getModelsByTag(tag) {
  return modelMetadata.filter(model => model.tags && model.tags.includes(tag));
}