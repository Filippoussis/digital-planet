import { createScene } from './components/scene';
import { createCamera } from './components/camera';
import { createLights } from './components/lights';
import { createEarthSphere, createCloudsSphere } from './components/sphere';

import { createRenderer } from './systems/renderer';
import { Resizer } from './systems/Resizer';
import { Loop } from './systems/Loop';

class Earth {
  #loop;
  #resizer;
  #scene = createScene();
  #camera = createCamera();
  #lights = createLights();
  #earthSphere = createEarthSphere();
  #cloudsSphere = createCloudsSphere();
  #renderer = createRenderer();

  constructor(container) {
    container.append(this.#renderer.domElement);
    this.#scene.add(this.#earthSphere, this.#lights);
    this.#scene.add(this.#cloudsSphere, this.#lights);
    this.#loop = new Loop(this.#camera, this.#scene, this.#renderer);
    this.#resizer = new Resizer(container, this.#camera, this.#renderer);
    this.#loop.updatables.push(this.#earthSphere);
    this.#loop.updatables.push(this.#cloudsSphere);
  }

  // 2. Render the scene
  render() {
    this.#renderer.render(this.#scene, this.#camera);
  }

  start() {
    this.#loop.start();
  }

  stop() {
    this.#loop.stop();
  }
}

export { Earth };
