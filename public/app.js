fetch('https://api.themoviedb.org/3/movie/11?api_key=08f3a9006bd6335750aa0ab46d5a3f17')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });

document.getElementById('searchButton').addEventListener('click', function () {
    var movieName = document.getElementById('searchInput').value;
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


window.onload = async function () {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=08f3a9006bd6335750aa0ab46d5a3f17')
        .then(response => response.json())
        .then(data => {
            var movieList = document.getElementById('popularMoviesList');
            var header = document.getElementById('header');
            header.style.backgroundImage = 'url(https://image.tmdb.org/t/p/w500' + data.results[0].poster_path + ')';

            data.results.slice(0, 10).forEach(movie => {
                var movieElement = document.createElement('div');
                var titleElement = document.createElement('h2');
                var imageElement = document.createElement('img');

                imageElement.src = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
                imageElement.className = 'movie-image';
                // titleElement.textContent = movie.title;
                // titleElement.className = 'movie-title';
                movieElement.className = 'movie';

                movieElement.appendChild(imageElement);
                movieList.appendChild(movieElement);
                movieElement.appendChild(titleElement);
            });
        })
        .catch(error => {
            console.error(error);
        });
};

fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=08f3a9006bd6335750aa0ab46d5a3f17&language=en-US')
    .then(response => response.json())
    .then(data => {
        const comedyGenreId = data.genres.find(genre => genre.name === 'Comedy').id;

        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=08f3a9006bd6335750aa0ab46d5a3f17&with_genres=${comedyGenreId}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
            .then(response => response.json())
            .then(data => {
                var comedyMoviesList = document.getElementById('comedyMoviesList');
                comedyMoviesList.innerHTML = '';
                data.results.forEach(movie => {
                    var movieElement = document.createElement('div');
                    var titleElement = document.createElement('h2');
                    var imageElement = document.createElement('img');

                    imageElement.src = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
                    imageElement.className = 'movie-image';
                    // titleElement.textContent = movie.title;
                    // titleElement.className = 'movie-title';
                    movieElement.className = 'movie';

                    movieElement.appendChild(imageElement);
                    comedyMoviesList.appendChild(movieElement);
                    movieElement.appendChild(titleElement);
                });
            })
            .catch(error => {
                console.error(error);
            });
    })
    .catch(error => {
        console.error(error);
    });

    const filme = document.getElementById('popularMoviesList')
    const detalhes = document.querySelector('dialog')
    const btnFechar = document.getElementById('fecharDetalhe')

    filme.onclick = function(){
        detalhes.showModal()
    }

    btnFechar.onclick = function(){
        detalhes.close()
    }

 