// //counter.js
let componentCounter = 0;
function moveUp(){
    componentCounter++;
}
function moveDown(){
    componentCounter--;
}
function getCounter(){
    return componentCounter;
}
moveUp();
moveUp();
moveUp();
moveUp();
moveUp(); //5
moveDown();
moveDown();
moveDown(); //2
console.log(getCounter()); //2

// value = 0

// value++; // ++ increment by one

// console.log(vlaue) //expecting 2

// beers = 99
// beers--;
// beers--;
// beers--;
// beers--;
// beers--;
// console.log(beers) // 99 - 4 = 95

// counterValue = 0
// incrementAmount = 5

// counterValue += incrementAmount
// counterValue += incrementAmount
// counterValue += incrementAmount
// counterValue += 5
// counterValue += 5

//console.log(counterValue) //expect 15