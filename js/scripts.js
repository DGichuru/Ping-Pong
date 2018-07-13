$(document).ready(function() {
    $("form#ping-pong").submit(function(event) {
        $("#results").empty();

        var number = parseInt($("input#number").val());
        var no = Number(number);
        no.forEach(function(aftermath) {
            $("#results").append("<li>" + aftermath + "</li>");
            event.preventDefault();
        });

        
    });
});

// jQuery user interface logic here
 
    
    var Number = function(num) {
        var no = [];
        for(index=1; index<= num; index+=1) {

        if ((num % 3 === 0) && (num % 5 === 0)) {
          no.push ("pingpong");
    
        }else if(num % 5 === 0) {
           no.push ( "pong");

        }else if (num % 3 === 0) {
          no.push("ping");
        } else 
            no.push (num);
        
       }   
        console.log(no);
        return no;
      };

//Business logic