const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "" + ""
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? " 
let correctAnswer = "Sally Ride"
let candidateAnswer = ""
let questions = [ '1)Who was the first American woman in space?  ', 
'2)True or false: 5 kilometer == 5000 meters?  ', 
'3)(5+3)/2 * 10 =?  ', 
'4)Given the array[8, Orbit, Trajectory, 45] what entry is at index 2?  ',
 '5)What is the minimum crew size for the ISS?  ' ];
let correctAnswers = ["Sally Ride",  "true",  "40",  "Trajectory",  "3"];
let candidateAnswers = [];


function askForName() {
 let name = input.question("Candidate Name: ");
 let candidateName = name;
//  console.log("Hello,", candidateName);
  
 // TODO 1.1b: Ask for candidate's name //
}




function askQuestion(){
  let total = 0
   for(let i = 0; i < questions.length; i++){
      candidateAnswers = input.question(questions[i]);
      console.log("Your Response:" + candidateAnswers.toLowerCase());
      console.log("Correct Answer:" + correctAnswers[i].toLowerCase());
        if(candidateAnswers === correctAnswers[i]){
              total++}

} 
let grade = (total/questions.length * 100)
  if(grade >= 80){
  console.log ('>>> STATUS: PASSED <<<');
}if(grade < 80){
  console.log ('>>> STATUS: FAILED <<<');
}


console.log(`>>> Overall Grade: ${grade} %   ${total} of 5 responses correct <<<`);
   
}


  


  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //











  


  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 




function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  runProgram: runProgram
}
