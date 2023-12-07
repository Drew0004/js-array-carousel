const myImg1 = document.createElement('img');
myImg1.classList.add ('w-100', 'd-block', 'h-100', 'obj-cover', 'mx-3');
myImg1.src = 'img/01.webp';

const myImg2 = document.createElement('img');
myImg2.classList.add ('w-100', 'd-none', 'h-100', 'obj-cover', 'mx-3');
myImg2.src = 'img/02.webp';

const myImg3 = document.createElement('img');
myImg3.classList.add ('w-100', 'd-none', 'h-100', 'obj-cover', 'mx-3');
myImg3.src = 'img/03.webp';

const myImg4 = document.createElement('img');
myImg4.classList.add ('w-100', 'd-none', 'h-100', 'obj-cover', 'mx-3');
myImg4.src = 'img/04.webp';

const myImg5 = document.createElement('img');
myImg5.classList.add ('w-100', 'd-none', 'h-100', 'obj-cover', 'mx-3');
myImg5.src = 'img/05.webp';


// Array contentene immagini
const myImages = [myImg1, myImg2, myImg3, myImg4, myImg5];

console.log(myImages, typeof myImages);

for(let i = 0; i < myImages.length; i++){
    document.querySelector('.img-container').append(myImages[i]);

}

//Dichiarazioni bottoni 

const lefttButton = document.getElementById('left-button');
const rightButton = document.getElementById('left-button');

// PROSSIMO STEP -- Creare contatore (linkato agli  indici dell'array) 
// che sale e scende

rightButton.addEventListener('click', function(){
    for (let i = 0; i < myImages.length; i++){
        console.log (myImages[i]);
    }
})



