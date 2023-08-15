// variables and functions for declaring and drawing scenery objects

// Declare scenery variables
let sunriseSunset;
let stars;
let grass;
let mud;
let trees;
let signs;
let clouds;
let mountains;
let waterfallPos;
let waterfalls;
let collectables;
let coins;
let coinEmit;
let enemies;
let flagpole;
let platforms;

// function to draw grass
function drawGrass()
{
    for (const g of grass) 
    {
        // check if gameChar is on screen at same time as g
        if (dist(gameChar_world_x, gameChar_y, g.x, g.y) < width)
        {
            noStroke();
            fill(g.colour);
            ellipse(g.x, g.y, g.size);
        }
    }
}

// function to draw mud
function drawMud()
{
   for (const m of mud) 
    {
        // check if gameChar is on screen at same time as m
        if (dist(gameChar_world_x, gameChar_y, m.x, m.y) < width)
        {
            noStroke();
            fill(m.colour);
            ellipse(m.x, m.y, m.size);
        }
    }
}



// Function to draw cloud objects.
function drawClouds()
{
    // iterate over clouds array and draw clouds
    for (const c of clouds) 
    {
        // check if gameChar is on screen at same time as c
        if (dist(gameChar_world_x, gameChar_y, c.x_pos, c.y_pos) < width)
        {
            noStroke();
            fill(255);
            ellipse(c.x_pos, c.y_pos, c.size);
            ellipse(c.x_pos-c.size/2, 
                    c.y_pos, c.size/2);
            ellipse(c.x_pos+c.size/2, 
                    c.y_pos, c.size/2);
        }
    }

}

// Function to draw mountains objects.

function drawMountains(startX, startY, numMountains)
{
  for (let i = 0; i < numMountains; i++) 
  {
    fill(142 + i*10, 137 + i*10, 145 + i*10);
    let space = 20 + i*60;
    triangle(startX + space, startY + i*8,
            startX-120 + space, floorPos_y,
            startX+120 + space, floorPos_y);
  }
}


// Function to draw trees objects.
function drawTrees()
{
    // iterate over trees array and draw trees
    for (const t of trees)
    {
        // tree trunk
        fill(94,62,31);
        rect(t.x_pos, t.y_pos, 
           40, floorPos_y - t.y_pos);
        // main circle
        fill(30,77,43);
        ellipse(t.x_pos+20, t.y_pos, 150);
        // leaves
        fill(70,179,100);
        ellipse(t.x_pos-40, t.y_pos+10, 10, 12);
        ellipse(t.x_pos-30, t.y_pos-30, 10, 12);
        ellipse(t.x_pos-10, t.y_pos+30, 10, 12);
        ellipse(t.x_pos, t.y_pos-25, 10, 12);
        ellipse(t.x_pos+30, t.y_pos, 10, 12);
        ellipse(t.x_pos+30, t.y_pos-50, 10, 12);
        ellipse(t.x_pos+40, t.y_pos+40, 10, 12);
        ellipse(t.x_pos+60, t.y_pos-25, 10, 12);
        ellipse(t.x_pos+70, t.y_pos, 10, 12);
    }
}

// function to render 'this way' signs

function drawSigns()
{
    for (const s of signs)
    {
        // sign pole
        fill(193,154,107);
        ellipse(s.x_pos, s.y_pos-120, 10);
        rect(s.x_pos-5, s.y_pos-120, 10, 120);
        
        // sign board
        //back
        rect(s.x_pos-60, s.y_pos-115, 120, 70);
        // wooden slats
        stroke(0, 120);
        strokeWeight(1);
        for (let j = 0; j < 60; j += 10)
        {
            line(s.x_pos-60, s.y_pos-105 + j, s.x_pos+60, s.y_pos-105 + j);
        }
        
        // notice
        noStroke();
        fill(255,203,141);
        rect(s.x_pos-50, s.y_pos-110, 100, 60)
        // paper tears in the notice
        fill(0, 135);
        triangle(s.x_pos-50, s.y_pos-80,
              s.x_pos-35, s.y_pos-75,
              s.x_pos-50, s.y_pos-70);
        triangle(s.x_pos+50, s.y_pos-100,
              s.x_pos+35, s.y_pos-97.5,
              s.x_pos+50, s.y_pos-95);
        // sign text
        textFont('Georgia', 18);
        text("This way!", s.x_pos-35, s.y_pos-80);
        // 'this way' arrow
        strokeCap(ROUND);
        strokeWeight(4);
        stroke(0, 180);
        line(s.x_pos-35, s.y_pos-65, s.x_pos+35, s.y_pos-65);
        strokeCap(SQUARE); // reset the strokeCap
        triangle(s.x_pos+35, s.y_pos-65,
              s.x_pos+25, s.y_pos-60,
              s.x_pos+25, s.y_pos-70);

        // three blades of grass
        noStroke();
        //left
        fill(0,94,53);
        beginShape();
        vertex(s.x_pos-10, s.y_pos);
        vertex(s.x_pos-15, s.y_pos-25);
        vertex(s.x_pos-20, s.y_pos-15);
        vertex(s.x_pos-18, s.y_pos-30);
        vertex(s.x_pos-5, s.y_pos);
        vertex(s.x_pos-5, s.y_pos);
        endShape();
        //middle
        fill(0,107,60);
        beginShape();
        vertex(s.x_pos-4, s.y_pos);
        vertex(s.x_pos-2, s.y_pos-30);
        vertex(s.x_pos, s.y_pos-25);
        vertex(s.x_pos+2, s.y_pos-30);
        vertex(s.x_pos+3, s.y_pos);
        endShape();
        //right
        fill(23,130,59);
        beginShape();
        vertex(s.x_pos+5, s.y_pos);
        vertex(s.x_pos+5, s.y_pos-30);
        vertex(s.x_pos+15, s.y_pos-20);
        vertex(s.x_pos+10, s.y_pos-40);
        vertex(s.x_pos+5, s.y_pos-35);
        vertex(s.x_pos+10, s.y_pos);
        endShape();
    }
}

