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
  this.appState = "PAUSE";//PAUSED or PLAY
  this.reset = true;//reset is for initial state
  //and when rest or work values change
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

function init() {
  //create pomodoro object
  var work=1, play=1;
  var pom = new Pomodoro(work,play);

  //variables that need to be updated
  var heading = document.getElementById("heading");
  var tomato = document.getElementById("tomatoText");
  var worktime = document.getElementById('worktime');
  var resttime = document.getElementById('resttime');

  //Set the values on pomodoro
  //We start with work time thus update accordingly
  tomato.innerHTML = work;
  worktime.innerHTML = "Work: "+pom.work;
  resttime.innerHTML = "Rest: "+pom.rest;
  heading.innerHTML = pom.currApp[0]+pom.currApp
  .slice(1).toLowerCase();
  //heading will change as app switches in setInterval
  //Ideally we should use createTextNode and then set nodeValue

  //Variables on which eventListeners to be attached
  var appState = document.getElementById('appState');
  var incWork = document.getElementById('incrementWork');
  var decWork = document.getElementById('decrementWork');
  var incRest = document.getElementById('incrementRest');
  var decRest = document.getElementById('decrementRest');

  console.log(incWork, decWork, incRest, decRest);

  //add event listeners
  appState.addEventListener("click", appStateHandler);
  addEventListeners();//to add listeners for time inc and dec

  function timeHandler(e) {
    //Based on e.target.id, we decide what to do
    console.log(e.target.id);
    //reset pomodoro when inc or dec is made to current app
    switch (e.target.id) {
      case "incrementWork":
        pom.incWork();
        worktime.innerHTML = "Work: "+pom.work;
        if (pom.currApp==="WORK")
          { pom.reset = true;
            tomato.innerHTML = pom.work;
          }
        break;
      case "decrementWork":
        pom.decWork();
        worktime.innerHTML = "Work: "+pom.work;
        if (pom.currApp==="WORK")
          { pom.reset = true;
            tomato.innerHTML = pom.work;
          }
        break;
      case "incrementRest":
        pom.incRest();
        resttime.innerHTML = "Rest: "+pom.rest;
        if (pom.currApp==="REST")
          { pom.reset = true;
            tomato.innerHTML = pom.rest;
          }
        break;
      case "decrementRest":
        pom.decRest();
        resttime.innerHTML = "Rest: "+pom.rest;
        if (pom.currApp==="REST")
          { pom.reset = true;
            tomato.innerHTML = pom.rest;
          }
        break;
      default:
        console.log("No match");
    }
    /*if (pom.currApp == "WORK")
      tomato.innerHTML = pom.work;
    else tomato.innerHTML = pom.rest;*/
    //pom.reset = true;
  }

  var intervalId;//to clearInterval
  //if var inside function where it's called (i.e. below)
  //doesn't get cleared
  // if we pause from within setInterval
  //Only time will be paused setInterval will be runniin
  var time;
  //same for time. If it is inside appStateHandler, it won't
  //persist. because each click will cause fresh time created.
  function appStateHandler() {
    //handles the pause and play of app
    //based on pom.appState and pom.reset
    //we setInterval or clearInterval

    console.log("in appStateHandler", pom.appState);
    if (pom.reset == true) {
      pom.reset = false;
      pom.appState = "PLAY";
      removeEventListeners();
      if (pom.currApp=="WORK")
        time = new Time(pom.work * 60);
      else
        time = new Time(pom.rest * 60);
      console.log(time);
      intervalId = setInterval(function () {
        //time = decrement(time);
        console.log(time)
        time=decrement(time);
      }, 1000);
    }
    else {
      console.log(pom.appState);
    }

  }

  function addEventListeners() {
    incWork.addEventListener("click", timeHandler);
    decWork.addEventListener("click", timeHandler);
    incRest.addEventListener("click", timeHandler);
    decRest.addEventListener("click", timeHandler);
    //Enable buttons
  }

  function removeEventListeners() {
    incWork.removeEventListener("click", timeHandler);
    decWork.removeEventListener("click", timeHandler);
    incRest.removeEventListener("click", timeHandler);
    decRest.removeEventListener("click", timeHandler);
    //PLus disable the buttons
  }

  //setInterval(decrement, 1000);this will
  //be inside setHandler and will have a
  //bunch of conditions. But before that we'll write
  //decrement which will be outside

}

init();

//var work=1, play=2;
//var pomTime = new PomodoroTime(work,play);
//displayTime(pomTime)
