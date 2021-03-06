$(document).ready(function(){

var myVar;

$('#start').click(function(e){
    var getSec = $('#inputSec').val() || 0;  
    var getMin = $('#inputMin').val() || 0;
    var getHr = $('#inputHr').val() || 0;
    // console.log($('#inputSec').val());
    $('.sec').html(getSec);
    $('.min').html(getMin);
    $('.hr').html(getHr);
    calcTime();
});

$('#reset').click(function(e){
    clearInterval(myVar);
    $('.hr').html(00);
    $('.min').html(00);
    $('.sec').html(00);
    $('#inputSec').val(00);
    $('#inputMin').val(00);
    $('#inputHr').val(00);
});

function calcTime(){

    myVar = setInterval(update, 1000); // every one second

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

})