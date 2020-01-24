
$(function(){
  $("form#inputBox").submit(function(event){
    event.preventDefault();
    var number = parseInt($("input#Entered").val());
    var test = Array(number).fill(0).map((x, y) => x + y);

    for(var i = 0; i <test.length;  i+= 1)
    {
      if(test[i] === 1) {
       test[i]="Boo!"
       console.log(test);
      }
      else if(test[i] === 2 ) {
      test[i] = "Bop!";
      console.log(test);
      }else if(test[i] === 3) {
        test[i] = "sorry we cant do that.";
      }


    }
    console.log(test);
  })
})