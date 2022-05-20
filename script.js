const times = ['Morning', 'Noon', 'Afternoon', 'Sunset', 'Night'];


function randomCombo() {
  const track = tracks[Math.floor(Math.random() * tracks.length)];
  const car = cars[Math.floor(Math.random() * cars.length)].car_name;
  const time = times[Math.floor(Math.random() * times.length)];
  document.getElementById("track").innerHTML = track.track_name + " - " + track.config_name;
  document.getElementById("car").innerHTML = car;
  document.getElementById("timeOfDay").innerHTML = time;
}

function multiclassCombo() {
  const track = tracks[Math.floor(Math.random() * tracks.length)];
  const car = cars[Math.floor(Math.random() * cars.length)].car_name;
  const car2 = cars[Math.floor(Math.random() * cars.length)].car_name;
  const car3= cars[Math.floor(Math.random() * cars.length)].car_name;
  const time = times[Math.floor(Math.random() * times.length)];
  document.getElementById("track").innerHTML = track.track_name + " - " + track.config_name;
  document.getElementById("car").innerHTML = car + car2 + car3;
  document.getElementById("timeOfDay").innerHTML = time;
}