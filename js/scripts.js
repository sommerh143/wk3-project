

$(document).ready(function(){
  $("form#inputBox").submit(function(event){
    event.preventDefault();
    var number = parseInt($("input#Entered").val());
    var map1 = [];
    var three = "3";
    // var map2 = ;
    for(var i = 0; i <= number; i++){
      map1.push(i);
    

    // map1.forEach(function(three){
      if (String(map1).includes(3)){
        map1.splice(i, 1, "sorry Try Again!");
      } else if (String(map1).includes(2)){
        map1.splice(i, 1, "Bop!");
      } else if (String(map1).includes(1)){
        map1.splice(i, 1, "Boop!");

      }
    }
    console.log(map1);
        
    // });
  });
});