$(document).ready(function(){
    
    /* -------------------- ABOUT-PAGE -------------------- */
    
    //function to swap elements between #personal and #studies panels
    function persoStudiesToggle() {
        //pass the .selected class from one to the other
        $('#personal, #studies').toggleClass('selected');
        //change their respective + and - spans
        $('#personal span, #studies span').toggle();
        //slidetoggle their respective panels display value
        $('#personal-panel, #studies-panel').slideToggle(300);
    }
    //same logic between #personal and #skills
    function persoSkillsToggle() {
        $('#personal, #skills').toggleClass('selected');
        $('#personal span, #skills span').toggle();
        $('#personal-panel, #skills-panel').slideToggle(300);
    }
    //and again between #studies and #skills 
    function studiesSkillsToggle() {
        $('#studies, #skills').toggleClass('selected');
        $('#studies span, #skills span').toggle();
        $('#studies-panel, #skills-panel').slideToggle(300);
    }
  
    /* triggers function upon clicking on panel title */
    $('#personal, #studies, #skills').click(function(e){
        //assigns clicked id to local idClicked variable
        var idClicked = $(this).attr('id');
        //if the div id is #personal...
        if(idClicked == 'personal') {
            //...and #personal also has the class .selected
            if($('#personal').hasClass('selected')) {
                //calls function to toggle between #personal and #studies panels
                persoStudiesToggle();
            }//else if .selected belongs to #studies instead
            else if($('#studies').hasClass('selected')) {
                //calls same fucntion to toggle again between #personal and #studies panels
                persoStudiesToggle();
            }//else, meaning that #skills has .selected
            else {
                //calls function to toggle between #personal and #skills panels
                persoSkillsToggle();
            }
        }//...same logic if id clicked is #studies...
        else if(idClicked == 'studies') {
            if($('#studies').hasClass('selected')) {
                persoStudiesToggle();
            }
            else if($('#skills').hasClass('selected')) {
                studiesSkillsToggle();
            }
            else {
                persoStudiesToggle();
            }
        }//...and again if it consequently is #skills
        else {
            if($('#skills').hasClass('selected')) {
                studiesSkillsToggle();
            }
            else if($('#studies').hasClass('selected')) {
                studiesSkillsToggle();
            }
            else {
                persoSkillsToggle();
            }
        }
    });
    
    
    
    /* -------------------- PROJECTS-PAGE -------------------- */
    
    //function to swap elements between #cip and #bm panels
    function cipBmToggle() {
        //toggle .active-h2 class between the two
        $('#cip-title, #bymarcelo-title').toggleClass('active-h2');
        //toggle .selected-preview class between the two
        $('#cip-preview, #bymarcelo-preview').toggleClass('selected-preview');
        //toggle .selected class between the two
        $('#cip, #bymarcelo').toggleClass('selected');
        //change their respective + and - spans
        $('#cip span, #bymarcelo span').toggle();
        //slidetoggle their respective panels display value
        $('#cip-panel, #bymarcelo-panel').slideToggle(300);
    }
    //same logic between #cip and #misc
    function cipMiscToggle() {
        $('#cip-title, #misc-title').toggleClass('active-h2');
        $('#cip-preview, #misc-preview').toggleClass('selected-preview');
        $('#cip, #misc').toggleClass('selected');
        $('#cip span, #misc span').toggle();
        $('#cip-panel, #misc-panel').slideToggle(300);
    }
    //and again between #bm and #misc 
    function bmMiscToggle() {
        $('#bymarcelo-title, #misc-title').toggleClass('active-h2');
        $('#bymarcelo-preview, #misc-preview').toggleClass('selected-preview');
        $('#bymarcelo, #misc').toggleClass('selected');
        $('#bymarcelo span, #misc span').toggle();
        $('#bymarcelo-panel, #misc-panel').slideToggle(300);
    }

    /* triggers function upon clicking on panel title */
    $('#cip, #cip-title, #cip-preview, #bymarcelo, #bymarcelo-title, #bymarcelo-preview, #misc, #misc-title, #misc-preview').click(function(e){
        //assigns clicked id to local idClicked variable
        var idClicked = $(this).attr('id');
        //if the div id is #cip...
        if(idClicked == 'cip' || idClicked == 'cip-title' || idClicked == 'cip-preview') {
            //...and #cip also has the class .selected
            if($('#cip').hasClass('selected')) {
                //calls function to toggle between #cip and #bm panels
                cipBmToggle();
            }//else if .selected belongs to #bm instead
            else if($('#bymarcelo').hasClass('selected')) {
                //calls same fucntion to toggle again between #cip and #bm panels
                cipBmToggle();
            }//else, meaning that #misc has .selected
            else {
                //calls function to toggle between #cip and #misc panels
                cipMiscToggle();
            }

        }//...same logic if id clicked is #bm...
        else if(idClicked == 'bymarcelo' || idClicked == 'bymarcelo-title' || idClicked == 'bymarcelo-preview') {
            if($('#bymarcelo').hasClass('selected')) {
                cipBmToggle();
            }
            else if($('#misc').hasClass('selected')) {
                bmMiscToggle();
            }
            else {
                cipBmToggle();
            }
        }//...and again if it consequently is #misc
        else {
            if($('#misc').hasClass('selected')) {
                bmMiscToggle();
            }
            else if($('#bymarcelo').hasClass('selected')) {
                bmMiscToggle();
            }
            else {
                cipMiscToggle();
            }
        }       
    });
    
});