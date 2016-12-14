
//global functions:
var total = 0;
var wins = 0;
var losses = 0;
var randomNumber = Math.floor((Math.random() * 102 ) + 19 );
var diamondVal = Math.floor((Math.random() * 12 ) + 1 );
var rubyVal = Math.floor((Math.random() * 12 ) + 1 );
var emeraldVal = Math.floor((Math.random() * 12 ) + 1 );
var topazVal = Math.floor((Math.random() * 12 ) + 1 );

//This writes the randomNumber to the DOM
$("#random-number").html(randomNumber);

//What happens when you click the crystals?
$("#diamond").click(function() {
  total+=diamondVal;
  $("#total").html("<p>" + total + "</p>");
  result();
});

$("#ruby").click(function() {
  total+=rubyVal;
  $("#total").html("<p>" + total + "</p>");
  result();
});

$("#emerald").click(function() {
  total+=emeraldVal;
  $("#total").html("<p>" + total + "</p>");
  result();
});

$("#topaz").click(function() {
  total+=topazVal;
  $("#total").html("<p>" + total + "</p>");
  result();
});


//What happens when you win or lose?
function result() {
  if (total === randomNumber) {
    wins++;
    $("#status").html("<p>You Win!</p>");
    $("#wins").html("Wins: " + wins);
    reset();
  } else if (total > randomNumber) {
    losses++;
    $("#status").html("<p>You Lose!</p>");
    $("#losses").html("Losses: " + losses);
    reset();
  }
}

function reset() {
  total = 0;
  randomNumber = Math.floor((Math.random() * 102 ) + 19 );
  diamondVal = Math.floor((Math.random() * 12 ) + 1 );
  rubyVal = Math.floor((Math.random() * 12 ) + 1 );
  emeraldVal = Math.floor((Math.random() * 12 ) + 1 );
  topazVal = Math.floor((Math.random() * 12 ) + 1 );
  $("#random-number").html(randomNumber);
  $("#total").html("");
  //$("#status").html("");
}


