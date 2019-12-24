var canvasElementId = 'game';
var canvas = document.getElementById(canvasElementId);
var ctx = canvas.getContext('2d');

ctx.font = '150px Indie Flower';

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;
const squareLength = canvasWidth / 3;

var turn = Math.round(Math.random());
var step = 0;

var xPlaces = [];
var oPlaces = [];

var gameState = 1;
var winningConditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

function drawGrid () {
    ctx.strokeStyle = '#000000';
    ctx.strokeRect(squareLength, 0, squareLength, canvasHeight);
    ctx.strokeRect(0, squareLength, canvasWidth, squareLength);
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 5;
    ctx.strokeRect(0, 0, canvasWidth, canvasHeight);
}

function addPiece (mouse) {
  var xCordinate;
  var yCordinate;
  for (var x = 0;x < 3;x++) {
    for (var y = 0;y < 3;y++) {
      xCordinate = x * squareLength;
      yCordinate = y * squareLength;

      if (mouse.x >= xCordinate && mouse.x <= xCordinate + squareLength &&
          mouse.y >= yCordinate && mouse.y <= yCordinate + squareLength){
            drawShit(xCordinate, yCordinate);
          }
        }
    }
}

function getCol(matrix, col){
   var column = [];
   for(var i=0; i<3; i++){
     column.push(matrix[col][i]);
   }
   return column;
}

function checkWin(){
  for (var i = 0;i<8;i++) {
    var s = getCol(winningConditions ,i)
    if (xPlaces.includes(s[0]) && xPlaces.includes(s[1]) && xPlaces.includes(s[2])){
      fancyPrompt("X wins!");
      gameState = "0";
    }
    if (oPlaces.includes(s[0]) && oPlaces.includes(s[1]) && oPlaces.includes(s[2])){
      fancyPrompt("O wins!");
      gameState = "0";
    }
  }
  if (step == 9){
    fancyPrompt("It's a tie!");
    gameState = "0";
  }
}

function drawShit (xCordinate, yCordinate) {
  position = (yCordinate/100 * 3 + xCordinate/100);
  if (!(xPlaces+oPlaces).includes(position) && gameState != 0){
      step = step + 1;
  if (turn == 0){
    ctx.fillText("X", xCordinate + 10, yCordinate + squareLength - 10, squareLength);
    turn = 1;
    xPlaces.push(position);
  }
  else {
    ctx.fillText("O", xCordinate + 10, yCordinate + squareLength - 10, squareLength);
    turn = 0;
    oPlaces.push(position);
  }
  checkWin();
  }
}

function fancyPrompt(message) {
  const div = document.createElement('div');
  div.className = 'notif';
  div.innerHTML = "<p>"+message+' <a href="#" onclick="reloadBody();">rematch?</a></p>';
  document.getElementById('main').appendChild(div);
}

function reloadBody(){
location.reload(true);
}
function getCanvasMousePosition (event) {
  var rect = canvas.getBoundingClientRect();

  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  }
}
drawGrid();
canvas.addEventListener('mouseup', function (event) {
  var canvasMousePosition = getCanvasMousePosition(event);
  addPiece(canvasMousePosition);
});
