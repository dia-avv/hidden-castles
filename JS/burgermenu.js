function toggleMenu() {
    const navLinks = document.querySelectorAll('[id^="nav-links"]'); //there are more nav-links, so applying this for all
    navLinks.forEach((navLink) => {
        navLink.classList.toggle('active');
    });
}

const burgers = document.querySelectorAll('[id^="burger"]'); //there are more burgers, so applying this for all

burgers.forEach((burger) => {
    burger.addEventListener('click', toggleMenu);
});

