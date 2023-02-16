for (var i = 1; i < 10; i+=1){
    console.log(i)
}


var pageNames = [
    "Home",
    "About Us",
    "Contact Us",
    "JavaScript Playground",
    "News",
    "Blog"
  ];
  for (i = 0; i < pageNames.length; i += 1) {
    if (document.title === pageNames[i]) {
      console.log("We ARE here: " + pageNames[i]);
    } else {
      console.log("We are not here: " + pageNames[i]);
    }
  }
