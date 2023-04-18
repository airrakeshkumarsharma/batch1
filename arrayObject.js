// ------------------------------------- Multi data storage ----------------------
const classStudents = [
    {
        firstName: "rahul",
        secondName: "kumar",
        lastName: "singh",
        rollnumber: 12,
        class: 10,
        marksObtained: 200,
        dob: "12/12/2000",
    },
    {
        firstName: "ramesh",
        secondName: "kumar",
        lastName: "roy",
        rollnumber: 10,
        class: 10,
        marksObtained: 250,
        dob: "12/12/2002",
    },
    {
        firstName: "raj",
        secondName: "kumar",
        lastName: "das",
        rollnumber: 1,
        class: 10,
        marksObtained: 300,
        dob: "12/12/2003",
    }
]

// const firstStudent = classStudents[2]
// console.log(firstStudent)

for(let i=0; i< classStudents.length; i++) {  // i = 1, 1<5
    const student = classStudents[i]

    console.log(student.dob)
}

// Find total student average of a given class?
// Add all the firstNames of Students

