document.addEventListener("DOMContentLoaded", () => {
    const postsContainer = document.getElementById('posts-container');

    // Function to fetch data from the API
    async function fetchPosts() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const data = await response.json();
            displayPosts(data);
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    }

    // Function to display posts in the DOM
    function displayPosts(posts) {
        postsContainer.innerHTML = ''; // Clear existing content
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = 'post';
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            `;
            postsContainer.appendChild(postElement);
        });
    }

    // Fetch and display posts on page load
    fetchPosts();
});
