// JavaScript to handle blog submission
document.getElementById('blog-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent page from refreshing

    // Get the blog title and content
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    // Create a new blog entry
    const blogList = document.getElementById('blog-list');
    const blogItem = document.createElement('li');
    blogItem.innerHTML = `<h3>${title}</h3><p>${content}</p>`;

    // Add the new blog to the list
    blogList.appendChild(blogItem);

    // Clear the form fields
    document.getElementById('title').value = '';
    document.getElementById('content').value = '';
});

