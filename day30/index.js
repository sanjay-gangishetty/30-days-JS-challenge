const formSection = document.getElementById('form-section');
const postsSection = document.getElementById('post-section');
const sectionHeadText = document.getElementById('section-head-text');
const authSection = document.getElementById('auth-section');
const profileSection = document.getElementById('profile-section');
const infoBlock = document.getElementById('info-block');
const errorBlock = document.getElementById('error-block');
const posts = localStorage.getItem('posts') ? JSON.parse(localStorage.getItem('posts')) : [];
const users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : {};
const notifications = localStorage.getItem('notifications') ? JSON.parse(localStorage.getItem('notifications')) : [];
const notificationSection = document.getElementById('notifications-section');

// localStorage.clear(); // ------------------- Uncomment this line to clear local storage

// Function to show posts
function showPosts() {
    try {
        setBlocksToNone();
        postsSection.style.display = 'block';
        sectionHeadText.innerText = 'Posts';
        const postList = document.getElementById('posts');
        postList.innerHTML = '';
        if (posts.length === 0) {
            throw ('No posts are available to show');
        }
        if (localStorage.getItem('currentUser') === null) {
            throw ('Please login to view posts');
        }
        if (posts.length === 0) {
            infoBlock.style.display = 'block';
            infoBlock.innerHTML = `No posts available`;
            return;
        }
        posts.forEach((post, index) => {
            const card = document.createElement('div');
            card.className = 'col-md-4';
            card.innerHTML = `
            <div class="card product-card m-4 ${post.username === JSON.parse(localStorage.getItem('currentUser')).username ? 'currentUserPost' : ''}">
                <div class="card-header">
                    <i class="fa-solid fa-user"></i>
                    ${post.username === JSON.parse(localStorage.getItem('currentUser')).username ? 'Posted by you' : 'Posted by ' + post.username}
                </div>
                <div class="card-body">
                    <h5 class="card-title">${post.title}</h5>
                    <p class="card-text">${post.body}</p>
                    <p class="card-text">Posted by: ${post.username}</p>
                    <p class="card-text">Posted on: ${post.date}</p>
                    <a role="button" onclick="addLike(${index},'${post.username}')"><i class="fa-regular fa-heart"></i></a>
                    <span>${post.likes || 0}</span>
                    <a role="button" class="py-1" onclick="addComment(${index},'${post.username}')"><i class="fa-regular fa-comment"></i></a>
                    <span>${post.comments ? post.comments.length : 0}</span>
                </div>
            </div>
            `;
            postList.appendChild(card);
        });
    } catch (e) {
        console.log(e);
        infoBlock.style.display = 'block';
        infoBlock.innerText = e;
    }
}

// Function to add like to a post
function addLike(index, postBy) {
    try {
        if (localStorage.getItem('currentUser') === null) {
            throw ('Please login to like a post');
        }
        posts[index].likes = posts[index].likes ? posts[index].likes + 1 : 1;
        localStorage.setItem('posts', JSON.stringify(posts));
        if (postBy != JSON.parse(localStorage.getItem('currentUser')).username) {
            return showPosts();
        }
        notifications.push({
            title: 'Post liked',
            postedBy: postBy,
            body: `Your post ${posts[index].title} was liked by ${JSON.parse(localStorage.getItem('currentUser')).username}`,
            date: new Date().toLocaleString(),
        });
        localStorage.setItem('notifications', JSON.stringify(notifications));
        showPosts();
    } catch (e) {
        console.log(e);
        errorBlock.style.display = 'block';
        errorBlock.innerText = e;
    }
}

// Function to add comment to a post
function addComment(index, postBy) {
    try {
        if (localStorage.getItem('currentUser') === null) {
            throw ('Please login to comment on a post');
        }
        const comment = prompt('Enter your comment');
        if (!comment) {
            throw ('Please enter a comment');
        }
        posts[index].comments = posts[index].comments || [];
        posts[index].comments.push(comment);
        localStorage.setItem('posts', JSON.stringify(posts));
        notifications.push({
            title: 'Commented on post',
            postedBy: postBy,
            body: `Your post ${posts[index].title} was commented by ${JSON.parse(localStorage.getItem('currentUser')).username}`,
            date: new Date().toLocaleString(),
        });
        localStorage.setItem('notifications', JSON.stringify(notifications));
        showPosts();
    } catch (e) {
        console.log(e);
        errorBlock.style.display = 'block';
        errorBlock.innerText = e;
    }
}

