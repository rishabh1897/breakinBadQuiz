var readSync = require("readline-sync")
var call = require("chalk")

var name=readSync.question("Please, Enter your name : ");
console.log(call.bold("Hey " +name+ "!"));
console.log("Welcome to THE Breaking Bad Quiz!?\n");
var score = 0;

var questions = [
  {
    ques: `What was the flight number which crashed over Walter White's house?
           a: 'United 828'
           b: 'Oceanic 815'
           c: 'Wayfarer 515'
           d: 'california 915' 
           `,
    ans: "c",
  },

  {
    ques: `What was Gale Boetticher working on as a side project in the lab with Walt?
           a: 'making Coffee'
           b: 'Cheaper meth making technique'
           c: 'Making coca cola'
           d: 'none' 
           `,
    ans: "a",
  },
  {
    ques: `Who was the original owner of the car wash? 
           a: 'Bogdan'
           b: 'It was not specified'
           c: 'Gustavo Fring'
           d: 'flinn' 
           `,
    ans: "a",
  },
  
  {
    ques: `What happened to the money in the crawlspace?
           a: 'Jesse burnt it'
           b: 'Skyler burnt it'
           c: 'Skyler gave it to Ted Benneke'
           d: 'none of these' 
           `,
    ans: "c",
  },
  
  {
    ques: `Who attempted to shoot and kill Hank Schrader in the carpark?
           a: 'The cousins'
           b: 'Jesse pinkman'
           c: 'Fring's associate
           d: 'Mike' 
           `,
    ans: "a",
  },
  {
    ques: `What was the hidden lab made by Gustavo Fring built over?
           a: 'An oil refinery'
           b: 'laundery'
           c: 'rented house'
           d: 'none of these' 
           `,
    ans: "b",
  },
  {
    ques: `From what city did Mike Ehrmantraut hail?
           a: 'Philadelphia'
           b: 'Detroit'
           c: 'Chicago'
           d: 'Michigan' 
           `,
    ans: "a",
  },
  {
    ques: `What was the name of the company that Walter White was first involved with in college which would later go on to be worth billions?
           a: 'Madrigal technologies'
           b: 'Gray Matter technologies'
           c: 'Tesla'
           d: 'none' 
           `,
    ans: "b",
  },
  {
    ques: `Lydia tried to convince Walter White to create blue meth for sale in what European country?
           a: 'Austria'
           b: 'Bosnia'
           c: 'Czech Republic'
           d: 'Brasil' 
           `,
    ans: "c",
  },
]

var wrong=[];

function play(ques, ans) {
  var userans = readSync.question(call.italic.bold(ques));
  if (ans.toUpperCase() === userans.toUpperCase()) {
    console.log(call.green.bold("Yess! That was right\n"));
    score += 5;
  }
  else {
    console.log(call.red("You were wrong there!\n"));
    wrong.push(i+1);
  }
  console.log(call.yellowBright("Current score: " + score));
  console.log(call.blue("------------------\n"));
  console.log(call.blue("------------------\n"));
}

for (var i = 0; i < questions.length; i++)
  {
    console.log(call.bold.whiteBright(("Question ")+ (i+1) + " :"));
    var result = play(call.magentaBright(questions[i].ques), questions[i].ans);
  }

console.log(call.inverse("total score out of 45 \n"))
console.log(call.bgCyan("FINAL SCORE : " + score+" \n"));
//console.log("High Score : " + highScore);
if(score===45)
{
  console.log(call.inverse("Amazing! you scored the highest!  \n"));
}
else
 console.log(call.inverse("Have a great day! \n"+" Try again xD  \n"));


console.log("Correct Answers : ");
for(var i =0; i<wrong.length; i++)
{
  console.log("Question No. "+ wrong[i] + " : Correct answer is " + questions[wrong[i]-1].ans + "\n");
}


console.log(call.bold.italic.inverse("  Thanks for playing!  "));