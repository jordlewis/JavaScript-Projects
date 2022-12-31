//Using "concat() method" to concatenate strings together within a function
function random_Sentence() {
    var part_1 = "Can't stop, ";
    var part_2 = "addicted to"
    var part_3 = " the shindig."
    var whole_sentence = part_1.concat(part_2, part_3);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

//Utilizing the "slice() method" to extract a section of a string and return it within a new string
function slice_Method() {
    var Sentence = "Humpy Dumpty sat on a wall, Humpty Dumpy had a great fall.";
    var Section = Sentence.slice(28, 40);
    document.getElementById("Slice").innerHTML = Section;
}

//Utilizing the "toUpperCase() method" to capitilize all the letters in variable "words"
function uppercase_Method() {
    var words = "this is some uppercase text";
    var ups = words.toUpperCase();
    document.getElementById("Uppercase").innerHTML = ups;

}

//Utilizing the "search() method" to find the position of "gray"
function search_Method() {
    let text = "I drive a gray car.";
    document.getElementById("Search").innerHTML = text.search("gray");
}

//Utilizing the "toString() method" to return a number as a string
function string_Method() {
    var A = 121;
    document.getElementById("Numbers_to_string").innerHTML = A.toString();
}

//Utilizing the "toprecision() method" to format down to 5 characters
function precision_Method() {
    var B = 153.65987413526;
    document.getElementById("Precision_Yeah").innerHTML = B.toPrecision(5);
}

//Utilizing the "tofixed() method" to convert a number to a string, and round it to the chosen decimal place
function fixed_Method() {
    var C = 6.2146985244;
    document.getElementById("Fixed_Yeah").innerHTML = C.toFixed(5);
}

//Utilizing the "valueOf() method" to retrieve the primitive value of a string
function value_Method() {
    let text = "This is just some text"
    document.getElementById("Value_Yeah").innerHTML = text.valueOf();
}