// Function to show post form
function showPostForm() {
    try {
        setBlocksToNone();
        if (localStorage.getItem('currentUser') === null) {
            showAuthForm();
            throw ('Please login to create a post');
        }
        formSection.style.display = 'block';
    } catch (e) {
        console.log(e);
        errorBlock.style.display = 'block';
        errorBlock.innerText = e;
    }
}

// Function to show notifications
function showNotifications() {
    try {
        setBlocksToNone();
        if (localStorage.getItem('currentUser') === null) {
            showAuthForm();
            throw ('Please login to view notifications');
        }
        notificationSection.style.display = 'block';
        sectionHeadText.innerText = 'Notifications';
        const notificationList = document.getElementById('notifications');
        notificationList.innerHTML = '';
        if (notifications.length === 0) {
            throw ('No notifications available to show');
        }
        notifications.forEach((notification, index) => {
            const card = document.createElement('div');
            card.className = 'col-md-4';
            card.innerHTML = `
                <div class="card product-card m-4">
                    <div class="card-header">
                        <i class="fa-solid fa-bell"></i>
                        ${notification.title}
                    </div>
                    <div class="card-body">
                        <p class="card-text">${notification.body}</p>
                        <p class="card-text">Date: ${notification.date}</p>
                    </div>
                </div>
                `;
            notificationList.appendChild(card);
        });
    } catch (e) {
        console.log(e);
        infoBlock.style.display = 'block';
        infoBlock.innerText = e;
    }
}

// Function to create a new post
function addPost() {
    try {
        const title = document.getElementById('title').value;
        const body = document.getElementById('body').value;
        const username = JSON.parse(localStorage.getItem('currentUser')).email;
        if (!title || !body) {
            throw ('Please fill all the fields');
        }
        const post = {
            title,
            body,
            username,
        };
        posts.push(post);
        document.getElementById('title').value = '';
        document.getElementById('body').value = '';
        infoBlock.style.display = 'block';
        infoBlock.innerText = 'Post added successfully!';
        localStorage.setItem('posts', JSON.stringify(posts));
        console.log(posts);
        return;
    } catch (e) {
        console.log(e);
        errorBlock.style.display = 'block';
        errorBlock.innerText = e;
    }
}

// Function to show auth form
function showAuthForm() {
    setBlocksToNone();
    sectionHeadText.innerText = 'Auth Form';
    authSection.style.display = 'block';
}

// Function to authenticate user
function authUser() {
    try {
        const username = document.getElementById('authUsername').value;
        const email = document.getElementById('authEmail').value;
        const password = document.getElementById('authPass').value;
        if (!username || !password || !email) {
            throw ('Please fill all the fields');
        }
        const userDetail = findUser(username, email);
        console.log(userDetail);
        if (userDetail == undefined) {
            showSignUpForm();
            return;
        } else {
            if (loginUser(username, password)) {
                showUserProfile();
            }
        }
        toggleAuth();
        return;

    } catch (e) {
        console.log(e);
        errorBlock.style.display = 'block';
        errorBlock.innerText = e;
    }
}

// Function to show sign up form
function showSignUpForm() {
    try {
        setBlocksToNone();
        sectionHeadText.innerText = 'Sign Up Form';
        authSection.style.display = 'block';
        const username = document.getElementById('authUsername').value;
        const email = document.getElementById('authEmail').value;
        const password = document.getElementById('authPass').value;
        username.value = '';
        email.value = '';
        password.value = '';
        let res = prompt('User not found. Do you want to sign up?');
        if (res == null) {
            return showAuthForm();
        } else {
            registerUser(username, email, password);
            authUser();
        }
    } catch (e) {
        console.log(e);
        errorBlock.style.display = 'block';
        errorBlock.innerText = e;
    }
}

