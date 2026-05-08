export const accessories = [
  {
    id: "sketchfab-earrings",
    name: "Sketchfab Earrings",
    category: "3D earrings",
    thumbnailUrl: "/assets/earrings/sample-earring.png",
    modelUrl: "/assets/earrings/sketchfab-earrings.glb",
    modelScale: 1,
    yOffset: 0.3
  }
];

export function getAccessoryById(accessoryId) {
  return accessories.find((item) => item.id === accessoryId) ?? accessories[0];
}
