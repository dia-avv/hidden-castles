function changeLanguage(language) {
    document.querySelectorAll('[data-lang-en]').forEach(element => {
        const text = element.getAttribute(`data-lang-${language}`);
        // Update the text content of the element
        element.innerText = text;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const languageSelections = document.querySelectorAll('[id^="language-select"]');
   // const languageSelect = document.getElementById('language-select');
    const storedLanguage = localStorage.getItem('language') || 'en';

    //languageSelect.value = storedLanguage;
    languageSelections.forEach (languageSelect => {
        languageSelect.value = storedLanguage;
    });
    changeLanguage(storedLanguage);

    // Add event listener for language change
   // languageSelect.addEventListener('change', (event) => {
    languageSelections.forEach (languageSelect => {
        languageSelect.addEventListener('change', (event) => {
        const selectedLanguage = event.target.value;
        changeLanguage(selectedLanguage);

        localStorage.setItem('language', selectedLanguage);
        });
    });
});
