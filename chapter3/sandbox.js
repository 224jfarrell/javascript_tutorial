//for loops
for(let i = 0; i < 5; i++){
    console.log('in loop: ', i); //logs "in loop: [value of i]""
}
console.log('loop finished'); //logs "loop finished" when the loop finishes
const array = ['jean', 'sean', 'bean'];
for(let i = 0; i < array.length; i++){   
    let html = `<div>${array[i]}</div>`;
    console.log(html); //logs the name of the item in the array at the index point [i] within div tags
}
console.log('get divved idiot'); //logs "get divved idiot" when the loop finishes

//while loops
let i = 0;
while(i < 5){
    console.log('in loop: ', i); //logs "in loop: [value of i]""
    i++; //SUPER IMPORTANT
}
const names3 = ['shawn', 'jhawn', 'bhawn'];
let j = 0;
while(j < names3.length){
    console.log(names3[j]); //logs the name of the item in the array at the index point [j]
    j++
}

//do while loops
let k = 5;
do{
    console.log('val of k is: ', k); //logs "val of k is: [value of k]""
    k++;
} while(k < 5);
k = 4;
do{
    console.log('val of k is: ', k); //logs "val of k is: [value of k]""
    k++;
} while(k < 5);
k = 3;
do{
    console.log('val of k is: ', k); //logs "val of k is: [value of k]""
    k++;
} while(k < 5);

//if statements
const age3 = 17;
if(age3 > 16){
    console.log('you can drive'); //logs "you can drive" if age is greater than 16
}
const ninjas3 = ['bob', 'dob', 'sob', 'rob'];
if(ninjas3.length > 3){
    console.log('there are more than 3 ninjas. waow'); //if there are more than three ninjas, prints "there are more than 3 ninjas. waow"
}
if(ninjas3.length > 4){
    console.log("too many"); //if there are more than four ninjas, print "too many"
}

//else statements
const password = 'pass';
if(password.length >= 8){
    console.log("strong password"); //if password is at least 8 characters long, print "strong password"
} else {
    console.log("password must be at least 8 characters") //else print "password must be at least 8 characters"
}

//else if statements
let possward = "schmasswardz";
if(possward.length >= 12){
    console.log("very good password !") //if possward is at least 12 characters long, print "very good password !"
} else if(possward.length >= 8){
    console.log("good enough"); //if possward is between 12 and 8 characters long, print "good enough"
} else {
    console.log("lame. fix yo password"); //else print "lame. fix yo password"
}

//logical operators
possward = "sk@te";
if(possward.length >= 12 && possward.includes('@')){
    console.log("very good password !") //if possward is at least 12 characters long AND includes @, print "very good password !""
} else if(possward.length >= 8 || possward.includes('@') && possward.length > 5){
    console.log("good enough"); //if possward is longer than 5 characters and one of the following is true: (between 12 and 8 characters long OR includes @), print "good enough"
} else {
    console.log("lame. fix yo password"); //else print "lame. fix yo password"
}

//logical NOT
let loggedIn = false;
if(!loggedIn){
    console.log("please log in"); //logs "please log in" when loggedIn is false
}
loggedIn = true;
if(!loggedIn){
    console.log("please log in"); //logs "please log in" when loggedIn is false; however loggedIn is true so this will never print again
}
console.log(!true); //prints false
console.log(!false); //prints true

//break and continue
const scores = [46, 0, 1, 5, 19, 17, 60, 15, 10, 96, 18, 100, 99, 61, 72];
for(let l = 0; l < scores.length; l++){
    if(scores[l] === 0) {
        continue; //skips the value of scores[l] that equals 0
    }
    console.log("score: " + scores[l]); //logs "score: " plus the value of scores at index point [l]
    if(scores[l] === 100){
        console.log("perfect score"); //logs "perfect score" if the value of scores at index point [l] is 100
        break; //stops the loop
    }
}

//switch statements
const grade = "B";
switch(grade){
    case "A":
        console.log("excellent!"); //logs "excellent!" if grade is A
        break;
    case "B":
        console.log("nice job!"); //logs "nice job!" if grade is B
        break;
    case "C":
        console.log("good effort"); //logs "good effort" if grade is C
        break;
    case "D":
        console.log("needs improvement"); //logs "needs improvement" if grade is D
        break;
    case "E":
        console.log("failing"); //logs "failing" if grade is E
        break;
    default:
        console.log("invalid :(") //logs "invalid" else
        break;
}

//global and block scope
const big = 30;
// let big = 50; -- this will error bc big is already defined in the scope
if(true){
    const big = 40; //this will not error bc big is not defined in this scope of if EVEN THOUGH it is a const
    const bog = "sean"
    console.log(big, bog); //logs value of big and bog
    if(true){
        console.log(big) //logs value of bog
    }
}
console.log(big); //logs original value of big
console.log(bog); //does not log bog because bog is not defined in the global scope