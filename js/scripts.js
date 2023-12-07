// const myImg1 = document.createElement('img');
// myImg1.classList.add ('w-100','h-100', 'obj-cover', 'mx-3');
// myImg1.src = 'img/01.webp';

// const myImg2 = document.createElement('img');
// myImg2.classList.add ('w-100','h-100', 'obj-cover', 'mx-3');
// myImg2.src = 'img/02.webp';

// const myImg3 = document.createElement('img');
// myImg3.classList.add ('w-100','h-100', 'obj-cover', 'mx-3');
// myImg3.src = 'img/03.webp';

// const myImg4 = document.createElement('img');
// myImg4.classList.add ('w-100','h-100', 'obj-cover', 'mx-3');
// myImg4.src = 'img/04.webp';

// const myImg5 = document.createElement('img');
// myImg5.classList.add ('w-100','h-100', 'obj-cover', 'mx-3');
// myImg5.src = 'img/05.webp';

const myContainer = document.querySelector('.img-container');







// Array contentene immagini
// const myImages = [myImg1, myImg2, myImg3, myImg4, myImg5];
const myImages = [
    `<img id="img-1" class="w-100 h-100 obj-cover mx-3" src="img/01.webp" alt="Immagine 1">`,
    `<img id="img-2" class="w-100 h-100 obj-cover mx-3" src="img/02.webp" alt="Immagine 2">`,
    `<img id="img-3" class="w-100 h-100 obj-cover mx-3" src="img/03.webp" alt="Immagine 3">`,
    `<img id="img-4" class="w-100 h-100 obj-cover mx-3" src="img/04.webp" alt="Immagine 4">`,
    `<img id="img-5" class="w-100 h-100 obj-cover mx-3" src="img/05.webp" alt="Immagine 5">`
]

console.log(myImages, typeof myImages);

// Stampa dell'array

myContainer.innerHTML = myImages[0];

//Dichiarazioni bottoni 

const lefttButton = document.getElementById('left-button');
const rightButton = document.getElementById('right-button');

// PROSSIMO STEP -- Creare contatore (linkato agli  indici dell'array) 
// che sale e scende
let counter = 0;

rightButton.addEventListener('click', function(){

    if (counter < myImages.length-1){

        counter ++
        console.log(counter);
        
        myContainer.innerHTML= myImages[counter];
       
    }

})

lefttButton.addEventListener('click', function(){
    
    if ((counter !== myImages.length) && (counter !== 0)){

        counter --
        console.log(counter);
        
        myContainer.innerHTML= myImages[counter];
       
    }
})



