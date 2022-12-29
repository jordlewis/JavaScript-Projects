//This utilizes a ternary operator to assign a value based on 3 conditions
function vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough to":"You can";
    document.getElementById("Vote").innerHTML = Can_vote + " vote!";
}

//This is a constructor 
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make; // These act as placeholders
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
//Utilizing the "new" keyword to create new objects
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); 
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() { 
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored" + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}
// More practice with constructors
function Book(Title, Author, Publish) {
    this.Book_Title = Title;
    this.Book_Author = Author;
    this.Book_Publish = Publish;
}
var Jordyn = new Book("Jurassic Park", "Michael Crichton", 1990);
var Mel = new Book("Harry Potter and the Chamber of Secrets", "J.K. Rowling", 1998);
function jFunction() {
    document.getElementById("New_and_This").innerHTML = "Mel's favorite book is " + Mel.Book_Title + " by " + Mel.Book_Author + " and it was published year " + Mel.Book_Publish;
}
// This is testing out Reserved words in JS that cannot be used as variable or function names
//function Test(One, Two, Three) {
    //this.Test_One = One;
    //this.Test_Two = Two;
    //this.Test_Three = Three;
//}
//var Byte = new Test("Eno", "Owt", "Eerht");
//var Native = new Test("Uno", "Dos", "Tres");
//function void() {
    //document.getElementById("Reserved_Word").innerHTML = Byte.Test_One + Byte.Test_Two + Byte.Test_Three;
//}

// Below is an example of a nested function
function count_Function() {
    document.getElementById("Nest_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 50;
        function Plus_one() {Starting_point += 2;}
        Plus_one();
        return Starting_point;
    }
}