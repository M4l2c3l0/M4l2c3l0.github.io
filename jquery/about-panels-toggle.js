$(document).ready(function(){
  
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
    
});