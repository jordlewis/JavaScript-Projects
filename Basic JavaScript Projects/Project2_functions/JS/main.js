function fishOne() {
    document.getElementById("Fish-One").style.color = "red"; //Changes the font color to red when mousing over the text. 
}

function fishTwo() {
    document.getElementById("Second-Fish").style.color = "blue"; //Changes the font blue to red when mousing over the text.
}

function myFunction() {
    var sentence = "Whichever way";
    sentence += " the wind blows";
    document.getElementById("lyrics").innerHTML = sentence; //When clicking on the text, it changes the text to the concatenated strings 
}

function mySecondfunction() {
    var sentence = "You don't listen too well,";
    sentence += " do ya?";
    document.getElementById("test").innerHTML = sentence; //Mousing on the text, it changes the text to the concatenated strings 
    document.getElementById("test").style.color = "purple"; //Mousing over the text, it changes the font color to purple
}