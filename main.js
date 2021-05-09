canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
// color = "red";
ctx.beginPath();
ctx.lineWidth = 5;
ctx.strokeStyle = "darkblue";
ctx.arc(200, 200, 60, 0, 2 * Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle = "black";
ctx.arc(350, 200, 60, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.arc(500, 200, 60, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "#F7B233";
ctx.arc(275, 260, 60, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "darkgreen";
ctx.arc(425, 260, 60, 0, 2 * Math.PI);
ctx.stroke();