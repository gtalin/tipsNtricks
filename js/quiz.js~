var ans = ["everest", "kilimanjaro", "elbrus", "kosciuszko", "denali", "aconcagua", "vinson"];
var submit = document.getElementById("submit");
var form = document.getElementById("form");
var quizContainer = document.getElementById("quiz");
var scoreContainer = document.getElementById("score");
var result = document.getElementById("result");

submit.addEventListener("click", checkResults);
//restart.addEvenetListener("click", showQuiz)


function checkResults(event) {
  var radio = document.body.querySelectorAll("input[type=radio]")
  
  var score=0;
  for (var i=0;i<radio.length;i++) {
    switch (radio[i].name) {
      case "asia":
        if (radio[i].value==ans[0] && radio[i].checked==true)
          score++;
        break;
        
      case "africa":
        if (radio[i].value==ans[1] && radio[i].checked==true)
          score++;
        break;
        
      case "europe":
        if (radio[i].value==ans[2] && radio[i].checked==true)
          score++;
        break;
        
      case "australia":
        if (radio[i].value==ans[3] && radio[i].checked==true)
          score++;
        break;
        
      case "namerica":
        if (radio[i].value==ans[4] && radio[i].checked==true)
          score++;
        break;
        
      case "samerica":
        if (radio[i].value==ans[5] && radio[i].checked==true)
          score++;
        break;
        
      case "antarctica":
        if (radio[i].value==ans[6] && radio[i].checked==true)
          score++;
        break;
                    }
  }
  console.log(score);
  //return false;
  setTimeout(function(){displayScore(score)}, 1000)
  //displayScore(score);
  //form.onsubmit = function() {console.log("form submitted");return displayScore(score)};
}

function displayScore(score) {
  //Display score
  //hide quiz
  //display score
  //attach event listener to restart button
  quizContainer.classList.add("hidden");
  scoreContainer.classList.remove("hidden");
  result.innerHTML = score;
}

//function showQuiz() { }
