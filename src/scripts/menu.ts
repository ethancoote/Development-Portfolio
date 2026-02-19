
// open-close mobile menu
const menuBtnElem = document.querySelector("#btn-menu");
const mobileMenu = document.querySelector("#mobile-menu") as HTMLElement;

let menuOpen = false;
menuBtnElem?.addEventListener("click", () => {
    console.log(menuOpen);
    if (menuOpen) {
        menuOpen = false;
        mobileMenu.style.opacity = "0%";
        mobileMenu.style.pointerEvents = "none";
    } else {
        menuOpen = true;
        mobileMenu.style.opacity = "100%";
        mobileMenu.style.pointerEvents = "auto";
    }
});

// close menu on button click
const menuButtonArray = document.querySelectorAll(".mobile-menu-button");
menuButtonArray?.forEach(btn => {
    btn.addEventListener("click", () => {
        menuOpen = false;
        mobileMenu.style.opacity = "0%";
        mobileMenu.style.pointerEvents = "none";
    });
});


