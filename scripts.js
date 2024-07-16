document.getElementById('getAllCharacters').addEventListener('click', fetchAllCharacters);
document.getElementById('filterCharacters').addEventListener('click', fetchFilteredCharacters);

function fetchAllCharacters() {
    fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => displayCharacters(data.results))
        .catch(error => displayError(error));
}

function fetchFilteredCharacters() {
    const name = document.getElementById('name').value;
    const status = document.getElementById('status').value;
    const species = document.getElementById('species').value;
    const type = document.getElementById('type').value;
    const gender = document.getElementById('gender').value;

    let url = 'https://rickandmortyapi.com/api/character/?';

    if (name) url += `name=${name}&`;
    if (status) url += `status=${status}&`;
    if (species) url += `species=${species}&`;
    if (type) url += `type=${type}&`;
    if (gender) url += `gender=${gender}&`;

    fetch(url)
        .then(response => response.json())
        .then(data => displayCharacters(data.results))
        .catch(error => displayError(error));
}

function displayCharacters(characters) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    characters.forEach(character => {
        const characterDiv = document.createElement('div');
        characterDiv.className = 'character';
        characterDiv.innerHTML = `
            <h3>${character.name}</h3>
            <p>Status: ${character.status}</p>
            <p>Species: ${character.species}</p>
            <p>Gender: ${character.gender}</p>
            <img src="${character.image}" alt="${character.name}">
        `;
        resultsDiv.appendChild(characterDiv);
    });
}

function displayError(error) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `<p style="color: red;">Error: Filtro de búsqueda inexistente</p>`;
}

document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo');
    

    logo.addEventListener('click', function() {
        window.location.reload();
    });
});