const errBlock = document.getElementById('error-block');
const infoBlock = document.getElementById('info-block');
let posts = JSON.parse(localStorage.getItem('posts')) || [];
// localStorage.clear(); // ---------  Uncomment to clear localStorage

// Displays the form to create a post
function createPost() {
    try {
        errBlock.style.display = 'none';
        infoBlock.style.display = 'none';
        if (localStorage.getItem('user') === null) {
            throw new Error('Please login to create a post');
        }
        document.getElementById('form-section').style.display = 'block';
        document.getElementById('auth-section').style.display = 'none';
        document.getElementById('post-section').style.display = 'none';
    } catch (err) {
        errBlock.style.display = 'block';
        errBlock.innerHTML = err;
    }
}

// Saves post to localStorage
function sbtPost() {
    try {
        errBlock.style.display = 'none';
        const title = document.getElementById('title').value;
        const body = document.getElementById('body').value;
        if (title === '' || body === '') {
            throw new Error('Please fill in all fields');
        }
        const post = {
            title,
            body,
            date: new Date().toLocaleString(),
            username: JSON.parse(localStorage.getItem('user')).email,
        }
        posts.push(post);
        localStorage.setItem('posts', JSON.stringify(posts));
        document.getElementById('title').value = '';
        document.getElementById('body').value = '';
        showPosts();
    } catch (err) {
        errBlock.style.display = 'block';
        errBlock.innerHTML = err;
    }

}

// Displays all posts by iterating through the posts array
function showPosts() {
    try {
        errBlock.style.display = 'none';
        infoBlock.style.display = 'none';
        document.getElementById('form-section').style.display = 'none';
        document.getElementById('auth-section').style.display = 'none';
        const postList = document.getElementById('posts');
        postList.innerHTML = '';
        if (localStorage.getItem('user') === null) {
            throw new Error('Please login to view posts');
        }
        if (posts.length === 0) {
            // throw new Error('No posts available');
            infoBlock.style.display = 'block';
            infoBlock.innerHTML = `No posts available`;
            return;
        }
        document.getElementById('post-section').style.display = 'block';
        posts.forEach((post, index) => {
            const card = document.createElement('div');
            card.className = 'col-md-4';
            card.innerHTML = `
            <div class="card product-card m-4 ${post.username === JSON.parse(localStorage.getItem('user')).email ? 'currentUserPost' : ''}">
            <div class="card-header">
                   <i class="fa-solid fa-user"></i>
                   ${post.username === JSON.parse(localStorage.getItem('user')).email ? 'Posted by you' : 'Posted by ' + post.username}
                </div>
                <div class="card-body">
                    <h5 class="card-title">${post.title}</h5>
                    <p class="card-text">${post.body}</p>
                    <p class="card-text">Posted by: ${post.username}</p>
                    <p class="card-text">Posted on: ${post.date}</p>
                    <a role="button" onclick="addLike(${index})"><i class="fa-regular fa-heart"></i></a>
                    <span>${post.likes || 0}</span>
                    <a role="button" class="py-1" onclick="addComment(${index})"><i class="fa-regular fa-comment"></i></a>
                    <span>${post.comments ? post.comments.length : 0}</span>
                    </div>
            </div>
            `;
            postList.appendChild(card);
        });
    } catch (err) {
        errBlock.style.display = 'block';
        errBlock.innerHTML = err;
    }
}

// Enables user to like a post
function addLike(index) {
    try {
        errBlock.style.display = 'none';
        if (localStorage.getItem('user') === null) {
            throw new Error('Please login to like a post');
        }
        posts[index].likes = posts[index].likes ? posts[index].likes + 1 : 1;
        localStorage.setItem('posts', JSON.stringify(posts));
        showPosts();
    } catch (err) {
        errBlock.style.display = 'block';
        errBlock.innerHTML = err;
    }
}

// Enables user to add a comment to a post
function addComment(index) {
    try {
        errBlock.style.display = 'none';
        if (localStorage.getItem('user') === null) {
            throw new Error('Please login to comment on a post');
        }
        const comment = prompt('Enter your comment');
        if (comment === null || comment === '') {
            throw new Error('Please enter a comment');
        }
        posts[index].comments = posts[index].comments || [];
        posts[index].comments.push(comment);
        localStorage.setItem('posts', JSON.stringify(posts));
        showPosts();
    } catch (err) {
        errBlock.style.display = 'block';
        errBlock.innerHTML = err;
    }
}

// Authentite user
function authUser() {
    try {
        toggleAuth();
        errBlock.style.display = 'none';
        infoBlock.style.display = 'none';
        document.getElementById('auth-section').style.display = 'none';
        document.getElementById('post-section').style.display = 'none';
        document.getElementById('post-section').style.display = 'none';
        if (localStorage.getItem('user')) {
            infoBlock.style.display = 'block';
            document.getElementById('form-section').style.display = 'none';
            infoBlock.innerHTML = `
            <div class="container mx-2">
            <div class="container mx-2">
            <h6>User already authenticated</h6> 
            </div>
            <div class="container mx-2">
            <button class="btn btn-primary" onclick="showPosts()">View Posts</button>
            <button class="btn btn-danger" onclick="logout()">Logout</button>
            </div>
            </div>
            `;

            return;
        }
        document.getElementById('auth-section').style.display = 'block';
        const email = document.getElementById('authEmail').value;
        const password = document.getElementById('authPass').value;
        if (email === '' || password === '') {
            throw new Error('Please fill in all fields');
        }
        const user = {
            email,
            password
        }
        localStorage.setItem('user', JSON.stringify(user));
        toggleAuth();
        showPosts();
    } catch (err) {
        errBlock.style.display = 'block';
        errBlock.innerHTML = err;
    }
}

// Logs out user
function logout() {
    localStorage.removeItem('user');
    toggleAuth();
    window.location.reload();
}

// Toggles the login/logout button text
function toggleAuth() {
    let text = document.getElementById('loginText');
    if (localStorage.getItem('user')) {
        text.innerHTML = 'Logout <i class="fa-solid fa-right-from-bracket"></i>';
    } else {
        text.innerHTML = 'Login <i class="fa-solid fa-right-from-bracket"></i> ';
    }
}

window.onload = () => {
    const user = localStorage.getItem('user');
    if (user) {
        showPosts();
    } else {
        authUser();
    }
    toggleAuth();
}
