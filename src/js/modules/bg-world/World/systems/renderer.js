import { WebGLRenderer } from 'three';

function createRenderer() {
  const renderer = new WebGLRenderer({ antialias: true });

  // turn on the physically correct lighting model
  renderer.physicallyCorrectLights = true;
  renderer.setClearColor(0x000000, 0);

  return renderer;
}

export { createRenderer };