// sunriseSunset constructor

function SunriseSunset()
{
    this.draw = function(sunPos_x, sunPos_y, sunSize, 
                        moonPos_x, moonSize)
    {
        // draw the sun
        push();
        translate(sunPos_x, sunPos_y);
        noStroke();
        fill(255,69,0);
        // create orange triangles
        for (let i = 0; i < 36; i++) 
        {
            push();
            rotate(TWO_PI * i / 36);
            triangle(sunSize/2.2, sunSize/17.7, 
                   sunSize/2, -sunSize/13.25, 
                   sunSize/1.7, sunSize/17.3);
            pop();
        }
        // draw sun body  
        fill(255, 180, 0);
        ellipse(0,0,sunSize);
        pop();
        // sunset
        fill(255,20,60,map(gameChar_world_x, 1000, 2000, 0, 100));
        rect(0,0,width, height);
        fill(0,0,0,map(gameChar_world_x, 1000, 2000, 0, 80));
        rect(0,0,width, height);

        // draw moon
        let moonPos_y = constrain(height-sunPos_y+sunSize, 100, height);
        fill(255,248,231, 350-moonPos_y);
        noStroke();
        ellipse(moonPos_x, moonPos_y, moonSize);

        // draw stars
        fill(255,248,231, 300-moonPos_y);
        for (const s of stars)
        {
            ellipse(s.x, s.y, random(2,4));
        }
    }
}

// ripple & waterfall constructors
class Ripple
{
    constructor(x_pos, y_pos, speed, size, colour)
    {
        this.x_pos = x_pos;
        this.y_pos = y_pos;
        this.speed = speed;
        this.size = size;
        this.colour = colour;
    }

    // function to make the ripples flow down the waterfall
    drawRipple()
    {
        stroke(this.colour);
        strokeWeight(2);
        line(this.x_pos, this.y_pos, this.x_pos, this.y_pos+this.size);
    }
    
    updateRipple()
    {
        this.y_pos += this.speed;
    }
}

class Waterfall
{
    constructor(x_pos, y_pos, width, speed, size, colour, ripples=[])
    {
        this.x_pos = x_pos;
        this.y_pos = y_pos;
        this.width = width;
        this.speed = speed;
        this.size = size;
        this.colour = colour;
        this.ripples = ripples;
    }

    addRipple()
    {
        let r = new Ripple(random(this.x_pos+5, this.x_pos+this.width-5),
                          this.y_pos+random(0,5),
                          random(0.5, 1.5), random(8, 12), 
                          color(random(150, 255), 255, 255));
        return r;
    }

    startRipples()
    {
        for(let i = this.x_pos; i < this.x_pos+this.width; i+=20)
        {
            this.ripples.push(this.addRipple());
        }
    }

    updateWaterfall()
    {
        // draw waterfall
        for(let i = floorPos_y; i < height; i++)
        {
            noStroke();
            fill(4,184,196);
            rect(this.x_pos, floorPos_y, 
                 this.width, height-floorPos_y);
        }
        // draw bubbles
        for(let i = this.x_pos; i < this.x_pos+this.width; i+=5)
        {
            fill(255);
            noStroke();
            ellipse(i, height - random(2,5), random(7,12));
        }
        //iterate through ripples and draw to screen
        let deadRipples = 0;
        for(let i = this.ripples.length-1; i >= 0; i--)
        {
            this.ripples[i].drawRipple();
            this.ripples[i].updateRipple();
            
            // remove 'dead' ripples
            if(this.ripples[i].y_pos > height)
            {
                this.ripples.splice(i, 1);
                deadRipples++;
            }
        }
        // replace dead ripples
        if(deadRipples > 0)
        {
            for(let i = 0; i < deadRipples; i++)
            {
                this.ripples.push(this.addRipple());
            }
        }
    }
}

function renderFlagpole()
{   
    push();
    
    // draw the flagpole
    strokeWeight(8);
    stroke(110,127,128);
    line(flagpole.x_pos, floorPos_y, 
         flagpole.x_pos, floorPos_y - 250);
    // ball at the top
    ellipse(flagpole.x_pos, floorPos_y-255, 5);
    noStroke();
    // draw the flag
    if (flagpole.isReached)
    {
        // when the gameChar reached the flagpole, raise the flag
        if (flagpole.flagPos_y > floorPos_y - 250)
        {
            flagpole.drawFlag();
            flagpole.flagPos_y-= 2;
        }
        flagpole.drawFlag();
    } else {
      flagpole.drawFlag();
    }
    
    pop();
}
