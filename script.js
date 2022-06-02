const times = ['Sunrise', 'Morning', 'Noon', 'Afternoon', 'Late afternoon', 'Sunset', 'Night'];


function randomCombo() {
  const track = selectTrack();
  const car = selectCar();
  const time = times[Math.floor(Math.random() * times.length)];
  
  document.getElementById("track").innerHTML = track.track_name + " - " + track.config_name;
  document.getElementById("car").appendChild(document.createElement("li").appendChild(document.createTextNode(car.car_name)));
  document.getElementById("car").app = car.car_name;
  document.getElementById("timeOfDay").innerHTML = time;
  document.getElementById('addCar').hidden = false;
}

function addCar() {
  const car = selectCar();
  document.getElementById("car").appendChild(document.createElement("li").appendChild(document.createTextNode(car.car_name)));
}



function selectTrack() {
  let accepted_track_types = [];
  if (document.getElementById('roadTracks').checked) {
    accepted_track_types.push("road");
  }
  if (document.getElementById('ovalTracks').checked) {
    accepted_track_types.push("oval");
  }
  let track = null;
  while (track === null) {
    let randomTrack = tracks[Math.floor(Math.random() * tracks.length)];
    if (accepted_track_types.includes(randomTrack.track_types[0].track_type)) {
      track = randomTrack;
    }
  }

  return track;
}


function selectCar() {
  let accepted_car_types = [];
  if (document.getElementById('roadCars').checked) {
    accepted_car_types.push("road");
  }
  if (document.getElementById('ovalCars').checked) {
    accepted_car_types.push("oval");
  }


  let car = null;
  while (car === null) {
    let randomCar = cars[Math.floor(Math.random() * cars.length)];
    for (var i = 0; i < randomCar.car_types.length; i++) {
      if (accepted_car_types.includes(randomCar.car_types[i].car_type)) {
        car = randomCar;
        continue;
      }
    }
  }

  return car;
}