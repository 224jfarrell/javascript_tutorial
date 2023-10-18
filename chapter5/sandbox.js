//objects
let user = {
    name: 'bob',
    age: 18,
    email: 'bobert@gmail.co.uk',
    location: 'seychelles',
    blogs: ['i love the seychelles', 'bobert blog post number 14 billion'],
    login: function(){
        console.log('the user logged in');
    },
    logout(){
        console.log('the user logged out');
    },
    
    //this keyword
    logBlogs: function(blogs){
        // console.log(this.blogs)
        this.blogs.forEach(blog => {
            console.log(blog);
        })
    }
};
console.log(user); //logs all information inside user
console.log(user.name); //logs "bob"
user.age = 19;
console.log(user.age); //logs 19
console.log(user['name']);
user['name'] = 'sean';
console.log(user.name); //logs "sean"
const key = 'location';
console.log(user[key]); //logs "seychelles"
console.log(typeof(user)); //logs "object"
user.login(); //logs "the user logged in"
user.logout(); //logs "the user logged out"
user.logBlogs(); //logs info inside the blogs array in single logs

//object in array
const superArray = [
    {
        title: 'object one',
        int: 18
    },
    {
        title: 'object two',
        int: 71
    }
];
console.log(superArray); //logs all information of both objects inside the array

//Math
console.log(Math.random()); //logs a random decimal between 0 and 1
console.log(Math.random() * 10); //logs a random decimal between 0 and 10
console.log(Math); //logs all Math functions
console.log(Math.PI); //logs math constant pi
console.log(Math.E); //logs math constant e
console.log(Math.floor(Math.random())); //will always log 0 because the decimal will be rounded down
console.log(Math.ceil(Math.random())); //will always log 1 because the decimal will be rounded up
console.log(Math.round(Math.random())); //will log 0 or 1 depending whether or not the random decimal is above or below 0.5
console.log(Math.trunc(Math.random())); //will log 0 because it truncates the decimal to only the integer

//primitive values
let scoreOne = 50;
let scoreTwo = scoreOne;
console.log(scoreOne, scoreTwo); //logs "50 50"
scoreOne = 100;
console.log(scoreOne, scoreTwo); //logs "100 50". notice how scoreTwo did not update

//reference values
const userOne = {
    name: 'bobo',
    age: 'a billion'
}
const userTwo = userOne; 
console.log(userOne, userTwo); //logs info about userOne and userTwo
userOne.age = 'a trillion';
console.log(userOne, userTwo); //ditto. notice how the age updates for userTwo as well as userOne