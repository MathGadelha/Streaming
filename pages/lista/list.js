window.onload = async function () {
    console.log(JSON.parse(localStorage.getItem('movies')));

    function listMovies() {
        const movies = JSON.parse(localStorage.getItem('movies')) || [];
        const movieList = document.getElementById('movieList');
     
        movieList.innerHTML = '';
        movies.forEach(movie => {
            var movieElement = document.createElement('div');
                var titleElement = document.createElement('p');
                var imageElement = document.createElement('img');
 
                titleElement.textContent = movie.name;
                
 
                movieElement.appendChild(imageElement);
                movieList.appendChild(movieElement);
                movieElement.appendChild(titleElement);
            // const movieElement = document.createElement('div');
            // movieElement.textContent = `${movie.name} - ${movie.overview}`;
            // movieList.appendChild(movieElement);
        });
     }
}