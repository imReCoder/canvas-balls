const ballSolidColors = [
    '#ff0000',
    '#00ff00',
    '#0000ff',
    '#ffff00',
    '#ff00ff',
    '#00ffff',
    '#800080',
    '#008080',
    '#808000'
];


export class BallParticle{
    constructor(x,y){
        this.r =25;
        this.x = x || Math.random() * window.innerWidth + this.r;
        this.y = y || 0;
        this.color = ballSolidColors[Math.floor(Math.random() * ballSolidColors.length)];
        this.border = 'black';
        this.borderWidth = 2;
       this.vx = Math.random() * 4 - 2; // Random horizontal speed
       this.vy = Math.random() * 4 + 2; // Random vertical speed
       this.gravity = 0.5;
       this.friction = 0.98;
    }

    update() {
        // Gravity
        this.vy += this.gravity;
    
        // Move
        this.x += this.vx;
        this.y += this.vy;
    
        // Bounce on floor and walls
        if (this.x - this.r < 0 || this.x + this.r > window.innerWidth) {
          this.vx *= -1* this.friction;
        }

        if (this.y + this.r > window.innerHeight) {
          this.y = window.innerHeight - this.r;
          this.vy *= -1 * this.friction;
        }
    }

    
}