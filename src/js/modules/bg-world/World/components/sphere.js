import { Mesh, MeshStandardMaterial, SphereGeometry, TextureLoader, BackSide } from 'three';

const galaxyStarfieldImg = new URL('../textures/galaxy-starfield.png', import.meta.url);
const earthMapImg = new URL('../textures/earth-map.webp', import.meta.url);
const earthbBumpMapImg = new URL('../textures/earth-bump-map.webp', import.meta.url);
const earthCloudsAlphaImg = new URL('../textures/earth-clouds-alpha.webp', import.meta.url);

function createBgMaterial() {
  const textureLoader = new TextureLoader();

  const bgTexture = textureLoader.load(galaxyStarfieldImg);
  const bgMaterial = new MeshStandardMaterial({ map: bgTexture, side: BackSide });
  return bgMaterial;
}

function createEarthMaterial() {
  const textureLoader = new TextureLoader();

  const earthTexture = textureLoader.load(earthMapImg);
  const earthBumpTexture = textureLoader.load(earthbBumpMapImg);
  const earthMaterial = new MeshStandardMaterial({ map: earthTexture, bumpMap: earthBumpTexture });

  return earthMaterial;
}

function createCloudsMaterial() {
  const textureLoader = new TextureLoader();

  const cloudsTexture = textureLoader.load(earthCloudsAlphaImg);
  const cloudsMaterial = new MeshStandardMaterial({ map: cloudsTexture, transparent: true });

  return cloudsMaterial;
}

function createBgSphere() {
  const bgGeometry = new SphereGeometry(6, 30, 30);

  const bgMaterial = createBgMaterial();
  const bgSphere = new Mesh(bgGeometry, bgMaterial);

  // this method will be called once per frame
  bgSphere.tick = () => {
    bgSphere.rotation.y += 0.0005;
  };

  return bgSphere;
}

function createEarthSphere() {
  const earthGeometry = new SphereGeometry(1, 30, 30);
  const earthMaterial = createEarthMaterial();

  const earthSphere = new Mesh(earthGeometry, earthMaterial);

  // this method will be called once per frame
  earthSphere.tick = () => {
    earthSphere.rotation.y += 0.001;
  };

  return earthSphere;
}

function createCloudsSphere() {
  const cloudsGeometry = new SphereGeometry(1.05, 30, 30);

  const cloudsMaterial = createCloudsMaterial();
  const cloudsSphere = new Mesh(cloudsGeometry, cloudsMaterial);

  // this method will be called once per frame
  cloudsSphere.tick = () => {
    cloudsSphere.rotation.y += 0.0005;
  };

  return cloudsSphere;
}

export { createEarthSphere, createCloudsSphere, createBgSphere };
