window.onload = function(){
    var  dateDisplay = document.getElementById('now');
    console.log(calculateTimesOfDay('America/Los_Angeles'));
}();

function calculateMyTime(place){
  // use moment.js to create appropriate time for
  // `place`
  var rightNow = moment.tz(new Date(), place).format();
  return rightNow;
}

// use SunCalc library to create sunrise, noon, sunset values
function calculateTimesOfDay(place){
  var now = calculateMyTime(place);
  var times = SunCalc.getTimes();
  var sunrise = times.sunrise.getHours();
  return sunrise;
}