$(document).ready(function(){

    function calcTime(){
        function update(){
            $('.sec').each(function(){
                var count = parseInt($(this).html());
                if(count !== 0){
                $(this).html(count-1);
                } else {
                    dec_min();
                }
            });
        };
        var myVar = setInterval(update, 1000); // every one second
        function dec_min(){
            var min = parseInt($('.min').html());
             if(min !== 0){
                    $('.min').html(min-1);
                    $('.sec').html(59);
             }else {
                 dec_hr();
             }
         };
        
         function dec_hr(){
             var hr = parseInt($('.hr').html());
             if(hr !== 0){
                 $('.hr').html(hr-1);
                 $('.min').html(59);
                 $('.sec').html(59);
             }else {
                 $("#audio")[0].play();
                 clearInterval(myVar); // stop setInterval
             }
         }
    };
    
    $('#start').click(function(e){
        var getSec = $('input#inputSec').val() || 0;  
        var getMin = $('input#inputMin').val() || 0;
        var getHr = $('input#inputHr').val() || 0;
        $('.sec').html(getSec);
        $('.min').html(getMin);
        $('.hr').html(getHr);
        calcTime();
    });
    $('#reset').click(function(e){
        location.reload();
    });

})