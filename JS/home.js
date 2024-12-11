const banners = document.querySelectorAll('.banner');

const prevButtons = document.querySelectorAll('[id^="prev"]');
const nextButtons = document.querySelectorAll('[id^="next"]');

let currentIndex = 0;

function showBanner (index) {
    banners.forEach(banner => banner.classList.remove('active'));
    banners[index].classList.add('active');
}

showBanner(currentIndex);

nextButtons.forEach((button) => {
    button.addEventListener('click', () =>{
        currentIndex = (currentIndex + 1) % banners.length; //loops if it gets to the end
        showBanner(currentIndex);
    });
});

prevButtons.forEach((button) => {
    button.addEventListener('click', () =>{
        currentIndex = (currentIndex - 1 + banners.length) % banners.length; //loops if it gets to the end
        showBanner(currentIndex);
    });
});
