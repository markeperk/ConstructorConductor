/*
  Your 3 Users will be the following. 
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
*/

var User = function(name, email, pw){
  this.name = name;
  this.email = email;
  this.pw = pw;
}

//Create an Array called 'users' that will store all our instances of User.
  //code here

var users = [];

//Now create and push into your users array 3 seperate instances of User using the data from above in that exact order
  //code here

var pers1 = new User('Tyler', 'tylermcginnis33@gmail.com', 'iLoveJS');
var pers2 = new User('Cahlan', 'cahlan@devmounta.in', 'iLoveHastags');
var pers3 = new User('Lenny', 'lenny@theLenster.com', 'iLoveLentilSoup');

users.push(pers1, pers2, pers3);

console.log('Tyler\'s information is ');
//Console.log all of Tylers information
  //code here

console.log(pers1.name + '\'s email information is ' + pers1.email + ' and his password is ' + pers1.pw);


console.log('Lenny\'s information is ');
//Now console.log all of Lennys information
  //code here

console.log(pers3.name + '\'s email information is ' + pers3.email + ' and his password is ' + pers3.pw);

//Now create another instance of User using your own information and then add that to your users array.
  //code here

var pers4 = new User('Mark', 'markeperk@gmail.com', 'iLoveDevMtn');
users.push(pers4);

console.log('All my users names are ');
//Now loop through your users Array and console.log every users name. 
  //code here

for (var i = 0; i < users.length; i++) {
  console.log('All my users names are ' + users[i].name);
}