const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions = [];
let correctAnswers = [];
let candidateAnswers = [];

questions.push("Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? ");
correctAnswers.push("Sally Ride", "true", "40", "Trajectory", "3");


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("Enter your name: ");
console.log();
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

for (let i=0; i<questions.length; i++) {
  console.log(questions[i]);
  candidateAnswers.push(input.question("What is your answer? "));
  console.log();
}

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

  // for (let i=0; i<questions.length; i++) {
  //   console.log(`${candidateName}'s response: ${candidateAnswers[i]}   Correct answer: ${correctAnswers[i]}`)
  // }

  let grade;  //TODO 3.2 use this variable to calculate the candidates score.
  let numberOfCorrectAnswers = 0;
  for (let i = 0; i < questions.length; i++) {
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      numberOfCorrectAnswers++;
    }
  }
  grade = numberOfCorrectAnswers / questions.length * 100;
  
  console.log();
  console.log("-----------------------------------------------------------------------------------");
  console.log(`Candidate Name: ${candidateName}`);
  console.log();

  for (i=0; i<questions.length; i++) {
    console.log(`${i+1}) ${questions[i]}`);
    console.log(`Your Answer: ${candidateAnswers[i]}`);
    console.log(`Correct Answer: ${correctAnswers[i]}`);
    console.log();
  }

  console.log(`>>> Overall Grade: ${grade}% (${numberOfCorrectAnswers} of ${questions.length} responses correct)`);
  
  if (grade >= 80) {
    console.log(`>>> PASSED`);
  } else {
    console.log(`>>> FAILED`);
  }
  console.log("-----------------------------------------------------------------------------------");
  
  return grade;
}


function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Hello, " + candidateName + "! " + "I hope you are prepared for this quiz!");
   console.log();
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};