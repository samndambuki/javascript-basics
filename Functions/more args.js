function speakSomething(what, howMany) {
  // this pattern works nicely for default values:
  // check if the argument is undefined, and if it is, provide a default value
  var what = (typeof what !== "undefined") ? what : "Default speech";
  var howMany = (typeof howMany !== "undefined") ? howMany : 10;

  // shorter version that could get tripped up by truthiness
  // what = what || 'Default speech';
  // howMany = howMany || 10;

  for (var i = 0; i < howMany; i += 1) {
    console.log(what + " (" + i + ")");
  }
}

speakSomething("Hey hey", 5);
speakSomething("Hey hey");
speakSomething();