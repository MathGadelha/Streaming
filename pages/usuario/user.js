window.onload = async function () {
    console.log(JSON.parse(localStorage.getItem('movies')));
}

const lista = document.getElementById('favorite-movies');
lista.href="../lista/list.html";