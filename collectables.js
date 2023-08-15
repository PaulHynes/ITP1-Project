// Function to draw collectable objects.

function drawCollectable(t_collectable)
{
    if(!t_collectable.isFound)
    {
        t_collectable.draw();
        t_collectable.update();
    }
    // check if there is currently an active coin emitter
    if(coinEmit)
    {
      coinEmit.updateParticles();
    }
}

// Coin class
class Coin
{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
        this.currentY = y;
        this.range = 20;
        this.isFound = false;
        this.size = 30;
        this.speed = 0.2;
        this.shadowPos_y = floorPos_y + 10;
        this.shadowX = this.size * 0.3;
        this.shadowY = this.size * 0.05;
    }
  
    draw()
    {    
        // draw shadow
        fill(0,17,26,120);
        noStroke();
        ellipse(this.x, this.shadowPos_y,
                this.shadowX, this.shadowY);
        // draw coin
        stroke(225,203,0);
        strokeWeight(2);
        fill(255,213,0);
        ellipse(this.x, this.currentY, this.size*0.9,this.size);
        // inner rectangle
        noFill();
        fill(225,203,0);
        stroke(230,191,0);
        rect(this.x- this.size/8, this.currentY-this.size/3, this.size*0.20, this.size*0.6);
    }
    
    // make the coin move and the shadow grow and shrink
    update()
    {
        this.currentY += this.speed;
        this.shadowX += this.speed;
        this.shadowY += this.speed;
        if (this.currentY > this.y + this.range)
        {
            this.speed = -this.speed;        
        }
        else if (this.currentY < this.y)
        {
            this.speed = -this.speed;        
        }
    }
}

// Coin particle function
class CoinParticle
{
    constructor(x, y, xSpeed, ySpeed, size)
    {
        this.x = x;
        this.y = y;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        this.size = size;
        this.age = 0;
    }
  
    draw()
    {
        stroke(225,203,0);
        fill(255,213,0);
        ellipse(this.x, this.y, this.size);
    }
  
    update()
    {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        this.age++;
    }
}

// Coin Particle Emitter
class CoinEmitter
{
    constructor(x, y, xSpeed, ySpeed, size)
    {
        this.x = x;
        this.y = y;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        this.size = size;
        this.particles = [];
        this.startParticles = 0;
        this.lifetime = 0;
    }
  
    startEmitter(startParticles, lifetime)
    {
    this.startParticles = startParticles;
    this.lifetime = lifetime;

    // start emitter with initial particles
    for(var i = 0; i < this.startParticles; i++)
    {
        var p = new CoinParticle(random(this.x-10, this.x+10), 
                             random(this.y-10, this.y+10),
                             random(this.xSpeed-3, this.xSpeed+3), 
                             random(this.ySpeed-3, this.ySpeed+3), 
                             this.size);
        this.particles.push(p);
    }
    }

    updateParticles()
    {
        //iterate through particles and draw them to the screen
        for(var i = this.particles.length-1; i >= 0; i--)
        {
            this.particles[i].draw();
            this.particles[i].update();

            if (this.particles[i].age > this.lifetime)
            {
                this.particles.splice(i, 1);
            }
        }
    }
}

// Function to check character has collected an item.

function checkCollectable(t_collectable)
{
    // check distance and if coin hasn't been found
    if (dist(gameChar_world_x, gameChar_y-10, 
             t_collectable.x, t_collectable.y) < 50 &&
       !t_collectable.isFound)
    {
        // set isFound = true to stop drawing the coin
        t_collectable.isFound = true;
        game_score++; // increment game score
        
        // if all coins collected, make coin emitter and play special sound
        if (game_score == 10)
        {
            allCoinsSound.play();
            // trigger the coin particles
            coinEmit = new CoinEmitter(t_collectable.x, 
                                   t_collectable.y, 
                                   0, 1, 8);
            coinEmit.startEmitter(80, 150);
        } 
        else 
        {
            collectCoinSound.play();
        }
    }
}
