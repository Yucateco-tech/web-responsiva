const navToogle = document.querySelector("#navToggle");
const mobilePanel = document.querySelector("#mobilePanel");

function closeMenu() {
    navToogle.setAttribute("aria-expanded", "false");
    mobilePanel.hidden = true;
}

function openMenu() {
    navToogle.setAttribute("aria-expanded", "true");
    mobilePanel.hidden = false;
}

navToogle.addEventListener("click", () => {
    const expanded = navToogle.getAttribute("aria-expanded") === "true";
    expanded ? closeMenu() : openMenu();
});

document.querySelectorAll(".panel-link, .panel-cta").forEach((a) => {
    a.addEventListener("click", closeMenu)
})

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
})