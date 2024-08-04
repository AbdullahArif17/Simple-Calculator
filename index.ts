#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const answer = await inquirer.prompt([
{message: "Enter first number", type: "number", name: "firstNumber"},
{message: "Enter second number", type: "number", name: "secondNumber"},
{
    message: chalk.grey("Select one of the operators to perform operations"),
    type: "list",
    name: "operators",
    choices: ["Addition", "Subtraction","Multipication", "Division"],
},
]);

if(answer.operators === "Addition"){
    console.log(chalk.blueBright(answer.firstNumber + answer.secondNumber))
}else if(answer.operators === "Subtraction"){
    console.log(chalk.blueBright(answer.firstNumber - answer.secondNumber))
}else if(answer.operators === "Multipication"){
    console.log(chalk.blueBright(answer.firstNumber * answer.secondNumber))
}else if(answer.operators === "Division"){
    console.log(chalk.blueBright(answer.firstNumber / answer.secondNumber))
}else {
    console.log(chalk.redBright("Please select valid operator."))
}