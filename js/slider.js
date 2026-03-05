const slider = tns({
  container: ".reviewSlider",
  items: 1,
  slideBy: 1,
  speed: 400,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayButtonOutput: false,
  controls: false, // remove arrows
  nav: true, // dots below
  navPosition: "bottom",
  rewind: true,
});
