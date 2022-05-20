const times = ['Morning', 'Noon', 'Afternoon', 'Sunset', 'Night'];


function randomCombo() {
  const track = tracks[Math.floor(Math.random() * tracks.length)];
  const car = cars[Math.floor(Math.random() * cars.length)].car_name;
  const time = times[Math.floor(Math.random() * times.length)];
  document.getElementById("track").innerHTML = track.track_name + " - " + track.config_name;
  document.getElementById("car").innerHTML = car;
  document.getElementById("timeOfDay").innerHTML = time;
}