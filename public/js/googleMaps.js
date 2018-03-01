function initMap() {
	// add your code here
	
		// Create center marker at UCSD
		var ucsd_ltlng = {lat:32.880, lng:-117.236};
		var cicc_ltlng ={lat:32.884985,lng:-117.241296};
		// Create a map object and specify the DOM element for display.
		var map = new google.maps.Map(document.getElementById('map'), {
		  center: cicc_ltlng,
		  zoom: 15
		});
	  
		

		var marker = new google.maps.Marker({
			position: cicc_ltlng,
			map: map,
			title: 'UCSD'
		});
	
}