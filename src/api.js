const url = 'https://pokeapi.co/api/v2';

function getPokemon(){
    return fetch(`${url}/?limit=20/pokemon`)
        .then(res => res.json())
        .then(res => res.name)
}

function getLocation(id){
    return fetch(`${url}/pokemon/${id}/encounters`)
        .then(res => res.json())
        .then(res => res.location_area.name)
}

export default {
    getPokemon,
    getLocation
}