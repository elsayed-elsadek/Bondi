
// scroll to nav section
$("a[href^='#']").click(function(e){
let ahref =$(e.target).attr('href');
let secofset =$(ahref).offset().top ;
$("html,body").animate({scrollTop:secofset} ,1000)
})

//loading
$(document).ready(function(){
    $(".sk-chase").fadeOut(500 ,function(){
    $('#loading').fadeOut(500 ,function(){
    $('body').css("overflow" ,'auto')    
    })   
    })

}) 