/*SCROLL NEWSLETTER*/
$(window).scroll(function(event) {
    var scroll = $(window).scrollTop(); 
    if(scroll>300)
    { 
        $(".newsletter").fadeIn("slow").removeClass("d-none");
    }
    else
    {
        $(".newsletter").fadeOut("slow").addClass("d-none");
    }
    
});


