function getReceipt() {
    //This initializes our string so it can get passed
    //from function to function, growing line by line into a full receipt
    var text1 ="<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size"); //this creates a variable for the array of all of our different sizing options named "sizeArray"
    for (var i = 0 ; i< sizeArray.length; i++) { 
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value; //Establishes the selected size based off the value of index selected
            text1 = text1+selectedSize+"<br>"; 
        }
    }
    //Assigning a value in terms of price of size of pizza selected
    if (selectedSize === "Personal Pizza") { 
        sizeTotal = 6; //Personal pizza = $6
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8; //Small pizza = $8
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10; //Medium pizza = $10
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14; //Large pizza = $14
    } else if (selectedSize == "Extra Large Pizza") {
        sizeTotal = 16; //Extra Large pizza = $16
    }
    runningTotal = sizeTotal; //This establishes the variable "runningTotal" as equal to which size pizza was selected
    //Utilizing console.log() to print the function to the console for debugging purposes
    console.log(selectedSize + " = $" + sizeTotal + ".00"); //Displays the selected size of pizza and the repective value/dollar amount
    console.log("size text1: " + text1); //Prints current running order of the pizza size selected
    console.log("subtotal: $" + runningTotal + ".00"); //Prints current value/price of current selection of pizza size
    //these variables will get passsed on to each function
    getTopping(runningTotal, text1);
};

function getTopping(runningTotal, text1) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings"); //creates an array with all elements with the class name of "topping"
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value); //Establishes the selected toppings based off the value of index selected
            console.log("selected topping item: (" + toppingArray[j].value + ")");
            text1 = text1 + toppingArray[j].value + "<br>";
        }
    }
    var toppingCount = selectedTopping.length; //establishes toppingCount variable as the total amount of toppings selected
    if (toppingCount > 1) { //If the toppingCount is larger then one, then subtract 1 topping from count
        toppingTotal = (toppingCount -1);
    } else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal); //creates new running total variable, based off previous runningTotal and toppingTotal
    //Utilizing console.log() to print the function to the console for debugging purposes
    console.log("total selected topping items: " + toppingCount); //Prints quanity of total toppings selected
    console.log(toppingCount + " topping -1 free topping = " + "$" + toppingTotal + ".00"); //Lists the quantity of toppings and cites that one topping is "free", gives total of toppings
    console.log("topping text: " + text1); //Prints total selected topppings of pizza to the console
    console.log("Purchase Total: " + "$" + runningTotal + ".00"); //Prints total cost of pizzz; adds size and toppings total, minus 1 if applicable
    document.getElementById("showText").innerHTML = text1; //Prints total selected toppings of pizza to document
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong</h3>"; //Prints total price of pizza and selected toppings to document
};