const mobileMenu = document.querySelector("#mobileMenu");
const mobile = document.querySelector(".mobile");
const mobileTitle = document.querySelector(".mobileTitle");

mobileMenu.addEventListener("click", () => {
    mobile.classList.toggle("active");
    mobileTitle.classList.toggle("hidden");
    mobileMenu.classList.toggle("hidden");
})

const mobileClose = document.querySelector("#mobileClose");
mobileClose.addEventListener("click", () => {
    mobile.classList.toggle("active");
    mobileTitle.classList.toggle("hidden");
    mobileMenu.classList.toggle("hidden");
})