$checkbox = $('.toggle');
$minuteHand = $('#minute-hand');
$hourHand = $('#hour-hand');
$body = $('body');
$number = $('.number');


$checkbox.click(function(){
    if($(this).is(':checked')){
        $body.css("background-image", "url(../images/white-aston.jpg)");
        $body.css("transition","all 0.2s ease-in-out");
        
        
        $minuteHand.css("background-color", "black");
        $hourHand.css("background-color", "black");

    }else{
        $body.css("background-image", "url(../images/aston-martin.jpg)");
        $number.css("color","white");
        $minuteHand.css("background-color", "white");
        $hourHand.css("background-color", "white");
    }
})