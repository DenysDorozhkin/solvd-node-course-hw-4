const bankAccount = {
  balance: 1000,
  get formattedBalance() {
    return `$${this.balance}`;
  },
  set balance(newBalance) {
    this.balance = newBalance;
  },
  transfer: function (currentBankAccount, targetBankAccount, amount) {
    if (typeof amount !== "number" || amount <= 0) {
      throw new Error("Amount must be a positive number.");
    }
    if (currentBankAccount.balance < amount) {
      throw new Error("Insufficient funds.");
    }
    currentBankAccount.balance -= amount;
    targetBankAccount.balance += amount;
  },
};
