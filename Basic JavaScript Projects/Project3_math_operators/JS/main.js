// Addition using getElementById
function addition_Function() {
    var sum = 5 + 5;
    document.getElementById("Add").innerHTML = "5 + 5 = " + sum;
}
// Subtraction using getElementById
function subtraction_Function() {
    var difference = 8 - 3;
    document.getElementById("Subtract").innerHTML = "8 - 3 = " + difference;
}
// Multiplication using getElementById
function multiplication_Function() {
    var product = 2 * 7;
    document.getElementById("Multiply").innerHTML = "2 x 7 = " + product;
}
// Division using getElementById
function division_Function() {
    var quotient = 12 / 6;
    document.getElementById("Division").innerHTML = "12 / 6 = " + quotient;
}
// Several operators using getElementById
function all_Together() {
    var all = (10 +10) / 5 * 2 - 1;
    document.getElementById("Several").innerHTML = "10 plus 10, divided by 5, multiplied by 2, and then subtracted by 1 equals " + all;
}
//  % is used to find the remainder of two numbers
function modulus_Operator() {
    var modulus = 10 % 3;
    document.getElementById("Remainder").innerHTML = "When you divide 10 by 3 you have a remainder of: " + modulus;
}
// Negation operator ( - ); Returns the opposite of something
function negations_Operator() {
    var x = 25;
     document.getElementById("Unary").innerHTML = -x;
}
// Incrementing (10 increments to 11 in example)
var X = 10;
X++;
document.write(X);
// Decrementing (2.25 decrements to 1.25)
var Y = 2.25;
Y--;
document.write(Y);
// Returning a random number between 0 and 1
window.alert(Math.random());
// Returning a random numbert between 0 and 100
window.alert(Math.random() * 100);

// JavaScript Math object: It's a built-in object that allows you to perform mathematical operations, however, it does not have a constructor.

// Using Math object method to round to nearest integer
function rounding() {
    document.getElementById("Rounding").innerHTML = Math.round(64.3268);
}

