var canvasElementId = 'game';
var canvas = document.getElementById(canvasElementId);
var ctx = canvas.getContext('2d');

ctx.font = '150px Indie Flower';

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;
const squareLength = canvasWidth / 3;

var turn = 0;

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

function drawShit (xCordinate, yCordinate) {
  if (turn == 0){
    ctx.fillText("X", xCordinate + 10, yCordinate + squareLength - 10, squareLength);
    turn = 1;
  }
  else {
    ctx.fillText("O", xCordinate + 10, yCordinate + squareLength - 10, squareLength);
    turn = 0;
  }
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
  takeTurn();
});
