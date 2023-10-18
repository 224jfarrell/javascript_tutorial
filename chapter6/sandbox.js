//document object
console.log(document); //logs document object
console.log(document.location); //logs location info
console.log(document.URL); //logs url

//querySelectors
const para = document.querySelector('p');
console.log(para); //logs '<p>p tag one</p>'
const error = document.querySelector('.error');
console.log(error); //logs "<p id="error">wuh oh!</p>"
const paras = document.querySelectorAll('p');
console.log(paras); //logs a nodeList of all p tags on the page
const errors = document.querySelectorAll('.error');
console.log(errors); //logs a nodeList of all tags with the class 'error'

//getElementById
const gebID = document.getElementById('pageTitle');
console.log(gebID); //logs '<h3 id="pageTitle">page Title</h3>'

//getElementsByClassName
const gebcn = document.getElementsByClassName('error');
console.log(gebcn); //logs an HTMLCollection of all tags with class 'error'

//getElementsByTagName
const gebtn = document.getElementsByTagName('p');
console.log(gebtn); //logs an HTMLCollection of all p tags

//js > html interactions
const weezer = document.querySelector('p');
weezer.innerText = 'ooh wee ooh i look just like buddy holly' //changes the text of the first p tag to the string aforementioned
const weezers = document.querySelectorAll('p');
weezers.forEach(parama => {
    parama.innerText = 'and youre mary tyler moore' //changes all the text inside all p tags to the previous weezer quote
});
const content = document.querySelector('.content');
content.innerHTML = `<h2>swag alert interrobang !?</h2>` //changes the div tag to an h2 tag with the aforementioned string
const ppl = ['bob', 'rob', 'cob', 'dob'];
ppl.forEach(person => {
    content.innerHTML += `<p>${person}</p>` //for each person in ppl, add a p tag with the value of person
});
const link = document.querySelector('a');
let java2 = link.getAttribute('href');
console.log(java2); //logs the href attribute of the a tag
java2 = link.setAttribute('href', '../chapter4/sandbox.js'); //changes the link of the a tag
java2 += link.innerText = 'awesome';
const msg = document.querySelector('p.error');
console.log(msg.getAttribute('class')); //logs error
msg.setAttribute('class', 'success');
console.log(msg.getAttribute('class')); //logs success
msg.setAttribute('style', 'background-color: green'); //changes the background color of the p tag with the success class
// msg.setAttribute('style', 'margin: 50px;') //this gets rid of the background color
msg.style.margin = '50px'; //this keeps the background color and the margin
msg.style.backgroundColor = 'crimson'; //this changes the background color
msg.style.fontSize = '6px'; //this changes the font size;
msg.style.margin = ''; //removes margin
const p = document.querySelector('h6.warning');
console.log(p.classList);
p.classList.remove('error')
p.classList.add('success');
let o = document.querySelectorAll('h5');
o.forEach(status => {
    if(status.innerText.includes('error')){
        status.classList.add('warning');
    } else if(status.innerText.includes('success')){
        status.classList.add('success');
    }
})
p.classList.toggle('test');