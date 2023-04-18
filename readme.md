`const bankCustomer = {
    bankName: "HDFC",
    savingAccount: 1,
    currentAccount: 1,
    goldLoan: 50000,
    educationLoan: 100000,
    currentAccountNumber: 222323,
    savingAccountNumber: 4343434,
    address: "spj",
    mobile: "323232323",
    salary: 600000 // yearly
}`

- [ ] Find total accounts of that customer in hdfc
- [ ] Total loan amount
- [ ] Find total salary/month
- [ ] Print the bank name in which he is having account

---
## Solutions
const totalAccount = bankCustomer.savingAccount + bankCustomer.currentAccount
console.log(totalAccount)

const totalLoanAmount = bankCustomer.goldLoan + bankCustomer.educationLoan
console.log(totalLoanAmount)

const totalSalaryPerMonth = bankCustomer.salary/12
console.log(totalSalaryPerMonth)

console.log(bankCustomer.bankName)