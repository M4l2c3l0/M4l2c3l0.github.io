$(document).ready(function() {
    
    /* -------------------- SEASONAL-ANIMATION -------------------- */
    
    function imgHover() {
        document.getElementById('name').setAttribute('style', 'transform: scale(.6); padding-top: 50px; line-height: 10px; color: #ccc;');
        document.getElementById('profession').setAttribute('style', 'transform: scale(.6); line-height: 5px;');
    }

    function imgHoverOff() {
        document.getElementById('name').setAttribute('style', 'transform: scale(1); padding-top: 20px; line-height: 60px; color: #ff7878;');
        document.getElementById('profession').setAttribute('style', 'transform: scale(1); line-height: 10px;');
    }

    document.getElementById('me').addEventListener('mouseover', imgHover);
    document.getElementById('me').addEventListener('mouseout', imgHoverOff);
    
    
    
    /* -------------------- PARALLEX-ANIMATION -------------------- */
    
    function indexParallex() {
        y = window.pageYOffset;
        slowPanel = document.getElementById('first-panel');
        slowPanel.style.top = y * .5 + 'px';
    }

    window.addEventListener('scroll', indexParallex);
    
    
    
    /* -------------------- SMOOTH-SCROLL -------------------- */

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
    
    
    
    /* -------------------- IMAGE-POINTS -------------------- */
    
    //when mouse over one of the img-points trigger function
    $('.img-points').mouseover(function(e) {
        //assign id of clicked div to img variable
        var img = $(this).attr('id');
        //if the id is #learning
        if(img == 'learning') {
            //make its paragraph visible
            $('#learning p').css('display', 'block');
        }//same logic for #devotion
        else if(img == 'devotion') {
            $('#devotion p').css('display', 'block');
        }//and finally to creativity
        else {
            $('#creativity p').css('display', 'block');
        }
    //and when mouse moves out
    }).mouseout(function() {
        //hide all img-points paragraphs
        $('.img-points p').css('display', 'none');
    });
  
});