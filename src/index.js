import "./sass/main.scss";
import bottle from "../images/bottle.jpg";
import bottleColor from "../images/bottle-color.jpg";
import house from "../images/house.jpg";
import houseColor from "../images/house-color.jpg";
import people from "../images/people.jpg";
import peopleColor from "../images/people-color.jpg";
import hero from "../images/hero.png";
import cube from "../images/cube.png";
import development from "../images/development.png";
import execution from "../images/execution.png";
import monitoring from "../images/monitoring.png";
import planing from "../images/planing.png";
import sneakers from "../images/sneakers.jpg";
import sneakersColor from "../images/sneakers-color.jpg";
import arrow from "../images/arrow.png";
import human from "../images/human.jpg";
import menu from "../images/menu.png";
import closebtn from "../images/closebtn.png";

const menuBtn = document.querySelector(".header__burger");
const menuBody = document.querySelector(".header__menu");
if (menuBtn) {
  menuBtn.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    menuBtn.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
}
const menuLinks = document.querySelectorAll(".header__menu__link[data-goto]");
if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });
}
function onMenuLinkClick(e) {
  const menuLink = e.target;
  if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
    const gotoBlock = document.querySelector(menuLink.dataset.goto);
    const gotoBlockValue =
      gotoBlock.getBoundingClientRect().top +
      scrollY -
      -document.querySelector(".header").offsetHeight;

    if (menuBtn.classList.contains("_active")) {
      document.body.classList.remove("_lock");
      menuBtn.classList.remove("_active");
      menuBody.classList.remove("_active");
    }
    window.scrollTo({
      top: gotoBlockValue,
      behavior: "smooth",
    });
  }
  e.preventDefault();
}
