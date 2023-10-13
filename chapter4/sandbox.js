//function
const speak = function(name){
    console.log(`i am speaking yes hi hello i am the speaker now ${name}`)
};
greet(); //logs "hello"
greet(); //ditto
greet(); //ditto
speak('john'); //logs "i am speaking yes hi hello i am the speaker now john"
speak('bob'); //logs "i am speaking yes hi hello i am the speaker bob"
speak('bill'); //logs "i am speaking yes hi hello i am the speaker bill"
function greet(){
    console.log("hello");
}   
/*  
    notice how it still runs despite greet being defined after it is called.
    this is because functions are "hoisted" to the top of the file
    speak would return an error because it is a variable which would not have been defined yet
*/

//parameters
function greating(time = 'night', name = 'sean'){
    console.log(`good ${time} ${name}`);
}
greating('morning', 'john');
greating('afternoon', 'bob');
greating('evening', 'bill');
greating();

//returning values
const calcArea = function(radius){
    return  3.14 * radius ** 2;
}
const areaa = calcArea(19);
console.log(areaa); //returns 1133.54

//arrow shorthand
const calcAreaArrow = (radius) => {
    return 3.14 * radius ** 2;
};
const areaArrow = calcAreaArrow(19);
console.log(areaArrow); //returns 1133.54
const simpleAreaArrow = radius => 3.14 * radius ** 2;
const simpleArrow = simpleAreaArrow(19);
console.log(simpleArrow); //returns 1133.54
//notice how these all log the same value
const great = () => 'hello world';
const resultA = great();
console.log(resultA);
const bill = (products, tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] + tax;
    }
    return total;
};
console.log(bill([18, 35, 94], 0.0625)); //returns 294.19 (actually 294.1875 but thats not accurate to money terms)

//methods
const grout = () => "hello again";
let resultOne = grout();
console.log(resultOne); //returns hello again
let resultTwo = resultOne.toUpperCase(); //this is a method
console.log(resultTwo); //returns HELLO AGAIN

//callbacks
const myFunc = callbackFunc => {
    let value = 50;
    callbackFunc(value);
};
myFunc(function(value){
    console.log(value); //returns 50
});
let people = ['sean', 'mario', 'bob', 'bill', 'jeff'];
const logPerson = (person, index) => {
    console.log(`name: ${person}; index num: ${index}`); //iterates through array and returns name and index num in the console
}
people.forEach(logPerson);

//html - javascript interaction
const ul = document.querySelector('.people');
let html4 = ``
people.forEach(person => {
    html4 += `<li style="color: purple">${person}</li>`
})
console.log(html4);
ul.innerHTML = html4;