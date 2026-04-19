// Write your code here!

const API_URL = "https://jsonplaceholder.typicode.com/posts";

const postList = document.getElementById("post-list");

// Display posts function
function displayPosts(posts) {
  // handle both array and single object
  if (!Array.isArray(posts)) {
    posts = [posts];
  }

  posts.forEach((post) => {
    const li = document.createElement("li");

    const h1 = document.createElement("h1");
    h1.textContent = post.title;

    const p = document.createElement("p");
    p.textContent = post.body;

    li.appendChild(h1);
    li.appendChild(p);
    postList.appendChild(li);
  });
}

// Async fetch function
async function fetchPosts() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    displayPosts(data);
  } catch (error) {
    console.error(error.message);
  }
}

// Run automatically when page loads
document.addEventListener("DOMContentLoaded", fetchPosts);
