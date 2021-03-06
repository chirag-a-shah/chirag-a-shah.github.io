$(document).ready(function(){
	
	'use strict';
	
    $("#rsvpform").submit(function(event) {
	
		/* stop form from submitting normally */
     	event.preventDefault();		
		
		/* get some values from elements on the page: */
      	var $form = $( this ),
        	url = $form.attr( 'action' );
			
		var	inputname  = $('#inputname').val(),
			inputemail = $('#inputemail').val(),
			inputevents = $('#inputevents').val(),
			inputmessage= $('#inputmessage').val();
			
		if (inputname == "") {
            $("#fullname").addClass("has-error");
        }
		else
		{
			$("#fullname").removeClass("has-error");
		}
		
		if (inputemail == "") {
            $("#email").addClass("has-error");
        }
		else
		{ 	
			$("#email").removeClass("has-error");
        }
		
		if (inputevents == null) {
            $("#events").addClass("has-error");
        }
		else
		{
			$("#events").removeClass("has-error");
		}

		var post_data = { input_name: $('#inputname').val(), input_email: $('#inputemail').val(), input_events: $('#inputevents').val(), input_message: $('#inputmessage').val()  };
			
            //Ajax post data to server
            $.post(url, post_data, function(response){  
                //load json data from server and output message  
				var output = "";
				if(response.type == 'error')
				{
					output = '<div class="bg-danger">'+response.text+'</div>';
				}else{
				    output = '<div class="bg-success">'+response.text+'</div>';
					
					//reset values in all input fields
					$("#rsvpform input[type='text']").val(''); 
					$("#rsvpform input[type='email']").val('');
					$('#rsvpform textarea').val(''); 
				}
				
				$("#result").hide().html(output).slideDown();
            }, 'json');
	 
    });
 
    
});