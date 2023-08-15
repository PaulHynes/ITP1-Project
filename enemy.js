// class for Enemy objects

class Enemy
{
    constructor(x, y, range)
    {
        this.x = x;
        this.y = y;
        this.range = range;

        this.currentX = x;
        this.inc = 1;  
    }
    
    // update the enemy's poisition
    update()
    {
        // only update if the flagpole hasn't been reached
        if (!flagpole.isReached)
        {
            this.currentX += this.inc;
        }
        
        // change direction when gameChar reaches edge of its range
        if(this.currentX >= this.x + this.range)
        {
            this.inc = -1;
        }
        else if (this.currentX <= this.x)
        {
            this.inc = 1;
        }
    }

    draw()
    {
        this.update();
        // if level complete, enemy facing forward
        if(flagpole.isReached)
        {
            stroke(0);
            strokeWeight(1);
            // legs
            fill(204,0,0);
            rect(this.currentX-8, this.y-10, 6, 12);
            rect(this.currentX+2, this.y-10, 6, 12);
            // arms
            //left
            beginShape();
            vertex(this.currentX-25, this.y-40);
            vertex(this.currentX-20, this.y-40);
            vertex(this.currentX-20, this.y-30);
            vertex(this.currentX-15, this.y-30);
            vertex(this.currentX-15, this.y-25);
            vertex(this.currentX-25, this.y-25);
            endShape(CLOSE);
            //right
            beginShape();
            vertex(this.currentX+25, this.y-40);
            vertex(this.currentX+20, this.y-40);
            vertex(this.currentX+20, this.y-30);
            vertex(this.currentX+15, this.y-30);
            vertex(this.currentX+15, this.y-25);
            vertex(this.currentX+25, this.y-25);
            endShape(CLOSE);
            // body
            noStroke();
            fill(0,21,26);
            ellipse(this.currentX, this.y-25, 32, 40);
            // head
            noStroke();
            fill(204,0,0);
            for(var i = 0; i < 10; i++)
            {
                if(i%2 == 0)
                {
                    fill(204, 0, 0);
                }
                else
                {
                    fill(30);
                }
                ellipse(this.currentX, this.y-55, 40-i*5);
            }
            // eyeballs
            fill(255);
            ellipse(this.currentX-5, this.y-60, 15);
            ellipse(this.currentX+5, this.y-60, 15);
            // irises
            fill(255,51,51);
            ellipse(this.currentX-4, this.y-60, 7);
            ellipse(this.currentX+4, this.y-60, 7);
            // pupils
            fill(0);
            ellipse(this.currentX-4, this.y-60, 4);
            ellipse(this.currentX+4, this.y-60, 4);
            // eyebrows
            stroke(255);
            fill(0);
            quad(this.currentX-14, this.y-70,
                this.currentX, this.y-67,
                this.currentX, this.y-63,
                this.currentX-14, this.y-66);
            quad(this.currentX+14, this.y-70,
                this.currentX, this.y-67,
                this.currentX, this.y-63,
                this.currentX+14, this.y-66);

            // mouth
            fill(0);
            stroke(255);
            arc(this.currentX, this.y-40, 20, 20, PI, 0, CHORD);
            //teeth
            noStroke();
            fill(255);
            triangle(this.currentX-6, this.y-40,
                    this.currentX-5, this.y-47,
                    this.currentX-4, this.y-40);
            triangle(this.currentX+6, this.y-40,
                    this.currentX+5, this.y-47,
                    this.currentX+4, this.y-40);
        }
           
        // draw enemy walking right
        else if (this.inc == 1)
        {
            stroke(0);
            strokeWeight(1);
            // legs
            fill(204,0,0);
            rect(this.currentX-8, this.y-10, 6, 12);
            rect(this.currentX+2, this.y-14, 6, 12);
             // body
            noStroke();
            fill(0,21,26);
            ellipse(this.currentX, this.y-25, 26, 40);
            // arms
            //right
            fill(204,0,0);
            stroke(0);
            beginShape();
            vertex(this.currentX+5, this.y-30);
            vertex(this.currentX, this.y-30);
            vertex(this.currentX, this.y-20);
            vertex(this.currentX+15, this.y-20);
            vertex(this.currentX+15, this.y-25);
            vertex(this.currentX+5, this.y-25);
            endShape(CLOSE);

            // head
            noStroke();
            fill(204,0,0);
            for(let i = 0; i < 6; i++)
            {
                if(i%2 == 0)
                {
                    fill(204, 0, 0);
                }
                else
                {
                    fill(30);
                }
                ellipse(this.currentX, this.y-55, 25-i*5, 40-i*5);
            }
            // eyeballs
            fill(255);
            ellipse(this.currentX+8, this.y-60, 15);
            // irises
            fill(255,51,51);
            ellipse(this.currentX+10, this.y-60, 7);
            // pupils
            fill(0);
            ellipse(this.currentX+11, this.y-60, 4);
            // eyebrows
            stroke(255);
            fill(0);
            quad(this.currentX+14, this.y-63,
                this.currentX, this.y-66,
                this.currentX, this.y-70,
                this.currentX+14, this.y-67);

            // mouth
            fill(0);
            stroke(255);
            rect(this.currentX+2, this.y-45, 10, 3);
        }
        // draw enemy walking left
        else if (this.inc == -1)
        {
            stroke(0);
            strokeWeight(1);
            // legs
            fill(204,0,0);
            rect(this.currentX-8, this.y-14, 6, 12);
            rect(this.currentX+2, this.y-10, 6, 12);
             // body
            noStroke();
            fill(0,21,26);
            ellipse(this.currentX, this.y-25, 26, 40);
            // arms
            //right
            fill(204,0,0);
            stroke(0);
            beginShape();
            vertex(this.currentX-5, this.y-30);
            vertex(this.currentX, this.y-30);
            vertex(this.currentX, this.y-20);
            vertex(this.currentX-15, this.y-20);
            vertex(this.currentX-15, this.y-25);
            vertex(this.currentX-5, this.y-25);
            endShape(CLOSE);

            // head
            noStroke();
            fill(204,0,0);
            for(let i = 0; i < 6; i++)
            {
                if(i%2 == 0)
                {
                    fill(204, 0, 0);
                }
                else
                {
                    fill(30);
                }
                ellipse(this.currentX, this.y-55, 25-i*5, 40-i*5);
            }
            // eyeballs
            fill(255);
            ellipse(this.currentX-8, this.y-60, 15);
            // irises
            fill(255,51,51);
            ellipse(this.currentX-10, this.y-60, 7);
            // pupils
            fill(0);
            ellipse(this.currentX-11, this.y-60, 4);
            // eyebrows
            stroke(255);
            fill(0);
            quad(this.currentX-14, this.y-63,
                this.currentX, this.y-66,
                this.currentX, this.y-70,
                this.currentX-14, this.y-67);

            // mouth
            fill(0);
            stroke(255);
            rect(this.currentX-12, this.y-45, 10, 3);
        }
    }
    
    // check if gameChar touches the enemy
    checkContact(gc_x, gc_y)
    {
        let d = dist(gc_x, gc_y, this.currentX, this.y);
        
        if(d < 50)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}
