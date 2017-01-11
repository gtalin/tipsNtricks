UpdateTime();
setInterval(UpdateTime, 1000);
function UpdateTime(){
  var currentDate = new Date();
  var hour = Date.prototype.getHours.call(currentDate);
  hour = hour%12;/*to convert to 0-12 from 0-24*/
  var min = Date.prototype.getMinutes.call(currentDate);
  min = min/5;
  var second = Date.prototype.getSeconds.call(currentDate);
  second = second/5
  console.log(hour, min, second);
  var minAngle = calculateAngle(min);
  var secondAngle = calculateAngle(second);
  var hourAngle = calculateAngle(hour);
  console.log(hourAngle,minAngle,secondAngle);
  hourAngle += adjustForHour(min);
  document.getElementById("hour")
    .style.transform="rotate("+hourAngle+"deg)";
  document.getElementById("minute")
    .style.transform="rotate("+minAngle+"deg)";
  document.getElementById("second")
    .style.transform="rotate("+secondAngle+"deg)";
}
function calculateAngle(ele){
  var transformAngle = (ele-3)*30;
  /*No Math.abs becuase section of 0 and 3
  we can get correct angle only by negative val*/
  if (transformAngle<0) 
    transformAngle = 360 + transformAngle;
  return transformAngle;
}
function adjustForHour(min){
  /*We'll add a few angles to
  hour hand depending on the number of minutes
  transpired*/
  /*60 minutes == 1 hour of hand movement which is 30 degrees angle*/
  var min = min*5;
  var degreeAdd = 30/60*min;
  return degreeAdd;
}