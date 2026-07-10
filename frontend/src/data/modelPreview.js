const previewMap = {
  "8bit_sunglassesheart.glb": "/assets/products/FabConvert.com_8bit_sunglassesheart.png",
  "balenciaga_sunglasses.glb": "/assets/products/FabConvert.com_balenciaga_sunglasses.png",
  "beads_earrings_gold_teardrops_hoop_earings.glb": "/assets/products/FabConvert.com_beads_earrings_gold_teardrops_hoop_earings.png",
  "bimbo_thicc_earring.glb": "/assets/products/FabConvert.com_bimbo_thicc_earring.png",
  "bose__frames__alto__audio_sunglasses.glb": "/assets/products/FabConvert.com_bose__frames__alto__audio_sunglasses.png",
  "bronze_age_necklace._s1272.glb": "/assets/products/FabConvert.com_bronze_age_necklace._s1272.png",
  "cat_eye_glasses.glb": "/assets/products/FabConvert.com_cat_eye_glasses.png",
  "cazal_sunglasses.glb": "/assets/products/FabConvert.com_cazal_sunglasses.png",
  "cuban_iced_out_chain.glb": "/assets/products/FabConvert.com_cuban_iced_out_chain.png",
  "dalai_earings.glb": "/assets/products/FabConvert.com_dalai_earings.png",
  "diamond_crossover_hoop_earrings.glb": "/assets/products/FabConvert.com_diamond_crossover_hoop_earrings.png",
  "earring.glb": "/assets/products/FabConvert.com_earring.png",
  "earrings_egypt.glb": "/assets/products/FabConvert.com_earrings_egypt.png",
  "earrings_seleucid_empire_305_-_224_bce.glb": "/assets/products/FabConvert.com_earrings_seleucid_empire_305_-_224_bce.png",
  "earring_ruby_light.glb": "/assets/products/FabConvert.com_earring_ruby_light.png",
  "glasses (1).glb": "/assets/products/glasses (1).png",
  "heart-shaped_glasses.glb": "/assets/products/heart-shaped_glasses.png",
  "heart_necklace.glb": "/assets/products/heart_necklace.png",
  "huggie_earrings_with_carat_of_diamonds.glb": "/assets/products/huggie_earrings_with_carat_of_diamonds.png",
  "jewelry.glb": "/assets/products/jewelry.png",
  "lara_sunglasses.glb": "/assets/products/lara_sunglasses.png",
  "metal_sunflower_earrings.glb": "/assets/products/metal_sunflower_earrings.png",
  "model.glb": "/assets/products/model.png",
  "necklace_01_-_free.glb": "/assets/products/necklace_01_-_free.png",
  "necklace_b.glb": "/assets/products/necklace_b.png",
  "oculos_kita.glb": "/assets/products/oculos_kita.png",
  "pendant_necklace.glb": "/assets/products/pendant_necklace.png",
  "raflesia_2_layer (1).glb": "/assets/products/raflesia_2_layer (1).png",
  "raflesia_2_layer.glb": "/assets/products/raflesia_2_layer.png",
  "ray-ban_sunglasses.glb": "/assets/products/ray-ban_sunglasses.png",
  "romantic_floral_clay_locket.glb": "/assets/products/romantic_floral_clay_locket.png",
  "scarab_necklace.glb": "/assets/products/scarab_necklace.png",
  "stars_earrings.glb": "/assets/products/stars_earrings.png",
  "sunglasses (1).glb": "/assets/products/sunglasses (1).png",
  "sunglasses.glb": "/assets/products/sunglasses.png",
  "sunglasses_flow.glb": "/assets/products/sunglasses_flow.png",
  "sunglasses_mechanics_of_the_object_homework.glb": "/assets/products/sunglasses_mechanics_of_the_object_homework.png",
  "sunglasses_model_no1_cravatta.glb": "/assets/products/sunglasses_model_no1_cravatta.png",
  "sunglasses_v1.glb": "/assets/products/sunglasses_v1.png",
  "sunglass_-_by_bazskooo_3d.glb": "/assets/products/sunglass_-_by_bazskooo_3d.png",
  "tigiw_saga_beads_necklace.glb": "/assets/products/tigiw_saga_beads_necklace.png",
  "turkish_earring_exclusive_for_the_first_time_no2.glb": "/assets/products/turkish_earring_exclusive_for_the_first_time_no2.png",
  "turkish_earring_exclusive_for_the_first_time_no3.glb": "/assets/products/turkish_earring_exclusive_for_the_first_time_no3.png",
  "white_sunglasses.glb": "/assets/products/white_sunglasses.png"
};

export function getModelPreviewUrl(modelFile) {
  if (!modelFile) {
    return null;
  }

  const normalized = modelFile.trim();
  const previewUrl = previewMap[normalized];
  if (previewUrl) {
    return previewUrl;
  }

  const baseName = normalized.replace(/\.glb$/i, "");
  const searchText = baseName.replace(/[_-]+/g, " ");
  return `https://source.unsplash.com/800x800/?${encodeURIComponent(searchText)},jewelry,product`;
}
