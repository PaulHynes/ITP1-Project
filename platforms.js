// classes for static and moving platforms

class Platform
{
    constructor(x_pos, y_pos, length)
    {
        this.x = x_pos;
        this.y = y_pos;
        this.length = length;
    }
    
    // draw the platform
    draw()
    {
        for(let i = 0; i < this.length; i++)
        {
            // draw logs
            //outer
            noStroke();
            fill(101,67,33);
            ellipse(this.x + i*40, this.y, 40);
            //inner
            fill(212,159,106);
            ellipse(this.x + i*40, this.y, 35);
            // rings
            for(let j = 0; j < 6; j++)
            {
                stroke(179-j*5,134-j*5,89-j*5)
                strokeWeight(2);
                noFill();
                ellipse(this.x + i*40, this.y, 30-j*5);
            }
        }
    }
    
    // empty update method for inheritance
    update(){}

    // check if gameChar is on the platform  
    checkContact(gc_x, gc_y)
    {
      if(gc_x > this.x-15 && gc_x < 
         this.x + this.length*40 - 10)
      {
          const d = this.y-10 - gc_y;
          if(d >= 0 && d < 10)
          {
              return true;
          }
      }
        return false;
    }
}

// Moving platform
class MovingPlatform extends Platform
{
    constructor(x, y, length, xRange, yRange)
    {
        super(x, y, length);
        this.xRange = xRange;
        this.yRange = yRange;
        this.xAnchor = x;
        this.yAnchor = y;
        this.xDirection = 1;
        this.yDirection = 1;
    }
    
    update()
    {
        // move platform along the x axis
        if (this.xRange > 0)
        {
            if (abs(this.xAnchor - this.x) > this.xRange)
            {
                this.xDirection *= -1;
            }
            this.x += this.xDirection;
        }
        // if platform doesn't move on x axis, set x direction to 0
        else {this.xDirection = 0} 
        // move platform along the y axis
        if (this.yRange > 0)
        {
            if (abs(this.yAnchor - this.y) > this.yRange)
            {
                this.yDirection *= -1;
            }
            this.y += this.yDirection;
        }
        // if platform doesn't move on y axis, set y direction to 0
        else {this.yDirection = 0} 
    }
}
