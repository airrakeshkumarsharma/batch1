const classStudent = {
    firstName: "rahul",
    secondName: "kumar",
    lastName: "singh",
    rollnumber: 12,
    class: 10,
    marksObtained: 200,
    dob: "12/12/2000",
}

const fullName = `${classStudent.firstName} ${classStudent.secondName} ${classStudent.lastName}`

// % = totalObtainedMarks/totalMarks * 100
const marks = (classStudent.marksObtained/500)*100
console.log(marks)

const bankCustomer = {
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
}

// 1. find total accounts of that customer in hdfc
// 2. Total loan amount
// 3. Find total salary/month
// 4. Print the bank name in which he is having account