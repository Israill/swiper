const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  width: 260,
  spaceBetween: 15,
  effect: "slide",
  speed: 400,
  autoplay: {
    stopOnLastSlide: true,
    delay: 2000,
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".button-next",
    prevEl: ".swiper-button-prev",
    clickable: true,
  },
});
// swiper.on("slideChange", function () {
//   console.log("slide changed");
// });
