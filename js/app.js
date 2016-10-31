function updateMsg(msg){
  $('.msg').text(msg);
}

function player(num, mark){
  this.num = num;
  this.mark = mark;
  this.record = [];
}

function startGame(){
  var player1 = new player(1,'X');
  var player2 = new player(2,'O');
  var curPlayer = player1;
  var winComb = [['0','1','2'],['3','4','5'],['6','7','8'],['0','3','6'],['1','4','7'],['2','5','8'],['0','4','8'],['2','4','6']];
  var count = 0;

  function switchPlayer(){
    curPlayer = ((curPlayer == player1) ? player2:player1);
    updateMsg("Current Player: " + curPlayer.num);
  }

  function checkWin(testArr,dataComb){
    //loop over all winning combinations
    for(var i=0; i<dataComb.length; i++){
      var matchCount = 0;
      for(var j=0; j<dataComb[i].length; j++){
        if(testArr.indexOf(dataComb[i][j])>-1){
          matchCount++;
        }
      }
      if(matchCount>=3){
        return true;
      }
    }
    return false;
  }

  $('.box').on('click', function(){
    if($(this).text()==''){
      $(this).text(curPlayer.mark);
      curPlayer.record.push($(this).attr('id'));
      console.log(curPlayer.record);
      count++;
      //when the first player starts to click the third time;
      //There will be a chance to win ;
      //5 = 3(number of clicks from player1)+2(number of clicks from player2);
      if(count >8){
         alert("Game over! No winner!");
      //   //resetGame();
      }else if(checkWin(curPlayer.record, winComb)){
        alert("The winner is: Player " + curPlayer.num +"!");
      }else{
         switchPlayer();
         //  resetGame();
      }
    }else{
       alert("Please select a blank spot!");
    }
  });

  $('.reset').on('click', function(){
    location.reload();
  });
}
$(document).ready(function() {
//   // all code to manipulate the DOM
//   // goes inside this function
  startGame();
});
