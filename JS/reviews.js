// function to fetch and display reviews
let reviews = [];

function fetchReviews() {
    const storedReviews = JSON.parse(localStorage.getItem('reviews'));
    if (storedReviews) {
        reviews = storedReviews; // load from localStorage if available
    } else {
        fetch('../JSON/reviews.json')  // fetch from the JSON file if no reviews are in localStorage
            .then(response => response.json())
            .then(fetchedReviews => {
                reviews = fetchedReviews;  // Load fetched reviews
                localStorage.setItem('reviews', JSON.stringify(reviews));  // save to localStorage
            })
            .catch(error => console.error('Error loading reviews:', error));
    }
    displayReviews();
}

function displayReviews(){
    // Sort reviews by date in descending order
    reviews.sort((a, b) => new Date(b.date) - new Date(a.date));
            const limitedReviews = reviews.slice(0, 3);
            const reviewsContainer = document.getElementById('reviews-container');
            reviewsContainer.innerHTML = '';

            limitedReviews.forEach(review => {
                const reviewElement = document.createElement('div');
                reviewElement.classList.add('review');
                reviewElement.innerHTML = `
                    <img src="${review.photo}" alt="Review Picture">
                    <div>
                    <p>"${review.text}"</p>
                    <h3>${review.name}</h3>
                    </div>
                `;
                reviewsContainer.appendChild(reviewElement);
            });
}

fetchReviews();

const formContainer = document.getElementById('review-form-container');
const writeButtons = document.querySelectorAll('[id^="write"]');
const cancelButton = document.getElementById('close-btn');
const form = document.getElementById('review-form');

//open form when 'Write Your Review' buttons are clicked
writeButtons.forEach((button) => {
    button.addEventListener('click', () => {
        formContainer.classList.add('show');
    });
});

cancelButton.addEventListener('click', () => {
    formContainer.classList.remove('show');
});

// close form when clicking outside of the form contaier
window.addEventListener('click', (event) => {
    if (event.target === formContainer) {
        formContainer.classList.remove('show');
    }
});

form.addEventListener ('submit', () => {
    const name = document.getElementById('name').value;
    const text = document.getElementById('review-text').value;

    const newReview = {
        name: name,
        text: text,
        date: new Date().toISOString()
    };
    reviews.push(newReview);
    localStorage.setItem('reviews', JSON.stringify(reviews));
    displayReviews();

    formContainer.classList.remove('show');
    form.reset();
});