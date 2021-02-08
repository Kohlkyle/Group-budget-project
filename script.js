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
  weeklyForm.reset();
});

//======makes images appear ============

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
  } else {
    worried.classList.remove("worried");
  }

  if (parseFloat(weeklyIncome) - parseFloat(expenseAmount) <= 0) {
    happy.classList.add("happy");
    worried.classList.add("worried");
    cash.classList.add("cash");
    badGuy.classList.remove("bad-guy");
  }
};

// ==============Card Section======================

let cardContainer = document.querySelector(".card-container");

let entertainmentForm = document.querySelector(".entertainment-form");
let foodForm = document.querySelector(".food-form");
let clothingForm = document.querySelector(".clothing-form");
let billsForm = document.querySelector(".bills-form");
let mobileForm = document.querySelector(".mobile-form");

let addButton = document.querySelectorAll(".add-button");

let entertainmentExpense = document.querySelector(".entertainment-expense"); //footerValue
let foodExpense = document.querySelector(".food-expense"); //footerValue
let clothingExpense = document.querySelector(".clothing-expense"); //footerValue
let billsExpense = document.querySelector(".bills-expense"); //footerValue
let amountLeft = document.querySelector(".amount-left"); //footerValue
let expenseTotal = document.querySelector(".expense-total"); //footerValue

let desktopMobile = document.querySelector(".desktop-mobile");

let entertainment = 0;
let clothing = 0;
let bills = 0;
let food = 0;
let expenseAmount = 0;

desktopMobile.addEventListener("submit", (e) => {
  e.preventDefault();

  let mobileContainer = document.querySelector(".mobile-container");

  let test = new FormData(e.target);
  let input = test.get("mobile-type");
  console.log(input);

  if (e.target.classList.contains("mobile-form")) {
    let snapshot = new FormData(e.target);

    let type = snapshot.get("mobile-type");
    let expense = snapshot.get("expense");
    let amount = snapshot.get("input");
    console.log(type, expense, amount);
    let index = 0;

    if (type === "entertainment") {
      index = entertainment;
      entertainment++;
    } else if (type === "food") {
      index = food;
      food++;
    } else if (type === "clothing") {
      index = clothing;
      clothing++;
    } else {
      index = bills;
      bills++;
    }

    let expenseType = snapshot.get("expense");

    let expenseObject = {
      expense: expenseType,
    };

    let span = document.createElement("span");
    if (index === 0) {
      span.textContent = `${expenseObject.expense}`;
    } else {
      span.textContent = `, ${expenseObject.expense}`;
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

    mobileForm.reset();

    expenseAmount = expenseAmount + parseFloat(snapshot.get("input"));

    // =====adds to footer expense total======

    expenseTotal.textContent = `Expense Total: $${expenseAmount}`;

    // =====adds to footer remaining balance total======

    amountLeft.textContent = `Remaining Balance: $${
      parseFloat(weeklyIncome) - parseFloat(expenseAmount)
    }`;

    showImage();
  }

  // ===========End of mobile=======================
  else {
    let type = e.target.getAttribute("data-type");

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

    let expenseType = snapshot.get("expense");

    let expenseObject = {
      expense: expenseType,
    };

    let span = document.createElement("span");
    if (index === 0) {
      span.textContent = `${expenseObject.expense}`;
    } else {
      span.textContent = `, ${expenseObject.expense}`;
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

    entertainmentForm.reset();
    clothingForm.reset();
    foodForm.reset();
    billsForm.reset();

    expenseAmount = expenseAmount + parseFloat(snapshot.get("input"));

    // =====adds to footer expense total======

    expenseTotal.textContent = `Expense Total: $${expenseAmount}`;

    // =====adds to footer remaining balance total======

    amountLeft.textContent = `Remaining Balance: $${
      parseFloat(weeklyIncome) - parseFloat(expenseAmount)
    }`;
  }

  showImage();
});
