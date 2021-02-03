"use strict";

let cards = document.querySelectorAll(".desktop-card");
let addExpense = document.querySelector(".add-expense");
let weeklyBudgetSection = document.querySelector(".weekly-budget-section");
let weeklyBudget = document.querySelector(".weekly-budget");
let incomeInput = document.querySelector(".income-input");
let amountLeft = document.querySelector(".amount-left");

let startingBudget = 0;

function updateBudget(event) {
  event.preventDefault();
  startingBudget = incomeInput.value;
  weeklyBudget.innerText = "$" + startingBudget;
  incomeInput.value = "";
  updateBalance();
}

let balance = 0;
let expenseTotal = 0;

function updateBalance() {
  balance = startingBudget - expenseTotal;
  amountLeft.innerText = "$" + balance;
  // add colors
}
