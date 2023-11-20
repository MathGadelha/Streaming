console.log("Chegou")

fetch('https://api.themoviedb.org/3/movie/11?api_key=08f3a9006bd6335750aa0ab46d5a3f17')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });


    document.getElementById('addListButton').addEventListener('click', function() {
        // Criar uma nova div
        var newDiv = document.createElement('div');
        newDiv.className = 'favorite-movies';
        
        // Criar um campo de pesquisa
        var searchInput = document.createElement('input');
        var searchButton = document.createElement('button');
        searchButton.textContent = 'Pesquisar';
     
        // Adicionar o botão de pesquisa à nova div
        newDiv.appendChild(searchButton);  
        searchInput.type = 'text';
        searchInput.placeholder = 'Pesquisar filmes';
        
        // Adicionar o campo de pesquisa à nova div
        newDiv.appendChild(searchInput);
        
        // Adicionar a nova div à div com a classe 'myList'
        document.querySelector('.myList').appendChild(newDiv);
     
        // Adicionar ouvinte de eventos ao botão de pesquisa
        searchButton.addEventListener('click', function () {
            var movieName = searchInput.value;
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
     });


   