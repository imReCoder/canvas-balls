import { handleResize } from "./resize.js";
import { BallParticle } from "./ballParticle.js";

const canvasContainer = document.querySelector('.canvas-container');
const canvas = document.createElement('canvas');
canvasContainer.appendChild(canvas);

const ctx = canvas.getContext('2d');

handleResize(canvas);

const balls = [];

function createBalls(count,x,y){
    for (let i = 0; i < count; i++) {
        const ball = new BallParticle(x,y);
        balls.push(ball);
    }
}

function drawBalls() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    balls.forEach(ball => {
        ball.update();

        ctx.beginPath();
        ctx.arc(Math.round(ball.x), Math.round(ball.y), ball.r, 0, Math.PI * 2);
        ctx.fillStyle = ball.color;
        ctx.fill();
    
        ctx.strokeStyle = ball.border;
        ctx.lineWidth = ball.borderWidth;
        ctx.stroke();
       
    });
}

function animate(){
    drawBalls();
    requestAnimationFrame(animate);
}

canvas.addEventListener('click', (e) => {
    createBalls(5, e.clientX, e.clientY);
})

createBalls(5);
animate()

