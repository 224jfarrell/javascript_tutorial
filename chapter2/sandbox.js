//initial command
alert('hello world');

//console.log
console.log(1); //logs 1
console.log(2); //logs 2

//let variables
let age = 17; //can be changed
let year = 2023; //can be changed
console.log(age, year); //logs 17 2023
age = 17.5;
console.log(age); //logs 17.5

//const variables
const points = 100; //cannot be changed
console.log(points); //logs 100

//var variables
var score = 75; //deprecated
console.log(score); //logs 75

//comments
//single line comment
/*  multi
    line
    comment */
// control forwardslash

//data types
var number1 = 1;
var number2 = 2;
var number3 = 3;
var number4 = 100;
var number5 = 3.14;
var string1 = "hello, world";
var string2 = "224jfarrell@frhsd.com";
var boolean1 = true;
var boolean2 = false;
var noValue1 = null;
var undefined;

//strings
console.log('hello, world'); //logs hello, world
console.log('"hello world"'); //logs "hello world"
let email = "joesphf.9637@gmail.com";

//string concatenation
let firstName = "Joseph";
let lastName = "Farrell";
let fullName = firstName + ' ' + lastName;
console.log(fullName); //logs Joseph Farrell

//getting characters
console.log(fullName[0]); //logs J
console.log(fullName[1]); //logs o
console.log(fullName[2]); //logs s
console.log(fullName[3]); //logs e
console.log(fullName[4]); //logs p
console.log(fullName[5]); //logs h
console.log(fullName[6]); //logs ' ' (no quotes)
console.log(fullName[7]); //logs F
console.log(fullName[8]); //logs a
console.log(fullName[9]); //logs r
console.log(fullName[10]); //logs r
console.log(fullName[11]); //logs e
console.log(fullName[12]); //logs l
console.log(fullName[13]); //logs l

//string length
console.log(fullName.length); //logs 14

//string methods
console.log(fullName.toUpperCase()); //logs JOSEPH FARRELL
let result = fullName.toLowerCase(); 
console.log(result, fullName); //logs joseph farrell
let index = email.indexOf("@");
console.log(index); //logs 12
let firstIndex = email.indexOf(".");
let lastIndex = email.lastIndexOf(".");
console.log(firstIndex, lastIndex); //logs 7 18
let slice = email.slice(0, 14);
console.log(slice); //logs josephf.9637@g
let substring = email.substring(4, 12);
console.log(substring); //logs phf.9637
let replace = email.replace("p", "7");
console.log(replace); //logs joes7hf.9637@gmail.com

//numbers
let radius = 10;
const pi = 3.141592653589793238462643;
console.log(radius, pi); //logs 10 3.141592653589793238462643

//math operators
let add = radius + pi;
let subtract = radius - pi;
let multiply = radius * pi;
let divide = radius / pi;
let exponent = radius ** pi;
let remainder = radius % pi;
console.log(add, subtract, multiply, divide, exponent, remainder); //logs 13.141592653589793 6.858407346410207 31.41592653589793 3.183098861837907 1385.4557313670107 0.5752220392306207
let area = pi * radius ** 2;
console.log(area); //logs 314.1592653589793238462643

//order of operations
let pemdras = (1 + 1) ** 4 * 3 / 2 % 7 + 2 - 4;
console.log(pemdras); //logs 1 (after 2 ** 4 * 3 / 2 % 7 + 2 - 4 after 16 * 3 / 2 % 7 + 2 - 4 after 48 / 2 % 7 + 2 - 4 after 24 % 7 + 2 - 4 after 3 + 2 - 4 after 5 - 4)

//operation shorthand
let likes = 10;
console.log(likes); //logs 10
likes++;
console.log(likes); //logs 11
likes--;
console.log(likes); //logs 10
likes += 10;
console.log(likes); //logs 20
likes -= 5;
console.log(likes); //logs 15
likes *= 4;
console.log(likes); //logs 60
likes /= 2;
console.log(likes); //logs 30
likes **= 7;
console.log(likes); //logs 21870000000
likes %= 167;
console.log(likes); //logs 139

//not a number
console.log(5 / "Python version 3.11.5"); //logs NaN

//number concatenation
let conc = 'the blog has ' + likes + ' likes';
console.log(conc); //logs the blog has 139 likes

//template strings
const title = "Best reads of 2019";
const author = "me";

//concatenation way
let concatenationWay = "The blog called " + title + " by " + author + " has " + likes + " likes";
console.log(concatenationWay); //logs The blog called Best reads of 2019 by me has 139 likes

