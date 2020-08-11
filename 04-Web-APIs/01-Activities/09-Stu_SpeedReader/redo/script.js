var poem = "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";
var poemSplit = poem.split(" ");
var secondLeft = 5;
var mainBody = document.querySelector("#main");
var readIntervalSec = prompt("How many millionsecond would you need between the words?")
var i = 0;

function prepareRead() {
  // Create the countdown timer.
  var timerInterval = setInterval(function(){
    mainBody.textContent = secondLeft + "seconds to start"
    secondLeft--;

    if (secondLeft === 0){
      clearInterval(timerInterval);
      speedRead();
    }
  },1000);
}

function speedRead() {
  // Print words to the screen one at a time.
  mainBody.textContent = "";
  var readInterval = setInterval(function(){
    if (poemSplit[i] === undefined){
    clearInterval(readInterval);
    }
    else {
      mainBody.textContent = poemSplit[i];
      i++;
    }
  }, readIntervalSec);
}

prepareRead();