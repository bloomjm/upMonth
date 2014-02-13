    $(function() {
        $( "#mc-show" ).click(function() {
            $( "#join-mc" ).show("blind",400);
            $( "#show-mc" ).hide("clip",100);
        });
    });
    
    $(function() {
        $( ".header-signin").click(function() {
            $( ".signin-modal" ).show();
            $( ".signin" ).show();
        });
    });

    $(function() {
       $( ".signin-modal").click(function() {
            $( ".signin-modal" ).hide();
            $( ".signin" ).hide();
       });
    });
    
    $(function() {
       $( ".signin-close").click(function() {
            $( ".signin-modal" ).hide();
            $( ".signin" ).hide();
       });
    });
    
    $('a').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 500);
        return false;
    });
    