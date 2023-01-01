//Utilizing a "while loop" to countdown to 1 from 25
function while_Loop() {
    var Number = "";
    var A = 25;
    while (A > 0) {
        Number += "<br>" + A;
        A--;
    }
    document.getElementById("Loop").innerHTML = Number;
}

//Utilizing "string length" to find how long a particular string is
function string_Length() {
    B = "Life finds a way";
    document.getElementById("Length").innerHTML = B.length;
}

//Utilizing a "for loop" to list out boardgames
var Games = ["Clue", "Yahtzee", "Monopoly", "Uno", "Trouble"];
var Content = "";
var C;
function for_Loop() {
    for (C = 0; C < Games.length; C++) {
    Content += Games[C] + "<br>";
    }
    document.getElementById("List_of_Games").innerHTML = Content;
}

//Utilizing an array inside of a function to be called
function array_Function() {
    var Pup_Status = [];
    Pup_Status[0] = "lounging";
    Pup_Status[1] = "napping";
    Pup_Status[2] = "woofing";
    Pup_Status[3] = "eating";
    document.getElementById("Array").innerHTML = "My two pups are currently " + Pup_Status[1] + ".";
}

//Utilizing a constant, instead of a variable. It cannot be changed once defined
function constant_Function() {
    const Game_Console = {type:"PlayStation 5", brand:"Sony", color:"white"};
    Game_Console.color = "black";
    Game_Console.type = "Xbox One X"
    Game_Console.price = "$500";
    document.getElementById("Constant").innerHTML = "A new " + Game_Console.color + ", " + Game_Console.type + " costs " + Game_Console.price + ".";
}

//Utilizing the "let" keyword to change the value within scope of a block of code between curly braces
function let_Function() {
    var D = 21;
    document.getElementById("First_Variable").innerHTML = D;
    {
        let D = 12;
        document.getElementById("Let_Keyword").innerHTML = D; 
    }
    document.getElementById("After_Block").innerHTML = D;
}

//Utilizing the "return" function to calculate the product of 2 numbers within function "my_Return"
var Product = my_Return(2, 8);
function my_Return(E, F) {
    return E * F;
}
document.getElementById("Return").innerHTML = Product;

//Creating an object called "pupper: with properties and a method
let pupper = {
    breed: "Chiweenie",
    age: "5 years",
    weight: "23lbs",
    sex: "female",
    description : function() {
        return "My dog, Ahsoka, is a " + this.sex + " " + this.breed + " who is " + this.age + " old and weighs around " + this.weight +".";
    }
};
document.getElementById("Pupper_Object").innerHTML = pupper.description();

//Utilizing a "break statement" within a loop to stop at "life"
var More_Games = ["Solitaire", "Boggle", "Life", "Sorry!", "Jumanji"];
var More_Content = "";
var H;
function break_Loop() {
    for (H = 0; H < More_Games.length; H++) {
    if ( H === 2) {break;}
    More_Content += More_Games[H] + "<br>";
    }
    document.getElementById("List_of_More_Games").innerHTML = More_Content;
}

//Utilizing a "continue statement" within a loop to skip "blue"
var Colors = ["Red", "Green", "Yellow", "Blue", "Pink"];
var Color_Content = "";
var I;
function continue_Loop() {
    for (I = 0; I < Colors.length; I++) {
    if ( I === 3) {continue;}
    Color_Content += Colors[I] + "<br>";
    }
    document.getElementById("List_of_Colors").innerHTML = Color_Content;
}
