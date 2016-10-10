
// These actions happen when a player clicks on a horse
var horseChosen;
var betAmount;
var balance = 1000;
document.getElementById("balance").innerHTML = balance;


document.getElementById("horse1").addEventListener('click', function() {
  horseChosen = "horse1";
  betAmount = document.getElementById("bet").value; // Get the amount of money bet and assign it the variable
  random(); // Create a random number
  findWinner(); // Randomly pick a winner
  result(); // Decide whether the user chose the correct horse.
});
document.getElementById("horse2").addEventListener('click', function() {
  horseChosen = "horse2";
  betAmount = document.getElementById("bet").value;
  random();
  findWinner();
  result();
});
document.getElementById("horse3").addEventListener('click', function() {
  horseChosen = "horse3";
  betAmount = document.getElementById("bet").value;
  random();
  findWinner();
  result();
});
document.getElementById("horse4").addEventListener('click', function() {
  horseChosen = "horse4";
  betAmount = document.getElementById("bet").value;
  random();
  findWinner();
  result();
});
document.getElementById("horse5").addEventListener('click', function() {
  horseChosen = "horse5";
  betAmount = document.getElementById("bet").value;
  random();
  findWinner();
  result();
});

document.getElementById("nextRace").addEventListener("click", function() {
  assignOdds();
});
document.getElementById("reset").addEventListener("click", function() {
  balance = 1000;
  document.getElementById("balance").innerHTML = balance;
});


var randomNumber;
var random = function() {
  randomNumber = Math.random();
}


var oddsGenerator = function() {
  return Math.floor((Math.random() * 10) + 1);
};


var winner;
var findWinner = function() {
  if (randomNumber < 0.2) {
    winner = "horse1";
  }
  else if (randomNumber > 0.2 && randomNumber < 0.4) {
    winner = "horse2";
  }
  else if (randomNumber > 0.4 && randomNumber < 0.6) {
    winner = "horse3";
  }
  else if (randomNumber > 0.6 && randomNumber < 0.8) {
    winner = "horse4";
  }
  else {
    winner = "horse5";
  }
};


var result = function() {
  if (winner === horseChosen) {
      if (horseChosen === "horse1") {
        var oddsN = document.getElementById("odds1").innerHTML;
        document.getElementById("result").innerHTML = "Your horse came first and you won" + (betAmount * oddsN);
        balance = parseInt(balance) + parseInt(betAmount * oddsN);
        document.getElementById("balance").innerHTML = balance;//add the bet amount to the balance.
      }
      else if (horseChosen === "horse2") {
        var oddsN = document.getElementById("odds2").innerHTML;
        document.getElementById("result").innerHTML = "Your horse came first and you won" + (betAmount * oddsN);
        balance = parseInt(balance) + parseInt(betAmount * oddsN);
        document.getElementById("balance").innerHTML = balance;//add the bet amount to the balance.
      }
      else if (horseChosen === "horse3") {
        var oddsN = document.getElementById("odds3").innerHTML;
        document.getElementById("result").innerHTML = "Your horse came first and you won" + (betAmount * oddsN);
        balance = parseInt(balance) + parseInt(betAmount * oddsN);
        document.getElementById("balance").innerHTML = balance;
      }
      else if (horseChosen === "horse4") {
        var oddsN = document.getElementById("odds4").innerHTML;
        document.getElementById("result").innerHTML = "Your horse came first and you won" + (betAmount * oddsN);
        balance = parseInt(balance) + parseInt(betAmount * oddsN);
        document.getElementById("balance").innerHTML = balance;
      }
      else if (horseChosen === "horse5") {
        var oddsN = document.getElementById("odds5").innerHTML;
        document.getElementById("result").innerHTML = "Your horse came first and you won" + (betAmount * oddsN);
        balance = parseInt(balance) + parseInt(betAmount * oddsN);
        document.getElementById("balance").innerHTML = balance;
    }
  }
  else if (winner !== horseChosen) {
    document.getElementById("result").innerHTML = "Your horse came last and you lost" + betAmount;
    balance = parseInt(balance) - parseInt(betAmount);
    console.log(balance);
    document.getElementById("balance").innerHTML = balance;//subtract the bet amount from the balance.
  }
};

var assignOdds = function() {
  document.getElementById("odds1").innerHTML = oddsGenerator();
  document.getElementById("odds2").innerHTML = oddsGenerator();
  document.getElementById("odds3").innerHTML = oddsGenerator();
  document.getElementById("odds4").innerHTML = oddsGenerator();
  document.getElementById("odds5").innerHTML = oddsGenerator();
};
assignOdds();

// write a program or adapt the find winner function so that the odds change according to how high the number is.
// or rewrite the chosen winner program to incorporate the odds variation.
