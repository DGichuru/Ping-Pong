$(document).ready(function() {
    $("form#ping-pong").submit(function(event) {
        event.preventDefault();
        $("#results").empty();

        var num = parseInt($("input#number").val());
        var no = Number(num);
        no.forEach(function(aftermath) {
            $("#results").append("<li>" + aftermath + "</li>");
           
        });

        
    });
});

// jQuery user interface logic here
 
    
    var Number = function aftermath(num) {
        var no = [];
        for(index=1; index<= num; index+=1) {

        if ((index % 15 === 0)) {
          no.push ("pingpong");
    
        }else if(index % 5 === 0) {
           no.push ( "pong");

        }else if (index % 3 === 0) {
          no.push("ping");
        } else 
            no.push (index);
        
       }   
        console.log(no);
        return no;
      };

//Business logic