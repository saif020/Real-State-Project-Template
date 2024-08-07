// Change Background Header
function ScrollHeader() {
  let header = document.getElementById("header");
  // when scroll is greater than 50 viewport height, add the class (scroll-header)
  if (this.scrollY >= 50) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}
window.addEventListener("scroll", ScrollHeader);

// Swipper Popular
let swiper = new Swiper(".popular-container", {
  spaceBetween: 32,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: "true",

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Value Accordion
let accordionItems = document.querySelectorAll(".value_accordion-item");

accordionItems.forEach((item) => {
  let accordionHeader = item.querySelector(".value_accordion-header");
  accordionHeader.addEventListener("click", () => {
    let openItem = document.querySelector(".accordion-open");

    toggelItem(item);

    if (openItem && openItem !== item) {
      toggelItem(openItem);
    }
  });
});

let toggelItem = (item) => {
  let accordioncontent = item.querySelector(".value_accordion-content");

  if (item.classList.contains("accordion-open")) {
    accordioncontent.removeAttribute("style");
    item.classList.remove("accordion-open");
  } else {
    accordioncontent.style.height = accordioncontent.scrollHeight + "px";
    item.classList.add("accordion-open");
  }
};

// Scroll Section Active Links
let sections = document.querySelectorAll("section[id]");

function scrollActive() {
  let scrollY = window.scrollY;

  sections.forEach((current) => {
    let sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

// Show Scroll Up
function scrollUp() {
  let scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 350) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
}

window.addEventListener("scroll", scrollUp);

// Dark Light Theme
let themeButton = document.getElementById("theme-button");
let darkTheme = "dark-theme";
let iconTheme = "bx-sun";

let selectedTheme = localStorage.getItem("selected-theme");
let selectedIcon = localStorage.getItem("selected-icon");

let getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
let getCurrentIcon = () =>
  document.body.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
