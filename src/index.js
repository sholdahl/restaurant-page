import renderHome from './home-page-load';
import { renderMenu, menuOptions } from './menu-load';
import renderContact from './contact-load';

const homeLink = document.querySelector(".home-link");
const menuLink = document.querySelector(".menu-link");
const contactLink = document.querySelector(".contact-link");
const contentHolder = document.querySelector("#content-holder");

const clearPage = () => {

    while (contentHolder.firstChild) {
        contentHolder.removeChild(contentHolder.firstChild);
    }
};

const changeActive = (e) => {
    homeLink.classList.remove("active");
    menuLink.classList.remove("active");
    contactLink.classList.remove("active");
    e.path[1].classList.add("active");
}

const clearRenderHome = (e) => {
    clearPage(); 
    changeActive(e);
    renderHome();
};
const clearRenderMenu = (e) => {
    clearPage(); 
    changeActive(e);
    renderMenu();
};
const clearRenderContact = (e) => {
    clearPage();
    changeActive(e);
    renderContact();
};

homeLink.addEventListener("click", clearRenderHome);
menuLink.addEventListener("click", clearRenderMenu);
contactLink.addEventListener("click", clearRenderContact);

renderHome()
console.log("test")