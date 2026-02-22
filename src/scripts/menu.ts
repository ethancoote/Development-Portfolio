
// open-close mobile menu
const menuBtnElem = document.querySelector("#btn-menu");
const burgerImg = document.querySelector("#burger-img") as HTMLImageElement;
const mobileMenu = document.querySelector("#mobile-menu") as HTMLElement;

let menuOpen = false;
menuBtnElem?.addEventListener("click", () => {
    if (menuOpen) {
        menuOpen = false;
        mobileMenu.style.opacity = "0%";
        mobileMenu.style.pointerEvents = "none";
        document.body.style.overflow = "auto"; 
        burgerImg.src = "./images/open.svg";
    } else {
        menuOpen = true;
        mobileMenu.style.opacity = "100%";
        mobileMenu.style.pointerEvents = "auto";
        document.body.style.overflow = "hidden";
        burgerImg.src = "./images/close.svg";
    }
});

// close menu on button click
const menuButtonArray = document.querySelectorAll(".mobile-menu-button");
menuButtonArray?.forEach(btn => {
    btn.addEventListener("click", () => {
        menuOpen = false;
        mobileMenu.style.opacity = "0%";
        mobileMenu.style.pointerEvents = "none";
        document.body.style.overflow = "auto";
        burgerImg.src = "./images/open.svg";
    });
});


