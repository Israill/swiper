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
  console.log(gridSlide.length + "one");
  let btn = document.getElementById("button");
  for (let i = 6; i < gridSlide.length; i++) {
    gridSlide[i].style.display = "none";
  }

  let countCard = 6;
  btn.addEventListener("click", function () {
    let box = document.getElementsByClassName("swiper-slide-grid-wrapper");
    console.log(box.length + "two");
    let img;
    let imgSrc;
    if (countCard < box.length) {
      countCard = 8;
      img = document.getElementById("button-img");
      img.setAttribute("src", "/img/iconup.svg");
      for (let i = 0; i < countCard; i++) {
        box[i].style.display = "block";
        console.log(box.length + "three");
      }
    } else {
      for (let i = 6; i < box.length; i++) {
        box[i].style.display = "none";
        console.log(box.length + "four");
      }
      countCard = 6;
      img = document.getElementById("button-img");
      img.setAttribute("src", "/img/icondown.svg");
    }
  });
};
