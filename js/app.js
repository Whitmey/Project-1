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

for(var i=0;i<horseButtons.length;i++) {
  horseButtons[i].addEventListener('click', function() {
    horseChosen = this.id;
    betAmount = parseFloat(bet.value); // Get the amount of money bet and assign it to the variable
  });
}

resetBtn.addEventListener("click", function() {
  balance = 100;
  balanceElem.innerHTML = balance;
});

function race() {

  var id = setInterval(frame, 10);

  for(var i=0;i<horses.length;i++) {
    horses[i].style.left = "";
  }

  function frame() {
    for(var i=0;i<horses.length;i++) {
      var pos = parseFloat(horses[i].style.left || 0) + Math.round(parseFloat(horses[i].dataset.odds) + (Math.random()*10));
      horses[i].style.left = pos + "px";
      if (pos >= 1350) {
        clearInterval(id);
        checkForWinner();
      }
    }
  }
};

function checkForWinner() {
  var winner = horses[0];
  for(var i=0;i<horses.length;i++) {
    var finalPos = parseFloat(horses[i].style.left);
    if(finalPos > parseFloat(winner.style.left)) winner = horses[i];
  }
  winningHorse = winner;
  showResult();
}

document.getElementById("race").addEventListener("click", race);

function showResult() {
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
