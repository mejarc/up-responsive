window.onload = function(){
    var  dateDisplay = document.getElementById('now'),
         place = 'Los Angeles, California, USA';
    calculateTimesOfDay('America/Los_Angeles');
}();
// TODO: calculate quarter-hour opacity changes

function calculateMyTime(place){
  // use moment.js to create appropriate time for
  // `place`
  var rightNow = moment.tz(new Date(), place);
  return rightNow;
}

function calculateLatLong(place){
  // use Google Maps API to obtain lat/long of `place`
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode({ 'address': place }, function(results, status){
    var location = results[0].geometry.location;
    return [location.lat(), location.lng()];
  });
}

// use SunCalc library to create sunrise, noon, sunset values
function calculateTimesOfDay(place){
  var now = calculateMyTime(place),
      latLong = calculateLatLong(place),
      times;

  // TODO: this keeps coming back undefined. It's just sloooow--proper location is
  // coming back from Google Maps, eventually
  if (latLong){
    times = SunCalc.getTimes(now, latLong[0], latLong[1]);
  }
  // hard-code lat/long for LA
  else {
    times = SunCalc.getTimes(now, 34.0522342, -118.2436849 );
  }
  var sunrise = times.sunrise,
      sunset = times.sunset,
      noon = times.solarNoon;
  console.log(noon);
}