// Function to update user profile
function updateUser() {
    try {
        const userDetail = JSON.parse(localStorage.getItem('currentUser'));
        if (!userDetail) {
            throw 'No user is logged in';
        }
        const { username, email, password } = userDetail;
        const profileUserName = document.getElementById('profileUsername').value;
        const profileEmail = document.getElementById('profileEmail').value;
        const profilePassword = document.getElementById('profilePass').value;

        if (!profileUserName || !profileEmail || !profilePassword) {
            throw 'Please fill all the fields';
        }
        const users = JSON.parse(localStorage.getItem('users')) || [];
        if (profileUserName === username && profileEmail === email && profilePassword === password) {
            throw 'No changes found';
        }
        const userExists = users.find(user =>
            (user.username === profileUserName && user.username !== username) ||
            (user.email === profileEmail && user.email !== email)
        );
        if (userExists) {
            throw 'Username or email already exists';
        }
        const userIndex = users.findIndex(user => user.username === username && user.email === email && user.password === password);
        if (userIndex !== -1) {
            users[userIndex] = { username: profileUserName, email: profileEmail, password: profilePassword };
            const newUserObj = { username: profileUserName, email: profileEmail, password: profilePassword };
            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('currentUser', JSON.stringify(newUserObj));
            infoBlock.style.display = 'block';
            infoBlock.innerText = 'User updated successfully';
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        } else {
            throw 'User not found';
        }
    } catch (e) {
        console.log(e);
        errorBlock.style.display = 'block';
        errorBlock.innerText = e;
    }
}

// Function to find user 
function findUser(username, email) {
    const userDetail = users.find(user => user.username === username && user.email === email);
    return userDetail;
}

// Function to register user
function registerUser(username, email, password) {
    const user = { username, email, password };
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(user));
}

// Function to login user
function loginUser(username, password) {
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        window.location.reload();
        return true;
    } else {
        return false;
    }
}

// Function to logout user
function logoutUser() {
    var modalElement = document.getElementById('exampleModal');
    var modalInstance = bootstrap.Modal.getInstance(modalElement);
    modalInstance.hide();
    localStorage.removeItem('currentUser');
    setBlocksToNone();
    sectionHeadText.innerText = 'Logged out successfully';
    setBlocksToNone();
    toggleAuth();
    setTimeout(() => {
        showPosts();
    }, 2000);
}

// Function to show user profile
function showUserProfile() {
    try {
        setBlocksToNone();
        const user = localStorage.getItem('currentUser');

        if (!user) {
            showAuthForm();
            throw ('Please login to view profile');
        }
        localStorage.getItem('currentUser') ? sectionHeadText.innerText = 'User Profile' : sectionHeadText.innerText = 'Please login to view profile';
        sectionHeadText.innerText = 'User Profile';
        profileSection.style.display = 'block';
        const profileUserName = document.getElementById('profileUsername');
        const profileEmail = document.getElementById('profileEmail');
        const profilePassword = document.getElementById('profilePass');

        profileUserName.value = currentUser.username;
        profileEmail.value = currentUser.email;
        profilePassword.value = currentUser.password;
    } catch (e) {
        console.log(e);
        errorBlock.style.display = 'block';
        errorBlock.innerText = e;
    }
}

// Function to set all blocks display style to none
function setBlocksToNone() {
    infoBlock.style.display = 'none';
    errorBlock.style.display = 'none';
    formSection.style.display = 'none';
    postsSection.style.display = 'none';
    authSection.style.display = 'none';
    profileSection.style.display = 'none';
    notificationSection.style.display = 'none';
}

// Function to show about us
function showAboutUs() {
    setBlocksToNone();
    sectionHeadText.innerText = 'About Us';
    infoBlock.style.display = 'block';
    infoBlock.innerText = 'This is a simple social media app built using HTML, CSS and JavaScript by Sanjay Kumar.';
}

// Toggle auth button text
function toggleAuth() {
    let text = document.getElementById('loginText');
    if (localStorage.getItem('currentUser')) {
        text.innerHTML = 'Logout <i class="fa-solid fa-right-from-bracket"></i>';
    } else {
        text.innerHTML = 'Login <i class="fa-solid fa-right-from-bracket"></i> ';
    }
}

// Toggle auth form
function toggleAuthForm() {
    if (localStorage.getItem('currentUser')) {
        const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
        modal.show();
    } else {
        showAuthForm();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setBlocksToNone();
    showPosts();
    toggleAuth();
});
