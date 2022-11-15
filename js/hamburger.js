const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    hamburger.classList.toggle ("clicked")
}



const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    hamburger.classList.remove("clicked");
}

window.addEventListener('scroll', () => {
    if
    (navMenu.classList.contains('active')) {
        
        navMenu.classList.remove('active')
        hamburger.classList.remove('clicked')
    }
}

)

