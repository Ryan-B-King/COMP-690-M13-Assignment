const bankAccount = (ownerName) => {
  const owner = ownerName;
  let balance = 0;

  return {
    deposit: (depositAmount) => (balance = balance + Number(depositAmount)),
    getBalance: () => balance,
    getOwnerName: () => owner,
    withdrawal: (withdrawalAmount) =>
      (balance = balance - Number(withdrawalAmount)),
  };
};

const validateInput = (amount) => {
  while (!Number(amount)) {
    amount = prompt('Invalid. Enter a numeric amount: ');
  }
  return amount;
};

const setDisplayInformation = (account, displayElement) => {
  displayElement.innerText = `Name: ${account.getOwnerName()} Balance: ${account.getBalance()}`;
};

const setAccount = () => {
  let name = prompt('Enter your name: ');
  return bankAccount(name);
};

window.onload = () => {
  let account, depositAmount, withdrawalAmount;
  const displayElement = document.getElementById('information-display');

  document.querySelectorAll('button').forEach((inputButton) => {
    const id = inputButton.id;
    inputButton.addEventListener('click', () => {
      if (id === 'name-button') {
        account = setAccount();
        setDisplayInformation(account, displayElement);
      }

      if (id === 'deposit-button') {
        if (!account) {
          account = setAccount();
        }
        depositAmount = prompt('Enter amount to deposit: ');
        depositAmount = validateInput(depositAmount);
        account.deposit(depositAmount);
        setDisplayInformation(account, displayElement);
      }

      if (id === 'withdrawal-button') {
        if (!account) {
          account = setAccount();
        }

        withdrawalAmount = prompt('Enter amount to withdraw: ');
        withdrawalAmount = validateInput(withdrawalAmount);
        account.withdrawal(withdrawalAmount);
        setDisplayInformation(account, displayElement);
      }
    });
  });
};
