import { initializeApp, cert } from "firebase-admin/app";
import { getStorage } from "firebase-admin/storage";
import { getFirestore } from "firebase-admin/firestore";
import { readFile, readdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Model metadata - maps file names to product info
const modelInfo = {
  "8bit_sunglassesheart.glb": {
    id: "8bit_sunglassesheart",
    name: "8-bit Heart Sunglasses",
    category: "sunglasses",
    price: 2499,
    description: "Unique heart-shaped sunglasses with a retro 8-bit aesthetic. Perfect for making a bold fashion statement."
  },
  "balenciaga_sunglasses.glb": {
    id: "balenciaga_sunglasses",
    name: "Balenciaga Style Sunglasses",
    category: "sunglasses",
    price: 3999,
    description: "High-end designer-inspired sunglasses with sleek modern frames. Features premium materials and UV protection."
  },
  "beads_earrings_gold_teardrops_hoop_earings.glb": {
    id: "beads_earrings_gold_teardrops_hoop_earings",
    name: "Gold Teardrop Beaded Earrings",
    category: "earrings",
    price: 1899,
    description: "Elegant gold teardrop earrings adorned with delicate beads. Lightweight and perfect for any occasion."
  },
  "bimbo_thicc_earring.glb": {
    id: "bimbo_thicc_earring",
    name: "Thick Bimbo Earrings",
    category: "earrings",
    price: 1599,
    description: "Bold and chunky earrings that make a statement. Features oversized design for maximum impact."
  },
  "bose__frames__alto__audio_sunglasses.glb": {
    id: "bose_frames_alto_audio_sunglasses",
    name: "Bose Audio Sunglasses",
    category: "sunglasses",
    price: 4999,
    description: "Premium audio sunglasses with built-in speakers. Combines sun protection with wireless audio technology."
  },
  "bronze_age_necklace._s1272.glb": {
    id: "bronze_age_necklace",
    name: "Bronze Age Necklace",
    category: "necklace",
    price: 2799,
    description: "Ancient-inspired bronze necklace with historical design elements. Features intricate detailing reminiscent of ancient civilizations."
  },
  "cat_eye_glasses.glb": {
    id: "cat_eye_glasses",
    name: "Cat Eye Glasses",
    category: "sunglasses",
    price: 1999,
    description: "Classic cat-eye sunglasses with a feminine silhouette. Timeless style that complements any face shape."
  },
  "cazal_sunglasses.glb": {
    id: "cazal_sunglasses",
    name: "Cazal Sunglasses",
    category: "sunglasses",
    price: 2899,
    description: "Vintage-inspired Cazal-style sunglasses with distinctive frame design. Retro luxury at its finest."
  },
  "cuban_iced_out_chain.glb": {
    id: "cuban_iced_out_chain",
    name: "Cuban Iced Out Chain",
    category: "necklace",
    price: 4599,
    description: "Luxurious Cuban link chain covered in dazzling stones. Hip-hop inspired design for bold style."
  },
  "dalai_earings.glb": {
    id: "dalai_earings",
    name: "Dalai Earrings",
    category: "earrings",
    price: 1799,
    description: "Spiritual-inspired earrings with unique cultural design elements. Handcrafted for meaningful style."
  },
  "diamond_crossover_hoop_earrings.glb": {
    id: "diamond_crossover_hoop_earrings",
    name: "Diamond Crossover Hoop Earrings",
    category: "earrings",
    price: 2299,
    description: "Stunning crossover hoop earrings with diamond accents. Adds sparkle and sophistication to any look."
  },
  "earring_ruby_light.glb": {
    id: "earring_ruby_light",
    name: "Ruby Light Earrings",
    category: "earrings",
    price: 2199,
    description: "Elegant ruby-inspired earrings that catch the light. Features deep red tones for a luxurious feel."
  },
  "earring.glb": {
    id: "earring",
    name: "Classic Earrings",
    category: "earrings",
    price: 1299,
    description: "Versatile everyday earrings with a timeless design. Perfect for layering or wearing solo."
  },
  "earrings_seleucid_empire_305_-_224_bce.glb": {
    id: "earrings_seleucid_empire",
    name: "Seleucid Empire Earrings",
