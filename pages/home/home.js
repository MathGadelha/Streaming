window.onload = async function () {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=08f3a9006bd6335750aa0ab46d5a3f17')
        .then(response => response.json())
        .then(data => {
            var movieList = document.getElementById('popularMoviesList');
            // var header = document.getElementById('header');
            // header.style.backgroundImage = 'url(/t/p/w1920_and_h800_multi_faces/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg)';


            data.results.slice(0, 10).forEach(movie => {
                var movieElement = document.createElement('div');
                var titleElement = document.createElement('h2');
                var imageElement = document.createElement('img');
                var id;

                id = movieElement.dataset.id = movie.id;
                imageElement.src = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
                imageElement.className = 'movie-image';
                // titleElement.textContent = movie.title;
                // titleElement.className = 'movie-title';
                movieElement.className = 'movie';

                movieElement.appendChild(imageElement);
                movieList.appendChild(movieElement);
                movieElement.appendChild(titleElement);
                movieElement.onclick = function(){
                    const popup = document.getElementById('popup');
                    const nome = document.getElementById('movieName');
                    const image = document.getElementById('detailImage');
                    const sinopse = document.getElementById('sinopse')

                    console.log(movie)
                    console.log(movie.backdrop_path)
                        
                        popup.style.display = "flex";
                        nome.textContent=movie.title
                        sinopse.textContent=movie.overview
                        image.style.background='url(https://image.tmdb.org/t/p/w500' + movie.poster_path + ')';
                }
                popup.onclick = function(){
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
                   
                    movieElement.onclick = function(){
                        const popup = document.getElementById('popup');
                        const nome = document.getElementById('movieName');
                        const image = document.getElementById('detailImage');
                        const sinopse = document.getElementById('sinopse')
    
                        console.log(movie)
                        console.log(movie.backdrop_path)
                            
                            popup.style.display = "flex";
                            nome.textContent=movie.title
                            sinopse.textContent=movie.overview
                            image.style.background='url(https://image.tmdb.org/t/p/w500' + movie.poster_path + ')';
                    }
                    popup.onclick = function(){
                            popup.style.display = "none";
                    }
                    
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
const detalhes = document.querySelector('detalhes')
const btnFechar = document.getElementById('fecharDetalhe')


// filme.onclick = function () {
//     const details = document.getElementById('detalhes');
    
//     details.innerHTML = `
//     <div class='popup'>
//         <div class="detail">
//             <div class="movieImage">
//             </div>
//             <div class="movieDetails">
//                 <div class="movieTitle">
//                 <p id="movieTitle"></p>
//                 </div>
//                 <div class="movie1">
//                 <p>Oppenheimer</p>
//                 </div><div class="movie2">
//                 <p>Oppenheimer</p>
//                 </div>
//             </div>
//         </div>
//    </div> `;

// }



// var movieDetails = document.createElement('div');
    // var movieTittle = document.createElement('p');
    // var movieImage = document.createElement('img');
    // var movieAuthor = document.createElement('p');


    
    // movieImage.className = 'imageDetails';
    // movieTittle.textContent = movie.title;

    // titleElement.className = 'titleDetails';
    // movieAuthor.className = 'authorDetails';
    // movieDetails.className = 'movieDetails';

    // detailsElement.appendChild(movieImage);
    // Details.appendChild(movieDetails);
    // detailsDetails.appendChild(movieTittle);
// btnFechar.onclick = function () {
//     detalhes.close()
// }