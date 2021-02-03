"use strict";

let cards = document.querySelectorAll(".desktop-card");
let addExpense = document.querySelector(".add-expense");
let weeklyBudgetSection = document.querySelector(".weekly-budget-section");
let weeklyBudget = document.querySelector(".weekly-budget");
let incomeInput = document.querySelector(".income-input");
let startingBudget = 0;

function updateBudget(event) {
  event.preventDefault();
  startingBudget = incomeInput.value;
  weeklyBudget.innerText = "$" + startingBudget;
  incomeInput.value = "";
}
console.log(updateBudget);
