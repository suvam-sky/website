/*****************   services  ***************/
$(function(){
    new WOW().init(); 

});  
/*****************   work  ***************/

$(function(){
    $("#work").magnificPopup({
        delegate: 'a', 
        type: 'image',
        gallery: {
            enabled: true
          }
        
      });

});  
/*****************   team  ***************/
$(function(){
    $("#team-members").owlCarousel({
        autoplay:true,
        smartSpeed:500,
        loop:true,
        autoplayHoverPause:true
    });

});  
/*****************  testmonial  ***************/
$(function(){
    $("#customer-testimonials").owlCarousel({
        items:1,
        autoplay:true,
        smartSpeed:500,
        loop:true,
        autoplayHoverPause:true
    });

});  