// Global Variables

const pinScreen = document.querySelector(".pinScreen");

const savingsBalance = document.querySelector(".savingsBalance");

const checkingBalance = document.querySelector(".checkingBalance");

const otherAmountWindowDeposit = document.querySelector(".otherAmountDeposit");

const otherAmountWindowWithdraw = document.querySelector(
  ".otherAmountWithdraw"
);

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

  savingsBalance.innerHTML = `Your account balance is now $${currentSavingsBalance}`;
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

  savingsBalance.innerHTML = `Your account balance is now $${currentSavingsBalance}`;
};

// Display Checking Balance
const showCheckingBalance = () => {
  const checkingAccountBalance = accountInfo.checkingAccount;

  checkingBalance.innerHTML = `Your Checking Account Balance is Currently $${checkingAccountBalance}`;
};

// Deposit to Savings Account
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

  checkingBalance.innerHTML = `Your account balance is now $${currentCheckingBalance}`;
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

  checkingBalance.innerHTML = `Your account balance is now $${currentCheckingBalance}`;
};
