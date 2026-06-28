// ===============================
// Task 1: Forward Counting
// ===============================

document.write("<h2>Task 1: Forward Counting</h2>");

for (var i = 1; i <= 20; i++) {
    document.write(i + "<br>");
}


// ===============================
// Task 2: Backward Counting
// ===============================

document.write("<h2>Task 2: Backward Counting</h2>");

for (var i = 20; i >= 1; i--) {
    document.write(i + "<br>");
}


// ===============================
// Task 3: Even Numbers
// ===============================

document.write("<h2>Task 3: Even Numbers</h2>");

for (var i = 1; i <= 50; i++) {

    if (i % 2 == 0) {
        document.write(i + "<br>");
    }

}


// ===============================
// Task 4: Odd Numbers
// ===============================

document.write("<h2>Task 4: Odd Numbers</h2>");

for (var i = 1; i <= 50; i++) {

    if (i % 2 != 0) {
        document.write(i + "<br>");
    }

}


// ===============================
// Task 5: Forward Counting While Loop
// ===============================

document.write("<h2>Task 5: Forward Counting Using While Loop</h2>");

var i = 1;

while (i <= 15) {

    document.write(i + "<br>");

    i++;
}


// ===============================
// Task 6: Reverse Counting While Loop
// ===============================

document.write("<h2>Task 6: Reverse Counting Using While Loop</h2>");

var i = 15;

while (i >= 1) {

    document.write(i + "<br>");

    i--;
}


// ===============================
// Task 7: Table Generator
// ===============================

document.write("<h2>Task 7: Table Generator</h2>");

var number = prompt("Enter a number for table");

for (var i = 1; i <= 10; i++) {

    document.write(number + " x " + i + " = " + (number * i) + "<br>");

}


// ===============================
// Task 8: Countdown Timer
// ===============================

document.write("<h2>Task 8: Countdown Timer</h2>");

for (var i = 10; i >= 1; i--) {

    document.write(i + "<br>");

}

document.write("Blast Off 🚀<br>");


// ===============================
// Task 9: Dynamic Counting
// ===============================

document.write("<h2>Task 9: Dynamic Counting</h2>");

var limit = prompt("Enter a number");

for (var i = 1; i <= limit; i++) {

    document.write(i + "<br>");

}


// ===============================
// Task 10: Range Counter
// ===============================

document.write("<h2>Task 10: Range Counter</h2>");

var start = prompt("Enter Start Number");

var end = prompt("Enter End Number");

if (start <= end) {

    for (var i = start; i <= end; i++) {

        document.write(i + "<br>");

    }

}
else {

    document.write("Invalid Range");

}