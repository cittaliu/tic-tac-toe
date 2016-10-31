
function updateMsg(msg){
  $('.msg').html(msg);
}
function player(num, mark){
  this.num = num;
  this.mark = mark;
  this.record = [];
}
function switchPlayer(){
  curPlayer == player1 ? player2:player1;
  updateMsg("Current Player: " + curPlayer);
}

function checkWin(testArr,dataComb){
  var testSort = testArr.sort();
  //loop over all winning combinations
  for(var i=0, length1=dataComb.length; i<length1; i++){
    var matchCount = 0;
    for(var j=0, length2=dataComb[i].length; j<length2; j++){
      if(dataComb[i]!==-1){ matchcount++};
    }
    if(matchCount>=3){
      return true;
    }
  }
  return false;
}

function startGame(){
  var player1 = new player(1,'X');
  var player2 = new player(2,'O');
  var curPlayer = player1;
  var winComb = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  var count = 0;

  $('.box').on('click', function(){
    if($(this).text()=''){
      $(this).text(curPlayer.mark);
      curPlayer.record.push($(this).attr('id'));
      count++;
      //when the first player starts to click the third time;
      //There will be a chance to win ;
      //5 = 3(number of clicks from player1)+2(number of clicks from player2);
      if(count >8){
        alert("Game over! No winner!");
        resetGame();
      }else if(count>=5) && checkWin(curPlayer.record, winComb)){
        alert("The winner is: Player " + curPlayer.num +"!");
        resetGame();
      }else{
        switchPlayer();
      }
    }else{
      alert("Please select a blank spot!");
    }
  });

  //  $('.reset').on('click', function(){
  //    for(var i=0; i<=8;i++){
  //      $('.box').text()='';
  //      count=0;
  //      curPlayer=player1;
  //      player1.record=[];
  //      player2.record=[];
  //    }
  //  });
}

// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  $('#play').on('click', function(){
    startGame();
  });

});
