function doStrategy() {
    const length = document.getElementById('length').value;
    const fuelperlap = document.getElementById('fuelperlap').value;

    // Race in minutes
    if (document.getElementById('raceMinutes').checked) {
        const leaderLapInSeconds = parseInt(document.getElementById('minutes').value) * 60 + parseInt(document.getElementById('seconds').value);
        document.getElementById('result').innerHTML = fuelperlap * Math.ceil((length * 60) / (leaderLapInSeconds))
    }
    // Race in laps
    else {
        document.getElementById('result').innerHTML = length * fuelperlap;
    }

}

function switchLeaderPaceInputVisibility(){
    document.getElementById('timedRace').hidden=!document.getElementById('timedRace').hidden;
}
