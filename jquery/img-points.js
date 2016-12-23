$(document).ready(function() {
  
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