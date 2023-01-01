//Global variable example -- the variable is located outside of a function
var A = 10;
function Add_numbers_1() {
    document.write(20 + A + "<br>");
}
function Add_numbers_2() {
    document.write(A + 100 + "<br>");

}
Add_numbers_1();
Add_numbers_2();

//Local variable example -- the variable islocated wihin a function
function Add_numbers_3() {
    var B = 5;
    document.write(5 + B + "<br>");
}
function Add_numbers_4() {
    console.log("This function, Add_numbers_4, will throw an error as the variable B is not local, nor global")
    document.write(B + 2); //Variable B is undefined because it's not local to this function as shown in the console using Devl Tools. Variable B is located inside "Add_numbers_3".  
}

Add_numbers_3();
Add_numbers_4();

//Using a function that utilieze the Date().getHours() method
function fetch_Date() {
    if (new Date().getHours() < 21) { 
    document.getElementById("My_Date").innerHTML = "If you can see this, it's not 9pm your local time yet. <br>";
    }
}

//Utilizing an "if" conditional statement
if (10 > 1) {
    document.write("Ten is greater than one.")
}

//Utilizing the "else" statement for branching
function my_Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 25) {
        Vote = "You are old enough to rent a car.";
    }
    else {
        Vote = "You are not yet old enough to rent a car";
    }
    document.getElementById("Your_Age?").innerHTML = Vote;
}

//Utilizing the "else if" statements
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}