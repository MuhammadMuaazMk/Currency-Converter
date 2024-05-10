#!/usr/bin/env node 
import inquirer from "inquirer"

const currency:any = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    SAR: 3.75,
    AED: 3.67,
    INR: 74.57,
    PKR: 280

}
let userAnswer = await inquirer.prompt(
    [
        {


            name: "From",
            message: "Enter Your Currency",
            type: "list",
            choices: ["USD", "EUR", "GBP", "SAR", "AED", "INR", "PKR"]

        },
        {


            name: "To",
            message: "Enter Your Currency",
            type: "list",
            choices: ["USD", "EUR", "GBP", "SAR", "AED", "INR", "PKR"]

        },
        {
            name:"Amount",
            message:"Enter your Amount",
            type:"number"

        },
        
        
    ]
)
let fromAmount= currency[userAnswer.From]
let toAmount= currency[userAnswer.To]
let amount = userAnswer.Amount
let baseAmount = amount/fromAmount //usd base
let convertedAmount = baseAmount * toAmount
console.log("\n_____________________________")
console.log(` ${userAnswer.To} = ${convertedAmount}`)
console.log("_____________________________")