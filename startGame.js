// Function to start and restart the game

function startGame()
{
 
    // place gameChar in centre of the screen
    gameChar_x = width/2;
	gameChar_y = floorPos_y;

	// Variable to control the background scrolling.
	scrollPos = 0;

	// Variable to store the real position of the gameChar in the game
	// world. Needed for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;

	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlummeting = false;
    
    // initialise game score & lives
    game_score = 0;

	// Initialise arrays of enemies and scenery objects
    
    enemies = [];
    stars = [];
    grass = [];
    mud = [];
    platforms = [];
    waterfalls = [];
    
    // add enemies to array
    
    enemies.push(new Enemy(300, floorPos_y, 60));
    enemies.push(new Enemy(1500, floorPos_y, 50));
    enemies.push(new Enemy(2800, floorPos_y, 100));
    
    // fill stars array;
    for (let i = 0; i < width; i+= random(5, 15))
    {
      stars.push(createVector(i, random(5, 150)));
    }
    
    // draw grass
    
    // set random seed
    randomSeed(99);
    
    // fill grass with vectors
    for (let i = 0; i < 3300; i++) {
        grass[i] = {
          x: i,
          y: floorPos_y + random(+5, 50),
          size: random(4, 10),
          colour: color(0, random(150,255), 
                        random(0, 100), random(100, 255)),
        }
      };
    // fill mud with vectors
    for (let i = 0; i < 3300; i++) 
    {
        mud[i] = {
            x: i,
            y: floorPos_y +45 + random(0, 100),
            size: random(4, 10),
            colour: color(random(100, 200), 
                          random(20, 100), 0, random(100, 255)),
        }
    }
    
    // fill trees array
    trees = [
        {x_pos: 200, y_pos: 295},
        {x_pos: 500, y_pos: 250},
        {x_pos: 600, y_pos: 285},
        {x_pos: 980, y_pos: 260},
        {x_pos: 1100, y_pos: 245},
        {x_pos: 1500, y_pos: 240},
        {x_pos: 1600, y_pos: 255},
        {x_pos: 1980, y_pos: 265},
        {x_pos: 2100, y_pos: 245},
        {x_pos: 2500, y_pos: 245},
        {x_pos: 2650, y_pos: 225},
        {x_pos: 2800, y_pos: 265},
        {x_pos: 2920, y_pos: 215},
    ];
    
    // fill clouds array
    clouds = [
        {x_pos: -1300, y_pos:100, size:80},
        {x_pos: -1100, y_pos:130, size:100},
        {x_pos: -900, y_pos:140, size:130},
        {x_pos: -400, y_pos:110, size:50},
        {x_pos: -200, y_pos:150, size:160},
        {x_pos: -100, y_pos:160, size:90},
        {x_pos: 100, y_pos:180, size:100},
        {x_pos: 500, y_pos:150, size:80},
        {x_pos: 900, y_pos:110, size:120},
        {x_pos: 1100, y_pos:180, size:100},
        {x_pos: 1500, y_pos:150, size:150},
        {x_pos: 1900, y_pos:120, size:80}
    ];
    
    // fill mountains array
    mountains = [
        {x_pos: 300, startY: 110, numMountains: 5},
        {x_pos: 1000, startY: 150, numMountains: 6},
        {x_pos: 2100, startY: 110, numMountains: 4},
    ];
    
    // fill waterfall positions array
    waterfallPos = [
        {x_pos: -270, width: 435},
        {x_pos: 700, width: 140},
        {x_pos: 1200, width: 100},
        {x_pos: 1700, width: 90},
        {x_pos: 2200, width: 170}
    ];
    
    // this way signs
    signs = [
        {x_pos: 900, y_pos: floorPos_y},
    ];
    
    // fill waterfalls with new Waterfall objects using waterfallPos
    for(let i = 0; i < waterfallPos.length; i++)
    {
        waterfalls.push(
            new Waterfall(waterfallPos[i].x_pos, floorPos_y,
                         waterfallPos[i].width, 1, 6, 255));
    }
    
    // start ripple on all items in waterfalls array
    for(const w of waterfalls)
    {
        w.startRipples();
    }
    
    // fill collectables array
    collectables = [
        {x_pos: 65, y_pos: floorPos_y-100, isFound: false},
        {x_pos: 395, y_pos: floorPos_y-30, isFound: false},
        {x_pos: 600, y_pos: floorPos_y-90, isFound: false},
        {x_pos: 970, y_pos: floorPos_y-150, isFound: false},
        {x_pos: 1130, y_pos: floorPos_y-150, isFound: false},
        {x_pos: 1255, y_pos: floorPos_y-120, isFound: false},
        {x_pos: 1430, y_pos: floorPos_y-100, isFound: false},
        {x_pos: 1740, y_pos: floorPos_y-60, isFound: false},
        {x_pos: 1900, y_pos: floorPos_y-40, isFound: false},
        {x_pos: 1800, y_pos: floorPos_y-270, isFound: false},
    ];
    
    // fill the coins array with coins using the collectables array
    coins = [];
    for (const c of collectables)
    {
        coins.push(new Coin(c.x_pos, c.y_pos));
    }
    
    
    // fill the platforms array with platforms
    // first platform
    platforms.push(new MovingPlatform(730, 350, 3, 0, 50));
    
    // reverse platform staircase
    platforms.push(new Platform(2770, 350, 3));
    
    for (let i = 0; i < 3; i++)
    {
        platforms.push(new Platform(
            platforms.at(-1).x - 200, 
            platforms.at(-1).y - 50, 3)
                      );
    }
    
    // final moving platform
    platforms.push(new MovingPlatform(1970, 150, 4, 50, 0))
    
    // flagpole object
    flagpole = {
        x_pos: 3024, 
        flagPos_y: floorPos_y - 50,
        isReached: false,
        drawFlag: function()
        {
            stroke(181,122,255);
            strokeWeight(2);
            fill(120,81,169);
            rect(this.x_pos, this.flagPos_y, 70, 55);
            // crown
            noStroke();
            fill(255,215,0);
            beginShape();
            vertex(this.x_pos+17, this.flagPos_y+35);
            vertex(this.x_pos+15, this.flagPos_y+15);
            vertex(this.x_pos+20, this.flagPos_y+25);
            vertex(this.x_pos+25, this.flagPos_y+15);
            vertex(this.x_pos+30, this.flagPos_y+25);
            vertex(this.x_pos+35, this.flagPos_y+15);
            vertex(this.x_pos+40, this.flagPos_y+25);
            vertex(this.x_pos+45, this.flagPos_y+15);
            vertex(this.x_pos+50, this.flagPos_y+25);
            vertex(this.x_pos+55, this.flagPos_y+15);
            vertex(this.x_pos+53, this.flagPos_y+35);
            endShape(CLOSE);
            // Jewels
            noStroke();
            //rubies
            fill(132,27,45);
            ellipse(this.x_pos+17, this.flagPos_y+30, 4);
            ellipse(this.x_pos+25, this.flagPos_y+30, 4);
            ellipse(this.x_pos+35, this.flagPos_y+30, 4);
            ellipse(this.x_pos+45, this.flagPos_y+30, 4);
            ellipse(this.x_pos+53, this.flagPos_y+30, 4);
            // sapphires
            fill(15,82,186);
            ellipse(this.x_pos+20, this.flagPos_y+30, 4);
            ellipse(this.x_pos+30, this.flagPos_y+30, 4);
            ellipse(this.x_pos+40, this.flagPos_y+30, 4);
            ellipse(this.x_pos+50, this.flagPos_y+30, 4);
          },
       };
    
}
