
$(function(){
  $("form#inputBox").submit(function(event){
    event.preventDefault();
    var number = parseInt($("input#Entered").val());
    var numbers = Array(number += 1).fill(0).map((x, y) => x + y);
   var one = 1
    var newnumbers = numbers.toString();
    console.log(newnumbers);

    newnumbers.replace( 1 , "bpp");

    // numbers.forEach(function(num){
    //   if (numbers === 1) {
    //        number="Boo!"
    //       } else if(numbers === 2 ) {
    //       number = "Bop!";
    //       } else if(numbers === 3) {
    //         number = "sorry we cant do that.";
    //       }




    // })
  

   
  



    // for(var i = 0; i <test.length;  i+= 1)
    // {
    //      if (test[i] === 1) {
    //    test[i]="Boo!"
    //   } else if(test[i] === 2 ) {
    //   test[i] = "Bop!";
    //   } else if(test[i] === 3) {
    //     test[i] = "sorry we cant do that.";
    //   }
     
    // }
    // console.log(numbers);
  })
})