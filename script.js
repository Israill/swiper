const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  width: 260,
  spaceBetween: 15,
  effect: "slide",
  speed: 400,
  // autoplay: {
  //   stopOnLastSlide: true,
  //   delay: 2000,
  // },
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

// Создаем медиа условие, проверяющее viewports на ширину не менее 768 пикселей.
const mediaQuery = window.matchMedia("(min-width: 768px)");
function handleTabletChange(e) {
  if (e.matches) {
    swiper = new Swiper(".swiper", {});
  }
}
// mediaQuery.addListener(handleTabletChange)
// handleTabletChange(mediaQuery)
// swiper.on("slideChange", function () {
//   console.log("slide changed");
// });

window.onload = function () {
  let gridSlide = document.getElementsByClassName("swiper-slide-grid-wrapper");
  console.log(gridSlide);
  let btn = document.getElementById("button");
  console.log(btn);
  for (let i = 6; i < gridSlide.length; i++) {
    gridSlide[i].style.display = "none";
  }

  let countCard = 6;
  btn.addEventListener("click", function () {
    let box = document.getElementsByClassName("swiper-slide-grid-wrapper");
    countCard = box.length;
    if (countCard <= box.length) {
      for (let i = 0; i < countCard; i++) {
        console.log("rwqeklfdeqlknmd");
        box[i].style.display = "block";
      }
    }
  });
};
