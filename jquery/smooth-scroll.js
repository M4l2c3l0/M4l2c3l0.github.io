//waits for DOM to be created
$(document).ready(function() {
    
    //triggers function on .scroll click
    $(".scroll").click(function(event){   
        //prevents default url action
        event.preventDefault();
        //animates document body
        $('html,body').animate({
            //scrolls to top of target anchor
            scrollTop:$(this.hash).offset().top
        //transition duration of 800ms
        }, 800);
    });
    
});