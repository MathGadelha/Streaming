let moviesData;
let movieIndex = -1;
function changeHeaderBackground() {
    movieIndex++;
    if (movieIndex >= 10) {
        movieIndex = 0;
    }
    const movie = moviesData[movieIndex];
    const header = document.querySelector('header');
    const infoTitle = document.getElementById('infoTitle');
    const infoSinopse = document.getElementById('infoSinopse');
    header.style.background = 'url(https://image.tmdb.org/t/p/original' + movie.backdrop_path + ')';
    header.style.backgroundSize = '50%'
    header.style.backgroundPosition='center'
    header.style.backgroundRepeat='no-repeat'
    infoTitle.textContent=movie.title;
    infoSinopse.textContent=movie.overview;
}

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
 
                imageElement.src = 'https://image.tmdb.org/t/p/original' + movie.poster_path;
                imageElement.className = 'movie-image-search';
                titleElement.textContent = movie.title;
                titleElement.className = 'movie-title-search';
                movieElement.className = 'movie-search';
 
                movieElement.appendChild(imageElement);
                movieList.appendChild(movieElement);
                movieElement.appendChild(titleElement);

                movieElement.onclick = function(){
                    
                    const popup = document.getElementById('popup');
                    const id = document.getElementById('id');
                    const popular = document.getElementById('popularity');
                    const nome = document.getElementById('movieName');
                    const image = document.getElementById('movieImage');
                    const sinopse = document.getElementById('sinopse');
                    const releaseDate = document.getElementById('releaseDate');
                    const nota = document.getElementById('nota');
                    const closeBtn = document.getElementById('closeBtn');
                    

                        
                        popup.style.display = "flex";
                        id.textContent=movie.id;
                        popular.textContent=movie.popularity;
                        nome.textContent=movie.title;
                        sinopse.textContent=movie.overview;
                        releaseDate.textContent=movie.release_date;
                        image.src = 'https://image.tmdb.org/t/p/original' + movie.poster_path;
                        nota.textContent=movie.vote_average.toFixed(1);
                        if(movie.vote_average >= 7){
                            nota.style.background = 'green';
                        }
                        else if(movie.vote_average < 7 && movie.vote_average > 4){
                            nota.style.background = 'rgb(209, 209, 0)';
                        } else{
                            nota.style.background = 'red';
                        }
                        
                }
                closeBtn.onclick = function(){
                        popup.style.display = "none";
                }
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
            moviesData = data.results;
            changeHeaderBackground();
            setInterval(changeHeaderBackground, 10000);

            data.results.slice(0, 10).forEach(movie => {
                var movieElement = document.createElement('div');
                var titleElement = document.createElement('h2');
                var imageElement = document.createElement('img');
                var id;

                id = movieElement.dataset.id = movie.id;
                imageElement.src = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
                imageElement.className = 'movie-image';
                movieElement.className = 'movie';

                movieElement.appendChild(imageElement);
                movieList.appendChild(movieElement);
                movieElement.appendChild(titleElement);
                movieElement.onclick = function(){
                    const popup = document.getElementById('popup');
                    const id = document.getElementById('id');
                    const popular = document.getElementById('popularity');
                    const nome = document.getElementById('movieName');
                    const image = document.getElementById('movieImage');
                    const sinopse = document.getElementById('sinopse');
                    const releaseDate = document.getElementById('releaseDate');
                    const nota = document.getElementById('nota');
                    const closeBtn = document.getElementById('closeBtn');



                    console.log(movie)
                    console.log(movie.backdrop_path)
                        
                        popup.style.display = "flex";
                        id.textContent=movie.id;
                        popular.textContent=movie.popularity;
                        nome.textContent=movie.title;
                        sinopse.textContent=movie.overview;
                        releaseDate.textContent=movie.release_date;
                        image.src = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
                        nota.textContent=movie.vote_average.toFixed(1);
                        if(movie.vote_average >= 7){
                            nota.style.background = 'green';
                        }
                        else if(movie.vote_average < 7 && movie.vote_average > 4){
                            nota.style.background = 'rgb(209, 209, 0)';
                        } else{
                            nota.style.background = 'red';
                        }
                        
                }
                closeBtn.onclick = function(){
                        popup.style.display = "none";
                }
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

        // comedia
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

                    movieElement.className = 'movie';

                    movieElement.appendChild(imageElement);
                    comedyMoviesList.appendChild(movieElement);
                    movieElement.appendChild(titleElement);
                   
                    movieElement.onclick = function(){
                        const popup = document.getElementById('popup');
                        const id = document.getElementById('id');
                        const popular = document.getElementById('popularity');
                        const nome = document.getElementById('movieName');
                        const image = document.getElementById('movieImage');
                        const sinopse = document.getElementById('sinopse');
                        const releaseDate = document.getElementById('releaseDate');
                        const nota = document.getElementById('nota');
                        const closeBtn = document.getElementById('closeBtn');
                        
    
                        console.log(movie)
                        console.log(movie.backdrop_path)
                            
                            popup.style.display = "flex";
                            id.textContent=movie.id;
                            popular.textContent=movie.popularity;
                            nome.textContent=movie.title;
                            sinopse.textContent=movie.overview;
                            releaseDate.textContent=movie.release_date;
                            image.src = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
                            nota.textContent=movie.vote_average;
                            if(movie.vote_average >= 7){
                                nota.style.background = 'green';
                            }
                            else if(movie.vote_average < 7){
                                nota.style.background = 'red';
    
                            }
                            
                    }
                    closeBtn.onclick = function(){
                            popup.style.display = "none";
                    }
                    
                });
            })
            .catch(error => {
                console.error(error);
            });
});


const addBtn = document.getElementById('addFilmToFavourite');

addBtn.onclick =function addToPlaylist() {
    const movie = {
        id: document.getElementById('id').textContent,
        name: document.getElementById('movieName').textContent,
        overview: document.getElementById('sinopse').textContent,
        releaseDate: document.getElementById('releaseDate').textContent,
        rating: document.getElementById('nota').textContent,
        popularity: document.getElementById('popularity').textContent,
        image: document.getElementById('movieImage').src,
        addedAt: new Date()
    };
  
    let movies = JSON.parse(localStorage.getItem('movies')) || [];
    const popUpList = document.getElementById('popUpList');
    const alert = document.getElementById('alert');

    const existingMovie = movies.find(m => m.name === movie.name && m.overview === movie.overview);
    if (existingMovie) {
        console.log("Já tem")
        popUpList.style.display='flex';
        popUpList.className="Errado"
        alert.textContent = "Este filme já foi adicionado aos favoritos";
        setTimeout(() => {
            popUpList.style.display = 'none';
        }, 3000);
        return;
    }else{
        popUpList.style.display='flex';
        popUpList.className="Correto"
        alert.textContent = "Adicionado aos favoritos";
        setTimeout(() => {
            popUpList.style.display = 'none';
        }, 3000);
    }
  
    movies.push(movie);
    localStorage.setItem('movies', JSON.stringify(movies));
    
    console.log(JSON.parse(localStorage.getItem('movies')));
}

