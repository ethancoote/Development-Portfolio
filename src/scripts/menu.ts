
// open-close mobile menu
const menuBtnElem = document.querySelector("#btn-menu");
const burgerImg = document.querySelector("#burger-img") as HTMLImageElement;
const mobileMenu = document.querySelector("#mobile-menu") as HTMLElement;

let menuOpen = false;
menuBtnElem?.addEventListener("click", () => {
    if (menuOpen) {
        closeMenu()
    } else {
        menuOpen = true;
        mobileMenu.style.zIndex = "10";
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
        closeMenu();
    });
});

function closeMenu () {
    menuOpen = false;
    mobileMenu.style.opacity = "0%";
    mobileMenu.style.pointerEvents = "none";
    document.body.style.overflow = "auto"; 
    burgerImg.src = "./images/open.svg";
    setTimeout(() => {
        mobileMenu.style.zIndex = "-1";
    }, 250);
}


