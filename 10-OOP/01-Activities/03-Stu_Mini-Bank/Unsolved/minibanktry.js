function MiniBank(balance) {
	this.balance = balance;
	this.statment = [balance];
	this.getBalance = () => {
		return this.balance;
	},
	this.setStatment = value => {
		this.statment = value;
	},
  this.printBalance = () => {
    console.log(`Balance: ${this.getBalance()}`);
  },
}
