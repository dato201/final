let headerNav = document.querySelector(".header_nav");
let burger = document.querySelector("#burger");
let porm = document.querySelector(".porm");
let xmark = document.querySelector(".xmark");

burger.addEventListener("click", () => {
    headerNav.style.display = "block";
    porm.style.display = "flex";
    xmark.style.display = "block";
    burger.style.display = "none";

});

xmark.addEventListener("click", () => {
    headerNav.style.display = "none";
    porm.style.display = "none";
    xmark.style.display = "none";
    burger.style.display = "block";
});

