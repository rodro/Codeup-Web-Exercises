"use strict";

        // Set our map options
var styles = [
	{
		"featureType": "landscape",
		"stylers": [
			{
				"hue": "#C100FF"
			},
			{
				"saturation": 6.400000000000006
			},
			{
				"lightness": -26
			},
			{
				"gamma": 1
			}
		]
	},
	{
		"featureType": "road.highway",
		"stylers": [
			{
				"hue": "#FF00CC"
			},
			{
				"saturation": 25.799999999999997
			},
			{
				"lightness": -28.599999999999994
			},
			{
				"gamma": 1
			}
		]
	},
	{
		"featureType": "road.arterial",
		"stylers": [
			{
				"hue": "#2200FF"
			},
			{
				"saturation": 0
			},
			{
				"lightness": -57.8
			},
			{
				"gamma": 1
			}
		]
	},
	{
		"featureType": "road.local",
		"stylers": [
			{
				"hue": "#FF2600"
			},
			{
				"saturation": 43.400000000000006
			},
			{
				"lightness": -52.2
			},
			{
				"gamma": 1
			}
		]
	},
	{
		"featureType": "water",
		"stylers": [
			{
				"hue": "#0078FF"
			},
			{
				"saturation": 0
			},
			{
				"lightness": 0
			},
			{
				"gamma": 1
			}
		]
	},
	{
		"featureType": "poi",
		"stylers": [
			{
				"hue": "#9FFF00"
			},
			{
				"saturation": 0
			},
			{
				"lightness": 0
			},
			{
				"gamma": 1
			}
		]
	}
];

        var mapOptions = {
            // Set the zoom level
            zoom: 15,
            styles: styles,
            
            // This sets the center of the map at our location
            center: {
                lat:  29.4153307,
                lng: -98.489602,

            }


        };
       

        // Render the map
        var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    	var codeup = { lat: 29.4153307, lng: -98.489602 }; 
        var marker = new google.maps.Marker({
		    position: codeup,
		    title:"Hello World!",
		    map: map,
    		icon: '/img/ro-marker.png'
  		
		});
        
        // Create a new infoWindow object with content
		var infowindow = new google.maps.InfoWindow({
		    content: "<div class='head'>Rosarios</div> "

		});

		// Open the window using our map and marker
		infowindow.open(map, marker);




