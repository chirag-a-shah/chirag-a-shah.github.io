		
	'use strict';
	// Preloader
	//==================================================================================
	if( !device.tablet() && !device.mobile() ) {
		
		$(document).ready(function () {
		
			$('#logo, #slide_content').css({
				visibility: 'hidden'
			});
		
    		$("body").queryLoader2({
        		barColor: "#00c0b6",
        		percentage: true,
        		barHeight: 6,
        		completeAnimation: "grow",
				overlayId: "preloader",
				minimumTime: 1000,
				onComplete: function()
				{
					
					// WayPoint
					//====================================================
					$('.animation').css({
						visibility: 'hidden'
					});	
	
					$('.animation').waypoint(function() {
						$(this).css({ visibility: 'visible' });
 						$(this).addClass('animated');
						}, {
							offset: '95%'
					});
					
					// Hide Preloader
					//====================================================
					$("#start_preloader").fadeOut("fast", function(){
                   		$(this).remove();
                	}); 
					
					// Animate Logo and Slide Text
					//====================================================
					$('#logo, #slide_content').css({visibility: 'visible'});
					$("#logo").addClass("animated fadeInDown");
					$("#slide_content").addClass("animated delay1 fadeInRight");
					
				}
    		});
		});	
	}
	else
	{
		
		$('#logo, #slide_content').css({
			visibility: 'hidden'
		});
		
		window.addEventListener("DOMContentLoaded", function() {	
		
    		$("body").queryLoader2({
        		barColor: "#00c0b6",
        		percentage: true,
        		barHeight: 6,
        		completeAnimation: "fade",
				overlayId: "preloader",
				minimumTime: 1000,
				onComplete: function()
				{	
					// Hide Preloader
					//====================================================
					$("#start_preloader").fadeOut("fast", function(){
                   		$(this).remove();
                	}); 
					
					// Animate Logo and Slide Text
					//====================================================
					$('#logo, #slide_content').css({visibility: 'visible'});
					$("#logo").addClass("animated fadeInDown");
					$("#slide_content").addClass("animated delay1 fadeInRight");
				}
    		});
		});
	}

	// Supersized Slider
	//==================================================================================
	jQuery(function($){
		$.supersized({
			slides  :  	
			[ 
				{	image : 'http://placehold.it/1600x1063' } ,
				{	image : 'http://placehold.it/1600x1063' }
			]
		});
	});

	// Sticky
	//==================================================================================
	$(document).ready(function(){
		$("#logo").sticky({ topSpacing: 0 });
		$("#nav").sticky({ topSpacing: 0 });
	});

	// One Page Nav
	//==================================================================================
	$(document).ready(function() {
		$('#nav_list').onePageNav({
    		scrollSpeed: 1200,
    		currentClass: 'active',
    		changeHash: false,
    		filter: ':not(.external)'
		});
	});
	
	// Responsive Nav Hack. Hide Menu After Click It
	//==================================================================================
	$(document).ready(function() {
		var navMain = $(".navbar-collapse");
        navMain.on("click", "a", null, function () {
            if ($(this).attr("href") !== "#") {
                navMain.collapse('hide');
            }
        });
	});
	
	// NiceScroll
	//==================================================================================
	$(document).ready(
		function() {
			$('html').niceScroll({
    			cursorcolor: "#1A212C",
    			zindex: '99999',
    			cursorminheight: 60,
    			scrollspeed: 80,
    			cursorwidth: 7,
    			autohidemode: true,
    			background: "#aaa",
    			cursorborder: 'none',
    			cursoropacitymax: .7,
    			cursorborderradius: 0,
    			horizrailenabled: false
			});
		}
	);
	
	
	
	// Photo Item Roll Over 
	//==================================================================================
	$('.photo_item_preview > a').click(function() {
		return false;
	});
	
	// Popup
	//=================================================================================
	$('.popup').magnificPopup({
  		type: 'ajax',
		ajax: {
			settings: {cache:false} 
			// Ajax settings object that will extend default one - http://api.jquery.com/jQuery.ajax/#jQuery-ajax-settings
			// For example:
			// settings: {cache:false, async:false}
		},
		callbacks: {
    		open: function() {
      			// Will fire when this exact popup is opened\
    		},
    		close: function() {
      			// Will fire when popup is closed
	  			$('body').css('overflow','hidden');
    		}
  		},
	});
	
	// Gallery - Photo Caption Animation
	//==================================================================================
	$('.photo_item').hover(
		function() {
			$(this).find( ".photo_caption" ).addClass('animated');
		},
		function() {
			$(this).find( ".photo_caption" ).removeClass('animated');
		}
	);
	
	// Gallery - Item
	//==================================================================================	
	$('#category1').magnificPopup({
    	items: [
      	{
        	src: "/images/1.jpg"
      	},
     	  {
        	src: "/images/IMG_20131201_182836.jpg"
      	},
      	{
        	src: "/images/IMG_20131207_154357.jpg"
      	},
      	{
        	src: "/images/IMG_20131208_012841.jpg"
      	},
      	{
        	src: "/images/5.jpg"
      	},
      	{
        	src: "/images/6.jpg"
      	},
      	{
        	src: "/images/7.jpg"
      	},
        {
          src: "/images/new-1.jpg"
        },
        {
          src: "/images/9.jpg"
        },
        {
          src: "/images/10.jpg"
        },
        {
          src: "/images/new-4.jpg"
        },
        {
          src: "/images/new-12.jpg"
        },
        {
          src: "/images/new-6.jpg"
        },
        {
          src: "/images/new-7.jpg"
        },
        {
          src: "/images/new-8.jpg"
        },
        {
          src: "/images/17.jpg"
        },
        {
          src: "/images/new-10.jpg"
        },
        {
          src: "/images/new-11.jpg"
        },
        {
          src: "/images/IMG_20131208_222406-(2).jpg"
        },
        {
          src: "/images/20.jpg"
        }
    	],
    	gallery: {
     	 	enabled: true
    	},
    	type: 'image', // this is default type
		callbacks: {
    		open: function() {
      			// Will fire when this exact popup is opened\
    		},
    		close: function() {
      			// Will fire when popup is closed
	  			$('body').css('overflow','hidden');
    		}
  		},
	});
	
	$('#category2').magnificPopup({
    	items: [
        {
          src: "/images/IMG_20131201_182836.jpg"
        },
        {
          src: "/images/IMG_20131207_154357.jpg"
        },
        {
          src: "/images/IMG_20131208_012841.jpg"
        },
        {
          src: "/images/5.jpg"
        },
        {
          src: "/images/6.jpg"
        },
        {
          src: "/images/7.jpg"
        },
        {
          src: "/images/new-1.jpg"
        },
        {
          src: "/images/9.jpg"
        },
        {
          src: "/images/10.jpg"
        },
        {
          src: "/images/new-4.jpg"
        },
        {
          src: "/images/new-12.jpg"
        },
        {
          src: "/images/new-6.jpg"
        },
        {
          src: "/images/new-7.jpg"
        },
        {
          src: "/images/new-8.jpg"
        },
        {
          src: "/images/17.jpg"
        },
        {
          src: "/images/new-10.jpg"
        },
        {
          src: "/images/new-11.jpg"
        },
        {
          src: "/images/IMG_20131208_222406-(2).jpg"
        },
        {
          src: "/images/20.jpg"
        },
        {
          src: "/images/1.jpg"
        }
    	],
    	gallery: {
     	 	enabled: true
    	},
    	type: 'image', // this is default type
		callbacks: {
    		open: function() {
      			// Will fire when this exact popup is opened\
    		},
    		close: function() {
      			// Will fire when popup is closed
	  			$('body').css('overflow','hidden');
    		}
  		},
	});
	
	$('#category3').magnificPopup({
    	items: [
        {
          src: "/images/IMG_20131207_154357.jpg"
        },
        {
          src: "/images/IMG_20131208_012841.jpg"
        },
        {
          src: "/images/5.jpg"
        },
        {
          src: "/images/6.jpg"
        },
        {
          src: "/images/7.jpg"
        },
        {
          src: "/images/new-1.jpg"
        },
        {
          src: "/images/9.jpg"
        },
        {
          src: "/images/10.jpg"
        },
        {
          src: "/images/new-4.jpg"
        },
        {
          src: "/images/new-12.jpg"
        },
        {
          src: "/images/new-6.jpg"
        },
        {
          src: "/images/new-7.jpg"
        },
        {
          src: "/images/new-8.jpg"
        },
        {
          src: "/images/17.jpg"
        },
        {
          src: "/images/new-10.jpg"
        },
        {
          src: "/images/new-11.jpg"
        },
        {
          src: "/images/IMG_20131208_222406-(2).jpg"
        },
        {
          src: "/images/20.jpg"
        },
        {
          src: "/images/1.jpg"
        },
        {
          src: "/images/IMG_20131201_182836.jpg"
        }
    	],
    	gallery: {
     	 	enabled: true
    	},
    	type: 'image', // this is default type
		callbacks: {
    		open: function() {
      			// Will fire when this exact popup is opened\
    		},
    		close: function() {
      			// Will fire when popup is closed
	  			$('body').css('overflow','hidden');
    		}
  		},
	});
	
	$('#category4').magnificPopup({
    	items: [
        {
          src: "/images/IMG_20131208_012841.jpg"
        },
        {
          src: "/images/5.jpg"
        },
        {
          src: "/images/6.jpg"
        },
        {
          src: "/images/7.jpg"
        },
        {
          src: "/images/new-1.jpg"
        },
        {
          src: "/images/9.jpg"
        },
        {
          src: "/images/10.jpg"
        },
        {
          src: "/images/new-4.jpg"
        },
        {
          src: "/images/new-12.jpg"
        },
        {
          src: "/images/new-6.jpg"
        },
        {
          src: "/images/new-7.jpg"
        },
        {
          src: "/images/new-8.jpg"
        },
        {
          src: "/images/17.jpg"
        },
        {
          src: "/images/new-10.jpg"
        },
        {
          src: "/images/new-11.jpg"
        },
        {
          src: "/images/1.jpg"
        },
        {
          src: "/images/IMG_20131208_222406-(2).jpg"
        },
        {
          src: "/images/20.jpg"
        },
        {
          src: "/images/IMG_20131201_182836.jpg"
        },
        {
          src: "/images/IMG_20131207_154357.jpg"
        }
    	],
    	gallery: {
     	 	enabled: true
    	},
    	type: 'image', // this is default type
		callbacks: {
    		open: function() {
      			// Will fire when this exact popup is opened\
    		},
    		close: function() {
      			// Will fire when popup is closed
	  			$('body').css('overflow','hidden');
    		}
  		}
	});

	$('#category5').magnificPopup({
    	items: [
        {
          src: "/images/5.jpg"
        },
        {
          src: "/images/6.jpg"
        },
        {
          src: "/images/7.jpg"
        },
        {
          src: "/images/new-1.jpg"
        },
        {
          src: "/images/9.jpg"
        },
        {
          src: "/images/10.jpg"
        },
        {
          src: "/images/new-4.jpg"
        },
        {
          src: "/images/new-12.jpg"
        },
        {
          src: "/images/new-6.jpg"
        },
        {
          src: "/images/new-7.jpg"
        },
        {
          src: "/images/new-8.jpg"
        },
        {
          src: "/images/17.jpg"
        },
        {
          src: "/images/new-10.jpg"
        },
        {
          src: "/images/new-11.jpg"
        },
        {
          src: "/images/1.jpg"
        },
         {
          src: "/images/IMG_20131208_222406-(2).jpg"
        },
        {
          src: "/images/20.jpg"
        },
        {
          src: "/images/IMG_20131201_182836.jpg"
        },
        {
          src: "/images/IMG_20131207_154357.jpg"
        },
        {
          src: "/images/IMG_20131208_012841.jpg"
        }
    	],
    	gallery: {
     	 	enabled: true
    	},
    	type: 'image', // this is default type
		callbacks: {
    		open: function() {
      			// Will fire when this exact popup is opened\
    		},
    		close: function() {
      			// Will fire when popup is closed
	  			$('body').css('overflow','hidden');
    		}
  		}
	});

	$('#category6').magnificPopup({
    	items: [
        {
          src: "/images/6.jpg"
        },
        {
          src: "/images/7.jpg"
        },
        {
          src: "/images/new-1.jpg"
        },
        {
          src: "/images/9.jpg"
        },
        {
          src: "/images/10.jpg"
        },
        {
          src: "/images/new-4.jpg"
        },
        {
          src: "/images/new-12.jpg"
        },
        {
          src: "/images/new-6.jpg"
        },
        {
          src: "/images/new-7.jpg"
        },
        {
          src: "/images/new-8.jpg"
        },
        {
          src: "/images/17.jpg"
        },
        {
          src: "/images/new-10.jpg"
        },
        {
          src: "/images/new-11.jpg"
        },
        {
          src: "/images/1.jpg"
        },
         {
          src: "/images/IMG_20131208_222406-(2).jpg"
        },
        {
          src: "/images/20.jpg"
        },
        {
          src: "/images/IMG_20131201_182836.jpg"
        },
        {
          src: "/images/IMG_20131207_154357.jpg"
        },
        {
          src: "/images/IMG_20131208_012841.jpg"
        },
        {
          src: "/images/5.jpg"
        }
    	],
    	gallery: {
     	 	enabled: true
    	},
    	type: 'image', // this is default type
		callbacks: {
    		open: function() {
      			// Will fire when this exact popup is opened\
    		},
    		close: function() {
      			// Will fire when popup is closed
	  			$('body').css('overflow','hidden');
    		}
  		}
	});
	$('#category7').magnificPopup({
    	items: [
        {
          src: "/images/7.jpg"
        },
        {
          src: "/images/new-1.jpg"
        },
        {
          src: "/images/9.jpg"
        },
        {
          src: "/images/10.jpg"
        },
        {
          src: "/images/new-4.jpg"
        },
        {
          src: "/images/new-12.jpg"
        },
        {
          src: "/images/new-6.jpg"
        },
        {
          src: "/images/new-7.jpg"
        },
        {
          src: "/images/new-8.jpg"
        },
        {
          src: "/images/17.jpg"
        },
        {
          src: "/images/new-10.jpg"
        },
        {
          src: "/images/new-11.jpg"
        },
         {
          src: "/images/IMG_20131208_222406-(2).jpg"
        },
        {
          src: "/images/20.jpg"
        },
        {
          src: "/images/1.jpg"
        },
        {
          src: "/images/IMG_20131201_182836.jpg"
        },
        {
          src: "/images/IMG_20131207_154357.jpg"
        },
        {
          src: "/images/IMG_20131208_012841.jpg"
        },
        {
          src: "/images/5.jpg"
        },
        {
          src: "/images/6.jpg"
        }
    	],
    	gallery: {
     	 	enabled: true
    	},
    	type: 'image', // this is default type
		callbacks: {
    		open: function() {
      			// Will fire when this exact popup is opened\
    		},
    		close: function() {
      			// Will fire when popup is closed
	  			$('body').css('overflow','hidden');
    		}
  		}
	});

  $('#category8').magnificPopup({
      items: [
        {
          src: "/images/new-1.jpg"
        },
        {
          src: "/images/9.jpg"
        },
        {
          src: "/images/10.jpg"
        },
        {
          src: "/images/new-4.jpg"
        },
        {
          src: "/images/new-12.jpg"
        },
        {
          src: "/images/new-6.jpg"
        },
        {
          src: "/images/new-7.jpg"
        },
        {
          src: "/images/new-8.jpg"
        },
        {
          src: "/images/17.jpg"
        },
        {
          src: "/images/new-10.jpg"
        },
        {
          src: "/images/new-11.jpg"
        },
        {
          src: "/images/IMG_20131208_222406-(2).jpg"
        },
        {
          src: "/images/20.jpg"
        },
        {
          src: "/images/1.jpg"
        },
        {
          src: "/images/IMG_20131201_182836.jpg"
        },
        {
          src: "/images/IMG_20131207_154357.jpg"
        },
        {
          src: "/images/IMG_20131208_012841.jpg"
        },
        {
          src: "/images/5.jpg"
        },
        {
          src: "/images/6.jpg"
        },
        {
          src: "/images/7.jpg"
        }
      ],
      gallery: {
        enabled: true
      },
      type: 'image', // this is default type
    callbacks: {
        open: function() {
            // Will fire when this exact popup is opened\
        },
        close: function() {
            // Will fire when popup is closed
          $('body').css('overflow','hidden');
        }
      }
  });

  $('#category9').magnificPopup({
      items: [
        {
          src: "/images/9.jpg"
        },
        {
          src: "/images/10.jpg"
        },
        {
          src: "/images/new-4.jpg"
        },
        {
          src: "/images/new-12.jpg"
        },
        {
          src: "/images/new-6.jpg"
        },
        {
          src: "/images/new-7.jpg"
        },
        {
          src: "/images/new-8.jpg"
        },
        {
          src: "/images/17.jpg"
        },
        {
          src: "/images/new-10.jpg"
        },
        {
          src: "/images/new-11.jpg"
        },
        {
          src: "/images/IMG_20131208_222406-(2).jpg"
        },
        {
          src: "/images/20.jpg"
        },
        {
          src: "/images/1.jpg"
        },
        {
          src: "/images/IMG_20131201_182836.jpg"
        },
        {
          src: "/images/IMG_20131207_154357.jpg"
        },
        {
          src: "/images/IMG_20131208_012841.jpg"
        },
        {
          src: "/images/5.jpg"
        },
        {
          src: "/images/6.jpg"
        },
        {
          src: "/images/7.jpg"
        },
        {
          src: "/images/new-1.jpg"
        }
      ],
      gallery: {
        enabled: true
      },
      type: 'image', // this is default type
    callbacks: {
        open: function() {
            // Will fire when this exact popup is opened\
        },
        close: function() {
            // Will fire when popup is closed
          $('body').css('overflow','hidden');
        }
      }
  });

  $('#category10').magnificPopup({
      items: [
        {
          src: "/images/10.jpg"
        },
        {
          src: "/images/new-4.jpg"
        },
        {
          src: "/images/new-12.jpg"
        },
        {
          src: "/images/new-6.jpg"
        },
        {
          src: "/images/new-7.jpg"
        },
        {
          src: "/images/new-8.jpg"
        },
        {
          src: "/images/17.jpg"
        },
        {
          src: "/images/new-10.jpg"
        },
        {
          src: "/images/new-11.jpg"
        },
        {
          src: "/images/IMG_20131208_222406-(2).jpg"
        },
        {
          src: "/images/20.jpg"
        },
        {
          src: "/images/1.jpg"
        },
        {
          src: "/images/IMG_20131201_182836.jpg"
        },
        {
          src: "/images/IMG_20131207_154357.jpg"
        },
        {
          src: "/images/IMG_20131208_012841.jpg"
        },
        {
          src: "/images/5.jpg"
        },
        {
          src: "/images/6.jpg"
        },
        {
          src: "/images/7.jpg"
        },
        {
          src: "/images/new-1.jpg"
        },
        {
          src: "/images/9.jpg"
        }
      ],
      gallery: {
        enabled: true
      },
      type: 'image', // this is default type
    callbacks: {
        open: function() {
            // Will fire when this exact popup is opened\
        },
        close: function() {
            // Will fire when popup is closed
          $('body').css('overflow','hidden');
        }
      }
  });

  $('#category11').magnificPopup({
      items: [
        {
          src: "/images/new-4.jpg"
        },
        {
          src: "/images/new-12.jpg"
        },
        {
          src: "/images/new-6.jpg"
        },
        {
          src: "/images/new-7.jpg"
        },
        {
          src: "/images/new-8.jpg"
        },
        {
          src: "/images/17.jpg"
        },
        {
          src: "/images/new-10.jpg"
        },
        {
          src: "/images/new-11.jpg"
        },
        {
          src: "/images/IMG_20131208_222406-(2).jpg"
        },
        {
          src: "/images/20.jpg"
        },
        {
          src: "/images/1.jpg"
        },
        {
          src: "/images/IMG_20131201_182836.jpg"
        },
        {
          src: "/images/IMG_20131207_154357.jpg"
        },
        {
          src: "/images/IMG_20131208_012841.jpg"
        },
        {
          src: "/images/5.jpg"
        },
        {
          src: "/images/6.jpg"
        },
        {
          src: "/images/7.jpg"
        },

        {
          src: "/images/new-1.jpg"
        },
        {
          src: "/images/9.jpg"
        },
        {
          src: "/images/10.jpg"
        }
      ],
      gallery: {
        enabled: true
      },
      type: 'image', // this is default type
    callbacks: {
        open: function() {
            // Will fire when this exact popup is opened\
        },
        close: function() {
            // Will fire when popup is closed
          $('body').css('overflow','hidden');
        }
      }
  });

  $('#category12').magnificPopup({
      items: [
        {
          src: "/images/new-12.jpg"
        },
        {
          src: "/images/new-6.jpg"
        },
        {
          src: "/images/new-7.jpg"
        },
        {
          src: "/images/new-8.jpg"
        },
        {
          src: "/images/17.jpg"
        },
        {
          src: "/images/new-10.jpg"
        },
        {
          src: "/images/new-11.jpg"
        },
        {
          src: "/images/IMG_20131208_222406-(2).jpg"
        },
        {
          src: "/images/20.jpg"
        },
        {
          src: "/images/1.jpg"
        },
        {
          src: "/images/IMG_20131201_182836.jpg"
        },
        {
          src: "/images/IMG_20131207_154357.jpg"
        },
        {
          src: "/images/IMG_20131208_012841.jpg"
        },
        {
          src: "/images/5.jpg"
        },
        {
          src: "/images/6.jpg"
        },
        {
          src: "/images/7.jpg"
        },
        {
          src: "/images/new-1.jpg"
        },
        {
          src: "/images/9.jpg"
        },
        {
          src: "/images/10.jpg"
        },
        {
          src: "/images/new-4.jpg"
        }
      ],
      gallery: {
        enabled: true
      },
      type: 'image', // this is default type
    callbacks: {
        open: function() {
            // Will fire when this exact popup is opened\
        },
        close: function() {
            // Will fire when popup is closed
          $('body').css('overflow','hidden');
        }
      }
  });

  $('#category13').magnificPopup({
      items: [
        {
          src: "/images/new-6.jpg"
        },
        {
          src: "/images/new-7.jpg"
        },
        {
          src: "/images/new-8.jpg"
        },
        {
          src: "/images/17.jpg"
        },
        {
          src: "/images/new-10.jpg"
        },
        {
          src: "/images/new-11.jpg"
        },
        {
          src: "/images/IMG_20131208_222406-(2).jpg"
        },
        {
          src: "/images/20.jpg"
        },
        {
          src: "/images/1.jpg"
        },
        {
          src: "/images/IMG_20131201_182836.jpg"
        },
        {
          src: "/images/IMG_20131207_154357.jpg"
        },
        {
          src: "/images/IMG_20131208_012841.jpg"
        },
        {
          src: "/images/5.jpg"
        },
        {
          src: "/images/6.jpg"
        },
        {
          src: "/images/7.jpg"
        },
        {
          src: "/images/new-1.jpg"
        },
        {
          src: "/images/9.jpg"
        },
        {
          src: "/images/10.jpg"
        },
        {
          src: "/images/new-4.jpg"
        },
        {
          src: "/images/new-12.jpg"
        }
      ],
      gallery: {
        enabled: true
      },
      type: 'image', // this is default type
    callbacks: {
        open: function() {
            // Will fire when this exact popup is opened\
        },
        close: function() {
            // Will fire when popup is closed
          $('body').css('overflow','hidden');
        }
      }
  });

  $('#category14').magnificPopup({
      items: [
        {
          src: "/images/new-7.jpg"
        },
        {
          src: "/images/new-8.jpg"
        },
        {
          src: "/images/17.jpg"
        },
        {
          src: "/images/new-10.jpg"
        },
        {
          src: "/images/new-11.jpg"
        },
        {
          src: "/images/IMG_20131208_222406-(2).jpg"
        },
        {
          src: "/images/20.jpg"
        },
        {
          src: "/images/1.jpg"
        },
        {
          src: "/images/IMG_20131201_182836.jpg"
        },
        {
          src: "/images/IMG_20131207_154357.jpg"
        },
        {
          src: "/images/IMG_20131208_012841.jpg"
        },
        {
          src: "/images/5.jpg"
        },
        {
          src: "/images/6.jpg"
        },
        {
          src: "/images/7.jpg"
        },
        {
          src: "/images/new-1.jpg"
        },
        {
          src: "/images/9.jpg"
        },
        {
          src: "/images/10.jpg"
        },
        {
          src: "/images/new-4.jpg"
        },
        {
          src: "/images/new-12.jpg"
        },
        {
          src: "/images/new-6.jpg"
        }
      ],
      gallery: {
        enabled: true
      },
      type: 'image', // this is default type
    callbacks: {
        open: function() {
            // Will fire when this exact popup is opened\
        },
        close: function() {
            // Will fire when popup is closed
          $('body').css('overflow','hidden');
        }
      }
  });

  $('#category15').magnificPopup({
      items: [
        {
          src: "/images/new-8.jpg"
        },
        {
          src: "/images/17.jpg"
        },
        {
          src: "/images/new-10.jpg"
        },
        {
          src: "/images/new-11.jpg"
        },
        {
          src: "/images/IMG_20131208_222406-(2).jpg"
        },
        {
          src: "/images/20.jpg"
        },
        {
          src: "/images/1.jpg"
        },
        {
          src: "/images/IMG_20131201_182836.jpg"
        },
        {
          src: "/images/IMG_20131207_154357.jpg"
        },
        {
          src: "/images/IMG_20131208_012841.jpg"
        },
        {
          src: "/images/5.jpg"
        },
        {
          src: "/images/6.jpg"
        },
        {
          src: "/images/7.jpg"
        },
        {
          src: "/images/new-1.jpg"
        },
        {
          src: "/images/9.jpg"
        },
        {
          src: "/images/10.jpg"
        },
        {
          src: "/images/new-4.jpg"
        },
        {
          src: "/images/new-12.jpg"
        },
        {
          src: "/images/new-6.jpg"
        },
        {
          src: "/images/new-7.jpg"
        }
      ],
      gallery: {
        enabled: true
      },
      type: 'image', // this is default type
    callbacks: {
        open: function() {
            // Will fire when this exact popup is opened\
        },
        close: function() {
            // Will fire when popup is closed
          $('body').css('overflow','hidden');
        }
      }
  });

  $('#category16').magnificPopup({
      items: [
        {
          src: "/images/17.jpg"
        },
        {
          src: "/images/new-10.jpg"
        },
        {
          src: "/images/new-11.jpg"
        },
        {
          src: "/images/IMG_20131208_222406-(2).jpg"
        },
        {
          src: "/images/20.jpg"
        },
        {
          src: "/images/1.jpg"
        },
        {
          src: "/images/IMG_20131201_182836.jpg"
        },
        {
          src: "/images/IMG_20131207_154357.jpg"
        },
        {
          src: "/images/IMG_20131208_012841.jpg"
        },
        {
          src: "/images/5.jpg"
        },
        {
          src: "/images/6.jpg"
        },
        {
          src: "/images/7.jpg"
        },
        {
          src: "/images/new-1.jpg"
        },
        {
          src: "/images/9.jpg"
        },
        {
          src: "/images/10.jpg"
        },
        {
          src: "/images/new-4.jpg"
        },
        {
          src: "/images/new-12.jpg"
        },
        {
          src: "/images/new-6.jpg"
        },
        {
          src: "/images/new-7.jpg"
        },
        {
          src: "/images/new-8.jpg"
        }
      ],
      gallery: {
        enabled: true
      },
      type: 'image', // this is default type
    callbacks: {
        open: function() {
            // Will fire when this exact popup is opened\
        },
        close: function() {
            // Will fire when popup is closed
          $('body').css('overflow','hidden');
        }
      }
  });

  $('#category17').magnificPopup({
      items: [
        {
          src: "/images/new-10.jpg"
        },
        {
          src: "/images/new-11.jpg"
        },
        {
          src: "/images/IMG_20131208_222406-(2).jpg"
        },
        {
          src: "/images/20.jpg"
        },
        {
          src: "/images/1.jpg"
        },
        {
          src: "/images/IMG_20131201_182836.jpg"
        },
        {
          src: "/images/IMG_20131207_154357.jpg"
        },
        {
          src: "/images/IMG_20131208_012841.jpg"
        },
        {
          src: "/images/5.jpg"
        },
        {
          src: "/images/6.jpg"
        },
        {
          src: "/images/7.jpg"
        },
        {
          src: "/images/new-1.jpg"
        },
        {
          src: "/images/9.jpg"
        },
        {
          src: "/images/10.jpg"
        },
        {
          src: "/images/new-4.jpg"
        },
        {
          src: "/images/new-12.jpg"
        },
        {
          src: "/images/new-6.jpg"
        },
        {
          src: "/images/new-7.jpg"
        },
        {
          src: "/images/new-8.jpg"
        },
        {
          src: "/images/17.jpg"
        }
      ],
      gallery: {
        enabled: true
      },
      type: 'image', // this is default type
    callbacks: {
        open: function() {
            // Will fire when this exact popup is opened\
        },
        close: function() {
            // Will fire when popup is closed
          $('body').css('overflow','hidden');
        }
      }
  });



  $('#category18').magnificPopup({
      items: [
        {
          src: "/images/new-11.jpg"
        },
        {
         src: "/images/IMG_20131208_222406-(2).jpg"
        },
        {
          src: "/images/20.jpg"
        },
        {
          src: "/images/1.jpg"
        },
        {
          src: "/images/IMG_20131201_182836.jpg"
        },
        {
          src: "/images/IMG_20131207_154357.jpg"
        },
        {
          src: "/images/IMG_20131208_012841.jpg"
        },
        {
          src: "/images/5.jpg"
        },
        {
          src: "/images/6.jpg"
        },
        {
          src: "/images/7.jpg"
        },
        {
          src: "/images/new-1.jpg"
        },
        {
          src: "/images/9.jpg"
        },
        {
          src: "/images/10.jpg"
        },
        {
          src: "/images/new-4.jpg"
        },
        {
          src: "/images/new-12.jpg"
        },
        {
          src: "/images/new-6.jpg"
        },
        {
          src: "/images/new-7.jpg"
        },
        {
          src: "/images/new-8.jpg"
        },
        {
          src: "/images/17.jpg"
        },
        {
          src: "/images/new-10.jpg"
        }
      ],
      gallery: {
        enabled: true
      },
      type: 'image', // this is default type
    callbacks: {
        open: function() {
            // Will fire when this exact popup is opened\
        },
        close: function() {
            // Will fire when popup is closed
          $('body').css('overflow','hidden');
        }
      }
  });



   $('#category19').magnificPopup({
      items: [
        {
         src: "/images/IMG_20131208_222406-(2).jpg"
        },
        {
          src: "/images/20.jpg"
        },
        {
          src: "/images/1.jpg"
        },
        {
          src: "/images/IMG_20131201_182836.jpg"
        },
        {
          src: "/images/IMG_20131207_154357.jpg"
        },
        {
          src: "/images/IMG_20131208_012841.jpg"
        },
        {
          src: "/images/5.jpg"
        },
        {
          src: "/images/6.jpg"
        },
        {
          src: "/images/7.jpg"
        },
        {
          src: "/images/new-1.jpg"
        },
        {
          src: "/images/9.jpg"
        },
        {
          src: "/images/10.jpg"
        },
        {
          src: "/images/new-4.jpg"
        },
        {
          src: "/images/new-12.jpg"
        },
        {
          src: "/images/new-6.jpg"
        },
        {
          src: "/images/new-7.jpg"
        },
        {
          src: "/images/new-8.jpg"
        },
        {
          src: "/images/17.jpg"
        },
        {
          src: "/images/new-10.jpg"
        },
        {
          src: "/images/new-11.jpg"
        }
      ],
      gallery: {
        enabled: true
      },
      type: 'image', // this is default type
    callbacks: {
        open: function() {
            // Will fire when this exact popup is opened\
        },
        close: function() {
            // Will fire when popup is closed
          $('body').css('overflow','hidden');
        }
      }
  });

     $('#category20').magnificPopup({
      items: [
        {
          src: "/images/20.jpg"
        },
        {
          src: "/images/1.jpg"
        },
        {
          src: "/images/IMG_20131201_182836.jpg"
        },
        {
          src: "/images/IMG_20131207_154357.jpg"
        },
        {
          src: "/images/IMG_20131208_012841.jpg"
        },
        {
          src: "/images/5.jpg"
        },
        {
          src: "/images/6.jpg"
        },
        {
          src: "/images/7.jpg"
        },
        {
          src: "/images/new-1.jpg"
        },
        {
          src: "/images/9.jpg"
        },
        {
          src: "/images/10.jpg"
        },
        {
          src: "/images/new-4.jpg"
        },
        {
          src: "/images/new-12.jpg"
        },
        {
          src: "/images/new-6.jpg"
        },
        {
          src: "/images/new-7.jpg"
        },
        {
          src: "/images/new-8.jpg"
        },
        {
          src: "/images/17.jpg"
        },
        {
          src: "/images/new-10.jpg"
        },
        {
          src: "/images/new-11.jpg"
        },
        {
         src: "/images/IMG_20131208_222406-(2).jpg"
        }
      ],
      gallery: {
        enabled: true
      },
      type: 'image', // this is default type
    callbacks: {
        open: function() {
            // Will fire when this exact popup is opened\
        },
        close: function() {
            // Will fire when popup is closed
          $('body').css('overflow','hidden');
        }
      }
  });


     $('#category21').magnificPopup({
      items: [
        {
          src: "/images/Avon-Gorge-1.jpg"
        },
        {
          src: "/images/Avon-Gorge-2.jpg"
        }
      ],
      gallery: {
        enabled: true
      },
      type: 'image', // this is default type
    callbacks: {
        open: function() {
            // Will fire when this exact popup is opened\
        },
        close: function() {
            // Will fire when popup is closed
          $('body').css('overflow','hidden');
        }
      }
  });

     $('#category22').magnificPopup({
      items: [
        {
          src: "/images/Avon-Gorge-2.jpg"
        },
        {
          src: "/images/Avon-Gorge-1.jpg"
        }
      ],
      gallery: {
        enabled: true
      },
      type: 'image', // this is default type
    callbacks: {
        open: function() {
            // Will fire when this exact popup is opened\
        },
        close: function() {
            // Will fire when popup is closed
          $('body').css('overflow','hidden');
        }
      }
  });

    $('#categorya1').magnificPopup({
      items: [
        {
          src: "/images/cr-1.jpg"
        },
        {
          src: "/images/rose-1.jpg"
        },
        {
          src: "/images/hyatt-1.jpg"
        },
        {
          src: "/images/imperial.jpg"
        },
        {
          src: "/images/thikana-1.jpg"
        },
        {
          src: "/images/amarya-1.jpg"
        }
      ],
      gallery: {
        enabled: true
      },
      type: 'image', // this is default type
    callbacks: {
        open: function() {
            // Will fire when this exact popup is opened\
        },
        close: function() {
            // Will fire when popup is closed
          $('body').css('overflow','hidden');
        }
      }
  });

    $('#categorya2').magnificPopup({
      items: [
        {
          src: "/images/rose-1.jpg"
        },
        {
          src: "/images/hyatt-1.jpg"
        },
        {
          src: "/images/imperial.jpg"
        },
        {
          src: "/images/thikana-1.jpg"
        },
        {
          src: "/images/amarya-1.jpg"
        },
          {
          src: "/images/cr-1.jpg"
        }
      ],
      gallery: {
        enabled: true
      },
      type: 'image', // this is default type
    callbacks: {
        open: function() {
            // Will fire when this exact popup is opened\
        },
        close: function() {
            // Will fire when popup is closed
          $('body').css('overflow','hidden');
        }
      }
  });

     $('#categorya3').magnificPopup({
      items: [
      
        {
          src: "/images/hyatt-1.jpg"
        },
        {
          src: "/images/imperial.jpg"
        },
        {
          src: "/images/thikana-1.jpg"
        },
        {
          src: "/images/amarya-1.jpg"
        },
          {
          src: "/images/cr-1.jpg"
        },
          {
          src: "/images/rose-1.jpg"
        }
      ],
      gallery: {
        enabled: true
      },
      type: 'image', // this is default type
    callbacks: {
        open: function() {
            // Will fire when this exact popup is opened\
        },
        close: function() {
            // Will fire when popup is closed
          $('body').css('overflow','hidden');
        }
      }
  });

                
    $('#categorya4').magnificPopup({
      items: [
      
      
        {
          src: "/images/imperial.jpg"
        },
        {
          src: "/images/thikana-1.jpg"
        },
        {
          src: "/images/amarya-1.jpg"
        },
          {
          src: "/images/cr-1.jpg"
        },
          {
          src: "/images/rose-1.jpg"
        },
          {
          src: "/images/hyatt-1.jpg"
        }
      ],
      gallery: {
        enabled: true
      },
      type: 'image', // this is default type
    callbacks: {
        open: function() {
            // Will fire when this exact popup is opened\
        },
        close: function() {
            // Will fire when popup is closed
          $('body').css('overflow','hidden');
        }
      }
  });

     $('#categorya5').magnificPopup({
      items: [
      
      

        {
          src: "/images/thikana-1.jpg"
        },
        {
          src: "/images/amarya-1.jpg"
        },
          {
          src: "/images/cr-1.jpg"
        },
          {
          src: "/images/rose-1.jpg"
        },
          {
          src: "/images/hyatt-1.jpg"
        },
        {
          src: "/images/imperial.jpg"
        }
      ],
      gallery: {
        enabled: true
      },
      type: 'image', // this is default type
    callbacks: {
        open: function() {
            // Will fire when this exact popup is opened\
        },
        close: function() {
            // Will fire when popup is closed
          $('body').css('overflow','hidden');
        }
      }
  });


    $('#categorya6').magnificPopup({
      items: [
      
        {
          src: "/images/amarya-1.jpg"
        },
          {
          src: "/images/cr-1.jpg"
        },
          {
          src: "/images/rose-1.jpg"
        },
          {
          src: "/images/hyatt-1.jpg"
        },
        {
          src: "/images/imperial.jpg"
        },
        {
          src: "/images/thikana-1.jpg"
        }
      ],
      gallery: {
        enabled: true
      },
      type: 'image', // this is default type
    callbacks: {
        open: function() {
            // Will fire when this exact popup is opened\
        },
        close: function() {
            // Will fire when popup is closed
          $('body').css('overflow','hidden');
        }
      }
  });

     $('#categoryt1').magnificPopup({
      items: [
      
        {
          src: "/images/lal.jpg"
        },
          {
          src: "/images/taj.jpg"
        },
          {
          src: "/images/golden.jpg"
        },
          {
          src: "/images/jaipur.jpg"
        },
        {
          src: "/images/kerela.jpg"
        },
        {
          src: "/images/goa.jpg"
        }
      ],
      gallery: {
        enabled: true
      },
      type: 'image', // this is default type
    callbacks: {
        open: function() {
            // Will fire when this exact popup is opened\
        },
        close: function() {
            // Will fire when popup is closed
          $('body').css('overflow','hidden');
        }
      }
  });

          $('#categoryt2').magnificPopup({
      items: [
      

          {
          src: "/images/taj.jpg"
        },
          {
          src: "/images/golden.jpg"
        },
          {
          src: "/images/jaipur.jpg"
        },
        {
          src: "/images/kerela.jpg"
        },
        {
          src: "/images/goa.jpg"
        },
        {
          src: "/images/lal.jpg"
        }
      ],
      gallery: {
        enabled: true
      },
      type: 'image', // this is default type
    callbacks: {
        open: function() {
            // Will fire when this exact popup is opened\
        },
        close: function() {
            // Will fire when popup is closed
          $('body').css('overflow','hidden');
        }
      }
  });


     $('#categoryt3').magnificPopup({
      items: [
      
    
          {
          src: "/images/golden.jpg"
        },
          {
          src: "/images/jaipur.jpg"
        },
        {
          src: "/images/kerela.jpg"
        },
        {
          src: "/images/goa.jpg"
        },
        {
          src: "/images/lal.jpg"
        },
        {
          src: "/images/taj.jpg"
        }
      ],
      gallery: {
        enabled: true
      },
      type: 'image', // this is default type
    callbacks: {
        open: function() {
            // Will fire when this exact popup is opened\
        },
        close: function() {
            // Will fire when popup is closed
          $('body').css('overflow','hidden');
        }
      }
  });

     $('#categoryt4').magnificPopup({
      items: [
      

          {
          src: "/images/jaipur.jpg"
        },
        {
          src: "/images/kerela.jpg"
        },
        {
          src: "/images/goa.jpg"
        },
         {
          src: "/images/lal.jpg"
        },
        {
          src: "/images/taj.jpg"
        },
        {
          src: "/images/golden.jpg"
        },
      ],
      gallery: {
        enabled: true
      },
      type: 'image', // this is default type
    callbacks: {
        open: function() {
            // Will fire when this exact popup is opened\
        },
        close: function() {
            // Will fire when popup is closed
          $('body').css('overflow','hidden');
        }
      }
  });

     $('#categoryt5').magnificPopup({
      items: [
      

        {
          src: "/images/kerela.jpg"
        },
        {
          src: "/images/goa.jpg"
        },
                {
          src: "/images/lal.jpg"
        },
          {
          src: "/images/taj.jpg"
        },
          {
          src: "/images/golden.jpg"
        },
          {
          src: "/images/jaipur.jpg"
        }
      ],
      gallery: {
        enabled: true
      },
      type: 'image', // this is default type
    callbacks: {
        open: function() {
            // Will fire when this exact popup is opened\
        },
        close: function() {
            // Will fire when popup is closed
          $('body').css('overflow','hidden');
        }
      }
  });

     $('#categoryt6').magnificPopup({
      items: [
      
      
        {
          src: "/images/goa.jpg"
        },
          {
          src: "/images/lal.jpg"
        },
          {
          src: "/images/taj.jpg"
        },
          {
          src: "/images/golden.jpg"
        },
          {
          src: "/images/jaipur.jpg"
        },
        {
          src: "/images/kerela.jpg"
        }
      ],
      gallery: {
        enabled: true
      },
      type: 'image', // this is default type
    callbacks: {
        open: function() {
            // Will fire when this exact popup is opened\
        },
        close: function() {
            // Will fire when popup is closed
          $('body').css('overflow','hidden');
        }
      }
  });


	// Gallery - 2
	//==================================================================================
	var $gallery = $('#gallery2');
	// initialize Masonry after all images have loaded  
	$gallery.imagesLoaded( function() {
		$gallery.masonry({
			columnWidth: ".grid_sizer",
			itemSelector: ".masonry_col",
			transitionDuration: "1s",
		});
	});
	
	$('#gallery2').magnificPopup({
 		delegate: '.photo_item_overlay a', // child items selector, by clicking on it popup will open
  		type: 'image',
		gallery: {
          enabled:true
        },
		callbacks: {
    		open: function() {
      			// Will fire when this exact popup is opened
    		},
    		close: function() {
      			// Will fire when popup is closed
	  			$('body').css('overflow','hidden');
    		}
  		},
	});
	
	// Owl Carousel - Gift Registry
	//==================================================================================
	$(document).ready(function() {
    	$("#registry_logo").owlCarousel({
			items : 4, 
			autoPlay: 2000,
			stopOnHover: true,
			pagination: false
		});
    });
	
	// Blog-2
	//==================================================================================
	var $blog = $('#blog2');
	// initialize Masonry after all images have loaded  
	$blog.imagesLoaded( function() {
		$blog.masonry({
			columnWidth: ".grid_sizer_blog",
			itemSelector: ".masonry_col_blog",
			transitionDuration: "1s",
			gutter: 20
		});
	});
	
	
	$(document).ready(function() {
		var a = 0;
	
		// Get some more blocks
		jQuery('#blogmore').click(function(){
			
			$(this).hide();
			$('#loading_more').show();
			a = a + 1;
			jQuery.get('blog-more.php?page=' + a, function( data ) {
				// Make jQuery object from HTML string
				var $moreBlocks = $($.parseHTML(data)).filter('*');
				
				$moreBlocks.hide();
				// Append new blocks
				jQuery('#blog2').append( $moreBlocks );
				
				$moreBlocks.imagesLoaded().progress( function( imgLoad, image ) {
    				// get item
    				// image is imagesLoaded class, not <img>, <img> is image.img
    				var $item = $( image.img ).parents( ".masonry_col_blog" );
    				// un-hide item
    				$item.show();
    				// masonry does its thing
    				jQuery('#blog2').masonry( 'appended', $item );	
  				});
				
				$moreBlocks.imagesLoaded().done( function() {
					if (data == "empty")
					{
						jQuery('#blogmore').hide();
						$('#loading_more').hide();
					}
					else
					{
						$('#loading_more').hide();
						$('#blogmore').show();
					}
					
					if( !device.tablet() && !device.mobile() ) {
						$.waypoints('refresh');
					}
  				});
						
			}); 	
			return false;				
		});
	});
	
	// Gmap
	//==================================================================================
   	jQuery(document).ready(function($) {
     //    $("#location_map").gMap({
     //         maptype: google.maps.MapTypeId.ROADMAP, 
     //         zoom: 17, 
     //         markers: 
			 	// [
			 	// 	{
     //             		latitude: 28.568861, 
     //             		longitude: 77.185486, 
     //             		html: "<strong>Hyatt Regency Delhi</strong>", 
     //            		popup: true,               
					// } 
     //            ], 
     //         panControl: true, 
     //         zoomControl: true, 
     //         mapTypeControl: true, 
     //         scaleControl: true, 
     //         streetViewControl: true, 
     //         scrollwheel: false, 
     //         styles: [ { "stylers": [ { "hue": "#00c0b6" }, { "gamma": 1 }, { "saturation": -50 } ] } ], 
     //         onComplete: function() {
     //             // Resize and re-center the map on window resize event
     //             var gmap = $("#location_map").data('gmap').gmap;
     //             window.onresize = function(){
     //                 google.maps.event.trigger(gmap, 'resize');
     //                 $("#location_map").gMap('fixAfterResize');
     //             };
     //        }
     //    });
        $( '.go-to-map' ).on( 'click', function() {
        	$( '.go-to-map' ).removeClass( 'active' );
            $(this).addClass( 'active' );
            if ($(this).hasClass( 'the-wedding' ))
                $( '#location_map' ).html('<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3504.030028192734!2d77.185486!3d28.568861000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf95502a35972588e!2sHyatt+Regency+Delhi!5e0!3m2!1sen!2suk!4v1407313780358" width="100%" height="450" frameborder="0" style="border:0"></iframe>');
            else if($(this).hasClass( 'the-mehndi' ))
                $( '#location_map' ).html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.770949711989!2d77.10132482401008!3d28.45632031521853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18cb630c67c3%3A0xcf7224db4ada9bea!2sThe+Magnolias+Club!5e0!3m2!1sen!2sus!4v1407314686790" width="100%" height="450" frameborder="0" style="border:0"></iframe>');
            else if($(this).hasClass( 'open-house' ))
                $( '#location_map' ).html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.976521805777!2d77.07864314999999!3d28.480253699999952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19227570d9e1%3A0x7c19969682748561!2sHeritage+City%2C+Mehroli+Gurgaon+Service+Rd%2C+Heritage+City%2C+Sector+25%2C+Gurgaon%2C+Haryana+122001%2C+India!5e0!3m2!1sen!2sus!4v1407316188258" width="100%" height="450" frameborder="0" style="border:0"></iframe>');
          
        });
    });
	
	
	// Style Switcher
	//==================================================================================
	var clicked = 0;
	$('#theme_options').click(function(){
		if (clicked == 0)
		{
			$( "#style_switcher" ).animate({ "left": "0px" }, "fast" );
			clicked = 2;
			return false;
		}
		else
		{
			$( "#style_switcher" ).animate({ "left": "-110px" }, "fast" );
			clicked = 0;
			return false;
		}
	});