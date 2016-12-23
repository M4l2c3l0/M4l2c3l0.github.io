//wait until DOM is fully generated
$(document).ready(function() {
  
    //triggers a function when clicking on any of the four screenshots
    $('#cip-screenshot1, #cip-screenshot2, #cip-screenshot3, #cip-screenshot4, #bm-feature1, #bm-feature2, #bm-feature3, #bm-feature4').click(function(e) {
        //assigns to img the id of the div clicked upon
        var img = $(this).attr('id');
        //makes #modal visible
        $('#modal').css('display', 'block');
        //if the clicked id is the first screenshot
        if(img == 'cip-screenshot1') {
            //assign class to set modal-screenshot1 as background (required to work with Firefox)
            $('#modal-window').addClass('modal-screenshot1');
            //no text to be displayed (necessary as others below will affect it)
            $('#modal-window p').html('');
        }//same logic if equal to second screenshot instead
        else if(img == 'cip-screenshot2') {
            $('#modal-window').addClass('modal-screenshot2');
            $('#modal-window p').html('');
        }//same logic if equal to third screenshot instead
        else if(img == 'cip-screenshot3') {
            $('#modal-window').addClass('modal-screenshot3');
            $('#modal-window p').html('');
        }//same logic with fourth screenshot
        else if(img == 'cip-screenshot4') {
            $('#modal-window').addClass('modal-screenshot4');
            $('#modal-window p').html('');
        }//with bm-feature1
        else if(img == 'bm-feature1') {
            $('#modal-window').addClass('modal-feature1');
            $('#modal-window p').html('A touch of humour with a seasonal animation');
        }//bm-feature2
        else if(img == 'bm-feature2') {
            $('#modal-window').addClass('modal-feature2');
            $('#modal-window p').html('Parallex animation used for a slicker scroll');
        }//bm-feature3
        else if(img == 'bm-feature3') {
            $('#modal-window').addClass('modal-feature3');
            $('#modal-window p').html('Reactive sliding panels for tidier interface');
        }//and finally bm-feature4
        else {
            $('#modal-window').addClass('modal-feature4');
            $('#modal-window p').html('Customized modal window for enlarged image display');
        }//ends if(else)
    });//ends click()
  
    //assigns id elements from DOM to new vars (to be done in JS, not jQuery)
    var close = document.getElementById('close-button');
    var modal = document.getElementById('modal');
    var modalWindow = document.getElementById('modal-window');
    //when clicking anywhere in window trigger event
    window.onclick = function(event) {
        //if div clicked is either #modal or #close-button
        if(event.target == modal || event.target == close) {
            //modal disappears
            modal.style.display='none';
            //removes designated class to clear the background img
            modalWindow.removeAttribute('class');
        }//ends if()
    }//ends onclick()
  
}); //ends DOM.ready()