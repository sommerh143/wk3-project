
$(document).ready(function(){
  $("form#inputBox").submit(function(event){
    event.preventDefault();
    var number = parseInt($("input#Entered").val());
<<<<<<< HEAD
    var map1 = [];
    var three = "3";
    // var map2 = ;
    for(var i = 0; i <= number; i++){
      map1.push(i);
    
=======
    
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
>>>>>>> a8f62ec3ff46a8fa858a6368ab81f175daf1dcc0

    // map1.forEach(function(three){
      if (String(map1).includes(3)){
        map1.splice(i, 1, "sorry Try Again!");
      } else if (String(map1).includes(2)){
        map1.splice(i, 1, "Bop!");
      } else if (String(map1).includes(1)){
        map1.splice(i, 1, "Boop!");

<<<<<<< HEAD
      }
    }
    console.log(map1);
        
    // });
  });
});

    // for(var i = 0; i <= number; i++)
    //   map1.push(i);

    //  if(i.includes(three)){
    //    console.log("this is where 3 is", "Boop");
    //   } else{
    //     console.log("not a 3",map1);
    //   }

      // console.log(i);
  //   })
  // })  
  
  // if (i == "3"){
  //   map1 = "Boop!"
  //   // var numberThree = i - 7;
  //   // var numberTwo = i -8;
  //   // var numberOne = i -9;
  //   // numberThree= "bop";
  //   console.log();

  //   // numberTwo = "boop";
  //   // numberOne = "sorry!";
    
  // } else {
    
  // }
=======
    
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
>>>>>>> a8f62ec3ff46a8fa858a6368ab81f175daf1dcc0
