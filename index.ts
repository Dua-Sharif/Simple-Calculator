#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "FirstNo" },
  { message: "Enter second number", type: "number", name: "SecondNo" },
  {
    message: "Enter the specific operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);
if (answer.operator === "Addition") {
  console.log(answer.FirstNo + answer.SecondNo);
} else if (answer.operator === "Subtraction") {
  console.log(answer.FirstNo - answer.SecondNo);
} else if (answer.operator === "Multiplication") {
  console.log(answer.FirstNo * answer.SecondNo);
} else if (answer.operator === "Division") {
  console.log(answer.FirstNo / answer.SecondNo);
} else {
  console.log("Please select valid operator ");
}
