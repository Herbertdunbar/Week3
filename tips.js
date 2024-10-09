// smaple inputs
//var is oldschool but does make it a local var
//let is better as it makes it a local but also indicated mutility(change
//const is better still if it will not be changed/modified)
let identifier = "value"; //assignment operator like an arrow pointing left <-

let foodCost = 79.25;
let tax = 6.54;
let tip = 12; //let makes this mutable
//include two decimal places

// calculations
const totalDue = foodCost + tax + tip;

//output
//console.log("The total due is " + totalDue);

//console.log("Food cost is "+ foodCost + " and tax is " + tax);
//console.log(" Tip is " + tip);
//console.log("Total Due is " + totalDue);

//TEMPLATE STRING USING BACKTICKS ` like a madlib.
console.log(`
    Food cost is ${foodCost} and tax is ${tax}
    Tip is ${tip}
    Total Due is ${totalDue}.
    `);