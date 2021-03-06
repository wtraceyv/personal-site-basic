// adapted from a small codepen: https://codepen.io/gnsp/pen/vYBQZJm?css-preprocessor=scss

const canvas = document.getElementById('main-matrix');
const canvasContainer = document.getElementById('matrix-container');
const ctx = canvas.getContext('2d');
const w = canvas.width = document.body.offsetWidth;
const h = canvas.height = document.body.offsetHeight;
const cols = Math.floor(w / 10) + 1;
const ypos = Array(cols).fill(0);

ctx.fillStyle = '#006e62';
ctx.fillRect(0, 0, w, h);

function matrix () {
  ctx.fillStyle = '#0001';
  ctx.fillRect(0, 0, w, h);
  
  ctx.fillStyle = '#d653ef';
  ctx.font = '22pt monospace';
  
  ypos.forEach((y, ind) => {
    const text = String.fromCharCode(Math.random() * 128);
    const x = ind * 20;
    ctx.fillText(text, x, y);
    if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
    else ypos[ind] = y + 20;
  });
}

setInterval(matrix, 50);
