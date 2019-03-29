$(document).ready(function() {
  var randomNumber = Math.floor(Math.random() * 50 + 50);

  $("#randomNumber").text(randomNumber);

  var gem1 = 10;
  var gem2 = 7;
  var gem3 = 5;
  var gem4 = 1;
  var userTotal = 0;
  var win = 0;
  var lose = 0;

  $("#win").text(win);
  $("#lose").text(lose);
  $("#userTotal").text(userTotal);

  function reset() {
      var randomNumber = Math.floor(Math.random()* 50 + 50);
      $("#randomNumber").text(randomNumber);
      var userTotal = 0;
      $("#userTotal").text(userTotal);
  }

  function winner() {
     alert('YOU WON!');
     win++;
     $("#win").text(win);
     reset();
  }

  function loser() {
      alert('YOU LOSE!');
      lose++;
      $("#lose").text(lose);
      reset();
  }

  $(".crystal1").on('click', function(){
    userTotal = userTotal + gem1;
    $('#userTotal').text(userTotal);
    if (userTotal == randomNumber) {
        winner();
    } else if(userTotal > randomNumber){
        loser();
    }
  });

  $(".crystal2").on('click', function(){
    userTotal = userTotal + gem2;
    $('#userTotal').text(userTotal);
    if (userTotal == randomNumber) {
        winner();
    } else if(userTotal > randomNumber){
        loser();
    }
  });

  $(".crystal3").on('click', function(){
    userTotal = userTotal + gem3;
    $('#userTotal').text(userTotal);
    if (userTotal == randomNumber) {
        winner();
    } else if(userTotal > randomNumber){
        loser();
    }
  });

  $(".crystal4").on('click', function(){
    userTotal = userTotal + gem4;
    $('#userTotal').text(userTotal);
    if (userTotal == randomNumber) {
        winner();
    } else if(userTotal > randomNumber){
        loser();
    }
  });



});
