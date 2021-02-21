'use strict';

let leftImageElement = document.getElementById('left-image');
let middleImageElement = document.getElementById('middle-image');
let rightImageElement = document.getElementById('right-image');

let maxAttempts = 27;
let userAttempts = 0;


let leftImageIndex;
let middleImageIndex;
let rightImageIndex;


function Products(name, source) {
    this.name = name;
    this.source = source;
    this.votes = 0;
    this.times=0;
    
    Products.allimages.push(this);

}

Products.allimages = [];


new Products('bag', 'images/bag.jpg');
new Products('banana', 'images/banana.jpg');
new Products('bathroom', 'images/bathroom.jpg');
new Products('boots', 'images/boots.jpg');
new Products('breakfast', 'images/breakfast.jpg');
new Products('bubblegum', 'images/bubblegum.jpg');
new Products('chair', 'images/chair.jpg');
new Products('cthulhu', 'images/cthulhu.jpg');
new Products('doc-duck', 'images/dog-duck.jpg');
new Products('dragon', 'images/dragon.jpg');
new Products('pen', 'images/pen.jpg');
new Products('pet-sweep', 'images/pet-sweep.jpg');
new Products('scissors', 'images/scissors.jpg');
new Products('shark', 'images/shark.jpg');
new Products('sweep', 'images/sweep.png');
new Products('tauntaun', 'images/tauntaun.jpg');
new Products('unicorn', 'images/unicorn.jpg');
new Products('usb', 'images/usb.gif');
new Products('water-can', 'images/water-can.jpg');
new Products('wine-glass', 'images/wine-glass.jpg');

console.log(Products.allimages);


function getRandomIndex() {
    return Math.floor(Math.random() * Products.allimages.length);
}


function renderThreeImages() {
    leftImageIndex = getRandomIndex();
    
    do {
        middleImageIndex = getRandomIndex();
        
    }

    while (leftImageIndex === middleImageIndex )
    do{
        rightImageIndex=getRandomIndex();
    }
    while( leftImageIndex === rightImageIndex && rightImageIndex === middleImageIndex77leftImageIndex === middleImageIndex)


    Products.allimages;
    console.log(Products.allimages[leftImageIndex]);

    leftImageElement.src = Products.allimages[leftImageIndex].source;
    Products.allimages[leftImageIndex].times++;
    middleImageElement.src = Products.allimages[middleImageIndex].source;
    Products.allimages[middleImageIndex].times++;
    rightImageElement.src = Products.allimages[rightImageIndex].source;
    Products.allimages[rightImageIndex].times++;

}

renderThreeImages();



leftImageElement.addEventListener('click', clickEvent);
middleImageElement.addEventListener('click', clickEvent);
rightImageElement.addEventListener('click', clickEvent);


function clickEvent(event) {
    userAttempts++;
    console.log(event.target.id);

    if (userAttempts < maxAttempts) {
        if (event.target.id == 'left-image') {
            console.log(leftImageIndex,Products.allimages[leftImageIndex]);
            Products.allimages[leftImageIndex].votes++;
           
           
           
            
        }
        else if (event.target.id == 'middle-image') {
            console.log(middleImageIndex,Products.allimages[middleImageIndex]);
            Products.allimages[middleImageIndex].votes++;
            
            
        }
        else {
            console.log(rightImageIndex,Products.allimages[rightImageIndex]);
            Products.allimages[rightImageIndex].votes++;
            
            
        }

        renderThreeImages();

    }

    else {
        // render the list of results
        let list = document.getElementById('results-list');
        let productsResult;
        for (let i = 0; i < Products.allimages.length; i++) {
            productsResult = document.createElement('li');
            list.appendChild(productsResult);
            productsResult.textContent = Products.allimages[i].name + ' has ' + Products.allimages[i].votes + ' votes '+'and was seen'+ Products.allimages[i].times+'  times , and has a percentage of ' +Products.allimages[i].votes/Products.allimages[i].times ;
        }

        
        rightImageElement.removeEventListener('click', clickEvent);
        middleImageElement.removeEventListener('click', clickEvent);
       leftImageElement.removeEventListener('click', clickEvent);


    }
}