//template way
let templateLiterals = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(templateLiterals); //logs The blog called Best reads of 2019 by me has 139 likes

//creating html templates

let html = `<h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes} likes</span>`
console.log(html); /* logs <h2>Best reads of 2019</h2>
                               <p>By me</p>
                               <span>This blog has 139 likes</span> */

//arrays
let ninjas = ["Sean", "Bob", "Djeough"];
console.log(ninjas[0]); //logs Sean
console.log(ninjas[1]); //logs Bob
console.log(ninjas[2]); //logs Djeough
ninjas[1] = "Ken";
console.log(ninjas[1]); //logs Ken
let ages = [19, 40, 5, 18];
console.log(ages[0]); //logs 19
console.log(ages[1]); //logs 40
console.log(ages[2]); //logs 5
console.log(ages[3]); //logs 18
let random = ["burger", "minecraft", 5, 155];
console.log(random[0]); //logs burger
console.log(random[1]); //logs minecraft
console.log(random[2]); //logs 5
console.log(random[3]); //logs 155
console.log(ninjas.length); //logs 3
console.log(ages.length); //logs 4
console.log(random.length); //logs 4
let join = ninjas.join(', ');
console.log(join); //logs Sean, Ken, Djeough
let nIndex = ninjas.indexOf("Djeough");
console.log(nIndex); //logs 2
let nConcat = ninjas.concat(["John", "Rob"]); //does not change array
console.log(nConcat); //logs (5) ['Sean', 'Ken', 'Djeough', 'John', 'Rob'] 
let nPush = ninjas.push("Ben"); //changes original array
console.log(nPush); //logs 4
console.log(ninjas); //logs (4) ['Sean', 'Ken', 'Djeough', 'Ben']
let nPop = ninjas.pop();
console.log(nPop); //logs Ben
console.log(ninjas); //logs (3) ['Sean' 'Ken', 'Djeough']

//null
let ageNull;
console.log(ageNull); //logs undefined
console.log(ageNull + 3); //logs NaN
console.log(`the age is ${ageNull}`); //logs the age is undefined
ageNull = null;
console.log(ageNull); //logs null
console.log(ageNull + 3); //logs 3
console.log(`the age is ${ageNull}`); //logs the age is null

//booleans
console.log(true, false, "true", "false"); //logs true false 'true' 'false'

//methods returning booleans
let include = email.includes('@') //true
console.log(include);
include = email.includes('z'); //false
console.log(include);
let names = ['queens pawn', 'kings pawn', 'scotch'];
let openings = names.includes('scotch');
console.log(openings); //true
openings = names.includes("pirc");
console.log(openings); //false

//comparison operators
let booleage = 25;
console.log(booleage == 25); //true
console.log(booleage == age); //false
console.log(booleage != age); //true
console.log(booleage > 20); //true
console.log(booleage < 20); //false
console.log(booleage >= 25); //true
console.log(booleage <= 25); //true
let myName = "jonsepg";
console.log(myName == "jonsepg"); //true
console.log(myName == "joseph"); //false
console.log(myName > "albert"); //true
console.log(myName > "Albert"); //true
console.log(myName > "Joseph"); //true

//loose comparisons
console.log(booleage == 25); //true
console.log(booleage == "25"); //true
console.log(booleage != 25); //false
console.log(booleage != "25"); //false

//strict comparisons
console.log(booleage === 25); //true
console.log(booleage === "25"); //false
console.log(booleage !== 25); //false
console.log(booleage !== "25"); //true

//concatenation via strings and numbers
let bigNum = '100';
console.log(bigNum + 1); //prints 1001 instead of 101
bigNum = Number(bigNum); //turns bigNum into a number
console.log(bigNum + 1); //prints 101
console.log(typeof bigNum) //prints number
let what = 'hello';
what = Number(what);
console.log(what); //logs NaN
let gyatt = 50;
gyatt = String(gyatt);
console.log(gyatt); //logs 50
let booleoole = 100;
booleoole = Boolean(booleoole);
console.log(booleoole); //logs true (all numbers are truthy)
booleoole = 0;
booleoole = Boolean(booleoole);
console.log(booleoole); //logs false (0 is falsy)
booleoole = '0'
booleoole = Boolean(booleoole);
console.log(booleoole); //logs true (strings are all truthy)
booleoole = '';
booleoole = Boolean(booleoole);
console.log(booleoole); //logs false (empty strings are falsy); 
