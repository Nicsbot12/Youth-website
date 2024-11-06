document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('admin-form');
    const postsContainer = document.getElementById('posts');

    // Load posts from local storage
    loadPosts();

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const postContent = document.getElementById('post-content').value;
        const postImage = document.getElementById('post-image').files[0];

        if (postContent && postImage) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const newPost = {
                    content: postContent,
                    image: e.target.result // Base64 image string
                };
                savePost(newPost);
                displayPost(newPost);
                form.reset(); // Clear the form
            };
            reader.readAsDataURL(postImage); // Convert image to base64
        }
    });

    function savePost(post) {
        let posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.push(post);
        localStorage.setItem('posts', JSON.stringify(posts));
    }

    function loadPosts() {
        const posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.forEach(post => displayPost(post));
    }

    function displayPost(post) {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `
            <p>${post.content}</p>
            <img src="${post.image}" alt="Post Image" style="max-width: 100%; height: auto;">
        `;
        postsContainer.appendChild(postDiv);
    }
});
