var apiKey = "4f2fd1d8b8f933346791294f2fd1d8b8";
var apiURL = "https://api.zomato.com/v1/";
var mode = "XML";

function setMode(type)
{
  mode = type;
}


    function onStateChanged()
    {
                if(this.readyState == 4 && this.status == 200) 
                       console.log(this.responseText);               
    }
    
    function sendRequest(query)
    {
	            //Modify Request
				if(mode === "JSON" ) query = query.replace("xml", "json")
				console.log("Request Query :" + apiURL + query )
                var xmlhttp = new XMLHttpRequest();
                xmlhttp.open('GET', apiURL + query, false);
				xmlhttp.setRequestHeader("X-Zomato-API-Key",apiKey);
                xmlhttp.onreadystatechange = onStateChanged;
                xmlhttp.send();
    }
//Common API	
function getCities(){sendRequest("cities.xml");	}
function getLocalityByLatLong(lat,lon){ sendRequest("geocode.xml?lat=" + lat + "&lon=" + lon);	}
function getLocalityByCity(cityId){ sendRequest("subzones.xml?city_id=" + cityId);}
function getZonesByCity(cityId){   sendRequest("zones.xml?city_id=" + cityId);	}
function getZonesByLocality(zoneId)	{  sendRequest("subzones.xml?zone_id=" + zoneId);	}
//Restaurant API
function getCuisinesInCity(cityId) { sendRequest("cuisines.xml?city_id=" + cityId)}
function getRestaurantsInZone(zoneId) {sendRequest("search.xml?zone_id=" + zoneId)}
function getRestaurantsInLocality(subzoneId) { sendRequest( "search.xml?subzone_id=" + subzoneId ) }
function getRestaurantsDetails(resId) { sendRequest("restaurant.json/" + resId ) }
function getRestaurantsReview(resId, start, count) { sendRequest("reviews.json/"+resId+"/user?start="+start+"&count=" +count ) }
function reportError(resId, data) { sendRequest("contact.json?res_id="+resId+"&data=" + data ) }
//TODO
function getRestaurantsByCuisine(cityId, cuisineId, category, start, count, mincft, maxcft, minrating, maxrating, cc, bar, veg, open, buffet, happyhour) { sendRequest("search.json?city_id=1&cuisine_id=55&category=2&start=1&count=10" ) }
function getRandomNearByRestaurant(lat, lon, cityId, radius) { sendRequest("search.json/near?lat=28.557706&lon=77.205879&city_id="+cityId+"&random=true&radius=" +radius ) }
function searchRestaurant(cityId, q, lat, lon){ sendRequest( ) }
function getNearByRestaurant(lat, lon) { sendRequest( ) }
//Events
function getEvents(cityId, q, startDate, endDate, zoneId, subzoneId, category, start, count){ sendRequest( ) }
function getEventCategories() { sendRequest( ) }
function getEventVenueDetails(venueId){ sendRequest( ) }
function getEventsByVenue(venueId){ sendRequest( ) }
function getFeaturedEvents(cityId){ sendRequest( ) }
function getPopularEvents(cityId){ sendRequest( ) }
function getRecommendedEvents(cityId){ sendRequest( ) }
function getEventDetails(eventId){ sendRequest( ) }
function getNearByEvents(lat,lon, radius) {sendRequest()}
