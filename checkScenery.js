// Function to check if the gameChar has reached the flagpole

function checkFlagpole()
{
    // check the distance between gameChar and flagpole
    const d = abs(gameChar_world_x - flagpole.x_pos);
    
    if (d < 15) 
    {
        flagpole.isReached = true;
        // stop background music and play the level complete sound
        if (!levelCompleteSound.isPlaying() && lives > 0)
        {
            bgroundSound.stop();
            levelCompleteSound.play();
        }
    }
}

// Function to check if character is over a waterfall.

function checkWaterfall(t_waterfall)
{
    if (
        // check if gameChar is with the waterfall
        gameChar_world_x > t_waterfall.x_pos+10 && 
        gameChar_world_x < t_waterfall.x_pos + t_waterfall.width-10 &&
        // check if gameChar is below floorPos_y and is still onscreen
        gameChar_y >= floorPos_y && gameChar_y < height + 100) 
    {
        // make gameChar fall down the waterfall
        isPlummeting = true;
        gameChar_y += 5;
        // while the gameChar is falling, play the falling sound effect
        if(!fallingSound.isPlaying() && lives > 0)
        {
            fallingSound.play();
        }
    }
}
