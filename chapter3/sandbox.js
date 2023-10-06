//for loops
for(let i = 0; i < 5; i++){
    console.log('in loop: ', i); //logs in loop: [value of i]
}
console.log('loop finished'); //logs loop finished when the loop finishes
const array = ['jean', 'sean', 'bean'];
for(let i = 0; i < array.length; i++){   
    let html = `<div>${array[i]}</div>`;
    console.log(html); //logs the name of the item in the array at the index point [i] within div tags
}
console.log('get divved idiot'); //logs get divved idiot when the loop finishes

//while loops
let i = 0;
while(i < 5){
    console.log('in loop ', i); //logs in loop: [value of i]
    i++; //SUPER IMPORTANT
}
const names = ['shawn', 'jhawn', 'bhawn'];
let j = 0;
while(j < names.length){
    console.log(names[j]); //logs the name of the item in the array at the index point [j]
    j++
}

//do while loops
let k = 5;
do{
    console.log('val of k is: ', k); //logs val of k is: [value of k]
    k++;
} while(k < 5);
k = 4;
do{
    console.log('val of k is: ', k); //logs val of k is: [value of k]
    k++;
} while(k < 5);
k = 3;
do{
    console.log('val of k is: ', k); //logs val of k is: [value of k]
    k++;
} while(k < 5);

//if statements
const age = 17;
if(age > 16){
    console.log('you can drive'); //logs you can drive if age is greater than 16
}
