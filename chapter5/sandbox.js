//objects
let user = {
    name: 'bob',
    age: 18,
    email: 'bobert@gmail.co.uk',
    location: 'seychelles',
    blogs: ['i love the seychelles', 'bobert blog post number 14 billion']
};
console.log(user); //logs all information inside user5
console.log(user.name); //logs bob
user.age = 19;
console.log(user.age); //logs 19
console.log(user['name']);
user['name'] = 'sean';
console.log(user.name); //logs sean

const key = 'location';
console.log(user[key]);