 $(function() {   
    function Flower(name, color, petals, smellsPretty, image) {
        this.name = name;
        this.color = color;
        this.petals = petals;
        this.smellsPretty = smellsPretty;
        this.image = image;
        this.sniff = function() {
            console.log("Sniff Sniff Sniff!");
        };
        // Demonstrates use of arguments with methods
        this.smellsGood = function(answer) {
            if (answer) {
                return 'This flower smells amazing!';
            } else {
                return 'This is a noxious flower!';
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
            if (this.smellsPretty === true) {
                $('#flower-left').append("<img src=" + this.image + ">");
                $('#description-left').append("<p><span><b>Name:</b><span> " + this.name + "</p");
                $('#description-left').append("<p><span><b>Color:</b><span>  " + this.color + "</p");
                $('#description-left').append("<p><span><b>Number of Petals:</b><span>  " + this.petals+ "</p");
                $('#description-left').append("<p id='smell'><i>" + this.smellsGood(this.smellsPretty)+ "</i></p");
            } else {
                $('#flower-right').append("<img src=" + this.image + ">");
                $('#description-right').append("<p><span><b>Name:</b><span> " + this.name + "</p");
                $('#description-right').append("<p><span><b>Color:</b><span>  " + this.color + "</p");
                $('#description-right').append("<p><span><b>Number of Petals:</b><span>  " + this.petals+ "</p");
                $('#description-right').append("<p id='smell'><i>" + this.smellsGood(this.smellsPretty)+ "</i></p");
            }
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
            var childImage = "'https://www.electiondataservices.com/wp-content/uploads/2014/10/sorry-image-not-available-200x200.jpg'";
            return new Flower(childName, childColor, childPetals, childSmellsPretty, childImage);
        };
    }
    var garden = [
        flower1 = new Flower("Chrysanthenum", "pink", 65, true, "http://www.floristtaxonomy.com/wp-content/uploads/2015/08/chrysanthemum_morifolium.jpg"),
        flower2 = new Flower("Rose", "red", 32, true, "http://txphotoblog.com/wp-content/uploads/yapb_cache/miniature_red_rose_blossom.ewggohseidc04go0wwcswk888.5535dveuf9c0g4k48c4cw0cg0.th.jpeg"),
        flower3 = new Flower("Lily", "yellow", 6, true, "http://rs11.pbsrc.com/albums/a184/valleyrimgirl/lilies/lilyYellowGracelilypatch726.2007.jpg~c200"),
        flower4 = new Flower("Orchid", "purple", 5, false, "http://cdn.craftsy.com/upload/786089/project/70353/list_7578_70353_PurpleVandaOrchids_1.jpg"),
        flower5 = new Flower("Daisy", "white", 23, false, "http://images.freeimages.com/images/premium/large-thumbs/2470/24703426-daisy.jpg"),
        flower6 = new Flower("Hibiscus", "orange", 5, true, "http://thumbs.imagekind.com/1379240_200/Orange-Hibiscus_art.jpg?v=1391809560"),
        flower7 = new Flower("Iris", "yellow", 5, true, "http://www.waterfordgardens.com/images/categories/C518medium.jpg"),
        flower8 = new Flower("Lotus", "rose", 20, true,"http://g02.s.alicdn.com/kf/HTB1PHGcJXXXXXaPXXXX760XFXXXp/Artificial-Plastic-Fake-Lotus-Flower.png_200x200.png"),
        flower9 = new Flower("Sunflower", "brown", 55, false, "https://cdn-img-2.wanelo.com/p/2aa/08c/6d1/a70dfd138d0b8b6c5b68b70/x200-q90.jpg"),
        flower10 = flower9.crossPollinate(flower2),
        flower11 = flower8.crossPollinate(flower4),
        flower12 = flower4.crossPollinate(flower7)
    ];
    garden.forEach(function(flower){
        flower.render();
    });
});