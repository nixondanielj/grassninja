$(function(){
   var images = $('.featurette-image');
   setInterval(function(){
       images.each(function(idx, image){
           image = $(image);
           image.height(image.parent().parent().height());
       });
   }, 50);
});