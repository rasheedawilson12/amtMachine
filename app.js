// Global Variables

const pinScreen = document.querySelector(".pinScreen");

const savingsBalance = document.querySelector(".savingsBalance");

const checkingBalance = document.querySelector(".checkingBalance");

const otherAmountWindowDeposit = document.querySelector(".otherAmountDeposit");

const otherAmountWindowWithdraw = document.querySelector(
  ".otherAmountWithdraw"
);

const thankyouMessage = document.querySelector(".thankyouMessage");

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

// Help button musseage
const helpButton = () => {
  const helpButtonMessage = alert(
    "For help with ATM Transactions, please come into your local branch for assistance. Branch hours are M-F 9am-5pm. For help outisde business hours, feel free to conact our 24/7 technical support center at 1-888-867-5309. Thank you for banking with Squirrel Bank."
  );
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

  savingsBalance.innerHTML = `Your Savings Account Balance is $${savingsAccountBalance}`;
};

// Deposit to Savings Account
const depositTwentyDollarsToSavings = () => {
  const currentSavingsBalance =
    parseInt(accountInfo.savingsAccount) + parseInt(20);

  savingsBalance.innerHTML = `Your account balance is now $${currentSavingsBalance}`;
};

const depositFiftyDollarsToSavingsToSavings = () => {
  const currentSavingsBalance =
    parseInt(accountInfo.savingsAccount) + parseInt(50);

  savingsBalance.innerHTML = `Your account balance is now $${currentSavingsBalance}`;
};

const depositOneHundredDollarsToSavings = () => {
  const currentSavingsBalance =
    parseInt(accountInfo.savingsAccount) + parseInt(100);

  savingsBalance.innerHTML = `Your account balance is now $${currentSavingsBalance}`;
};

// Other Amount Screen Keypad Function
const uploadToOtherAmountWindow = (number) => {
  otherAmountWindowWithdraw.append(number);
  otherAmountWindowDeposit.append(number);
};

// Clear Other Amount Window Function
const clearOAWindowWithdraw = () => {
  otherAmountWindowWithdraw.innerHTML = "";
};

const clearOAWindowDeposit = () => {
  otherAmountWindowDeposit.innerHTML = "";
};

// Store value in other amount window
const depositOtherAmountToSavings = () => {
  let otherAmountValue = prompt(
    "How much would you like to deposit to your account?"
  );
  const currentSavingsBalance =
    parseInt(accountInfo.savingsAccount) + parseInt(otherAmountValue);

  if (otherAmountValue > 5000) {
    alert("Please come insde and see a teller to complete this transaction");
  } else {
    savingsBalance.innerHTML = `Your account balance is now $${currentSavingsBalance}`;
  }
};

// Withdraw from Savings Account
const withdrawTwentyDollarsFromSavings = () => {
  const currentSavingsBalance =
    parseInt(accountInfo.savingsAccount) - parseInt(20);

  savingsBalance.innerHTML = `Your account balance is now $${currentSavingsBalance}`;
};

const withdrawFiftyDollarsFromSavings = () => {
  const currentSavingsBalance =
    parseInt(accountInfo.savingsAccount) - parseInt(50);

  savingsBalance.innerHTML = `Your account balance is now $${currentSavingsBalance}`;
};

const withdrawOneHundredDollarsFromSavings = () => {
  const currentSavingsBalance =
    parseInt(accountInfo.savingsAccount) - parseInt(100);

  savingsBalance.innerHTML = `Your account balance is now $${currentSavingsBalance}`;
};

const withdrawOtherAmountFromSavings = () => {
  let otherAmountValue = prompt(
    "How much would you like to withdraw from your account?"
  );
  const currentSavingsBalance =
    parseInt(accountInfo.savingsAccount) - parseInt(otherAmountValue);

  if (otherAmountValue > currentSavingsBalance) {
    alert("Please come inside and see a teller to complete this transaction");
  } else {
    savingsBalance.innerHTML = `Your account balance is now $${currentSavingsBalance}`;
  }
};

// Display Checking Balance
const showCheckingBalance = () => {
  const checkingAccountBalance = accountInfo.checkingAccount;

  checkingBalance.innerHTML = `Your Checking Account Balance is Currently $${checkingAccountBalance}`;
};

// Deposit to Checking Account
const depositTwentyDollarsToChecking = () => {
  const currentCheckingBalance =
    parseInt(accountInfo.checkingAccount) + parseInt(20);

  checkingBalance.innerHTML = `Your account balance is now $${currentCheckingBalance}`;
};

const depositFiftyDollarsToChecking = () => {
  const currentCheckingBalance =
    parseInt(accountInfo.checkingAccount) + parseInt(50);

  checkingBalance.innerHTML = `Your account balance is now $${currentCheckingBalance}`;
};

const depositOneHundredDollarsToChecking = () => {
  const currentCheckingBalance =
    parseInt(accountInfo.checkingAccount) + parseInt(100);

  checkingBalance.innerHTML = `Your account balance is now $${currentCheckingBalance}`;
};

const depositOtherAmountToChecking = () => {
  let otherAmountValue = prompt(
    "How much would you like to deposit to your account?"
  );
  const currentCheckingBalance =
    parseInt(accountInfo.checkingAccount) + parseInt(otherAmountValue);

  if (otherAmountValue >= 5000) {
    alert("Please come inside and see a teller to complete this transaction.");
  } else {
    checkingBalance.innerHTML = `Your account balance is now $${currentCheckingBalance}`;
  }
};

// Withdraw from Checking Account
const withdrawTwentyDollarsFromChecking = () => {
  const currentCheckingBalance =
    parseInt(accountInfo.checkingAccount) - parseInt(20);

  checkingBalance.innerHTML = `Your account balance is now $${currentCheckingBalance}`;
};

const withdrawFiftyDollarsFromChecking = () => {
  const currentCheckingBalance =
    parseInt(accountInfo.checkingAccount) - parseInt(50);

  checkingBalance.innerHTML = `Your account balance is now $${currentCheckingBalance}`;
};

const withdrawOneHundredDollarsFromChecking = () => {
  const currentCheckingBalance =
    parseInt(accountInfo.checkingAccount) - parseInt(100);

  checkingBalance.innerHTML = `Your account balance is now $${currentCheckingBalance}`;
};

const withdrawOtherAmountFromChecking = () => {
  let otherAmountValue = prompt(
    "How much would you like to withdraw from your account?"
  );
  const currentCheckingBalance =
    parseInt(accountInfo.checkingAccount) - parseInt(otherAmountValue);

  if (otherAmountValue > currentCheckingBalance) {
    alert("Please come inside and see a teller to complete this transaction.");
  } else {
    checkingBalance.innerHTML = `Your account balance is now $${currentCheckingBalance}`;
  }
};
