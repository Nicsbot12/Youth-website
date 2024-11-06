document.getElementById('load-more').addEventListener('click', function() {
    const eventList = document.getElementById('event-list');
    const newEvents = [
        'Volunteer Day - May 5, 2024',
        'Annual Fundraiser - June 12, 2024'
    ];

    newEvents.forEach(event => {
        const li = document.createElement('li');
        li.textContent = event;
        eventList.appendChild(li);
    });

    this.style.display = 'none'; // Hide the button after loading more events
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    alert('Thank you for your message, ' + document.getElementById('name').value + '! We will get back to you soon.');
    this.reset(); // Reset the form fields
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
