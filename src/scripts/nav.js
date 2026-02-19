// MOBILE MENU OPEN / CLOSE
let burgerBtn = document.querySelector("#hamburger");
let burgerMenu = document.querySelector(".mobileMenu");
let burgerMenuButtons = document.querySelectorAll("a");
const menuClosePosition = "-450px";

// open & close mobile navigation
let menuOpen = false;
burgerBtn.addEventListener("click", function () {
    if (!menuOpen) {
        burgerMenu.style.top = "0px";
        burgerBtn.style.backgroundPosition = "center left 50px, center";
        menuOpen = true;
    } 
    else if (menuOpen) {
        burgerMenu.style.top = menuClosePosition;
        burgerBtn.style.backgroundPosition = "center, center left 50px";
        menuOpen = false;
    } 
});

burgerMenuButtons.forEach(anchor => {
    anchor.addEventListener("click", function () {
        if (menuOpen) {
            burgerMenu.style.top = menuClosePosition;
            burgerBtn.style.backgroundPosition = "center, center left 50px";
            menuOpen = false;
        }
    });
});