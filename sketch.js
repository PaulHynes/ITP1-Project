/*
Version 6.30:
    Final version!
    
    Welcome to "Royal Pains" by Paul Hynes 2022
    This is a sidescroller where our greedy King goes on the hunt for treasure!
    Traverse waterfalls, climb platforms and avoid enemies to reach the end of
    the level. 
    
*/

// Game stats variables
let floorPos_y;
let game_score;
let lives;
// variable for falling speed;
let fallSpeed;

function setup()
{
	createCanvas(1024, 576);
    floorPos_y = height * 3/4;
    sunriseSunset = new SunriseSunset();
    lives = 3;
    startGame();
}

function draw()
{
    // draw background.
    background(255);
    // create blue gradient for drawing the sky
    for (let i = 0; i < height; i++)
    {
        stroke(20, 40+i/2.5, 70+i*2);
        line(0, i, width, i);
    }
	noStroke();
    
    // create the sunrise and sunset effect
    sunriseSunset.draw(150, map(gameChar_world_x, 512, 2000, 100, 400), 120, 800, 80);
    
    // push for scolling
    push();
    translate(scrollPos, 0);
    
    // draw the ground 
    // draw green ground
	noStroke();
	fill(0,155,0);
	rect(165, floorPos_y, width*6, height/4);
    
    // draw mud background under the green ground
    fill(153,77,0);
    rect(165, floorPos_y+45, width*6, height/4);
    
    // draw grass and mud circles
    drawGrass();
    drawMud();
    
	// Draw clouds.
    drawClouds();
    
	// Draw mountains.
    for (const m of mountains)
    {
        drawMountains(m.x_pos, m.startY, m.numMountains);
    }
	// Draw trees.
    drawTrees();
    
    // draw this way signs
    drawSigns();
    
	// Draw waterfalls.
    for (const w of waterfalls) 
    {
        // only draw waterfall if it is on screen
        if (dist(gameChar_world_x, gameChar_x, 
                 w.x_pos + w.width, w.y_pos) < width)
        {
            // draw and update waterfall
            w.updateWaterfall();
            // check if gameChar is over waterfall
            checkWaterfall(w);
        }
        
    }
	// Draw collectable items.
    for (const c of coins)
    {
        drawCollectable(c);
        checkCollectable(c);
    }
    
    // Draw platforms
    for (const p of platforms)
    {
        p.update();
        p.draw();
        if(p.isCharOn)
        {
            gameChar_y = p.currentY -10;
            console.log(p.currentY-10);
        }
    }
    
    // Render flagpole
    renderFlagpole();
    
    for (const e of enemies)
    {
        // if enemy is close to the gamechar, draw the enemy
        if(dist(gameChar_world_x, gameChar_y, e.currentX, e.y) < width)
            {
                e.draw();
                
                // check if gameChar touches any enemies
                let isContact =  e.checkContact(gameChar_world_x, gameChar_y);

                if (isContact)
                {
                    if (lives > 0)
                    {
                        // trigger the ow sound
                        if (!owSound.isPlaying())
                        {
                            owSound.play(); 
                        }
                        // restart game and decrement number of lives
                        startGame();
                        lives--;
                        break;
                    }
                }
            }
        
    }
    
    pop();
    
	// Draw game character.
	drawGameChar();

    // draw game score to top left
    fill(255);
    noStroke();
    textSize(24);
    text("Score: " + game_score, 20, 20);
    
    // draw number of lives
    text("Lives: ", 180, 20);
    for (let i = 0; i < lives; i++) {
        strokeWeight(2);
        stroke(255,253,153);
        fill(255,77,77);
        ellipse(260 + i*20, 13, 15);

    }
    
    // Check Game Over and Level Complete
    if (lives < 1) {
        // display "Game Over"
        image(gameText, width/2 - 193, height * 3/8);
        image(overText, width/2 - 193, height * 3/4);
        return;
    }
    if (flagpole.isReached){
        // display "Level complete!"
        image(completeText, width/2 -332, height/2);
        return;
    }
    
	// Logic to make the game character move or the background scroll.
	if(isLeft)
	{
        if (!isPlummeting)
        {
            if(gameChar_x > width * 0.2)
            {
                gameChar_x -= 5;
            }
            else
            {
                scrollPos += 5;
            } 
        }
    }

	if(isRight)
	{
        if (!isPlummeting)
        {
            if(gameChar_x < width * 0.8)
            {
                gameChar_x  += 5;
            } else
            {
                scrollPos -= 5; // negative for moving against the background
            }
        }
	}

    // Logic to make the game character rise and fall
    if (gameChar_y < floorPos_y) 
    {
        let isContact = false;
        
        // check to see if gameChar is on a platform
        for(const p of platforms)
        {
            if(p.checkContact(gameChar_world_x, gameChar_y))
            {
                isContact = true;
                isFalling = false;
                fallSpeed = 3; // reset falling speed
                if(p instanceof MovingPlatform)
                {
                    gameChar_x += p.xDirection;
                    gameChar_y += p.yDirection;
                }
                break;
            }
        }
        
        // if the gameChar is above the ground, not touching a platform
        
        if(isContact == false)
        {
            gameChar_y += fallSpeed; // increment gameChar_y by fall speed
            fallSpeed += 0.04 // accelerate the falling
            isFalling = true;
        }
        
    } 
    // else gameChar will be on the ground
    else
    {
        isFalling = false;
        fallSpeed = 3;
    }
    
    // check flagpole distance
    if (flagpole.isReached == false) 
    {
        checkFlagpole();
    }
    
    // check if player has died
    checkPlayerDie();
    
	// Update real position of gameChar for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;
}
