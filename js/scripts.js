
$(function(){
  $("form#inputBox").submit(function(event){
    event.preventDefault();
    var number = parseInt($("input#Entered").val());
    var test = Array(number).fill(0).map((x, y) => x + y);
//var testone = test[i].replace("1", "Boo!");

    for(var i = 0; i <test.length;  i+= 1)
    {
      test.forEach(function(test){
        test.replace(1 , "Boo!");
      console.log(test);

        // else if(test[i] === 2 ) {
        //   test[i] = "Bop!";
        //   } else if(test[i] === 3) {
        //     test[i] = "sorry we cant do that.";
        //   }
      });
      
      } 
     
    
    
  });
})