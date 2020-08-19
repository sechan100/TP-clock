const COORDS = "coords";
const API_KEY = "d37b7089f9184e600a8ef74ded07e593";


function loadcoords() {
    const loadedCoord = localStorage.getItem('COORDS')
    if(loadedCoord === null){
        askForCoords();
    }else{
        const parseCoords = JSON.parse(loadedcoord);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    };
};

function askForCoords(){
    navigator.geolocation.getCurrentPosition
    (handleGeoSucces , handleGeoError);
};

function handleGeoSucces(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coords_obj = {
        latitude,
        longitude
    };
    saveCoords(coords_obj); 
    getWeather(latitude, longitude)
};

function saveCoords(coords_obj){
    localStorage.setItem(COORDS , JSON.stringify(coords_obj));
};

function getWeather(lat, lon) {
    fetch(`api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
}

function handleGeoError() {
    console.log("cant access geo location");
};



function init(){
    loadcoords();
};

init();