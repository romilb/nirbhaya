$(document).ready(function(){
    $('.refineimg').click(function(e){
        $('#overlay').fadeIn('fast',function(e){
            $('#refiner').slideDown("fast");  
        });
        e.preventDefault();
    });
    $('.boxclose').click(function(){
        $('#refiner').slideUp('fast',function(){
            $('#overlay').fadeOut("fast");
        });
    });    
});
