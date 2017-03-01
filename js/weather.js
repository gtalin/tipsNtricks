/*function cel2Fah () {
  return (this.temp*9/5) + 32;
}

function fah2Cel () {
  return (this.temp-32)*5/9;
}
*/
function kelvin2Cel() {
  return (this.temp-273.15).toFixed(2);
}

function kelvin2Fah() {
  return ((this.temp-273.15)*9/5 + 32).toFixed(2);
}

function init() {
  console.log("startup");
  var temp = {
    temp: null,
    unit: "C",
    description: ""
  };

  var url1 = "https://ipinfo.io?callback";
  getHttp(url1)
     .then(
       function(value) {
         console.log(value);

         //Display location in html
         var location = document.getElementById("location");
         var locVal = document.createTextNode(value.city+","+value.country);
         location.appendChild(locVal);
         var geoCoords = {lat:value.loc.split(",")[0], lon:value.loc.split(",")[1]};
         console.log(geoCoords);
         //will be useful to form url for next async get request
         var url = `http://api.openweathermap.org/data/2.5/weather?lat=${geoCoords.lat}&lon=${geoCoords.lon}&appid=f9b57bc463f6b2d6f6206a5c2a525c9c`
         //var url = "http://api.openweathermap.org/data/2.5/weather?lat="+geoCoords.lat+"&lon="+geoCoords.lon+"&appid=f9b57bc463f6b2d6f6206a5c2a525c9c"

         console.log(url);

         //here we return the other asynch function
         //so we can use then on it outside of this function
         return getHttp(url);//if no return then nested inside
       })
       .then(function(weather){
         //console.log(value);
         //value.weather[0].id
         console.log(JSON.stringify(weather));
         iconSelection(weather.weather[0].id);
         temp.temp = weather.main.temp;
         temp.description = weather["weather"][0].description;
         displayWeather(temp);
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

function displayWeather(tmp) {
  //Will display temperature and weather condition
  console.log(tmp);
  var weatherText = document.getElementById("weather");
  var temp = document.getElementById("temperature");
  var unit = document.getElementById("unit");

  weatherText.appendChild(document.createTextNode(tmp.description));
  var tempTextNode = document.createTextNode((tmp.temp-273.15).toFixed(2));
  var unitTextNode = document.createTextNode(tmp.unit);
  temp.appendChild(tempTextNode);
  unit.appendChild(unitTextNode);

  // weatherText.innerHTML=tmp.description;
  // temp.innerHTML=(tmp.temp).toFixed(2);
  // unit.innerHTML=tmp.unit;

  //attach event listener
  unit.addEventListener("click", function() {
    console.log("unit needs to be changed");
    var converted;
    if (tmp.unit=="C") {
      tmp.unit = "F";
      //unit.nodeValue=tmp.unit;
      unitTextNode.nodeValue=tmp.unit;
      converted = kelvin2Fah.call(tmp);
      console.log(converted);
      tempTextNode.nodeValue = converted;
    }
    else {
      tmp.unit = "C";
      unitTextNode.nodeValue=tmp.unit;
      converted = kelvin2Cel.call(tmp);
      console.log(converted);
      tempTextNode.nodeValue = converted;
    }
  })

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
