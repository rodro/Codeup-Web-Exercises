"use strict";

        // Set our map options
var styles = [
	{
		"featureType": "landscape",
		"stylers": [
			{
				"hue": "#FFA000"
			},
			{
				"saturation": 92.00000000000003
			},
			{
				"lightness": -14.823529411764696
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
				"hue": "#8500FF"
			},
			{
				"saturation": -40.44444444444445
			},
			{
				"lightness": -50.36470588235294
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
				"hue": "#8500FF"
			},
			{
				"saturation": 40.39999999999998
			},
			{
				"lightness": -60.56470588235294
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
				"hue": "#8500FF"
			},
			{
				"saturation": 29.80000000000001
			},
			{
				"lightness": -25.400000000000006
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
				"hue": "#8500FF"
			},
			{
				"saturation": -40.44444444444445
			},
			{
				"lightness": -59.76470588235294
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
            zoom: 18,
            styles: styles,
            
            // This sets the center of the map at our location
            center: {
                lat:  29.4267877,
                lng: -98.4876821,

            }


        };
       

        // Render the map
        var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    	var codeup = { lat: 29.4267877, lng: -98.4876821 }; 
        var marker = new google.maps.Marker({
		    position: codeup,
		    title:"TDG",
		    map: map,
    		icon: '/img/tdg-marker.png'
  		
		});
        
        // Create a new infoWindow object with content
		var infowindow = new google.maps.InfoWindow({
		    content: "The DeBerry Group"
		});

		// Open the window using our map and marker
		infowindow.open(map, marker);




