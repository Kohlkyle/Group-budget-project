"use strict";

let weeklyForm = document.querySelector(".weekly-form");
let weeklyBudget = document.querySelector(".weekly-budget");
let updateBudgetButton = document.querySelector(".update-budget");

// ================Weekly budget ==================

let weeklyIncome = 0;

weeklyForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let snapshot = new FormData(weeklyForm);
  weeklyIncome = snapshot.get("budget-amount");

  weeklyBudget.textContent = `Weekly Budget: $${weeklyIncome}`;

  showImage();
  console.log("here");
  weeklyForm.reset();
});

// ==============Card Section======================
let cardContainer = document.querySelector(".card-container");

let entertainmentForm = document.querySelector(".entertainment-form");
let foodForm = document.querySelector(".food-form");
let clothingForm = document.querySelector(".clothing-form");
let billsForm = document.querySelector(".bills-form");

let addButton = document.querySelectorAll(".add-button");

let entertainmentExpense = document.querySelector(".entertainment-expense"); //footerValue
let foodExpense = document.querySelector(".food-expense"); //footerValue
let clothingExpense = document.querySelector(".clothing-expense"); //footerValue
let billsExpense = document.querySelector(".bills-expense"); //footerValue

let expenseTotal = document.querySelector(".expense-total"); //footerValue
let amountLeft = document.querySelector(".amount-left"); //footerValue

let entertainment = 0;
let clothing = 0;
let bills = 0;
let food = 0;
let entertainmentAmount = 0;

cardContainer.addEventListener("submit", (e) => {
  e.preventDefault();

  console.dir(e.target);

  let type = e.target.getAttribute("data-type");
  console.log(type);

  let snapshot = null;

  let index = 0;

  if (type === "entertainment") {
    snapshot = new FormData(entertainmentForm);
    index = entertainment;
    entertainment++;
  } else if (type === "food") {
    index = food;
    snapshot = new FormData(foodForm);
    food++;
  } else if (type === "clothing") {
    snapshot = new FormData(clothingForm);
    index = clothing;
    clothing++;
  } else {
    snapshot = new FormData(billsForm);
    index = bills;
    bills++;
  }

  let entertainmentType = snapshot.get("entertainmentname");

  let entertainmentObject = {
    entertainmentname: entertainmentType,
  };

  entertainmentForm.reset();
  clothingForm.reset();
  foodForm.reset();
  billsForm.reset();

  let span = document.createElement("span");
  if (index === 0) {
    span.textContent = `${entertainmentObject.entertainmentname}`;
  } else {
    span.textContent = `, ${entertainmentObject.entertainmentname}`;
  }

  if (type === "entertainment") {
    entertainmentExpense.append(span);
  } else if (type === "food") {
    foodExpense.append(span);
  } else if (type === "clothing") {
    clothingExpense.append(span);
  } else {
    billsExpense.append(span);
  }
  // });
  entertainmentAmount = entertainmentAmount + parseFloat(snapshot.get("input"));

  // =====below adds to footer expense total======

  expenseTotal.textContent = `Expense Total: $${entertainmentAmount}`;

  // =====below adds to footer remaining balance total======

  amountLeft.textContent = `Remaining Balance: $${
    parseFloat(weeklyIncome) - parseFloat(entertainmentAmount)
  }`;
});

let happy = document.querySelector(".happy");
let cash = document.querySelector(".cash");
let worried = document.querySelector(".worried");
let badGuy = document.querySelector(".bad-guy");

const showImage = () => {
  happy.classList.add("happy");
  worried.classList.add("worried");
  badGuy.classList.add("bad-guy");
  cash.classList.add("cash");

  if (weeklyIncome >= 2000) {
    cash.classList.remove("cash");
  } else if (weeklyIncome < 2000 && weeklyIncome >= 700) {
    happy.classList.remove("happy");
  } else if (weeklyIncome > 0 && weeklyIncome < 700) {
    worried.classList.remove("worried");
  } else {
    badGuy.classList.remove("bad-guy");
  }
};
