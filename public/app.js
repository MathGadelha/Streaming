fetch('https://api.themoviedb.org/3/movie/11?api_key=08f3a9006bd6335750aa0ab46d5a3f17')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });

document.getElementById('searchInput').addEventListener('input', function () {
    var movieName = this.value;
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=08f3a9006bd6335750aa0ab46d5a3f17&query=${movieName}`)
        .then(response => response.json())
        .then(data => {
            var movieList = document.getElementById('movieList');
            movieList.innerHTML = '';
            data.results.forEach(movie => {
                var movieElement = document.createElement('div');
                var titleElement = document.createElement('p');
                var imageElement = document.createElement('img');
 
                imageElement.src = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
                imageElement.className = 'movie-image-search';
                titleElement.textContent = movie.title;
                titleElement.className = 'movie-title-search';
                movieElement.className = 'movie-search';
 
                movieElement.appendChild(imageElement);
                movieList.appendChild(movieElement);
                movieElement.appendChild(titleElement);
            });
        })
        .catch(error => {
            console.error(error);
        });
 });
 

 