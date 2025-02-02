/*
DOM  - Document Object Model (Modelo de Objeto de Documentos)

* - GetElementById -> vai buscar em nosso código pelo iD
* - querySelector -> Vai buscar apenas pela primeira classe que aparecer com o nome que a gente colocou. Ex. *const searchInput2 = document.querySelector(".cards"); Vai buscar apenas o primeiro elemento que possui a *classe cards
* - querySelectorAll -> É a mesma coisa que o querySelector, mas vai buscar todos os elementos que tem a *classeque a gente colocou. 
*/

const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists');

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
}

function displayResults(result) {
    resultPlaylist.classList.add('hidden');
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });

    resultArtist.classList.remove('hidden');
}

document.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {
        resultPlaylist.classList.add('hidden');
        resultArtist.classList.remove('hidden');
        return
    }
    
    requestApi(searchTerm);
})