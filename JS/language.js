function changeLanguage(language) {
    document.querySelectorAll('[data-lang-en]').forEach(element => {
        const text = element.getAttribute(`data-lang-${language}`);
        // update the text content of the element
        element.innerText = text;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const languageSelections = document.querySelectorAll('[id^="language-select"]');
    const storedLanguage = localStorage.getItem('language') || 'en';

    languageSelections.forEach (languageSelect => {
        languageSelect.value = storedLanguage;
    });
    changeLanguage(storedLanguage);

    // add event listener for language change
    languageSelections.forEach (languageSelect => {
        languageSelect.addEventListener('change', (event) => {
        const selectedLanguage = event.target.value;
        changeLanguage(selectedLanguage);

        localStorage.setItem('language', selectedLanguage);
        });
    });
});
