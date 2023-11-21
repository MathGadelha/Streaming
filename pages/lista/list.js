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
    
            var verify = movies.findIndex(movies => movies.id === movie.id);
    
            if (verify !== -1) {
                movies.splice(verify, 1);
    
                localStorage.setItem('movies', JSON.stringify(movies));
            }
    
            popup.style.display = "none";
            location.reload();
            }
    }
    closeBtn.onclick = function(){
            popup.style.display = "none";
    }
    });
    
    movieListDiv.appendChild(gridContainer);
    }
    
    // Botões de filtro
    
    var filterBtn = document.getElementById('filterBtn');
    var filterMenu = document.getElementById('filterMenu');
    const orderAsc = document.getElementById('btnOrderAsc')
    const orderDesc = document.getElementById('btnOrderDesc')
    var recent = document.getElementById('btnOrderRecent');
    var older = document.getElementById('btnOrderOlder');
    
    filterBtn.onclick = function() {
       filterMenu.style.display = 'grid';
    }
    
    
    orderAsc.onclick = function(){
        var movies = JSON.parse(localStorage.getItem('movies')) || [];
     
        // Ordena os filmes por nome
        movies.sort(function(a, b) {
            if(a.name < b.name) return -1;
            if(a.name > b.name) return 1;
            return 0;
        });
    
        localStorage.setItem('movies', JSON.stringify(movies));
        location.reload();
    }
    orderDesc.onclick = function(){
        var movies = JSON.parse(localStorage.getItem('movies')) || [];
     
        // Ordena os filmes por nome
        movies.sort(function(a, b) {
            if(a.name > b.name) return -1;
            if(a.name < b.name) return 1;
            return 0;
        });
    
        localStorage.setItem('movies', JSON.stringify(movies));
        location.reload();
    }
    recent.onclick = function() {
        var movies = JSON.parse(localStorage.getItem('movies')) || [];
        movies.sort(function(a, b) {
            return new Date(b.addedAt) - new Date(a.addedAt);
        });
        localStorage.setItem('movies', JSON.stringify(movies));
        location.reload();
     }
     older.onclick = function() {
        var movies = JSON.parse(localStorage.getItem('movies')) || [];
        movies.sort(function(a, b) {
            return new Date(a.addedAt) - new Date(b.addedAt);
        });
        localStorage.setItem('movies', JSON.stringify(movies));
        location.reload();
     }