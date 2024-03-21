#!/usr/bin/env node
import inquirer from "inquirer";
import standard from "./models/standard.js";
import percentage from "./models/percentage.js";
import compareDate from "./models/dateCal.js";
let runCal = true;
while (runCal) {
    async function main() {
        const answer = await inquirer.prompt([
            {
                name: "calculator",
                type: "list",
                message: "Which Calculator do you wants to use:",
                choices: [
                    "Standard",
                    "Percentage",
                    "Date difference"
                ],
            },
        ]);
        switch (answer.calculator) {
            case "Standard":
                await standard();
                break;
            case "Percentage":
                await percentage();
                break;
            case "Date difference":
                await compareDate();
                break;
            default:
                console.log("Thanks");
                break;
        }
        let exit = await inquirer.prompt([{
                name: 'exit',
                type: "confirm",
                message: "Do you wants to exit?"
            }]);
        if (exit.exit) {
            runCal = false;
        }
    }
    main();
}
