"use strict";

let weeklyForm = document.querySelector(".weekly-form");
let weeklyBudget = document.querySelector(".weekly-budget");
let updateBudgetButton = document.querySelector(".update-budget");
let cards = document.querySelectorAll(".card-section");
// ================Weekly budget ==================

let weeklyIncome = 0;

weeklyForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let snapshot = new FormData(weeklyForm);
  weeklyIncome = snapshot.get("budget-amount");

  // if (weeklyIncome > 2000) {
  //   let mask = document.createElement("div");
  //   mask.classList.add("jimCarrey");
  // }

  weeklyBudget.textContent = `Weekly Budget: $${weeklyIncome}`;
});

// ==============Entertainment Card======================
// let entertainment = document.querySelector(".entertainment");

let nameInput = document.querySelector(".name-input");
let entertainmentExpense = document.querySelector(".entertainment-expense");
let entertainmentForm = document.querySelector(".entertainment-form");

let entertainment = [];
let entertainmentAmount = 0;

//===============Expense Amount $$$$$$ ==========

let expenseTotal = document.querySelector(".expense-total");
let amountLeft = document.querySelector(".amount-left");
let addButton = document.querySelectorAll(".add-button");

entertainmentForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let snapshot = new FormData(entertainmentForm);
  let entertainmentType = snapshot.get("entertainmentname");

  let entertainmentObject = {
    entertainmentname: entertainmentType,
    //expense amount
  };

  // ================Trying to make above function global to all cards================
  // const cardMath = (e) => {
  //   cards.addEventListener("submit", (e) => {
  //     e.preventDefault();
  //     console.dir(cards);
  //   });
  // };
  // =================
  // ==============appends entertainment names to footer ======================

  entertainmentForm.reset();

  entertainment.push(entertainmentObject);

  entertainmentExpense.innerHTML = "Entertainment:";

  entertainment.forEach((item, index) => {
    let span = document.createElement("span");
    if (index === 0) {
      span.textContent = `${item.entertainmentname}`;
    } else {
      span.textContent = `, ${item.entertainmentname}`;
    }

    entertainmentExpense.append(span);
  });
  entertainmentAmount =
    entertainmentAmount + parseFloat(snapshot.get("amount-input"));

  expenseTotal.textContent = `Expense Total: $${entertainmentAmount}`;

  amountLeft.textContent = `Remaining Balance: $${
    parseFloat(weeklyIncome) - parseFloat(entertainmentAmount)
  }`;

  //- parseFloat(snapshot.get(expenseTotal));
  // amountLeft.textContent = `Remaining Balance: $${amountLeft}`;
});
