jQuery('#form').submit(function (evt) {
    evt.preventDefault();
    	if(document.getElementById('name').value == '')
	    {
	        alert('You must fill in all of the fields.');
	        return false;
        }
    jQuery("#form #submitbtn").css("pointer-events", "none");
        jQuery.ajax({
            type: "POST",
            url: "/mail.php",
            data: jQuery(this).serialize()
        }).done(function() {

            jQuery( "#dialog" ).dialog( "open" );
            jQuery("#form").trigger("reset");
        }).error(function(){
            alert("Error!");

        })
        .success(function(){
            dataLayer.push({'event': 'event_rapid'}); 
        });
        return false;
});

jQuery('#form-2').submit(function (evt) {
    evt.preventDefault();
    	if(document.getElementById('name-2').value == '')
	    {
	        alert('You must fill in all of the fields.');
	        return false;
        }
    jQuery("#form-2 #submitbtn").css("pointer-events", "none");

        jQuery.ajax({
            type: "POST",
            url: "/mail.php",
            data: jQuery(this).serialize()
        }).done(function() {
        	jQuery("#form-2").hide();
        	jQuery( "#dialog" ).dialog( "open" );        	
        	jQuery("#get_free_quote").hide();           
            jQuery("#form-2").trigger("reset");
        }).error(function(){
            alert("Error!");

        })
        .success(function(){
            dataLayer.push({'event': 'event_rapid'}); 
        });
        return false;
});

jQuery('#form-4').submit(function (evt) {
    evt.preventDefault();
        if(document.getElementById('name-4').value == '')
        {
            alert('You must fill in all of the fields.');
            return false;
        }
    jQuery("#form-4 #submitbtn").css("pointer-events", "none");
        jQuery.ajax({
            type: "POST",
            url: "/mail.php",
            data: jQuery(this).serialize()
        }).done(function() {
            jQuery("#form-4").hide();
            jQuery( "#dialog" ).dialog( "open" );           
            jQuery("#movers_2").hide();           
            jQuery("#form-4").trigger("reset");
        }).error(function(){
            alert("Error!");

       })
        .success(function(){
            dataLayer.push({'event': 'event_rapid'}); 
        });
        return false;
});

jQuery('#form-5').submit(function (evt) {
    evt.preventDefault();
        if(document.getElementById('name-5').value == '')
        {
            alert('You must fill in all of the fields.');
            return false;
        }
    jQuery("#form-5 #submitbtn").css("pointer-events", "none");
        jQuery.ajax({
            type: "POST",
            url: "/mail.php",
            data: jQuery(this).serialize()
        }).done(function() {
            jQuery("#form-5").hide();
            jQuery( "#dialog" ).dialog( "open" );           
            jQuery("#movers_3").hide();           
            jQuery("#form-5").trigger("reset");
        }).error(function(){
            alert("Error!");

        })
        .success(function(){
            dataLayer.push({'event': 'event_rapid'}); 
        });
        return false;
});

jQuery('#form-6').submit(function (evt) {
    evt.preventDefault();
        if(document.getElementById('name-6').value == '')
        {
            alert('You must fill in all of the fields.');
            return false;
        }
    jQuery("#form-6 #submitbtn").css("pointer-events", "none");
        jQuery.ajax({
            type: "POST",
            url: "/mail.php",
            data: jQuery(this).serialize()
        }).done(function() {
            jQuery("#form-6").hide();
            jQuery( "#dialog" ).dialog( "open" );           
            jQuery("#movers_4").hide();           
            jQuery("#form-6").trigger("reset");
        }).error(function(){
            alert("Error!");

        })
        .success(function(){
            dataLayer.push({'event': 'event_rapid'}); 
        });
        return false;
});

jQuery('#form-3').submit(function (evt) {
    evt.preventDefault();
    	if(document.getElementById('name-3').value == '')
	    {
	        alert('You must fill in all of the fields.');
	        return false;
        } 
        if(document.getElementById('phone-3').value == '')
	    {
	        alert('You must fill in all of the fields.');
	        return false;
        }
    jQuery("#form-3 #submitbtn").css("pointer-events", "none");
        jQuery.ajax({
            type: "POST",
            url: "/mail.php",
            data: jQuery(this).serialize()
        }).done(function() {
        	jQuery("#form-3").hide();
        	jQuery( "#dialog" ).dialog( "open" );        	
        	jQuery("#request_call").hide();           
            jQuery("#form-3").trigger("reset");
            })
		.success(function(){
			dataLayer.push({'event': 'event_rapid'}); 
        });
        return false;
});