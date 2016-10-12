var horseChosen;
var winningHorse;
var betAmount;
var result = document.getElementById("result");
var balance = 100;
var horses = document.querySelectorAll(".horse");
var bet = document.getElementById("bet");
var balanceElem = document.querySelector("#balance em");
var horseButtons = document.querySelectorAll('#horseBoard button');
var resetBtn = document.getElementById("reset");

balanceElem.innerHTML = balance;

for(var i=0;i<horseButtons.length;i++) { // Set the users choice to the variable.
  horseButtons[i].addEventListener('click', function() {
    horseChosen = this.id;
    betAmount = parseFloat(bet.value); // Get the bet amount from the input box and set it to the variable.
  });
}

function race() { // Race the divs according to a random number and their odds added together.

  var id = setInterval(frame, 10);

  for(var i=0;i<horses.length;i++) {
    horses[i].style.left = "";
  }

  function frame() { // This function adds pixels to the left of each div in order to move it across the screen.
    for(var i=0;i<horses.length;i++) {
      var pos = parseFloat(horses[i].style.left || 0) + Math.round(parseFloat(horses[i].dataset.odds) + (Math.random()*2));
      horses[i].style.left = pos + "px";
      if (pos >= 1350) {
        clearInterval(id);
        checkForWinner();
      }
    }
  }
};

function checkForWinner() { // Set the winner to a variable
  var winner = horses[0];
  for(var i=0;i<horses.length;i++) {
    var finalPos = parseFloat(horses[i].style.left);
    if(finalPos > parseFloat(winner.style.left)) winner = horses[i];
  }
  winningHorse = winner;
  showResult();
};

document.getElementById("race").addEventListener("click", race);

function showResult() { // Take the winninghorse variable and check that it is the same as the user chosen horse.
  if (winningHorse.innerHTML === horseChosen) {
    var factor = parseFloat(winningHorse.dataset.factor);
    var winnings = betAmount * factor;
    result.innerHTML = "1st! You won £" + winnings;
    balance += winnings;
    result.style.color = "#99ff99"
  } else {
    result.innerHTML = "You Lost! £" + betAmount;
    balance -= betAmount;
    result.style.color = "red";
  }
  balanceElem.innerHTML = balance;
};

resetBtn.addEventListener("click", function() { // Click to reset the balance.
  balance = 100;
  balanceElem.innerHTML = balance;
});
