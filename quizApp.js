//We're going to create the JS for a basic quiz application. 

//Let's think about the nature of this quiz app first. We're going to be creating lots of user objects, and we're
//also going to be creating lots of Question objects. Those would make two perfectly good constructors. 

//Create a User constructor that accepts name, email, password, and totalScore parameters and set them appropriatly
  //code here

var User = function(name, email, pw, totalScore) {
	this.name = name;
	this.email = email;
	this.pw = pw;
	this.totalScore = totalScore;
}


//Create a Question constructor that accepts title, answersArray, rightAnswer, and difficulty parameters
  //code here

var Question = function(title, question, answersArray, rightAnswer, difficulty) {
	this.title = title;
	this.question = question;
	this.answersArray = answersArray;
	this.rightAnswer = rightAnswer;
	this.difficulty = difficulty;
}

//Create a users Array which is going to hold all of our users.
  //code here

var users = [];

//Let's say three people signed up for our service, create 3 instances of User and add each to the users Array
  //code here

var p1 = new User('Mark', 'mperk@gmail.com', 'enter');
var p2 = new User('Skoot', 'skoot@gmail.com', 'open');
var p3 = new User('Jeff', 'jeff@gmail.com', 'letmein');

users.push(p1, p2, p3);

//Create a questions Array which is going to hold all of our questions
  //code here

var questions = [];

//Now, let's say we wanted to create a quiz about JavaScript. Create three instances of Question which contain the following data
//title: 'T/F: Inheritance is achieved in JavaScript through Prototypes?'
//title: 'T/F: JavaScript is just a scripting version of Java'
//title: "T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value"
//Fill in the rest of the required data as you see appropriate.
  //code here

var q1 = new Question('Q1','Inheritance is achieved in JavaScript through Prototypes?', ['T', 'F'], 'F', 3);
var q2 = new Question('Q2','JavaScript is just a scripting version of Java', ['T', 'F'], 'F', 1);
var q3 = new Question('Q3','In Javascript, == doesn\'t check \'type\' but just the value - where === checks type and value', ['T', 'F'], 'T', 2);

//Now push all of your instances of Question into the questions Array
  //code here

questions.push(q1, q2, q3);


console.log('My users Array and my questions arrays are.. ');
//Now loop console.log your users array and your questions array and verify that they're both holding the right data.
  //code here

for (var i = 0; i <= 3; i++) {
	console.log(users[i]);
}

for (var i = 0; i <= 3; i++) {
	console.log(questions[i]);
}





