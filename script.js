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

const mediaQuery = window.matchMedia("(min-width: 1120px)");
function handleTabletChange(e) {
  if (e.matches) {
    let gridSlide = document.getElementsByClassName(
      "swiper-slide-grid-wrapper"
    );
    let btn = document.getElementById("button");
    btn.removeAttribute("disabled");
    for (let i = 8; i < gridSlide.length; i++) {
      gridSlide[i].style.display = "none";
    }
    for (let i = 6; i < 8; i++) {
      gridSlide[i].style.display = "block";
    }

    let countCard = 6;
    btn.addEventListener("click", function () {
      let btnText = document.getElementById("button-text").textContent;
      let img;
      console.log(btnText);
      let box = document.getElementsByClassName("swiper-slide-grid-wrapper");
      document.getElementById("button-text").textContent =
        document.getElementById("button-text").textContent == "Показать все"
          ? "Скрыть"
          : "Показать все";

      if (countCard < box.length) {
        countCard = 11;
        img = document.getElementById("button-img");
        img.setAttribute("src", "/img/iconup.svg");
        for (let i = 0; i < countCard; i++) {
          box[i].style.display = "block";
        }
      } else {
        for (let i = 8; i < box.length; i++) {
          box[i].style.display = "none";
        }
        countCard = 8;
        img = document.getElementById("button-img");
        img.setAttribute("src", "/img/icondown.svg");
      }
    });
  } else {
    document.getElementById("button-text").textContent = "Показать все";
    let gridSlide = document.getElementsByClassName(
      "swiper-slide-grid-wrapper"
    );
    let btn = document.getElementById("button");
    btn.setAttribute("disabled", true);

    for (let i = 6; i < gridSlide.length; i++) {
      gridSlide[i].style.display = "none";
    }
  }
}
mediaQuery.addListener(handleTabletChange);
handleTabletChange(mediaQuery);

// mediaQuery.addListener(handleTabletChange)
// handleTabletChange(mediaQuery)
// swiper.on("slideChange", function () {
//   console.log("slide changed");
// });
