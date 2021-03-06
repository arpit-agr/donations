import createGlobe from "cobe";

let phi = 3.5;
let canvas = document.getElementById("cobe");

const globe = createGlobe(canvas, {
  devicePixelRatio: 2,
  width: 600 * 2,
  height: 600 * 2,
  phi: 0,
  theta: 0,
  dark: 1,
  diffuse: 1.2,
  mapSamples: 16000,
  mapBrightness: 6,
  baseColor: [0.3, 0.3, 0.3],
  markerColor: [0.1, 0.8, 1],
  glowColor: [1, 1, 1],
  markers: [
    // latitude longitude
    { location: [19.075983, 72.877655], size: 0.05 },
    { location: [1.290270, 103.851959], size: 0.05 },
    { location: [35.893955, 117.924896], size: 0.05 }
  ],
  onRender: (state) => {
    // Called on every animation frame.
    // `state` will be an empty object, return updated params.
    state.phi = phi;
    phi -= 0.005;
  }
});

// `globe` will be a Phenomenon (https://github.com/vaneenige/phenomenon) instance.
// To pause requestAnimationFrame:
// `globe.toggle()`
// To remove the instance:
// `globe.destroy()`
// ...