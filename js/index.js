    $(function() {
        $( "#show-mc" ).click(function() {
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
        $( ".tryit-submit").click(function() {
            $( ".tryit-results-modal" ).show();
            $( ".tryit-results" ).show();
        });
    });

    $(function() {
       $( ".signin-modal").click(function() {
            $( ".signin-modal" ).hide();
            $( ".signin" ).hide();
       });
    });
    
    $(function() {
       $( ".tryit-results-modal").click(function() {
            $( ".tryit-results-modal" ).hide();
            $( ".tryit-results" ).hide();
       });
    });
    
    $(function() {
       $( ".signin-close").click(function() {
            $( ".signin-modal" ).hide();
            $( ".signin" ).hide();
       });
    });
    
    $(function() {
       $( "#tryit-close").click(function() {
            $( ".tryit-results-modal" ).hide();
            $( ".tryit-results" ).hide();
       });
    });
    
    $('a').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 500);
        return false;
    });
    
    $(".tryit").hover(function(){
        $(".tryit-label").toggle("fade",300);
    });
    
    $(function() {
        var queries = [
            "",
            "What funds are invested in Google?",
            "Show me technology managers with a low volatility.",
            "What are the current trends in China?",
        ];
        var clickcount = 0;
        var queries_len = queries.length;
        
        $(".tryit-toggle-up").click(function(){
            if (clickcount < (queries_len - 1)) {
                clickcount = clickcount + 1;
            }else{
                clickcount = 0;
            }
            document.getElementById('tryit-input').value = queries[clickcount];
        });
        $(".tryit-toggle-down").click(function(){
            if (clickcount > 0 ){
                clickcount = clickcount - 1;
            }else{
                clickcount = (queries_len - 1);
            }
            document.getElementById('tryit-input').value = queries[clickcount];
        });
    });
    
    $(document).scroll(function () {
        var y = $(this).scrollTop();
        if (y > $(window).height()) {
            $('.header-signup').fadeIn();
        } else {
            $('.header-signup').fadeOut();
        }
    });