// Global Variables

const pinScreen = document.querySelector(".pinScreen");

const savingsBalance = document.querySelector(".savingsBalance");

// const despositTwenty = document.querySelector(".despositTwenty");

// const depositFifty = document.querySelector(".depositFifty")

// Clear Pin Screen Function
const clearScreen = () => {
  pinScreen.innerHTML = "";
};

// Pin Screen Keypad Function
const uploadToPinScreen = (number) => {
  pinScreen.append(number);
};

// Account Information Object
const accountInfo = {
  name: "Jane Black",
  pinNumber: 8997,
  checkingAccountNumber: 68837571,
  savingsAccountNumber: 88395752,
  savingsAccount: 700,
  checkingAccount: 1500,
  despoitLimit: 3000,
  withdrawLimit: 2000,
};

// Display Savings Balance
const showSavingsBalance = () => {
  const savingsAccountBalance = accountInfo.savingsAccount;

  savingsBalance.innerHTML = `$${savingsAccountBalance}`;
};

// Deposit to Savings Account
const depositTwentyDollars = () => {
  const currentSavingsBalance =
    parseInt(accountInfo.savingsAccount) + parseInt(20);

  savingsBalance.innerHTML = `Your account balance is now $${currentSavingsBalance}`;
};

const depositFiftyDollars = () => {
  const currentSavingsBalance =
    parseInt(accountInfo.savingsAccount) + parseInt(50);

  savingsBalance.innerHTML = `Your account balance is now $${currentSavingsBalance}`;
};

const depositOneHundredDollars = () => {
  const currentSavingsBalance =
    parseInt(accountInfo.savingsAccount) + parseInt(100);

  savingsBalance.innerHTML = `Your account balance is now $${currentSavingsBalance}`;
};

const depositOtherAmount = () => {
  const currentSavingsBalance =
    parseInt(accountInfo.savingsAccount) + parseInt(20);

  savingsBalance.innerHTML = `Your account balance is now $${currentSavingsBalance}`;
};

// Withdraw from Savings Account
const withdrawTwentyDollars = () => {
  const currentSavingsBalance =
    parseInt(accountInfo.savingsAccount) - parseInt(20);

  savingsBalance.innerHTML = `Your account balance is now $${currentSavingsBalance}`;
};

const withdrawFiftyDollars = () => {
  const currentSavingsBalance =
    parseInt(accountInfo.savingsAccount) - parseInt(50);

  savingsBalance.innerHTML = `Your account balance is now $${currentSavingsBalance}`;
};

const withdrawOneHundredDollars = () => {
  const currentSavingsBalance =
    parseInt(accountInfo.savingsAccount) - parseInt(100);

  savingsBalance.innerHTML = `Your account balance is now $${currentSavingsBalance}`;
};

const withdrawOtherAmount = () => {
  const currentSavingsBalance =
    parseInt(accountInfo.savingsAccount) - parseInt(20);

  savingsBalance.innerHTML = `Your account balance is now $${currentSavingsBalance}`;
};
