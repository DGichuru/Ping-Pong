$(documents).ready(function() {
    $("form#ping-pong").submit(function(event) {
        event.preventDefault();
        var result = pingpong(number);
        $("result").show();
    });
});

// jQuery user interface logic here
 
var pingpong = function(number) {
    if(number % 3 === 0) {
        return ping;
    } else {
        return false;
    };
};