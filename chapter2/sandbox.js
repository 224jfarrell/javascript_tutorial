//initial command
alert('hello world');

//console.log
console.log(1);
console.log(2);

//let variables
let age = 17;
let year = 2023;
console.log(age, year);
age = 17.5;
console.log(age);

//const variables
const points = 100;
console.log(points);

//var variables
var score = 75;
console.log(score);

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
console.log('hello, world');
console.log('"hello world"');
let email = "joesphf.9637@gmail.com";

//string concatenation
let firstName = "Joseph";
let lastName = "Farrell";
let fullName = firstName + ' ' + lastName;
console.log(fullName);

//getting characters
console.log(fullName[0]);
console.log(fullName[1]);
console.log(fullName[2]);
console.log(fullName[3]);
console.log(fullName[4]);
console.log(fullName[5]);
console.log(fullName[6]);
console.log(fullName[7]);
console.log(fullName[8]);
console.log(fullName[9]);
console.log(fullName[10]);
console.log(fullName[11]);
console.log(fullName[12]);
console.log(fullName[13]);

//string length
console.log(fullName.length);

//string methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result, fullName);
let index = email.indexOf("@");
console.log(index);
let firstIndex = email.indexOf(".");
let lastIndex = email.lastIndexOf(".");
console.log(firstIndex, lastIndex);
let slice = email.slice(0, 14);
console.log(slice);
let substring = email.substring(4, 12);
console.log(substring);
let replace = email.replace("p", "7");
console.log(replace);

//numbers
let radius = 10;
const pi = 3.141592653589793238462643;
console.log(radius, pi);

//math operators
let add = radius + pi;
let subtract = radius - pi;
let multiply = radius * pi;
let divide = radius / pi;
let exponent = radius ** pi;
let remainder = radius % pi;
console.log(add, subtract, multiply, divide, exponent, remainder);
let area = pi * radius ** 2;
console.log(area);

//order of operations
let pemdras = (1 + 1) ** 4 * 3 / 2 % 7 + 2 - 4;
console.log(pemdras);

//operation shorthand
let likes = 10;
console.log(likes);
likes++;
console.log(likes);
likes--;
console.log(likes);
likes += 10;
console.log(likes);
likes -= 5;
console.log(likes);
likes *= 4;
console.log(likes);
likes /= 2;
console.log(likes);
likes **= 7;
console.log(likes);
likes %= 167;
console.log(likes);

//not a number
console.log(5 / "Python version 3.11.5");

//number concatenation
let conc = 'the blog has ' + likes + ' likes';
console.log(conc);

//template strings
const title = "Best reads of 2019";
const author = "me";

//concatenation way
let concatenationWay = "The blog called " + title + " by " + author + " has " + likes + " likes";
console.log(concatenationWay);

//template way
let templateLiterals = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(templateLiterals);

//creating html templates

let html = `<h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes} likes</span>`
console.log(html);

//arrays
let ninjas = ["Sean", "Bob", "Djeough"];
console.log(ninjas[0]);
console.log(ninjas[1]);
console.log(ninjas[2]);
ninjas[1] = "Ken";
console.log(ninjas[1]);
let ages = [19, 40, 5, 18];
console.log(ages[0]);
console.log(ages[1]);
console.log(ages[2]);
console.log(ages[3]);
let random = ["burger", "minecraft", 5, 155];
console.log(random[0]);
console.log(random[1]);
console.log(random[2]);
console.log(random[3]);
console.log(ninjas.length);
console.log(ages.length);
console.log(random.length);
let join = ninjas.join(', ');
console.log(join);
let nIndex = ninjas.indexOf("Djeough");
console.log(nIndex);
let nConcat = ninjas.concat(["John", "Rob"]);
console.log(nConcat);
let nPush = ninjas.push("Ben"); //changes original array
console.log(nPush);
console.log(ninjas);
let nPop = ninjas.pop();
console.log(nPop);
console.log(ninjas);

//null
let ageNull;
console.log(ageNull);
console.log(ageNull + 3);
console.log(`the age is ${ageNull}`);
ageNull = null;
console.log(ageNull);
console.log(ageNull + 3);
console.log(`the age is ${ageNull}`);

//booleans
console.log(true, false, "true", "false");

//methods returning booleans
let include = email.includes('@')
console.log(include);
include = email.includes('z');
console.log(include);
let names = ['queens pawn', 'kings pawn', 'scotch'];
let openings = names.includes('scotch');
console.log(openings);
openings = names.includes("pirc");
console.log(openings);

//comparison operators
let booleage = 25;
console.log(booleage == 25);
console.log(booleage == age);
console.log(booleage != age);
console.log(booleage > 20);
console.log(booleage < 20);
console.log(booleage >= 25);
console.log(booleage <= 25);
let myName = "jonsepg";
console.log(myName == "jonsepg");
console.log(myName == "joseph");
console.log(myName > "albert");
console.log(myName > "Albert");
console.log(myName > "Albert");