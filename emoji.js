$('*').mouseenter(function(){
var currentCursor = $(this).css('cursor') ;
if(currentCursor=='pointer'){
 $(this).addClass('curmoji');
}
});