// LOGICAL OPERATORS
// && AND (all must be true)
// || OR (either is true)
// == comparsion (are the same)
// == strict comparsion (compares both value and datatype)
// != NOT EQUAL
// !== strict
// >= greater than or equal
//<= less than or equal 
// > greater than
// < less than

//inputs
let height = 50;
let minimum = 55;

// precalulating the boolean expression into variable
let canRide = height>= minimum; // no/false vs yes/true

console.log("START"); //unconditional - always

if(canRide){ //CONDITIONAL expression - decide which path based on boolean true/false
    // expression was true
    console.log("Weeeeee!!!"); // sometimes depending on the condition
}else{ //ALTERNATE
    //expression was false
    console.log("sadly watching the fun"); // sometimes depending on the condition
}

console.log("END") //unconditional - always
