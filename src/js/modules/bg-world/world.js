import { Galaxy } from './World/Galaxy';
import { Earth } from './World/Earth';

const initWorld = () => {
  // Get a reference to the container element
  const galaxyContainer = document.querySelector('#scene-galaxy');
  const earthContainer = document.querySelector('#scene-earth');
  // Create an instance of the World app
  const galaxy = new Galaxy(galaxyContainer);
  const earth = new Earth(earthContainer);
  // start the animation loop
  galaxy.start();
  earth.start();
};

export { initWorld };
