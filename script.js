// Show/hide extended "About Us" content
const knowMoreBtn = document.getElementById('know-more');
const aboutExtended = document.querySelector('.about-extended');

knowMoreBtn.addEventListener('click', () => {
    aboutExtended.style.display = aboutExtended.style.display === 'none' ? 'block' : 'none';
});

// Submit contact form
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const data = {};

    for (const [key, value] of formData.entries()) {
        data[key] = value;
    }

    // Send data to the email address
    fetch('https://formspree.io/your@email.com', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (response.ok) {
                alert('Thank you for your message!');
                contactForm.reset();
            } else {
                alert('Something went wrong. Please try again later.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Something went wrong. Please try again later.');
        });
});