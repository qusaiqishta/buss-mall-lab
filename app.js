'use strict';

let leftImageElement = document.getElementById('left-image');
let middleImageElement = document.getElementById('middle-image');
let rightImageElement = document.getElementById('right-image');

let maxAttempts = 27;
let userAttempts = 0;


let threevariables=[];
let leftImageIndex;
let middleImageIndex;
let rightImageIndex;
let ifRepeat=function(){
    console.log('comparing between ',threevariables, 'and ', leftImageIndex,middleImageIndex,rightImageIndex);
    for( let i=0;i<threevariables.length;i++){

        if(threevariables[i]===leftImageIndex||threevariables[i]===middleImageIndex||threevariables[i]===rightImageIndex){
            return true;
        }
        else{
            return false;
        }
        
    }
    threevariables=[leftImageIndex,middleImageIndex,rightImageIndex];
    return false;


}



let imagesName = [];
let numberOfVotes = [];
let numberOfShows=[];

function Products(name, source) {
    this.name = name;
    this.source = source;
    this.votes = 0;
    this.times = 0;
    imagesName.push(name);

    Products.allimages.push(this);
    


}

Products.allimages = [];


function settingItems(){
  
    let data=JSON.stringify(Products.allimages);
    localStorage.setItem('votes',data);
    console.log('data'+data);
   
}

function gettingItems(){
    let stringObject=localStorage.getItem('votes');
    let normalObject=JSON.parse(stringObject);
    console.log(normalObject);
    if(normalObject!==null){
        Products.allimages=normalObject;
    }

    renderThreeImages();
}



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
    middleImageIndex=getRandomIndex();
    rightImageIndex=getRandomIndex();

    
    
   
    while (leftImageIndex === rightImageIndex || rightImageIndex === middleImageIndex||middleImageIndex===leftImageIndex||ifRepeat()){
    
    rightImageIndex=getRandomIndex();
    middleImageIndex=getRandomIndex()
}

    Products.allimages;
    console.log(Products.allimages[leftImageIndex]);

    leftImageElement.src = Products.allimages[leftImageIndex].source;
    Products.allimages[leftImageIndex].times++;
    middleImageElement.src = Products.allimages[middleImageIndex].source;
    Products.allimages[middleImageIndex].times++;
    rightImageElement.src = Products.allimages[rightImageIndex].source;
    Products.allimages[rightImageIndex].times++;}




renderThreeImages();




leftImageElement.addEventListener('click', clickEvent);
middleImageElement.addEventListener('click', clickEvent);
rightImageElement.addEventListener('click', clickEvent);


function clickEvent(event) {
    userAttempts++;
    console.log(event.target.id);

    if (userAttempts < maxAttempts) {
        if (event.target.id == 'left-image') {
            console.log(leftImageIndex, Products.allimages[leftImageIndex]);
            Products.allimages[leftImageIndex].votes++;




        }
        else if (event.target.id == 'middle-image') {
            console.log(middleImageIndex, Products.allimages[middleImageIndex]);
            Products.allimages[middleImageIndex].votes++;


        }
        else {
            console.log(rightImageIndex, Products.allimages[rightImageIndex]);
            Products.allimages[rightImageIndex].votes++;


        }
        settingItems();
    


        renderThreeImages();

    }

    else {
        // render the list of results
        let list = document.getElementById('results-list');
        let productsResult;
        for (let i = 0; i < Products.allimages.length; i++) {
            productsResult = document.createElement('li');
            list.appendChild(productsResult);
            productsResult.textContent = Products.allimages[i].name + ' has ' + Products.allimages[i].votes + ' votes ' + 'and was seen' + Products.allimages[i].times  + '   times , and has a percentage of ' +( Products.allimages[i].votes / Products.allimages[i].times).toFixed(2);
        }


        

        rightImageElement.removeEventListener('click', clickEvent);
        middleImageElement.removeEventListener('click', clickEvent);
        leftImageElement.removeEventListener('click', clickEvent);

        for (let i = 0; i < Products.allimages.length; i++) {
            numberOfVotes.push(Products.allimages[i].votes);
            numberOfShows.push(Products.allimages[i].times) ;
            
        }
        visChart();



    }
}






function visChart() {

    let ctx = document.getElementById('myChart').getContext('2d');
  
    let chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'bar',
  
      // The data for our dataset
      data: {
        labels: imagesName,
  
        datasets: [
  
  
          {
            label: 'Number of votes',
            backgroundColor: '#1e212d',
            borderColor: '#1e212d',
            data: numberOfVotes
          },
          
          {
            label: 'product shown',
            backgroundColor: 'red',
            borderColor: 'red',
            data: numberOfShows
          },
     
  
        ]
      },
      //  
  
      // Configuration options go here
      options: {}
    });
    
  
  
  
  }

  gettingItems();