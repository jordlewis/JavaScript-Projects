// This is a dictionary using KVPS
function my_Dictionary() {
    var Wizard = {
        Name: "Harry Potter",
        Age: 15, 
        Patronus: "Stag",
        House: "Gryffindor"
    };
document.getElementById("Dictionary").innerHTML = Wizard.Name;
}

// This function has two identical keys
function my_Second_Dictionary() {
    var Witch = {
        Name: "Hermione",
        Age: 15,
        Age: 15,  
        Patronus: "Otter",
        House: "Gryffindor"
    };
    delete Witch.Age; //Deleting a value from dictionary, returns "undefined"
    document.getElementById("Dictionary_2").innerHTML = Witch.Age;
}