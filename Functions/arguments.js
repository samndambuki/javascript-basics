fuddify("Be very quiet, I'm hunting rabbits.");
fuddify("You screwy rabbit.");
fuddify("Rabbit tracks!");

function fuddify(speech) {
  // if it's not a string, return an error message
  if (typeof speech !== "string") {
    console.error("Nice twy, wabbit!");
    return;
  }

  // otherwise, make it sound like Elmer Fudd
  speech = speech.replace(/r/g, "w");
  speech = speech.replace(/R/g, "W");

  return speech;
}
