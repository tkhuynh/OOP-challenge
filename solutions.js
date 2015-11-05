function Flower(name, color, petals, smellsPretty) {
    this.name = name;
    this.color = color;
    this.petals = petals;
    this.smellsPretty = smellsPretty;
    this.sniff = function() {
        console.log("Sniff Sniff Sniff!");
    };
    // Demonstrates use of arguments with methods
    this.smellsGood = function(answer) {
        if (answer) {
            return 'This flower smells amazing!';
        } else {
            return 'What a noxious weed!';
        }
    };
    // Demonstrates use of local object variables
    this.describe = function(answer) {
        alert("This flower is " + this.color + ".");
    };
    /// Demonstrates object to object interaction
    this.compare = function(otherFlower) {
        return ("My " + this.color + " flower is much prettier than your " +
            otherFlower.color + " flower :P");
    };
    this.render = function() {
        $('body').append("<p>My pretty flower is " + this.color +
            " and has " + this.petals + " pristine petals.</p>");
    };

    this.crossPollinate = function(otherFlower) {
        var childName = (this.name).split("").slice(0, 2).join("") + (otherFlower.name).split("").slice(-3).join("");
        var childColor = this.color + "-" + otherFlower.color;
        var childPetals = ((this.petals + otherFlower.petals) / 2).toFixed(0);
        var childSmellsPretty;
        if (this.smellsPretty && otherFlower.smellsPretty) {
            childSmellsPretty = true;
        } else {
            childSmellsPretty = false;
        }
        return new Flower(childName, childColor, childPetals, childSmellsPretty);
    };
}
var garden = [
    flower1 = new Flower("Chrysanthenum", "pink", 65, false),
    flower2 = new Flower("Rose", "red", 32, true),
    flower3 = new Flower("Lily", "yellow", 6, true),
    flower4 = new Flower("Orchid", "purple", 5, false),
    flower5 = new Flower("Daisy", "white", 23, false),
    flower6 = new Flower("Hibiscus", "orange", 5, true),
    flower7 = new Flower("Iris", "yellow", 5, true),
    flower8 = new Flower("Lotusu", "rose", 20, true),
    flower9 = new Flower("Sunflower", "brown", 55, false),
    flower10 = flower9.crossPollinate(flower2),
    flower11 = flower8.crossPollinate(flower4),
    flower12 = flower4.crossPollinate(flower7)
];


console.log(garden);