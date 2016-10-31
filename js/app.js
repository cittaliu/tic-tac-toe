function updateMsg(msg){
  $('.msg').html(msg);
}
function player(mark){
  this.mark = mark;
  this.clickRecord = [];
}
function switchPlayer(){
  curPlayer == player1 ? player2:player1;
  updateMsg("Current Player: " + curPlayer);
}
function startGame(){
  var player1 = new player('X');
  var player2 = new player('O');
  var curPlayer = player1;
  var winComb = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  var count = 0;

  $('.box').on('click', function(){
    if($(this).text()=''){
      $(this).text(curPlayer.mark);
      curPlayer.clickRecord.push($(this).attr('id'));
      switchPlayer();
    }
  });

}

// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function





});
