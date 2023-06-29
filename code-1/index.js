const prompt = require("prompt-sync")();
const marks = parseFloat(prompt("Enter the student's marks:"));

if (isNaN(marks) || marks < 0 || marks > 100) {
  console.log("Invalid input! Marks should be between 0 and 100.");
} else {
  let grade;

  if (marks > 79) {
    grade = 'A';
  } else if (marks >= 60) {
    grade = 'B';
  } else if (marks >= 50) {
    grade = 'C';
  } else if (marks >= 40) {
    grade = 'D';
  } else {
    grade = 'E';
  }

  console.log(`The student's grade is: ${grade}`);
}
