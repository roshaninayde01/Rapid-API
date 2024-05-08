const apiKey = 'ac0c7c04d0msh268b7f722dd8ef7p144074jsn674fe00fa682';
let moviesData; // Global variable to store movie data

// Function to display movie data
function showData() {
    if (!Array.isArray(moviesData)) return; // Check if moviesData is an array
    const mainDiv = document.querySelector('.main');
    mainDiv.innerHTML = ''; // Clear previous content

    moviesData.forEach(movie => {
        const div = document.createElement("div");
        div.className = "container";

        const img = document.createElement("img");
        img.src = movie.image;
        img.alt = movie.title;

        const rating = document.createElement("h2");
rating.innerText = movie.rating;


        const movieName = document.createElement("h2");
        movieName.innerText = movie.title;

        div.appendChild(img);
        div.appendChild(rating);
        div.appendChild(movieName);

        mainDiv.appendChild(div);
    });
}

// Fetch data when the button is clicked
document.getElementById('fetchButton').addEventListener('click', async () => {
    const url = `https://imdb-top-100-movies.p.rapidapi.com/?rapidapi-key=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        moviesData = await response.json();
        console.log(moviesData); // Log movies data to console
        showData();
    } catch (error) {
        console.error(error);
        alert('Failed to fetch data. Please try again later.');
    }
});

// Function to display movie information from localStorage
function showStoredData() {
    console.log(3);
    let movie = JSON.parse(localStorage.getItem("movie"));
    let html = `
        <h1>${movie.title}</h1>
        <img src="${movie.image}">
        <p>${movie.description}</p>
    `;
    document.body.innerHTML = html;
}

// Call the function to display stored movie information when the DOM content is loaded
window.addEventListener("DOMContentLoaded", showStoredData);