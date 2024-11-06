document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            alert(`Thank you, ${name}! Your message has been sent.`);
            contactForm.reset();
        });
    }

    // Admin Functionality
    const adminForm = document.getElementById('admin-form');
    const postsContainer = document.getElementById('posts');

    if (adminForm) {
        adminForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const postContent = document.getElementById('post-content').value;
            const postImage = document.getElementById('post-image').files[0];

            // Create a new post element
            const postDiv = document.createElement('div');
            postDiv.classList.add('post');

            // Create an image element if an image is uploaded
            if (postImage) {
                const img = document.createElement('img');
                img.src = URL.createObjectURL(postImage);
                img.alt = 'Post Image';
                img.style.width = '100%'; // Adjust as necessary
                img.style.borderRadius = '8px';
                postDiv.appendChild(img);
            }

            // Create a paragraph for the post content
            const contentParagraph = document.createElement('p');
            contentParagraph.textContent = postContent;
            postDiv.appendChild(contentParagraph);

            // Append the new post to the posts container
            postsContainer.appendChild(postDiv);

            // Reset the form
            adminForm.reset();
        });
    }
});
