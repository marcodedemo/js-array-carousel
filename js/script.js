
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
const thumbnailsContainerElement = document.getElementById("thumbnails-container");

// creo le thumbnails nel DOM 
for (let i = 0; i < images.length; i++) {
    
    // creo un nuovo elemento HTML 
    let newThumbnail = document.createElement("div");

    // imposto la genitorialità dei nuovi elementi thumbnail
    thumbnailsContainerElement.append(newThumbnail);

    // imposto i background delle thumbnail corrispondenti al valore dell'indice 
    newThumbnail.style.backgroundImage ='url("' + images[i] + '")';

    // attribuisco agli elementi creati una classe di stilizzazione 
    newThumbnail.classList.add("thumbnail");
}


// memorizzo la variabile indice
let index = 0;

// imposto l'immagine di partenza
slideshowImageElement.src = images[index];

// creo un array contenete le tutte thumbnail create
const thumbnails = document.querySelectorAll(".thumbnail");

thumbnails[index].classList.add("active");




// al click di arrow up aumento l'indice di 1 e mostro l'immagine corrispondente alla posizione dell'array relativa al valore dell'indice

arrowDownElement.addEventListener("click", function(){
   
    // se l'indice è minore della lunghezza dell'array -1 
    if (index < images.length - 1){

        // aumento l'indice di 1 e visualizzo l'immagine successiva
        index++;
        slideshowImageElement.src = images[index];

        // rimuovo la classe active alla thumbnail precedente e la assegno alla successiva
        thumbnails[index - 1].classList.remove("active");
        thumbnails[index].classList.add("active");

    
    // altrimenti 
    } else {

        // reimposto l'indice a 0 e ricomincio la visualizzazione delle immagini 
        index = 0;
        slideshowImageElement.src = images[index];

        // rimuovo la classe active alla thumbnails precentente e la assegno alla successiva ricominciando il ciclo di img
        thumbnails[images.length - 1].classList.remove("active");
        thumbnails[index].classList.add("active");

    }


})




// al click di arrow down diminuisco l'indice di 1 e mostro l'immagine corrispondente alla posizione dell'array relativa al valore dell'indice

arrowUpElement.addEventListener("click", function(){

    // se l'indice è maggiore di 0
    if (index > 0){

        // diminuisco l'indice di 1 e visualizzo l'immagine precedente
        index--;
        slideshowImageElement.src = images[index];

        // rimuovo la classe active alla thumbnails precentente e la assegno alla successiva ricominciando il ciclo di img
        thumbnails[index + 1].classList.remove("active");
        thumbnails[index].classList.add("active");        
        
        
        // altrimenti
    } else {
        
        // reimposto l'indice alla lunghezza dell'array -1 e ricomincio la visualizzazione 
        index = images.length -1 ;
        slideshowImageElement.src = images[index];
        
        
        // rimuovo la classe active alla thumbnails precentente e la assegno alla successiva ricominciando il ciclo di img
        thumbnails[0].classList.remove("active");
        thumbnails[index].classList.add("active");
    }

})