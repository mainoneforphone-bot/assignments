// ======================================
// JavaScript Assignment
// ======================================

// --------------------------------------
// Task 1 – Greeting User
// --------------------------------------

let userName = prompt("Enter your name:");
let userAge = prompt("Enter your age:");

alert("Welcome " + userName + "! You are " + userAge + " years old.");

console.log("Name:", userName);
console.log("Age:", userAge);

// --------------------------------------
// Task 2 – Student Grade
// --------------------------------------

function checkGrade(marks) {
    if (marks >= 80) {
        console.log(marks + ": A Grade");
    } else {
        if (marks >= 70) {
            console.log(marks + ": B Grade");
        } else {
            if (marks >= 60) {
                console.log(marks + ": C Grade");
            } else {
                if (marks >= 50) {
                    console.log(marks + ": Pass");
                } else {
                    console.log(marks + ": Fail");
                }
            }
        }
    }
}

// Function Calls
checkGrade(85);
checkGrade(75);
checkGrade(65);
checkGrade(55);
checkGrade(40);

// --------------------------------------
// Task 3 – Even Numbers
// --------------------------------------

console.log("Even Numbers (1 to 50):");

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// --------------------------------------
// Task 4 – Reverse Counting
// --------------------------------------

console.log("Reverse Counting:");

let number = 10;

while (number >= 1) {
    console.log(number);
    number--;
}

// --------------------------------------
// Task 5 – Array Operations
// --------------------------------------

let names = ["Ali", "Ahmed", "Sara", "Zain"];

// Add "Fatima" to the end
names.push("Fatima");

// Remove first element
names.shift();

// Add "Usman" at the beginning
names.unshift("Usman");

// Remove last element
names.pop();

console.log("Final Array:");
console.log(names);

// --------------------------------------
// Task 6 – Slice and Splice
// --------------------------------------

let numbers = [10, 20, 30, 40, 50, 60];

// Slice
let slicedArray = numbers.slice(1, 4);

// Splice
numbers.splice(2, 2);

console.log("Sliced Array:");
console.log(slicedArray);

console.log("Original Array After Splice:");
console.log(numbers);

// --------------------------------------
// Task 7 – Object
// --------------------------------------

let student = {
    name: "Ali",
    age: 18,
    city: "Karachi",
    course: "JavaScript"
};

console.log("Student Name:", student.name);
console.log("Student City:", student.city);

// --------------------------------------
// Task 8 – Array of Objects
// --------------------------------------

let students = [
    { name: "Ali", marks: 80 },
    { name: "Sara", marks: 92 },
    { name: "Ahmed", marks: 65 },
    { name: "Zain", marks: 50 }
];

// Part A - map()

let studentNames = students.map(function(student) {
    return student.name;
});

console.log("Student Names:");
console.log(studentNames);

// Part B - forEach()

students.forEach(function(student) {
    console.log(student.name + " scored " + student.marks + " marks.");
});

// --------------------------------------
// Bonus Challenge
// --------------------------------------

function findTopper(students) {
    let topper = students[0];

    for (let i = 1; i < students.length; i++) {
        if (students[i].marks > topper.marks) {
            topper = students[i];
        }
    }

    console.log("Topper: " + topper.name);
    console.log("Marks: " + topper.marks);
}

findTopper(students);