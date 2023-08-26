import { createScene } from './components/scene';
import { createCamera } from './components/camera';
import { createLights } from './components/lights';
import { createBgSphere } from './components/sphere';

import { createRenderer } from './systems/renderer';
import { Resizer } from './systems/Resizer';
import { Loop } from './systems/Loop';

class Galaxy {
  #loop;
  #resizer;
  #scene = createScene();
  #camera = createCamera();
  #lights = createLights();
  #bgSphere = createBgSphere();
  #renderer = createRenderer();

  constructor(container) {
    container.append(this.#renderer.domElement);
    this.#scene.add(this.#bgSphere, this.#lights);
    this.#loop = new Loop(this.#camera, this.#scene, this.#renderer);
    this.#resizer = new Resizer(container, this.#camera, this.#renderer);
    this.#loop.updatables.push(this.#bgSphere);
  }

  // 2. Render the scene
  render() {
    // draw a single frame
    this.#renderer.render(this.#scene, this.#camera);
  }

  start() {
    this.#loop.start();
  }

  stop() {
    this.#loop.stop();
  }
}

export { Galaxy };
