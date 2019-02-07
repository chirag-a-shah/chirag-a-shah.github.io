'use strict';

// STYLESHEET SWITCHER
(function($)
	{
		$('#pink').click(function()
		{
			$('link[rel*=jquery]').remove();
			$('head').append('<link rel="stylesheet jquery" href="css/skin/pink.css" type="text/css" />');
			$("#nav").hide().fadeIn('fast');
			
        	$("#location_map").gMap({
             	maptype: google.maps.MapTypeId.ROADMAP, 
             	zoom: 17, 
             	markers: 
			 		[
			 			{
                            latitude: 28.568861, 
                            longitude: 77.185486, 
                            html: "<strong>Hyatt Regency Delhi</strong>", 
                            popup: true,               
                        } 
                	], 
             	panControl: true, 
             	zoomControl: true, 
             	mapTypeControl: true, 
             	scaleControl: true, 
             	streetViewControl: true, 
             	scrollwheel: false, 
             	styles: [ { "stylers": [ { "hue": "#d56363" }, { "gamma": 1 }, { "saturation": -70 } ] } ], 
             	onComplete: function() {
                 	// Resize and re-center the map on window resize event
                 	var gmap = $("#location_map").data('gmap').gmap;
                 	window.onresize = function(){
                     	google.maps.event.trigger(gmap, 'resize');
                     	$("#location_map").gMap('fixAfterResize');
                 	};
            	}
        	});	
			return false;
		});
		$('#purple').click(function()
		{
			$('link[rel*=jquery]').remove();
			$('head').append('<link rel="stylesheet jquery" href="css/skin/purple.css" type="text/css" />');
			$("#nav").hide().fadeIn('fast');
			
			$("#location_map").gMap({
             	maptype: google.maps.MapTypeId.ROADMAP, 
             	zoom: 17, 
             	markers: 
			 		[
			 			{
                            latitude: 28.568861, 
                            longitude: 77.185486, 
                            html: "<strong>Hyatt Regency Delhi</strong>", 
                            popup: true,               
                        } 
                	], 
             	panControl: true, 
             	zoomControl: true, 
             	mapTypeControl: true, 
             	scaleControl: true, 
             	streetViewControl: true, 
             	scrollwheel: false, 
             	styles: [ { "stylers": [ { "hue": "#b06c8b" }, { "gamma": 1 }, { "saturation": -70 } ] } ], 
             	onComplete: function() {
                 	// Resize and re-center the map on window resize event
                 	var gmap = $("#location_map").data('gmap').gmap;
                 	window.onresize = function(){
                     	google.maps.event.trigger(gmap, 'resize');
                     	$("#location_map").gMap('fixAfterResize');
                 	};
            	}
        	});
			
			return false;
		});
		
		$('#brown').click(function()
		{
			$('link[rel*=jquery]').remove();
			$('head').append('<link rel="stylesheet jquery" href="css/skin/brown.css" type="text/css" />');
			$("#nav").hide().fadeIn('fast');
			
			$("#location_map").gMap({
             	maptype: google.maps.MapTypeId.ROADMAP, 
             	zoom: 17, 
             	markers: 
			 		[
			 			{
                            latitude: 28.568861, 
                            longitude: 77.185486, 
                            html: "<strong>Hyatt Regency Delhi</strong>", 
                            popup: true,               
                        } 
                	], 
             	panControl: true, 
             	zoomControl: true, 
             	mapTypeControl: true, 
             	scaleControl: true, 
             	streetViewControl: true, 
             	scrollwheel: false, 
             	styles: [ { "stylers": [ { "hue": "#ad8763" }, { "gamma": 1 }, { "saturation": -70 } ] } ], 
             	onComplete: function() {
                 	// Resize and re-center the map on window resize event
                 	var gmap = $("#location_map").data('gmap').gmap;
                 	window.onresize = function(){
                     	google.maps.event.trigger(gmap, 'resize');
                     	$("#location_map").gMap('fixAfterResize');
                 	};
            	}
        	});
			
			return false;
		});
		
		$('#reset').click(function()
		{
			$('link[rel*=jquery]').remove();
			$("#nav").hide().fadeIn('fast');
			
			$("#location_map").gMap({
             	maptype: google.maps.MapTypeId.ROADMAP, 
             	zoom: 17, 
             	markers: 
			 		[
			 			{
                            latitude: 28.568861, 
                            longitude: 77.185486, 
                            html: "<strong>Hyatt Regency Delhi</strong>", 
                            popup: true,               
                        } 
                	], 
             	panControl: true, 
             	zoomControl: true, 
             	mapTypeControl: true, 
             	scaleControl: true, 
             	streetViewControl: true, 
             	scrollwheel: false, 
             	styles: [ { "stylers": [ { "hue": "#00c0b6"}, { "gamma": 1 }, { "saturation": -50 } ] } ], 
            	onComplete: function() {
                	// Resize and re-center the map on window resize event
                 	var gmap = $("#location_map").data('gmap').gmap;
                 	window.onresize = function(){
                     	google.maps.event.trigger(gmap, 'resize');
                     	$("#location_map").gMap('fixAfterResize');
                 	};
            	}
        	});
			
			return false;
		});
		
	}
)(jQuery);
