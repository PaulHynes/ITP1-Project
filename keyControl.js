// functions for user input

function keyPressed(){
    
    // if user presses left arrow, move gameChar left
	if (keyCode == 37 && lives > 0) 
    {
        isLeft = true;
    }
    // if user presses right arrow, move gameChar right
    else if (keyCode == 39 && lives > 0) 
    {
        isRight = true;
    }
    // if user presses the spacebar, make gameChar jump
    if (keyCode == 32) 
    {
        // check to see gameChar is neither falling nor plummeting
        if (!isFalling && !isPlummeting && lives > 0) 
        {
            gameChar_y -= 130;
            // play jump sound
            jumpSound.play();
        }
    }
}

// to stop the gameChar from moving left or right
function keyReleased()
{
    
	if (keyCode == 37) 
    {
        isLeft = false;
    } 
    else if (keyCode == 39) 
    {
        isRight = false;
    }
    
}
