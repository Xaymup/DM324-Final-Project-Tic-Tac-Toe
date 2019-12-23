var canvasElementId = 'game';
var canvas = document.getElementById(canvasElementId);
var ctx = canvas.getContext('2d');

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;
const squareLength = canvasWidth / 3;

function drawGrid () {
    ctx.strokeStyle = '#000000';
    ctx.strokeRect(squareLength, 0, squareLength, canvasHeight);
    ctx.strokeRect(0, squareLength, canvasWidth, squareLength);
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 5;
    ctx.strokeRect(0, 0, canvasWidth, canvasHeight);

}

drawGrid();
