$(document).ready(function () {
  $("form#inputBox").submit(function (event) {
    event.preventDefault();
    var number = parseInt($("input#Entered").val()); // inputs the user input as a number
    var map1 = [];  // makes an empty array

    for (var i = 0; i <= number; i++) {    //loops through everything inside {} until i hits the inputed number
      map1.push(i);   // adds i to map1 index

      if (String(map1).includes(3)) { // if map1 has a 3 it changes to "sorry try again"
        map1.splice(i, 1, "sorry Try Again!");  // this changes index contents to "sorry try again"
      } else if (String(map1).includes(2)) {   // changes index contents if it contains a 2
        map1.splice(i, 1, "Bop!");    // changes index contents to "bop"
      } else if (String(map1).includes(1)) {   // changes index contents if it contains a 1
        map1.splice(i, 1, "Boop!");   //changes index contents to "boop"
      }
    }
    console.log(map1);  //displays map1 to terminal
    $(".answer").append(map1);   // inputs map1 to the index.html.
  });
});