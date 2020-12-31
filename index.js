var readlinesync = require('readline-sync');
var chalk = require('chalk');

var username = readlinesync.question("what's your name?\n");

console.log("Welcome "+chalk.red(username)+" do you know siddarth");

var score = 0;

var questions = [
  {
    question: "Where Does siddarth live?\n",
    answer: "hyderabad"
  },
  {
    question: "What Does siddarth do?\n",
    answer: "student"
  },
  {
    question: "Which college Does siddarth go to?\n",
    answer: "ngit"
  }
]

function play(question,answer) {
  var useranswer = readlinesync.question(chalk.green(question));
  if(useranswer === answer) {
    console.log(chalk.yellow("right"));
    score = score + 1;
  }
  else {
    console.log(chalk.red("wrong"));
  }
  console.log("your score is "+chalk.white(score));
  console.log("--------------------");
}

for(var i = 0; i<questions.length;i++) {
  play(questions[i].question,questions[i].answer);
}

console.log("Hurray! Your final score is "+score);

