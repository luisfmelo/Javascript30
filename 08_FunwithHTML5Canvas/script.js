const canvas =  document.querySelector('#draw');
const ctx = canvas.getContext('2d'); // where we do all the drawing

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = "#BADA55";
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY]
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

function draw(e){
  if ( !isDrawing ) return;

  console.log(e);
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

  ctx.beginPath();
  // start from
  ctx.moveTo(lastX, lastY);
  // go to
  ctx.lineTo(e.offsetX, e.offsetY);

  ctx.stroke();
  // lastX = e.offsetX; && lastY = e.offsetY;
  [lastX, lastY] = [e.offsetX, e.offsetY];
  hue ++;

  if (ctx.lineWidth >= 100 || ctx.lineWidth <=1) direction = !direction;

// when line width is off the interval [1 .. 100] flip direction (grow/degrow)
  direction ? ctx.lineWidth++ : ctx.lineWidth--;
}
