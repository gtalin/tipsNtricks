function cel2Fah () {
  return (this.temp*9/5) + 32;
}

function fah2Cel () {
  return (this.temp-32)*5/9;
}

function init() {
  console.log("startup")
  var url1 = "https://ipinfo.io?callback";
  getHttp(url1)
     .then(
       function(value) {
         console.log(value);

         //Display location in html
         var location = document.getElementById("location");
         var locVal = document.createTextNode(value.city+","+value.country);
         location.appendChild(locVal);
         var geoCoords = {lat:value.loc.split(",")[0], lon:value.loc.split(",")[0]};
         console.log(geoCoords);
         //will be useful to form url for next async get request
         var url = `http://api.openweathermap.org/data/2.5/weather?lat=
         ${geoCoords.lat}&lon=${geoCoords.lon}&appid=f9b57bc463f6b2d6f6206a5c2a525c9c`
         console.log(url);
         //here we return the other asynch function
         //so we can use then on it outside of this function
         return getHttp(url);//if no return then nested inside
       })
       .then(function(value){
         //console.log(value);
         //value.weather[0].id
         iconSelection(value.weather[0].id);
         displayWeather(value);
       });
}

init();
//Convert temp
//Whole c to f switching option

function iconSelection(weatherId) {
  //icon selection based on weather conditions from
  //openweathermap.org. There is a direct icon mapping
  var icon = document.getElementById("icon");
  icon.className += weatherId;
}

function displayWeather(weather) {
  //Will display temperature and weather condition
  console.log(weather);
  var weatherText = document.getElementById("weather");
  var temp = document.getElementById("temperature");
  weatherText.appendChild(document.createTextNode(weather["weather"][0].description));
  temp.appendChild(document.createTextNode(weather.main.temp));
}
//test with 301, 302 and 310
//iconSelection("310")

//get request is an asynch request. Using promises
function getHttp(url) {
  return new Promise(
    function (resolve, reject) {
      var request = new XMLHttpRequest();
      request.onload = function() {
        if (request.readyState== 4 && request.status >= 200 && request.status <400) {
          var data = JSON.parse(request.responseText);
          resolve(data);
        }
        else {
          reject(new Error(request.statusText));
        }
      };
      request.onerror = function() {
        reject(new Error("XMLHttpRequest error: "+ request.statusText));
      };
      request.open("GET", url, true);
      request.send();
    });
}
