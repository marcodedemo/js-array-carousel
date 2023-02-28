
/*

    - creare un array di immagini
    - dichiarare le variabili corrispondenti agli elementi html da utilizzare
    - memorizzare la variabile indice
    - al click dei pulsanti arrow aumento o diminuisco l'indice e visualizzo l'immagine corrispondente alla posizione dell'array relativa al valore dell'indice


*/


// creare un array di immagini
const images = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp"];

// dichiarare le variabili corrispondenti agli elementi html da utilizzare
const slideshowImageElement = document.getElementById("slideshow-image");
const arrowUpElement = document.getElementById("arrow-up");
const arrowDownElement = document.getElementById("arrow-down");

// memorizzo la variabile indice
let index = 0;

// imposto l'immagine di partenza
slideshowImageElement.src = images[index];


// al click di arrow up aumento l'indice di 1 e mostro l'immagine corrispondente alla posizione dell'array relativa al valore dell'indice

arrowUpElement.addEventListener("click", function(){
   
    // aumento il valore dell'indice 
    index++;

    // mostro l'immagine corrispondente alla posizione dell'array relativa al valore dell'indice
    slideshowImageElement.src = images[index];

})


// al click di arrow down diminuisco l'indice di 1 e mostro l'immagine corrispondente alla posizione dell'array relativa al valore dell'indice

arrowDownElement.addEventListener("click", function(){
   
    // diminuisco il valore dell'indice 
    index--;

    // mostro l'immagine corrispondente alla posizione dell'array relativa al valore dell'indice
    slideshowImageElement.src = images[index];

})