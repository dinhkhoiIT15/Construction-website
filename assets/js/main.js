// ========== SHOW MENU ==========
const navMenu = document.getElementById("nav-menu"),
    navToogle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");

//Menu show
if (navToogle) {
    navToogle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}

// Menu hidden
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

// ========== REMOVE MENU MOBILE ==========
const navLink = document.querySelectorAll(".nav-link");
const linkAction = () => {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

// ========== CHANGE BACKGROUND HEADER ==========
const bgHeader = () => {
    const header = document.getElementById("header");
    this.scrollY >= 50
        ? header.classList.add("bg-header")
        : header.classList.remove("bg-header");
};
window.addEventListener("scroll", bgHeader);

// ========== SWIPER SERVICES==========
const swiperServices = new Swiper(".services-swiper", {
    loop: true,
    grabCursor: true,
    spaceBetween: 24,
    slidesPerView: "auto",

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});

// ========== SHOW SCROLL BAR ==========
const scrollUp = () => {
    const scrollUp = document.getElementById("scrollup");
    this.scrollY >= 350
        ? scrollUp.classList.add("show-scroll")
        : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

// ========== SCROLL ACTIVE LINKLINK ==========
const sections = document.querySelectorAll("section[id]");
const scrollActive = () => {
    const scrollDown = window.scrollY;
    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute("id"),
            sectionClass = document.querySelector(
                ".nav-menu a[href*=" + sectionId + "]"
            );
        if (
            scrollDown > sectionTop &&
            scrollDown <= sectionTop + sectionHeight
        ) {
            sectionClass.classList.add("active-link");
        } else {
            sectionClass.classList.remove("active-link");
        }
    });
};
window.addEventListener("scroll", scrollActive);

// ========== SCROLL REVEAL ANIMATION ==========
const sr = ScrollReveal({
    origin: "top",
    distance: "100px",
    duration: 2500,
    delay: 400
    // reset: true
});
sr.reveal(`.home-content, .services-data, .services-swiper, .footer-container`);
sr.reveal(`.home-images`, { origin: "bottom", delay: 1000 });
sr.reveal(`.about-images, .contact-img`, { origin: "left" });
sr.reveal(`.about-data, .contact-data`, { origin: "right" });
sr.reveal(`.projects-card`, { interval: 100 });
