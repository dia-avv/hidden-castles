function toggleMenu() {
    const navLinks = document.querySelectorAll('[id^="nav-links"]');
    navLinks.forEach((navLink) => {
        navLink.classList.toggle('active');
    });
}

const burgers = document.querySelectorAll('[id^="burger"]');

burgers.forEach((burger) => {
    burger.addEventListener('click', toggleMenu);
});

