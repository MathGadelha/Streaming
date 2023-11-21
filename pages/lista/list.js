window.onload = async function () {

var movies = JSON.parse(localStorage.getItem('movies')) || [];

var movieListDiv = document.getElementById('movieList');
var gridContainer = document.createElement('div');
gridContainer.className = 'movieGrid';

movies.forEach(movie => {
  var movieElement = document.createElement('div');
  var detailElement = document.createElement('div');
  var titleElement = document.createElement('p');
  var imageElement = document.createElement('img');
  var descriptionElement = document.createElement('p');
  
  titleElement.textContent = movie.name;
  titleElement.className = 'movie-title';
  imageElement.src = movie.image;
  imageElement.className = 'movie-image';
  descriptionElement.textContent = movie.overview;
  descriptionElement.className = 'movie-description';
  movieElement.className = 'movie';

  movieElement.appendChild(imageElement);
  detailElement.appendChild(titleElement);
  detailElement.appendChild(descriptionElement);

  gridContainer.appendChild(movieElement);
  movieElement.onclick = function(){
    const popup = document.getElementById('popup');
    const nome = document.getElementById('movieName');
    const image = document.getElementById('movieImage');
    const sinopse = document.getElementById('sinopse');
    const releaseDate = document.getElementById('releaseDate');
    const nota = document.getElementById('nota');
    const closeBtn = document.getElementById('closeBtn');
    

    console.log(movie)
    console.log(movie.backdrop_path)
        
        popup.style.display = "flex";
        nome.textContent=movie.name;
        sinopse.textContent=movie.overview;
        releaseDate.textContent=movie.releaseDate;
        image.src = movie.image;
        nota.textContent=movie.rating;
        if(movie.rating >= 7){
            nota.style.background = 'green';
        }
        else if(movie.rating < 7 && movie.rating > 4){
            nota.style.background = 'rgb(209, 209, 0)';
        } else{
            nota.style.background = 'red';
        }
        var removeFilmBtn = document.getElementById('removeFilmFromFavourite');

        removeFilmBtn.onclick = function(){
        var movies = JSON.parse(localStorage.getItem('movies')) || [];

        var index = movies.findIndex(movies => movies.id === movie.id);

        if (index !== -1) {
            movies.splice(index, 1);

            localStorage.setItem('movies', JSON.stringify(movies));
        }

        popup.style.display = "none";
        location.reload();
        }
        document.getElementById('sortByRatingAsc').onclick = function() {
            movies.name.sort(a, b)
            location.reload();
         };
         
         document.getElementById('sortByRatingDesc').onclick = function() {
            movies.sort((a, b) => b.rating - a.rating);
            location.reload();
         };
}
closeBtn.onclick = function(){
        popup.style.display = "none";
}
});

movieListDiv.appendChild(gridContainer);
}


 