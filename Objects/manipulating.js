var bird = {
    genus: "corvus",
    species: "corvax",
    commonName: "raven",
    callType: "squawky",
    quote: "Nevermore",
    maxOffspring: 5,
    noisy: true,
    deadly: false
  };
  
  var bear = {
    genus: "ursus",
    species: "arctos",
    commonName: "brown bear",
    callType: "roar",
    quote: "",
    maxOffspring: 3,
    noisy: true,
    deadly: true
  };
  
  var bookOfKnowledge = {
    "lunch time": "12:30 PM",
    "the ultimate answer": 42,
    bestSong: "Lonnie's Lament",
    earth: "Mostly harmless."
  };
  
//   var x = bird.quote
var x = bird["quote"]
  console.log(x)
bird.color = "black"
bird["where it lives"] = "in a tree";
bird.whereItLives = "in a tree";
delete bird.color
delete bird.whereItLives
console.log(bird)
