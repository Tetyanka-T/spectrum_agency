import "./sass/main.scss";
import bgPerson from "../images/bg-person.png";
import bottle from "../images/bottle.jpg";
import bottleColor from "../images/bottle-color.jpg";
import house from "../images/house.jpg";
import houseColor from "../images/house-color.jpg";
import people from "../images/people.jpg";
import peopleColor from "../images/people-color.jpg";
import hero from "../images/hero.png";
import menuBtton from "../images/menu-btn.svg";
import closeBtn from "../images/close-btn.svg";
import cube from "../images/cube.png";
import development from "../images/development.png";
import execution from "../images/execution.png";
import monitoring from "../images/monitoring.png";
import planing from "../images/planing.png";
import person from "../images/person.png";

const menuBtn = document.querySelector(".header__burger");
const menuBody = document.querySelector(".header__menu");
if (menuBtn) {
  menuBtn.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    menuBtn.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
}
