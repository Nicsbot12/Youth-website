let isAdmin = false;
const posts = [];

document.getElementById('admin-login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('admin-username').value;
    const password = document.getElementById('admin-password').value;

    // Simple admin check (replace with real authentication in production)
    if (username === 'admin' && password === 'password') {
        isAdmin = true;
        document.getElementById('admin').style.display = 'block';
        document.getElementById('admin-dashboard').style.display = 'block';
        document.getElementById('admin-link').style.display = 'block';
        alert('Login successful!');
    } else {
        alert('Invalid credentials');
    }
});

document.getElementById('post-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('post-title').value;
    const image = document.getElementById('post-image').value;
    const content = document.getElementById('post-content').value;

    const post = { title, image, content };
    posts.push(post);
    displayPosts();
    this.reset();
});

function displayPosts() {
    const postList = document.getElementById('post-list');
    postList.innerHTML = '';
    posts.forEach((post, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<h4>${post.title}</h4><img src="${post.image}" alt="${post.title}" style="max-width:100%;"><p>${post.content}</p>
        <button class="delete-post" onclick="deletePost(${index})">Delete</button>`;
        postList.appendChild(li);
    });
}

function deletePost(index) {
    posts.splice(index, 1);
    displayPosts();
}
