
$(function(){
  $("form#inputBox").submit(function(event){
    event.preventDefault();
    var number = parseInt($("input#Entered").val());
    var test = Array(number += 1).fill(0).map((x, y) => x + y);

    var num = test.join(" ");

    //var test = num.replace( /1/g , "Boo!");

    
      for(var i = 0; i <test.length;  i+= 1)
    {
         if (test[i] === 1) {
         var num = num.replace( /1/g , "Boo!");
      } else if(test[i] === 2 ) {
        var num = num.replace( /2/g , "Bop!");
      } else if(test[i] === 3) {
        var num = num.replace( /3/g , "sorry no");
      }
     
    }
    console.log(num);
      
  })
})