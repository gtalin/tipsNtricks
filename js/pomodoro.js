
function Time(seconds) {
  this.seconds = seconds;
}

Time.prototype.convertSeconds = function() {
  this.hour = Math.floor(this.seconds/3600);
  this.minute = Math.floor((this.seconds%3600)/60);
  this.second = (this.seconds%3600)%60;
}

Time.prototype.humanReadable = function() {
  //Anything that is 0 in above will not be dispalyed
  this.convertSeconds();
  var toString="";
  if(this.hour!==0)
    toString +=this.hour+":";
  if (this.minute<10)
    toString += padding(this.minute)+":";
  else toString += this.minute + ":";

  function padding(ele) {
    if (ele<10)
      return "0"+ele;
    else return ele+"";
  }
  return toString+padding(this.second);
}

function Pomodoro(work,rest) {
  //The unit of work and rest time is minutes
  //will convert to seconds for later use
  //three flags appState, reset and currApp
  this.work = work;
  this.rest = rest;
  this.appState = "PAUSED";//PAUSED or PLAY
  this.reset = true;
  this.currApp = "WORK";//"WORK" or "REST"
}

//Following functions increment and decrement
//funcs controlled by + and - buttons
//They will be used by button handlers
Pomodoro.prototype.incWork = function() {
  this.work +=1;
}

Pomodoro.prototype.decWork = function() {
  if (this.work>=2)
    this.work -=1;
}

Pomodoro.prototype.incRest = function() {
  this.rest +=1;
}

Pomodoro.prototype.decRest = function() {
  if (this.rest>=2)
    this.rest -=1;
}

Pomodoro.prototype.appStateChange = function() {
  //handles the play or pause button
  if (this.appState == "PAUSE") this.appState = "PLAY";
  else this.appState = "PAUSE";
}

/*Pomodoro.prototype.resetState = function() {
  this.rest = !(this.rest);
}*/
