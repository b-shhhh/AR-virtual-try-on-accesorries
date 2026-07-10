import { getModelCatalog } from "./modelsCatalog";
import { getModelPreviewUrl } from "./modelPreview";

function createProductFromModel(model) {
  const previewUrl = getModelPreviewUrl(model.modelFile);

  return {
    id: model.id,
    name: model.name,
    category: model.category,
    price: model.price,
    currency: "NPR",
    description: model.description,
    previewUrl,
    thumbnailUrl: previewUrl,
    tryOnImageUrl: previewUrl,
    modelUrl: `/assets/3d models/${model.modelFile}`,
    accessoryId: model.id,
    arSupported: model.arSupported
  };
}

export function createProductCatalog(total = 100) {
  return getModelCatalog()
    .slice(0, total)
    .map((model) => createProductFromModel(model));
}

export const fallbackProducts = createProductCatalog(100);
