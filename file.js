document.addEventListener("DOMContentLoaded", GameLoop, false);

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function GameLoop() {
    clear_screen();
    start();
    fillCircle();
    draw_line(300, 200, 200, 10, "black");
    setInterval(GameLoop, 1000 / 30);
}

function start() {
    ctx.fillStyle = "red";
    ctx.lineWidth = 15;

    ctx.beginPath();
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
    ctx.stroke();
}

function fillCircle() {
    ctx.strokeStyle = 'yellow';
    ctx.lineWidth = 4;
    ctx.fillStyle = "pink";
    
    ctx.beginPath();
    ctx.arc(80, 80, 70, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
}

function draw_line(startX, startY, endX, endY, color) {
    ctx.strokeStyle = color;
    ctx.lineWidth = 4;
    
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
}

function clear_screen() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
