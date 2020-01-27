
$(function(){
  $("form#inputBox").submit(function(event){
    event.preventDefault();
    var number = parseInt($("input#Entered").val());
    
    for (var i = 0; i <= number; i+= 1){
      if (i % 3 == 0) {
        if(i === 3){
         console.log('Boop!');
        } else {
          console.log(i);
        }
        
      } else if (i % 2 == 0){
        console.log('Bop!');
      } else if (i % 3 == 0 && i % 5 == 0) {
        console.log('fizzBuzz');
      } else {
        console.log(i);
      }
    }

    // var test = Array(number += 1).fill(0).map((x, y) => x + y);






    // var num = test.join(" ");

    //var test = num.replace( /1/g , "Boo!");

    
    //   for(var i = 0; i <test.length;  i+= 1)
    // {
    //      if (test[i] === 1) {
    //      var num = num.replace( /1/g , "Boo!");
    //   } else if(test[i] === 2 ) {
    //     var num = num.replace( /2/g , "Bop!");
    //   } else if(test[i] === 3) {
    //     var num = num.replace( /3/g , "sorry no");
    //   }
     
    // }
    // console.log(num);
      
  })
})