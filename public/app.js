fetch('https://api.themoviedb.org/3/movie/11?api_key=08f3a9006bd6335750aa0ab46d5a3f17')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });


 

 