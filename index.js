var readline = require('readline-sync');
var score = 0;
function take(question, answer) {
  var UserAnswer = readline.question(question);
  if (UserAnswer === answer){
    console.log("you are right");
    score = score + 1;
    console.log("your score is " +score);
    console.log("___________");
  }
  else {
    console.log("you are wrong");
    score = score - 1;
    console.log("your score is " +score);
    console.log("____________");
  }
  
}
var questions = [
  {
     question : "what is the capital of Karnataka? ",
     answer : "Bangalore",

  },
  {
    question : "where is Taj Mahal? ",
    answer : "Agra",
  },
  {
  question : "where is Red Fort? ",
  answer : "Delhi",
  },
  {
    question : "where is Golden Temple? ",
    answer : "Amritsar",
  },
  {
  question :" where is India Gate? ",
  answer : "Delhi",
  }
];
for (i=0; i<questions.length; i++)
{
  var Userquestion = questions[i];
  take(Userquestion.question, Userquestion.answer);
}
