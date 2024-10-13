// Chapter 6-9
// Question no 3

let username = prompt("Enter Your name");
alert("What a nice name " + username);

// Question no 5

        function showMultiplicationTable() {
            let number = prompt("Enter a number to display its multiplication table (or leave blank for 5):");
            if (!number) {
                number = 5;
            } else {
                number = parseInt(number);
            }

            if (isNaN(number)) {
                alert("Please enter a valid number.");
                return;
            }

            let table = "";
            for (let i = 1; i <= 10; i++) {
                table += `${number} × ${i} = ${number * i}\n`;
            }
            alert(table);
        }
// Chapter 9-11 start
// Question no 1

let city= prompt("Enter your city (First letter capital)");

if(city == "Karachi"){
    alert("Welcome to city of lights");
}
else{
    alert("Welcome");
};
// // Question no 2

let gender = prompt("Enter your Gender (First letter capital)");

if(gender == "Male"){
    alert("Good Morning Sir");
}
else{
    alert("Good Morning Ma’am")
};
// Question no 3

let color = prompt("Enter a signal color (First letter capital)");

if(color == "Red") {
    alert("Must Stop");
}
else if(color == "Yellow") {
    alert("Ready to move");
}
else if(color == "Green") {
    alert("Move now");
}
else {
    alert("Not a Signal color");
};
// Question no 4

let fuel = prompt("How many liters of fuel is in your car?");

if(fuel <= "0.25") {
    alert("Please! refil the fuel in your car");
}
else {
    alert("You can go to a long drive");
};
// Question no 5

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}

if (++c < 14){
alert("condition 3 is true");
}

if(c === 14){
alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
};

if (true){
alert("True");
}
if (false){
alert("False");
};

if("car" < "cat"){
alert("car is smaller than cat");
};
// Question no 6

function calculateGrade() {
    const totalMarks = parseFloat(document.getElementById("totalMarks").value);
    const marksObtained = parseFloat(document.getElementById("marksObtained").value);
    const resultDiv = document.getElementById("result");

    if (isNaN(totalMarks) || isNaN(marksObtained) || totalMarks <= 0) {
        resultDiv.textContent = "Please enter valid numbers for total marks and marks obtained.";
        resultDiv.style.color = 'red';
        return;
    }

    let percentage = (marksObtained / totalMarks) * 100;
    let grade = '';
    let remarks = '';

    if (percentage >= 80) {
        grade = 'A-one';
        remarks = 'Excellent';
    } else if (percentage >= 70) {
        grade = 'B+';
        remarks = 'Good';
    } else if (percentage >= 60) {
        grade = 'B';
        remarks = 'You need to improve';
    } else {
        grade = 'F';
        remarks = 'Sorry';
    }

    resultDiv.textContent = `Your grade is: ${grade} (${percentage.toFixed(2)}%)`;
    resultDiv.style.color = 'green';
};
// Question no 7

let game = prompt("Guess the secret number between 1-10");

if(game == "8"){
    alert("Bingo! Correct answer");
} else{
    alert("Close enough to the correct answer");
};
// Question no 8

let check = prompt("Enter a number that is divisible by 3");

    if (check % 3 === 0) {
        alert("Yeah! It is divisible by 3");
    } else {
        alert("No! It is not divisible buy 3");
    };
// Question no 9

let OddEven = prompt("Enter number Then i will tell that it is even or odd number");

    if (OddEven % 2 === 0) {
        alert("It is a even number");
    } else {
        alert("It is a odd number");
    };
// Question no 10

let temrature = prompt("Enter your city temprature")

if(temrature  >= "40"){
    alert("It is too hot outside");
}
else if(temrature >= "30") {
    alert("The Weather today is Normal");
}
else if(temrature >= "20") {
    alert("Today’s Weather is cool.");
}
else if(temrature >= "10") {
    alert("OMG! Today’s Weather is cool");
}
else if(temrature < "10") {
    alert("OMG! Today’s Weather is cool");
}
else{
    alert("OMG! Today’s Weather is cool");
};
// Question no 11

let num1 = +prompt("Enter first number");
let oprator = prompt("select a oprator");
let num2 = +prompt("Enter second number");

if(oprator == "+"){
    alert(num1 + num2)
}
else if(oprator == "-"){
    alert(num1 - num2)
}
else if(oprator == "*"){
    alert(num1*num2)
}
else if(oprator == "/"){
    alert(num1/num2)
}
else if(oprator == "%"){
    alert(num1 % num2)
}
else{
    alert("please enter +,-,*,/ and %")
};
// Chapter 9-11 end