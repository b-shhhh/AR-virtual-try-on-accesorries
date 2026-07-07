import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import * as THREE from "three";
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter.js";

const outputDir = path.resolve("public/assets/models");

globalThis.FileReader = class FileReader {
  async readAsArrayBuffer(blob) {
    this.result = await blob.arrayBuffer();
    this.onloadend?.();
  }
};

const gold = new THREE.MeshStandardMaterial({
  color: "#d7a23a",
  metalness: 0.95,
  roughness: 0.18
});

const roseGold = new THREE.MeshStandardMaterial({
  color: "#c7795a",
  metalness: 0.9,
  roughness: 0.2
});

const ruby = new THREE.MeshStandardMaterial({
  color: "#b3164f",
  metalness: 0.25,
  roughness: 0.12
});

const emerald = new THREE.MeshStandardMaterial({
  color: "#0f8f62",
  metalness: 0.22,
  roughness: 0.14
});

const pearl = new THREE.MeshStandardMaterial({
  color: "#fff4df",
  metalness: 0.18,
  roughness: 0.2
});

const diamond = new THREE.MeshStandardMaterial({
  color: "#e8f4ff",
  metalness: 0.05,
  roughness: 0.05
});

function mesh(geometry, material, position = [0, 0, 0], scale = [1, 1, 1], rotation = [0, 0, 0]) {
  const item = new THREE.Mesh(geometry, material);
  item.position.set(...position);
  item.scale.set(...scale);
  item.rotation.set(...rotation);
  return item;
}

function createChandbali() {
  const group = new THREE.Group();
  group.add(mesh(new THREE.SphereGeometry(0.13, 48, 24), ruby, [0, 0.58, 0]));
  group.add(mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.32, 24), gold, [0, 0.36, 0]));
  group.add(mesh(new THREE.TorusGeometry(0.34, 0.035, 24, 96, Math.PI), gold, [0, 0.08, 0], [1, 1, 1], [0, 0, Math.PI]));
  group.add(mesh(new THREE.TorusGeometry(0.23, 0.014, 16, 80, Math.PI), gold, [0, 0.08, 0], [1, 0.8, 1], [0, 0, Math.PI]));

  for (let i = -3; i <= 3; i += 1) {
    group.add(mesh(new THREE.SphereGeometry(0.045, 24, 12), ruby, [i * 0.1, -0.19 - Math.abs(i) * 0.025, 0.02]));
  }

  group.add(mesh(new THREE.SphereGeometry(0.11, 40, 20), ruby, [0, -0.45, 0], [0.82, 1.15, 0.82]));
  group.add(mesh(new THREE.ConeGeometry(0.1, 0.14, 40), gold, [0, -0.32, 0], [1, 1, 1], [Math.PI, 0, 0]));
  return group;
}

function createPearlHoop() {
  const group = new THREE.Group();
  group.add(mesh(new THREE.SphereGeometry(0.1, 40, 20), pearl, [0, 0.55, 0]));
  group.add(mesh(new THREE.TorusGeometry(0.28, 0.035, 24, 96), gold, [0.04, 0.15, 0], [0.84, 1.18, 1], [0, 0, 0.15]));
  group.add(mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.2, 18), gold, [0, -0.2, 0]));
  group.add(mesh(new THREE.SphereGeometry(0.14, 48, 24), pearl, [0, -0.42, 0], [0.95, 1.12, 0.95]));
  return group;
}

function createTempleJhumka() {
  const group = new THREE.Group();
  group.add(mesh(new THREE.SphereGeometry(0.12, 40, 20), emerald, [0, 0.58, 0]));
  group.add(mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.22, 20), gold, [0, 0.4, 0]));
  group.add(mesh(new THREE.ConeGeometry(0.34, 0.28, 64), gold, [0, 0.1, 0], [1, 0.65, 1], [Math.PI, 0, 0]));
  group.add(mesh(new THREE.SphereGeometry(0.3, 64, 24, 0, Math.PI * 2, 0, Math.PI / 2), gold, [0, -0.03, 0], [1, 0.74, 1]));

  for (let i = -4; i <= 4; i += 1) {
    group.add(mesh(new THREE.SphereGeometry(0.035, 18, 10), emerald, [i * 0.075, -0.31 - Math.abs(i) * 0.012, 0.02]));
  }

  return group;
}

