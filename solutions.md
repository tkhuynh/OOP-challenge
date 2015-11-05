# <img src="https://cloud.githubusercontent.com/assets/7833470/10423298/ea833a68-7079-11e5-84f8-0a925ab96893.png" width="60"> Solutions


### Pair Challenge
```
var goldenPoppy = new Flower("yellow", 4, true);

goldenPoppy.stem = true;
goldenPoppy.age 3;
```

### Cross-Pollination Challenge
```
function Flower(color, petals, smellsPretty) {
    this.color = color;
    this.petals = petals;
    this.smellsPretty = smellsPretty;
    this.crossPollinate =  function(otherFlower) {
        this.color = (this.color + "-" + otherFlower.color);
        this.petals = (this.petals + otherFlower.petals)/2;
        if((this.smellsPretty && otherFlower.smellsPretty) === true){
            this.smellsPretty = true;
        }else{
            this.smellsPretty = false;
        }
      return new Flower(this.color, this.petals, this.smellsPretty);
    };
}

// or with a Bee

function Flower(color, petals, smellsPretty) {
    this.color = color;
    this.petals = petals;
    this.smellsPretty = smellsPretty;
}

function Bee(){
    this.buzz = function(){
        console.log("Buuuuzzzz!!!");
    };
    this.crossPollinate = function(flower1, flower2){
        this.color = flower1.color + "-" + flower2.color;
        this.petals = (flower1.petals + flower2.petals)/2;
        if((flower1.smellsPretty && flower2.smellsPretty === true)){
            this.smellsPretty = true;
        }else{
            this.smellsPretty = false;
        }
      return new Flower(this.color, this.petals, this.smellsPretty);
    };
}
var rose = new Flower("red", 10, true);
var yellowPoppy = new Flower("yellow", 4, false);
var lilly = new Flower("purple", 6, true);

var buzzy = new Bee();
var monster = buzzy.crossPollinate(rose, yellowPoppy);
console.log(monster);
```

### Render Challenge
```

```

### Stretch Challenge
```
function Vase() {
  this.vase = [];
  this.placeFlower = function(flower) {
    this.vase.push(flower);
  };
  this.wilt = function() {
    for(i=0; i < this.vase.length; i++) {
      this.vase[i].petals = (this.vase[i].petals - 1);
    }
    return this.vase;
  };
  this.water = function() {
    for(i=0; i < this.vase.length; i++) {
      this.vase[i].petals = (this.vase[i].petals + 1);
    }
  return this.vase;
  };
}
```
