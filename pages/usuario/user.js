window.onload = async function () {
let movies = JSON.parse(localStorage.getItem('movies')) || [];
let favoriteMovies = document.getElementById('favorite-movies');
let currentImageIndex = 0;

setInterval(function() {
   if (currentImageIndex >= movies.length) {
       currentImageIndex = 0;
   }
   favoriteMovies.style.backgroundImage = "url('" + movies[currentImageIndex].image + "')";
   currentImageIndex++;
}, 5000); 
}