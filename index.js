btnCat = document.getElementById('clickCat');
trackX = document.getElementById('trackX');
trackY = document.getElementById('trackY');
imgCat = document.getElementById('imgCat');
titleCat = document.getElementById('titleCat');

ENDPOINT = "https://api.thecatapi.com/v1/images/search"

/**
 * Fetch du l'URL
 */

function getCatImg() {
    fetch(ENDPOINT)
    .then(function(response) {
        if (response.ok) {
            return response.json(); 
        }
    })
    .then(function(value) {
        console.log(value);
        imgCat.src = value[0].url;
        return value;
    })
    .then(isCatRace)
    .catch(function(error){
        alert(error);
    })
}

/**
 * Fonction qui va regarder si j'ai une race de chat
 * Si oui, le h2 change par la race du chat
 * Si non, le h2 change pas
 */
function isCatRace(value) {

    if (value[0].breeds.length != []) {
        console.log(value[0].breeds.length);
        titleCat.textContent = value[0].breeds[0].name;
    } else {
        titleCat.textContent = "The Cat API";
    }
}

/**
 * Va déterminer les coordonées de la souris sur l'axe X et Y
 * @param {*} event 
 */
function mouseCoords(event){
    trackX.textContent = event.clientX;
    trackY.textContent = event.clientY;
}

document.addEventListener('DOMContentLoaded', getCatImg);
btnCat.addEventListener('click', getCatImg);
window.addEventListener('mousemove', mouseCoords);
