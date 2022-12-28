//This outputs the word "string" as it identifies the data type
document.write(typeof "Words, words, words.");

//This outputs the word "number" as it identifies the data type
document.write(typeof 8);

// Using coercion to write this out as "405", instead of returning "45"
document.write("40" + 5);

// Nana = "Not A Number"; Checks if something is a number
function my_Function() {
    document.getElementById("Test").innerHTML = 0/0;
}

// isNAN = "Is Not A Number"; Checks if something is a not a number
function my_Function_Two() {
        document.getElementById("Test_Two").innerHTML = isNaN('Words, words that make up a string');
}

// This returns as false becase 009 is a number
function my_Function_Three() {
    document.getElementById("Test_Three").innerHTML = isNaN('009');
}

// Function to display "infinity" on the HTML doc
function my_Function_Four() {
    document.getElementById("Infinity").innerHTML = 2E310;
}

//Function to display "-infinity" on the HTML doc
function my_Function_Five() {
    document.getElementById("Infinity_Two").innerHTML = -2E310;
}

// Using Boolean logic to print "True"
function my_Function_Six() {
    document.getElementById("Boolean_True").innerHTML = (3 > 2);
}

// Using Boolean logic to print "False"
function my_Function_Seven() {
    document.getElementById("Boolean_False").innerHTML = (3 < 2);
}

//Printing to the browser console
console.log(2 + 2);

//Pirinting "false" to the browser console using Boolean logic
console.log(5 < 4);

//Printing "true" to the browser console using Boolean logic
console.log(5 > 4);

//Utilizing double equal signs is used to check for equality
function my_Function_Eight() {
    document.getElementById("Double_Equal_One").innerHTML = (5 == 5);
}

//Utilizing double equal signs is used to check for equality
function my_Function_Nine() {
    document.getElementById("Double_Equal_Two").innerHTML = (5 == 6);
}

//Returns "true" since the data types and values are the same
function my_Function_Ten() {
    A = 25
    B = 25
    document.getElementById("Triple_Equal_Sign_One").innerHTML = (A === B);
}

//Returns "false" since the data types and values are different
function my_Function_Eleven() {
    C = "Blue"
    D = 25
    document.getElementById("Triple_Equal_Signs_Two").innerHTML = (C === D);
}

//Returns "false" since the values are the same, but the data types are different
function my_Function_Twelve() {
    E = 5
    F = "5"
    document.getElementById("Triple_Equal_Signs_Three").innerHTML = (E === F);
}

//Returns "false" since the values are the different, but the data type is the same
function my_Function_Thirteen() {
    G = "Damascus"
    H = "Stainless"
    document.getElementById("Triple_Equal_Signs_Four").innerHTML = (G === H);
}

//Using the Boolen AND logical operator "&&"; returns true
function my_Function_Fourteen() {
    document.getElementById("Boolean_And_True").innerHTML = (2 > 1 && 3 < 4);
}

//Using the Boolen AND logical operator "&&"; returns false
function my_Function_Fifteen() {
    document.getElementById("Boolean_And_False").innerHTML = (2 > 3 && 5 < 4);
}

//Using the Boolean OR logical operator "||"; returns 
function my_Function_Sixteen() {
    document.getElementById("Boolean_Or_True").innerHTML = (9 > 18 || 2 > 5);
}

//Using the Boolean OR logical operator "||"; returns 
function my_Function_Seventeen() {
    document.getElementById("Boolean_Or_False").innerHTML = (2 < 4  || 6 > 7);
}

//Using the "not" operator to check if something is true; This returns false
function not_Function_One() {
    document.getElementById("Not_One").innerHTML = !(10 < 25);
}

//This creates a double negative, returning "true"
function not_Function_Two() {
    document.getElementById("Not_Two").innerHTML = !(10 > 25);
}