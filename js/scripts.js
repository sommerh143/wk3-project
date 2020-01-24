
$(function(){
  $("form#inputBox").submit(function(event){
    event.preventDefault();
    var number = parseInt($("input#Entered").val());
    var test = Array(number).fill(0).map((x, y) => x + y);

    for(var i = 0; i <test.length;  i+= 1)
    {
      if(test[i] === 1) {
      // var numberone = test.replace("1", "Boo!");
       console.log(test);
      }else{
        alert("no");
      }
     
    }
    console.log(test);
  })
})