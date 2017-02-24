function cel2Fah () {
  return (this.temp*9/5) + 32;
}

function fah2Cel () {
  return (this.temp-32)*5/9;
}

/*(function init() {
  console.log("startup")
  var request = new XMLHttpRequest();
  var url = "https://ipinfo.io";
  request.open('GET', url, true);
  //request.responseType = 'json';
  request.onload = function() {
  if (request.readyState == 4 && request.status >= 200 && request.status < 400) {
    // Success!
    console.log("success");
    var data = JSON.parse(request.response);
    console.log(data);
  } else {
    console.log("Reached server but error")
  }
};

request.onerror = function() {
  console.log("Connection error");
};

request.send();
})();*/
var xml = new XMLHttpRequest();
var url = "https://ipinfo.io/?callback";
 xml.open("GET", url, true);
 xml.responseType = 'jsonp';
 xml.onreadystatechange = function() {
   if (xml.readyState != 4)  { return; }

   var serverResponse = JSON.parse(xml.responseText);
   console.log(serverResponse);
 };

 xml.send(null);