function createLotusNecklace() {
  const group = new THREE.Group();
  group.add(mesh(new THREE.TorusGeometry(0.78, 0.025, 20, 140, Math.PI), gold, [0, 0.18, 0], [1.15, 0.55, 1], [0, 0, Math.PI]));
  group.add(mesh(new THREE.TorusGeometry(0.57, 0.016, 16, 120, Math.PI), gold, [0, 0.06, 0], [1.1, 0.45, 1], [0, 0, Math.PI]));
  group.add(mesh(new THREE.TorusGeometry(0.08, 0.012, 14, 40), gold, [0, -0.16, 0]));
  group.add(mesh(new THREE.SphereGeometry(0.1, 32, 18), ruby, [0, -0.3, 0]));

  for (let i = -2; i <= 2; i += 1) {
    group.add(mesh(new THREE.SphereGeometry(0.085, 32, 14), gold, [i * 0.07, -0.48 - Math.abs(i) * 0.025, 0], [0.65, 1.25, 0.35], [0, 0, i * 0.32]));
  }

  return group;
}

function createClassicChoker() {
  const group = new THREE.Group();
  group.add(mesh(new THREE.TorusGeometry(0.74, 0.04, 24, 140, Math.PI), gold, [0, 0.14, 0], [1.2, 0.36, 1], [0, 0, Math.PI]));
  group.add(mesh(new THREE.TorusGeometry(0.66, 0.02, 18, 130, Math.PI), gold, [0, -0.02, 0], [1.14, 0.34, 1], [0, 0, Math.PI]));

  for (let i = -4; i <= 4; i += 1) {
    group.add(mesh(new THREE.SphereGeometry(0.045, 24, 12), pearl, [i * 0.12, -0.2 - Math.abs(i) * 0.012, 0.03]));
  }

  return group;
}

function createRoseNosePin() {
  const group = new THREE.Group();
  group.add(mesh(new THREE.TorusGeometry(0.2, 0.025, 20, 80), roseGold));

  for (let i = 0; i < 8; i += 1) {
    const angle = (i / 8) * Math.PI * 2;
    group.add(
      mesh(
        new THREE.SphereGeometry(0.07, 24, 12),
        roseGold,
        [Math.cos(angle) * 0.14, Math.sin(angle) * 0.14, 0],
        [1.35, 0.62, 0.32],
        [0, 0, angle]
      )
    );
  }

  group.add(mesh(new THREE.SphereGeometry(0.075, 32, 16), diamond, [0, 0, 0.04]));
  return group;
}

async function exportGlb(name, model) {
  await mkdir(outputDir, { recursive: true });

  model.traverse((child) => {
    if (child.isMesh) {
      child.material.side = THREE.DoubleSide;
      child.material.needsUpdate = true;
    }
  });

  const exporter = new GLTFExporter();
  const buffer = await new Promise((resolve, reject) => {
    exporter.parse(
      model,
      (result) => resolve(Buffer.from(result)),
      (error) => reject(error),
      { binary: true, trs: false, onlyVisible: true }
    );
  });

  await writeFile(path.join(outputDir, name), buffer);
}

await exportGlb("chandbali-gold-earring.glb", createChandbali());
await exportGlb("pearl-hoop-earring.glb", createPearlHoop());
await exportGlb("temple-jhumka-earring.glb", createTempleJhumka());
await exportGlb("lotus-pendant-necklace.glb", createLotusNecklace());
await exportGlb("classic-gold-choker.glb", createClassicChoker());
await exportGlb("rose-nose-pin.glb", createRoseNosePin());

console.log(`Generated jewelry GLB files in ${outputDir}`);
