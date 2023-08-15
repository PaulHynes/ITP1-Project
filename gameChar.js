// functions and variable to draw the gameChar and check if gameChar dies

// gameChar position variables
let gameChar_x;
let gameChar_y;
let scrollPos;
let gameChar_world_x;

// gameChar movement variables
let isLeft;
let isRight;
let isFalling;
let isPlummeting;

// Function to check if player has died
function checkPlayerDie()
{
    if (gameChar_y > height == true){
        lives --;
        if (lives > 0) {
            startGame();
        }
    }
}

// Function to draw the game character.
function drawGameChar()
{
	//the game character
    if(flagpole.isReached)
    {
        // level complete - happy gameChar!
        // body
        stroke(161,109,227);
        strokeWeight(1);
        fill(120,81,169);
        ellipse(gameChar_x, gameChar_y-20, 44, 35);
        noStroke();
        fill(248,248,255);
        // fluffy collar across
        ellipse(gameChar_x-14, gameChar_y-28, 3);
        ellipse(gameChar_x-12, gameChar_y-28, 3);
        ellipse(gameChar_x-10, gameChar_y-27.5, 3);
        ellipse(gameChar_x-8, gameChar_y-27.5, 3);
        ellipse(gameChar_x-6, gameChar_y-27, 3);
        ellipse(gameChar_x-4, gameChar_y-27, 3);
        ellipse(gameChar_x-2, gameChar_y-26.5, 3);
        ellipse(gameChar_x, gameChar_y-26, 3);
        ellipse(gameChar_x+2, gameChar_y-26.5, 3);
        ellipse(gameChar_x+4, gameChar_y-27, 3);
        ellipse(gameChar_x+6, gameChar_y-27, 3);
        ellipse(gameChar_x+8, gameChar_y-27.5, 3);
        ellipse(gameChar_x+10, gameChar_y-27.5, 3);
        ellipse(gameChar_x+12, gameChar_y-28, 3);
        ellipse(gameChar_x+14, gameChar_y-28, 3);
        //fluffy lining down
        ellipse(gameChar_x, gameChar_y-24, 3);
        ellipse(gameChar_x, gameChar_y-22, 3);
        ellipse(gameChar_x, gameChar_y-20, 3);
        ellipse(gameChar_x, gameChar_y-18, 3);
        ellipse(gameChar_x, gameChar_y-16, 3);
        ellipse(gameChar_x, gameChar_y-14, 3);
        ellipse(gameChar_x, gameChar_y-12, 3);
        ellipse(gameChar_x, gameChar_y-10, 3);
        ellipse(gameChar_x, gameChar_y-8, 3);
        ellipse(gameChar_x, gameChar_y-6, 3);
        ellipse(gameChar_x, gameChar_y-4, 3);

        // head
        stroke(255,204,102);
        strokeWeight(0.5);
        fill(255,230,179);
        ellipse(gameChar_x, gameChar_y-50, 40);

        // hair
        noStroke();
        fill(115,38,0);
        //fringe
        ellipse(gameChar_x-15, gameChar_y-65, 7);
        ellipse(gameChar_x-10, gameChar_y-66, 7);
        ellipse(gameChar_x-5, gameChar_y-66, 7);
        ellipse(gameChar_x, gameChar_y-66, 7);
        ellipse(gameChar_x+5, gameChar_y-66, 7);
        ellipse(gameChar_x+10, gameChar_y-66, 7);
        ellipse(gameChar_x+15, gameChar_y-65, 7);
        // left locks
        ellipse(gameChar_x-18, gameChar_y-60, 7);
        ellipse(gameChar_x-19, gameChar_y-55, 7);
        ellipse(gameChar_x-19, gameChar_y-50, 7);
        ellipse(gameChar_x-19, gameChar_y-45, 7);
        ellipse(gameChar_x-19, gameChar_y-40, 7);
        ellipse(gameChar_x-19, gameChar_y-35, 7);
        ellipse(gameChar_x-18, gameChar_y-30, 7);
        // right locks
        ellipse(gameChar_x+18, gameChar_y-60, 7);
        ellipse(gameChar_x+19, gameChar_y-55, 7);
        ellipse(gameChar_x+19, gameChar_y-50, 7);
        ellipse(gameChar_x+19, gameChar_y-45, 7);
        ellipse(gameChar_x+19, gameChar_y-40, 7);
        ellipse(gameChar_x+19, gameChar_y-35, 7);
        ellipse(gameChar_x+18, gameChar_y-30, 7);

        // beard
        noStroke();
        fill(115,38,0);
        //upper
        ellipse(gameChar_x-15, gameChar_y-40.5, 7, 5);
        ellipse(gameChar_x-10, gameChar_y-41, 7, 5);
        ellipse(gameChar_x-5, gameChar_y-42, 7, 5);
        ellipse(gameChar_x, gameChar_y-43, 7, 5);
        ellipse(gameChar_x+5, gameChar_y-42, 7, 5);
        ellipse(gameChar_x+10, gameChar_y-41, 7, 5);
        ellipse(gameChar_x+15, gameChar_y-40.5, 7, 5);
        //lower
        ellipse(gameChar_x-18, gameChar_y-37, 7, 5);
        ellipse(gameChar_x-15, gameChar_y-33, 7, 5);
        ellipse(gameChar_x-10, gameChar_y-32, 7, 5);
        ellipse(gameChar_x-5, gameChar_y-31, 7, 5);
        ellipse(gameChar_x, gameChar_y-30, 7, 5);
        ellipse(gameChar_x+5, gameChar_y-31, 7, 5);
        ellipse(gameChar_x+10, gameChar_y-32, 7, 5);
        ellipse(gameChar_x+15, gameChar_y-33, 7, 5);
        ellipse(gameChar_x+18, gameChar_y-37, 7, 5);

        // crown
        noStroke();
        fill(255,215,0);
        beginShape();
        vertex(gameChar_x-18, gameChar_y-65);
        vertex(gameChar_x-20, gameChar_y-75);
        vertex(gameChar_x-15, gameChar_y-70);
        vertex(gameChar_x-10, gameChar_y-75);
        vertex(gameChar_x-5, gameChar_y-70);
        vertex(gameChar_x, gameChar_y-75);
        vertex(gameChar_x+5, gameChar_y-70);
        vertex(gameChar_x+10, gameChar_y-75);
        vertex(gameChar_x+15, gameChar_y-70);
        vertex(gameChar_x+20, gameChar_y-75);
        vertex(gameChar_x+18, gameChar_y-65);
        endShape(CLOSE);
        // Jewels
        noStroke();
        //rubies
        fill(132,27,45);
        ellipse(gameChar_x-18, gameChar_y-68, 3);
        ellipse(gameChar_x-10, gameChar_y-68, 3);
        ellipse(gameChar_x, gameChar_y-68, 3);
        ellipse(gameChar_x+10, gameChar_y-68, 3);
        ellipse(gameChar_x+18, gameChar_y-68, 3);
        // sapphires
        fill(15,82,186);
        ellipse(gameChar_x-14, gameChar_y-68, 3);
        ellipse(gameChar_x-5, gameChar_y-68, 3);
        ellipse(gameChar_x+5, gameChar_y-68, 3);
        ellipse(gameChar_x+14, gameChar_y-68, 3);
        
        // eyeballs
        stroke(255,221,153);
        strokeWeight(0.5);
        fill(255);
        ellipse(gameChar_x-7, gameChar_y-54, 15);
        ellipse(gameChar_x+7, gameChar_y-54, 15);

        //irises
        noStroke();
        fill(25,178,255);
        ellipse(gameChar_x-6, gameChar_y-55, 8.5);
        ellipse(gameChar_x+6, gameChar_y-55, 8.5);

        // pupils
        noStroke();
        fill(0);
        ellipse(gameChar_x-6, gameChar_y-55, 7);
        ellipse(gameChar_x+6, gameChar_y-55, 7);

        // eyebrows
        stroke(84,42,0);
        strokeWeight(0.5);
        fill(110,55,0);
        quad(gameChar_x-16, gameChar_y-61,
             gameChar_x-3, gameChar_y-63, 
             gameChar_x-3, gameChar_y-61, 
             gameChar_x-16, gameChar_y-59);
        quad(gameChar_x+16, gameChar_y-61,
             gameChar_x+3, gameChar_y-63, 
             gameChar_x+3, gameChar_y-61, 
             gameChar_x+16, gameChar_y-59);

        //nose
        fill(255,230,179);
        strokeWeight(0.5);
        stroke(0);
        beginShape();
        vertex(gameChar_x, gameChar_y-50);
        vertex(gameChar_x-3, gameChar_y-43);
        vertex(gameChar_x+2, gameChar_y-43);
        endShape();

        // mouth
        fill(0);
        noStroke();
        arc(gameChar_x, gameChar_y-39, 12, 12, 0, PI);
        //hands
        stroke(161,109,227);
        strokeWeight(0.5);
        fill(255,230,179);
        ellipse(gameChar_x-18, gameChar_y-24, 11, 10);
        ellipse(gameChar_x+18, gameChar_y-20, 11, 10);

        // boots
        stroke(103,103,103);
        fill(41,36,33);
        ellipse(gameChar_x-9, gameChar_y-8  , 14, 12);
        ellipse(gameChar_x+9, gameChar_y-4, 14, 12);
        
    } 
    else if(isLeft && isFalling)
	{
        // jumping left
        // body
        stroke(161,109,227);
        strokeWeight(1);
        fill(120,81,169);
        ellipse(gameChar_x, gameChar_y-20, 30, 35);
        noStroke();
        fill(248,248,255);
        // fluffy collar across
        ellipse(gameChar_x-14, gameChar_y-27, 3);
        ellipse(gameChar_x-12, gameChar_y-27, 3);
        ellipse(gameChar_x-10, gameChar_y-27.5, 3);
        ellipse(gameChar_x-8, gameChar_y-27.5, 3);
        ellipse(gameChar_x-6, gameChar_y-28, 3);
        ellipse(gameChar_x-4, gameChar_y-28.5, 3);
        ellipse(gameChar_x-2, gameChar_y-29, 3);
        ellipse(gameChar_x, gameChar_y-29.5, 3);
        ellipse(gameChar_x+2, gameChar_y-29, 3);
        ellipse(gameChar_x+4, gameChar_y-28.5, 3);
        ellipse(gameChar_x+6, gameChar_y-28, 3);
        ellipse(gameChar_x+8, gameChar_y-27.5, 3);
        ellipse(gameChar_x+10, gameChar_y-27.5, 3);
        ellipse(gameChar_x+12, gameChar_y-27, 3);
        ellipse(gameChar_x+14, gameChar_y-27, 3);
        //fluffy lining down
        ellipse(gameChar_x-15, gameChar_y-24, 3);
        ellipse(gameChar_x-15, gameChar_y-22, 3);
        ellipse(gameChar_x-15, gameChar_y-20, 3);
        ellipse(gameChar_x-15, gameChar_y-18, 3);
        ellipse(gameChar_x-14.5, gameChar_y-16, 3);
        ellipse(gameChar_x-14, gameChar_y-14, 3);
        ellipse(gameChar_x-13.5, gameChar_y-12, 3);
        ellipse(gameChar_x-13, gameChar_y-10, 3);
        ellipse(gameChar_x-12, gameChar_y-8, 3);
        ellipse(gameChar_x-11, gameChar_y-6, 3);
        ellipse(gameChar_x-9, gameChar_y-4, 3);

        // head
        stroke(255,204,102);
        strokeWeight(0.5);
        fill(255,230,179);
        ellipse(gameChar_x, gameChar_y-50, 30, 40);

        // hair
        noStroke();
        fill(115,38,0);
        //fringe
        ellipse(gameChar_x-10, gameChar_y-66, 7);
        ellipse(gameChar_x-5, gameChar_y-67, 7);
        ellipse(gameChar_x, gameChar_y-68, 7);
        ellipse(gameChar_x+5, gameChar_y-67 , 7);
        ellipse(gameChar_x+10, gameChar_y-66, 7);

        // long hair
        ellipse(gameChar_x-4, gameChar_y-65, 7);
        ellipse(gameChar_x-2, gameChar_y-63, 7);

        ellipse(gameChar_x+2, gameChar_y-65, 7);
        ellipse(gameChar_x+4, gameChar_y-60, 7);
        ellipse(gameChar_x+4, gameChar_y-55, 7);
        ellipse(gameChar_x+5, gameChar_y-50, 7);
        ellipse(gameChar_x+5, gameChar_y-45, 7);
        ellipse(gameChar_x+5, gameChar_y-40, 7);
        ellipse(gameChar_x+5, gameChar_y-35, 7);
        ellipse(gameChar_x+6, gameChar_y-30, 7);

        ellipse(gameChar_x+7, gameChar_y-65, 7);
        ellipse(gameChar_x+9, gameChar_y-60, 7);
        ellipse(gameChar_x+9, gameChar_y-55, 7);
        ellipse(gameChar_x+9, gameChar_y-50, 7);
        ellipse(gameChar_x+9, gameChar_y-45, 7);
        ellipse(gameChar_x+10, gameChar_y-40, 7);
        ellipse(gameChar_x+11, gameChar_y-35, 7);
        ellipse(gameChar_x+13, gameChar_y-30, 7);

        ellipse(gameChar_x+13, gameChar_y-65, 7);
        ellipse(gameChar_x+13, gameChar_y-62, 7);
        ellipse(gameChar_x+14, gameChar_y-57, 7);
        ellipse(gameChar_x+15, gameChar_y-52, 7);
        ellipse(gameChar_x+15, gameChar_y-47, 7);
        ellipse(gameChar_x+15, gameChar_y-42, 7);
        ellipse(gameChar_x+16, gameChar_y-37, 7);
        ellipse(gameChar_x+17, gameChar_y-32, 7);

        ellipse(gameChar_x+17, gameChar_y-60, 7);
        ellipse(gameChar_x+19, gameChar_y-57, 7);
        ellipse(gameChar_x+19, gameChar_y-51, 7);
        ellipse(gameChar_x+19, gameChar_y-48, 7);
        ellipse(gameChar_x+19, gameChar_y-43, 7);
        ellipse(gameChar_x+20, gameChar_y-38, 7);
        ellipse(gameChar_x+21, gameChar_y-33, 7);

        // beard
        noStroke();
        fill(115,38,0);
        //upper  
        ellipse(gameChar_x-13, gameChar_y-41, 7, 5);
        ellipse(gameChar_x-8, gameChar_y-41, 7, 5);
        ellipse(gameChar_x-3, gameChar_y-41, 7, 5);
        ellipse(gameChar_x-2, gameChar_y-38, 7, 5);
        ellipse(gameChar_x-1, gameChar_y-35, 7, 5);
        ellipse(gameChar_x-2, gameChar_y-35, 7, 5);
        ellipse(gameChar_x-3, gameChar_y-33, 7, 5);
        //lower
        ellipse(gameChar_x-10, gameChar_y-32, 7, 5);
        ellipse(gameChar_x-5, gameChar_y-31, 7, 5);
        ellipse(gameChar_x, gameChar_y-30, 7, 5);

        // crown
        noStroke();
        fill(255,215,0);
        beginShape();
        vertex(gameChar_x-12, gameChar_y-65);
        vertex(gameChar_x-14, gameChar_y-75);
        vertex(gameChar_x-9, gameChar_y-70);
        vertex(gameChar_x-4, gameChar_y-75);
        vertex(gameChar_x+1, gameChar_y-70);
        vertex(gameChar_x+6, gameChar_y-75);
        vertex(gameChar_x+11, gameChar_y-70);
        vertex(gameChar_x+16, gameChar_y-75);
        vertex(gameChar_x+13, gameChar_y-65);
        endShape(CLOSE);
        // Jewels
        noStroke();
        //rubies
        fill(132,27,45);
        ellipse(gameChar_x-11, gameChar_y-68, 3);
        ellipse(gameChar_x-1, gameChar_y-68, 3);
        ellipse(gameChar_x+9, gameChar_y-68, 3);
        // sapphires
        fill(15,82,186);
        ellipse(gameChar_x-6, gameChar_y-68, 3);
        ellipse(gameChar_x+4, gameChar_y-68, 3);
        ellipse(gameChar_x+13, gameChar_y-68, 3);

        //nose
        fill(255,230,179);
        strokeWeight(0.5);
        stroke(0);
        beginShape();
        vertex(gameChar_x-16, gameChar_y-50);
        vertex(gameChar_x-19, gameChar_y-43);
        vertex(gameChar_x-14, gameChar_y-43);
        endShape();

        // eyes
        // eyeballs
        noStroke();
        fill(255);
        ellipse(gameChar_x-12, gameChar_y-53, 10, 13);
        //irises
        noStroke();
        fill(25,178,255);
        ellipse(gameChar_x-14, gameChar_y-53, 6, 7);
        // pupils
        noStroke();
        fill(0);
        ellipse(gameChar_x-14, gameChar_y-53, 4, 5);
        
        // eyebrows
        stroke(84,42,0);
        strokeWeight(0.5);
        fill(110,55,0);
            quad(gameChar_x-7, gameChar_y-61, 
             gameChar_x-16, gameChar_y-63,
             gameChar_x-16, gameChar_y-61,
            gameChar_x-7, gameChar_y-59);

        // mouth
        noStroke();
        fill(0);
        ellipse(gameChar_x-10, gameChar_y-36, 6, 4);

        //hands
        stroke(161,109,227);
        strokeWeight(0.5);
        fill(255,230,179);
        ellipse(gameChar_x, gameChar_y-22, 11, 10);

        // boots
        stroke(103,103,103);
        fill(41,36,33);
        ellipse(gameChar_x-9, gameChar_y-8, 14, 12);
        ellipse(gameChar_x+9, gameChar_y-4, 14, 12);   

	}
	else if(isRight && isFalling)
	{
		// jumping right
        // body
        stroke(161,109,227);
        strokeWeight(1);
        fill(120,81,169);
        ellipse(gameChar_x, gameChar_y-20, 30, 35);
        noStroke();
        fill(248,248,255);
        // fluffy collar across
        ellipse(gameChar_x-14, gameChar_y-27, 3);
        ellipse(gameChar_x-12, gameChar_y-27, 3);
        ellipse(gameChar_x-10, gameChar_y-27.5, 3);
        ellipse(gameChar_x-8, gameChar_y-27.5, 3);
        ellipse(gameChar_x-6, gameChar_y-28, 3);
        ellipse(gameChar_x-4, gameChar_y-28.5, 3);
        ellipse(gameChar_x-2, gameChar_y-29, 3);
        ellipse(gameChar_x, gameChar_y-29.5, 3);
        ellipse(gameChar_x+2, gameChar_y-29, 3);
        ellipse(gameChar_x+4, gameChar_y-28.5, 3);
        ellipse(gameChar_x+6, gameChar_y-28, 3);
        ellipse(gameChar_x+8, gameChar_y-27.5, 3);
        ellipse(gameChar_x+10, gameChar_y-27.5, 3);
        ellipse(gameChar_x+12, gameChar_y-27, 3);
        ellipse(gameChar_x+14, gameChar_y-27, 3);
        //fluffy lining down
        ellipse(gameChar_x+15, gameChar_y-24, 3);
        ellipse(gameChar_x+15, gameChar_y-22, 3);
        ellipse(gameChar_x+15, gameChar_y-20, 3);
        ellipse(gameChar_x+15, gameChar_y-18, 3);
        ellipse(gameChar_x+14.5, gameChar_y-16, 3);
        ellipse(gameChar_x+14, gameChar_y-14, 3);
        ellipse(gameChar_x+13.5, gameChar_y-12, 3);
        ellipse(gameChar_x+13, gameChar_y-10, 3);
        ellipse(gameChar_x+12, gameChar_y-8, 3);
        ellipse(gameChar_x+11, gameChar_y-6, 3);
        ellipse(gameChar_x+9, gameChar_y-4, 3);

        // head
        stroke(255,204,102);
        strokeWeight(0.5);
        fill(255,230,179);
        ellipse(gameChar_x, gameChar_y-50, 30, 40);

        // hair
        noStroke();
        fill(115,38,0);
        //fringe
        ellipse(gameChar_x-10, gameChar_y-66, 7);
        ellipse(gameChar_x-5, gameChar_y-67, 7);
        ellipse(gameChar_x, gameChar_y-68, 7);
        ellipse(gameChar_x+5, gameChar_y-67 , 7);
        ellipse(gameChar_x+10, gameChar_y-66, 7);

        // long hair
        ellipse(gameChar_x+4, gameChar_y-65, 7);
        ellipse(gameChar_x+2, gameChar_y-63, 7);

        ellipse(gameChar_x-2, gameChar_y-65, 7);
        ellipse(gameChar_x-4, gameChar_y-60, 7);
        ellipse(gameChar_x-4, gameChar_y-55, 7);
        ellipse(gameChar_x-5, gameChar_y-50, 7);
        ellipse(gameChar_x-5, gameChar_y-45, 7);
        ellipse(gameChar_x-5, gameChar_y-40, 7);
        ellipse(gameChar_x-5, gameChar_y-35, 7);
        ellipse(gameChar_x-6, gameChar_y-30, 7);

        ellipse(gameChar_x-7, gameChar_y-65, 7);
        ellipse(gameChar_x-9, gameChar_y-60, 7);
        ellipse(gameChar_x-9, gameChar_y-55, 7);
        ellipse(gameChar_x-9, gameChar_y-50, 7);
        ellipse(gameChar_x-9, gameChar_y-45, 7);
        ellipse(gameChar_x-10, gameChar_y-40, 7);
        ellipse(gameChar_x-11, gameChar_y-35, 7);
        ellipse(gameChar_x-13, gameChar_y-30, 7);

        ellipse(gameChar_x-13, gameChar_y-65, 7);
        ellipse(gameChar_x-13, gameChar_y-62, 7);
        ellipse(gameChar_x-14, gameChar_y-57, 7);
        ellipse(gameChar_x-15, gameChar_y-52, 7);
        ellipse(gameChar_x-15, gameChar_y-47, 7);
        ellipse(gameChar_x-15, gameChar_y-42, 7);
        ellipse(gameChar_x-16, gameChar_y-37, 7);
        ellipse(gameChar_x-17, gameChar_y-32, 7);

        ellipse(gameChar_x-17, gameChar_y-60, 7);
        ellipse(gameChar_x-19, gameChar_y-57, 7);
        ellipse(gameChar_x-19, gameChar_y-51, 7);
        ellipse(gameChar_x-19, gameChar_y-48, 7);
        ellipse(gameChar_x-19, gameChar_y-43, 7);
        ellipse(gameChar_x-20, gameChar_y-38, 7);
        ellipse(gameChar_x-21, gameChar_y-33, 7);

        // beard
        noStroke();
        fill(115,38,0);
        //upper  
        ellipse(gameChar_x+13, gameChar_y-41, 7, 5);
        ellipse(gameChar_x+8, gameChar_y-41, 7, 5);
        ellipse(gameChar_x+3, gameChar_y-41, 7, 5);
        ellipse(gameChar_x+2, gameChar_y-38, 7, 5);
        ellipse(gameChar_x+1, gameChar_y-35, 7, 5);
        ellipse(gameChar_x+2, gameChar_y-35, 7, 5);
        ellipse(gameChar_x+3, gameChar_y-33, 7, 5);

        //lower
        ellipse(gameChar_x+10, gameChar_y-32, 7, 5);
        ellipse(gameChar_x+5, gameChar_y-31, 7, 5);
        ellipse(gameChar_x, gameChar_y-30, 7, 5);

        // crown
        noStroke();
        fill(255,215,0);
        beginShape();
        vertex(gameChar_x+12, gameChar_y-65);
        vertex(gameChar_x+14, gameChar_y-75);
        vertex(gameChar_x+9, gameChar_y-70);
        vertex(gameChar_x+4, gameChar_y-75);
        vertex(gameChar_x-1, gameChar_y-70);
        vertex(gameChar_x-6, gameChar_y-75);
        vertex(gameChar_x-11, gameChar_y-70);
        vertex(gameChar_x-16, gameChar_y-75);
        vertex(gameChar_x-13, gameChar_y-65);
        endShape(CLOSE);
        // Jewels
        noStroke();
        //rubies
        fill(132,27,45);
        ellipse(gameChar_x+11, gameChar_y-68, 3);
        ellipse(gameChar_x+1, gameChar_y-68, 3);
        ellipse(gameChar_x-9, gameChar_y-68, 3);
        // sapphires
        fill(15,82,186);
        ellipse(gameChar_x+6, gameChar_y-68, 3);
        ellipse(gameChar_x-4, gameChar_y-68, 3);
        ellipse(gameChar_x-13, gameChar_y-68, 3);

        //nose
        fill(255,230,179);
        strokeWeight(0.5);
        stroke(0);
        beginShape();
        vertex(gameChar_x+16, gameChar_y-50);
        vertex(gameChar_x+19, gameChar_y-43);
        vertex(gameChar_x+14, gameChar_y-43);
        endShape();

        // eyes
        // eyeballs
        noStroke();
        fill(255);
        ellipse(gameChar_x+12, gameChar_y-53, 10, 13);
        //irises
        noStroke();
        fill(25,178,255);
        ellipse(gameChar_x+14, gameChar_y-53, 6, 7);
        // pupils
        noStroke();
        fill(0);
        ellipse(gameChar_x+14, gameChar_y-53, 4, 5);
        
        // eyebrows
        stroke(84,42,0);
        strokeWeight(0.5);
        fill(110,55,0);
        quad(gameChar_x+7, gameChar_y-61, 
             gameChar_x+16, gameChar_y-63,
             gameChar_x+16, gameChar_y-61,
            gameChar_x+7, gameChar_y-59);

        // mouth
        noStroke();
        fill(0);
        ellipse(gameChar_x+10, gameChar_y-36, 6, 4);

        //hands
        stroke(161,109,227);
        strokeWeight(0.5);
        fill(255,230,179);
        ellipse(gameChar_x, gameChar_y-20, 11, 10);

        // boots
        stroke(103,103,103);
        fill(41,36,33);
        ellipse(gameChar_x-9, gameChar_y-4, 14, 12);
        ellipse(gameChar_x+9, gameChar_y-8, 14, 12);
	}
	else if(isLeft)
	{
		// walking left
        // body
        stroke(161,109,227);
        strokeWeight(1);
        fill(120,81,169);
        ellipse(gameChar_x, gameChar_y-20, 30, 35);
        noStroke();
        fill(248,248,255);
        // fluffy collar across
        ellipse(gameChar_x-14, gameChar_y-27, 3);
        ellipse(gameChar_x-12, gameChar_y-27, 3);
        ellipse(gameChar_x-10, gameChar_y-27.5, 3);
        ellipse(gameChar_x-8, gameChar_y-27.5, 3);
        ellipse(gameChar_x-6, gameChar_y-28, 3);
        ellipse(gameChar_x-4, gameChar_y-28.5, 3);
        ellipse(gameChar_x-2, gameChar_y-29, 3);
        ellipse(gameChar_x, gameChar_y-29.5, 3);
        ellipse(gameChar_x+2, gameChar_y-29, 3);
        ellipse(gameChar_x+4, gameChar_y-28.5, 3);
        ellipse(gameChar_x+6, gameChar_y-28, 3);
        ellipse(gameChar_x+8, gameChar_y-27.5, 3);
        ellipse(gameChar_x+10, gameChar_y-27.5, 3);
        ellipse(gameChar_x+12, gameChar_y-27, 3);
        ellipse(gameChar_x+14, gameChar_y-27, 3);
        //fluffy lining down
        ellipse(gameChar_x-15, gameChar_y-24, 3);
        ellipse(gameChar_x-15, gameChar_y-22, 3);
        ellipse(gameChar_x-15, gameChar_y-20, 3);
        ellipse(gameChar_x-15, gameChar_y-18, 3);
        ellipse(gameChar_x-14.5, gameChar_y-16, 3);
        ellipse(gameChar_x-14, gameChar_y-14, 3);
        ellipse(gameChar_x-13.5, gameChar_y-12, 3);
        ellipse(gameChar_x-13, gameChar_y-10, 3);
        ellipse(gameChar_x-12, gameChar_y-8, 3);
        ellipse(gameChar_x-11, gameChar_y-6, 3);
        ellipse(gameChar_x-9, gameChar_y-4, 3);

        // head
        stroke(255,204,102);
        strokeWeight(0.5);
        fill(255,230,179);
        ellipse(gameChar_x, gameChar_y-50, 30, 40);

        // hair
        noStroke();
        fill(115,38,0);
        //fringe
        ellipse(gameChar_x-10, gameChar_y-66, 7);
        ellipse(gameChar_x-5, gameChar_y-67, 7);
        ellipse(gameChar_x, gameChar_y-68, 7);
        ellipse(gameChar_x+5, gameChar_y-67 , 7);
        ellipse(gameChar_x+10, gameChar_y-66, 7);

        // long hair
        ellipse(gameChar_x-5, gameChar_y-65, 7);
        ellipse(gameChar_x-3, gameChar_y-63, 7);

        ellipse(gameChar_x, gameChar_y-65, 7);
        ellipse(gameChar_x, gameChar_y-60, 7);
        ellipse(gameChar_x, gameChar_y-55, 7);
        ellipse(gameChar_x, gameChar_y-50, 7);
        ellipse(gameChar_x, gameChar_y-45, 7);
        ellipse(gameChar_x, gameChar_y-40, 7);
        ellipse(gameChar_x+1, gameChar_y-35, 7);
        ellipse(gameChar_x+2, gameChar_y-30, 7);

        ellipse(gameChar_x+5, gameChar_y-65, 7);
        ellipse(gameChar_x+5, gameChar_y-60, 7);
        ellipse(gameChar_x+5, gameChar_y-55, 7);
        ellipse(gameChar_x+5, gameChar_y-50, 7);
        ellipse(gameChar_x+5, gameChar_y-45, 7);
        ellipse(gameChar_x+5, gameChar_y-40, 7);
        ellipse(gameChar_x+6, gameChar_y-35, 7);
        ellipse(gameChar_x+7, gameChar_y-30, 7);

        ellipse(gameChar_x+10, gameChar_y-65, 7);
        ellipse(gameChar_x+10, gameChar_y-60, 7);
        ellipse(gameChar_x+10, gameChar_y-55, 7);
        ellipse(gameChar_x+10, gameChar_y-50, 7);
        ellipse(gameChar_x+10, gameChar_y-45, 7);
        ellipse(gameChar_x+10, gameChar_y-40, 7);
        ellipse(gameChar_x+11, gameChar_y-35, 7);
        ellipse(gameChar_x+12, gameChar_y-30, 7);

        ellipse(gameChar_x+13, gameChar_y-60, 7);
        ellipse(gameChar_x+15, gameChar_y-55, 7);
        ellipse(gameChar_x+15, gameChar_y-50, 7);
        ellipse(gameChar_x+15, gameChar_y-45, 7);
        ellipse(gameChar_x+15, gameChar_y-40, 7);
        ellipse(gameChar_x+16, gameChar_y-35, 7);
        ellipse(gameChar_x+17, gameChar_y-30, 7);

        // beard
        noStroke();
        fill(115,38,0);
        //upper
        ellipse(gameChar_x-13, gameChar_y-41, 7, 5);
        ellipse(gameChar_x-8, gameChar_y-41, 7, 5);
        ellipse(gameChar_x-3, gameChar_y-41, 7, 5);

        //lower
        ellipse(gameChar_x-10, gameChar_y-32, 7, 5);
        ellipse(gameChar_x-5, gameChar_y-31, 7, 5);
        ellipse(gameChar_x, gameChar_y-30, 7, 5);

        // crown
        noStroke();
        fill(255,215,0);
        beginShape();
        vertex(gameChar_x-12, gameChar_y-65);
        vertex(gameChar_x-14, gameChar_y-75);
        vertex(gameChar_x-9, gameChar_y-70);
        vertex(gameChar_x-4, gameChar_y-75);
        vertex(gameChar_x+1, gameChar_y-70);
        vertex(gameChar_x+6, gameChar_y-75);
        vertex(gameChar_x+11, gameChar_y-70);
        vertex(gameChar_x+16, gameChar_y-75);
        vertex(gameChar_x+13, gameChar_y-65);
        endShape(CLOSE);
        // Jewels
        noStroke();
        //rubies
        fill(132,27,45);
        ellipse(gameChar_x-11, gameChar_y-68, 3);
        ellipse(gameChar_x-1, gameChar_y-68, 3);
        ellipse(gameChar_x+9, gameChar_y-68, 3);
        // sapphires
        fill(15,82,186);
        ellipse(gameChar_x-6, gameChar_y-68, 3);
        ellipse(gameChar_x+4, gameChar_y-68, 3);
        ellipse(gameChar_x+13, gameChar_y-68, 3);

        //nose
        fill(255,230,179);
        strokeWeight(0.5);
        stroke(0);
        beginShape();
        vertex(gameChar_x-16, gameChar_y-50);
        vertex(gameChar_x-19, gameChar_y-43);
        vertex(gameChar_x-14, gameChar_y-43);
        endShape();

        // eyes
        // eyeballs
        noStroke();
        fill(255);
        ellipse(gameChar_x-12, gameChar_y-53, 10, 13);
        //irises
        noStroke();
        fill(25,178,255);
        ellipse(gameChar_x-14, gameChar_y-53, 6, 7);
        // pupils
        noStroke();
        fill(0);
        ellipse(gameChar_x-14, gameChar_y-53, 4, 5);
        
        // eyebrows
        stroke(84,42,0);
        strokeWeight(0.5);
        fill(110,55,0);
        rect(gameChar_x-17, gameChar_y-61, 10, 2);

        // mouth
        stroke(0);
        strokeCap(ROUND);
        strokeWeight(1);
        line(gameChar_x-12, gameChar_y-37, gameChar_x-6, gameChar_y-37);
        strokeCap(SQUARE);

        //hands
        stroke(161,109,227);
        strokeWeight(0.5);
        fill(255,230,179);
        ellipse(gameChar_x, gameChar_y-20, 11, 10);

        // boots
        stroke(103,103,103);
        fill(41,36,33);
        ellipse(gameChar_x-9, gameChar_y-8, 14, 12);
        ellipse(gameChar_x+9, gameChar_y-4, 14, 12);

	}
	else if(isRight)
	{
		// walking right
        // body
        stroke(161,109,227);
        strokeWeight(1);
        fill(120,81,169);
        ellipse(gameChar_x, gameChar_y-20, 30, 35);
        noStroke();
        fill(248,248,255);
        // fluffy collar across
        ellipse(gameChar_x-14, gameChar_y-27, 3);
        ellipse(gameChar_x-12, gameChar_y-27, 3);
        ellipse(gameChar_x-10, gameChar_y-27.5, 3);
        ellipse(gameChar_x-8, gameChar_y-27.5, 3);
        ellipse(gameChar_x-6, gameChar_y-28, 3);
        ellipse(gameChar_x-4, gameChar_y-28.5, 3);
        ellipse(gameChar_x-2, gameChar_y-29, 3);
        ellipse(gameChar_x, gameChar_y-29.5, 3);
        ellipse(gameChar_x+2, gameChar_y-29, 3);
        ellipse(gameChar_x+4, gameChar_y-28.5, 3);
        ellipse(gameChar_x+6, gameChar_y-28, 3);
        ellipse(gameChar_x+8, gameChar_y-27.5, 3);
        ellipse(gameChar_x+10, gameChar_y-27.5, 3);
        ellipse(gameChar_x+12, gameChar_y-27, 3);
        ellipse(gameChar_x+14, gameChar_y-27, 3);
        //fluffy lining down
        ellipse(gameChar_x+15, gameChar_y-24, 3);
        ellipse(gameChar_x+15, gameChar_y-22, 3);
        ellipse(gameChar_x+15, gameChar_y-20, 3);
        ellipse(gameChar_x+15, gameChar_y-18, 3);
        ellipse(gameChar_x+14.5, gameChar_y-16, 3);
        ellipse(gameChar_x+14, gameChar_y-14, 3);
        ellipse(gameChar_x+13.5, gameChar_y-12, 3);
        ellipse(gameChar_x+13, gameChar_y-10, 3);
        ellipse(gameChar_x+12, gameChar_y-8, 3);
        ellipse(gameChar_x+11, gameChar_y-6, 3);
        ellipse(gameChar_x+9, gameChar_y-4, 3);

        // head
        stroke(255,204,102);
        strokeWeight(0.5);
        fill(255,230,179);
        ellipse(gameChar_x, gameChar_y-50, 30, 40);

        // hair
        noStroke();
        fill(115,38,0);
        //fringe
        ellipse(gameChar_x-10, gameChar_y-66, 7);
        ellipse(gameChar_x-5, gameChar_y-67, 7);
        ellipse(gameChar_x, gameChar_y-68, 7);
        ellipse(gameChar_x+5, gameChar_y-67 , 7);
        ellipse(gameChar_x+10, gameChar_y-66, 7);

        // long hair
        ellipse(gameChar_x+5, gameChar_y-65, 7);
        ellipse(gameChar_x+3, gameChar_y-63, 7);

        ellipse(gameChar_x, gameChar_y-65, 7);
        ellipse(gameChar_x, gameChar_y-60, 7);
        ellipse(gameChar_x, gameChar_y-55, 7);
        ellipse(gameChar_x, gameChar_y-50, 7);
        ellipse(gameChar_x, gameChar_y-45, 7);
        ellipse(gameChar_x, gameChar_y-40, 7);
        ellipse(gameChar_x-1, gameChar_y-35, 7);
        ellipse(gameChar_x-2, gameChar_y-30, 7);

        ellipse(gameChar_x-5, gameChar_y-65, 7);
        ellipse(gameChar_x-5, gameChar_y-60, 7);
        ellipse(gameChar_x-5, gameChar_y-55, 7);
        ellipse(gameChar_x-5, gameChar_y-50, 7);
        ellipse(gameChar_x-5, gameChar_y-45, 7);
        ellipse(gameChar_x-5, gameChar_y-40, 7);
        ellipse(gameChar_x-6, gameChar_y-35, 7);
        ellipse(gameChar_x-7, gameChar_y-30, 7);

        ellipse(gameChar_x-10, gameChar_y-65, 7);
        ellipse(gameChar_x-10, gameChar_y-60, 7);
        ellipse(gameChar_x-10, gameChar_y-55, 7);
        ellipse(gameChar_x-10, gameChar_y-50, 7);
        ellipse(gameChar_x-10, gameChar_y-45, 7);
        ellipse(gameChar_x-10, gameChar_y-40, 7);
        ellipse(gameChar_x-11, gameChar_y-35, 7);
        ellipse(gameChar_x-12, gameChar_y-30, 7);

        ellipse(gameChar_x-13, gameChar_y-60, 7);
        ellipse(gameChar_x-15, gameChar_y-55, 7);
        ellipse(gameChar_x-15, gameChar_y-50, 7);
        ellipse(gameChar_x-15, gameChar_y-45, 7);
        ellipse(gameChar_x-15, gameChar_y-40, 7);
        ellipse(gameChar_x-16, gameChar_y-35, 7);
        ellipse(gameChar_x-17, gameChar_y-30, 7);

        // beard
        noStroke();
        fill(115,38,0);
        //upper
        ellipse(gameChar_x+13, gameChar_y-41, 7, 5);
        ellipse(gameChar_x+8, gameChar_y-41, 7, 5);
        ellipse(gameChar_x+3, gameChar_y-41, 7, 5);

        //lower
        ellipse(gameChar_x+10, gameChar_y-32, 7, 5);
        ellipse(gameChar_x+5, gameChar_y-31, 7, 5);
        ellipse(gameChar_x, gameChar_y-30, 7, 5);

        // crown
        noStroke();
        fill(255,215,0);
        beginShape();
        vertex(gameChar_x+12, gameChar_y-65);
        vertex(gameChar_x+14, gameChar_y-75);
        vertex(gameChar_x+9, gameChar_y-70);
        vertex(gameChar_x+4, gameChar_y-75);
        vertex(gameChar_x-1, gameChar_y-70);
        vertex(gameChar_x-6, gameChar_y-75);
        vertex(gameChar_x-11, gameChar_y-70);
        vertex(gameChar_x-16, gameChar_y-75);
        vertex(gameChar_x-13, gameChar_y-65);
        endShape(CLOSE);
        // Jewels
        noStroke();
        //rubies
        fill(132,27,45);
        ellipse(gameChar_x+11, gameChar_y-68, 3);
        ellipse(gameChar_x+1, gameChar_y-68, 3);
        ellipse(gameChar_x-9, gameChar_y-68, 3);
        // sapphires
        fill(15,82,186);
        ellipse(gameChar_x+6, gameChar_y-68, 3);
        ellipse(gameChar_x-4, gameChar_y-68, 3);
        ellipse(gameChar_x-13, gameChar_y-68, 3);

        //nose
        fill(255,230,179);
        strokeWeight(0.5);
        stroke(0);
        beginShape();
        vertex(gameChar_x+16, gameChar_y-50);
        vertex(gameChar_x+19, gameChar_y-43);
        vertex(gameChar_x+14, gameChar_y-43);
        endShape();

        // eyes
        // eyeballs
        noStroke();
        fill(255);
        ellipse(gameChar_x+12, gameChar_y-53, 10, 13);
        //irises
        noStroke();
        fill(25,178,255);
        ellipse(gameChar_x+14, gameChar_y-53, 6, 7);
        // pupils
        noStroke();
        fill(0);
        ellipse(gameChar_x+14, gameChar_y-53, 4, 5);
        
        // eyebrows
        stroke(84,42,0);
        strokeWeight(0.5);
        fill(110,55,0);
        rect(gameChar_x+7, gameChar_y-61, 10, 2);

        // mouth
        stroke(0);
        strokeCap(ROUND);
        strokeWeight(1);
        line(gameChar_x+12, gameChar_y-37, gameChar_x+6, gameChar_y-37);
        strokeCap(SQUARE);

        //hands
        stroke(161,109,227);
        strokeWeight(0.5);
        fill(255,230,179);
        ellipse(gameChar_x, gameChar_y-22, 11, 10);

        // boots
        stroke(103,103,103);
        fill(41,36,33);
        ellipse(gameChar_x-9, gameChar_y-4, 14, 12);
        ellipse(gameChar_x+9, gameChar_y-8, 14, 12);

	}
	else if(isFalling || isPlummeting)
	{
		// jumping facing forwards
        // body
        stroke(161,109,227);
        strokeWeight(1);
        fill(120,81,169);
        ellipse(gameChar_x, gameChar_y-20, 44, 35);
        noStroke();
        fill(248,248,255);
        // fluffy collar across
        ellipse(gameChar_x-14, gameChar_y-28, 3);
        ellipse(gameChar_x-12, gameChar_y-28, 3);
        ellipse(gameChar_x-10, gameChar_y-27.5, 3);
        ellipse(gameChar_x-8, gameChar_y-27.5, 3);
        ellipse(gameChar_x-6, gameChar_y-27, 3);
        ellipse(gameChar_x-4, gameChar_y-27, 3);
        ellipse(gameChar_x-2, gameChar_y-26.5, 3);
        ellipse(gameChar_x, gameChar_y-26, 3);
        ellipse(gameChar_x+2, gameChar_y-26.5, 3);
        ellipse(gameChar_x+4, gameChar_y-27, 3);
        ellipse(gameChar_x+6, gameChar_y-27, 3);
        ellipse(gameChar_x+8, gameChar_y-27.5, 3);
        ellipse(gameChar_x+10, gameChar_y-27.5, 3);
        ellipse(gameChar_x+12, gameChar_y-28, 3);
        ellipse(gameChar_x+14, gameChar_y-28, 3);
        //fluffy lining down
        ellipse(gameChar_x, gameChar_y-24, 3);
        ellipse(gameChar_x, gameChar_y-22, 3);
        ellipse(gameChar_x, gameChar_y-20, 3);
        ellipse(gameChar_x, gameChar_y-18, 3);
        ellipse(gameChar_x, gameChar_y-16, 3);
        ellipse(gameChar_x, gameChar_y-14, 3);
        ellipse(gameChar_x, gameChar_y-12, 3);
        ellipse(gameChar_x, gameChar_y-10, 3);
        ellipse(gameChar_x, gameChar_y-8, 3);
        ellipse(gameChar_x, gameChar_y-6, 3);
        ellipse(gameChar_x, gameChar_y-4, 3);

        // head
        stroke(255,204,102);
        strokeWeight(0.5);
        fill(255,230,179);
        ellipse(gameChar_x, gameChar_y-50, 40);

        // hair
        noStroke();
        fill(115,38,0);
        //fringe
        ellipse(gameChar_x-15, gameChar_y-65, 7);
        ellipse(gameChar_x-10, gameChar_y-66, 7);
        ellipse(gameChar_x-5, gameChar_y-66, 7);
        ellipse(gameChar_x, gameChar_y-66, 7);
        ellipse(gameChar_x+5, gameChar_y-66, 7);
        ellipse(gameChar_x+10, gameChar_y-66, 7);
        ellipse(gameChar_x+15, gameChar_y-65, 7);
        // left locks
        ellipse(gameChar_x-18, gameChar_y-60, 7);
        ellipse(gameChar_x-19, gameChar_y-56, 7);
        ellipse(gameChar_x-19.5, gameChar_y-52, 7);
        ellipse(gameChar_x-20, gameChar_y-48, 7);
        ellipse(gameChar_x-20.5, gameChar_y-44, 7);
        ellipse(gameChar_x-21, gameChar_y-40, 7);
        ellipse(gameChar_x-21.5, gameChar_y-36, 7);
        // right locks
        ellipse(gameChar_x+18, gameChar_y-60, 7);
        ellipse(gameChar_x+19, gameChar_y-56, 7);
        ellipse(gameChar_x+19.5, gameChar_y-52, 7);
        ellipse(gameChar_x+20, gameChar_y-48, 7);
        ellipse(gameChar_x+20.5, gameChar_y-44, 7);
        ellipse(gameChar_x+21, gameChar_y-40, 7);
        ellipse(gameChar_x+21.5, gameChar_y-36, 7);

        // beard
        noStroke();
        fill(115,38,0);
        //upper
        ellipse(gameChar_x-15, gameChar_y-40.5, 7, 5);
        ellipse(gameChar_x-10, gameChar_y-41, 7, 5);
        ellipse(gameChar_x-5, gameChar_y-42, 7, 5);
        ellipse(gameChar_x, gameChar_y-43, 7, 5);
        ellipse(gameChar_x+5, gameChar_y-42, 7, 5);
        ellipse(gameChar_x+10, gameChar_y-41, 7, 5);
        ellipse(gameChar_x+15, gameChar_y-40.5, 7, 5);
        //lower
        ellipse(gameChar_x-18, gameChar_y-37, 7, 5);
        ellipse(gameChar_x-15, gameChar_y-33, 7, 5);
        ellipse(gameChar_x-10, gameChar_y-32, 7, 5);
        ellipse(gameChar_x-5, gameChar_y-31, 7, 5);
        ellipse(gameChar_x, gameChar_y-30, 7, 5);
        ellipse(gameChar_x+5, gameChar_y-31, 7, 5);
        ellipse(gameChar_x+10, gameChar_y-32, 7, 5);
        ellipse(gameChar_x+15, gameChar_y-33, 7, 5);
        ellipse(gameChar_x+18, gameChar_y-37, 7, 5);

        // crown
        noStroke();
        fill(255,215,0);
        beginShape();
        vertex(gameChar_x-18, gameChar_y-65);
        vertex(gameChar_x-20, gameChar_y-75);
        vertex(gameChar_x-15, gameChar_y-70);
        vertex(gameChar_x-10, gameChar_y-75);
        vertex(gameChar_x-5, gameChar_y-70);
        vertex(gameChar_x, gameChar_y-75);
        vertex(gameChar_x+5, gameChar_y-70);
        vertex(gameChar_x+10, gameChar_y-75);
        vertex(gameChar_x+15, gameChar_y-70);
        vertex(gameChar_x+20, gameChar_y-75);
        vertex(gameChar_x+18, gameChar_y-65);
        endShape(CLOSE);
        // Jewels
        noStroke();
        //rubies
        fill(132,27,45);
        ellipse(gameChar_x-18, gameChar_y-68, 3);
        ellipse(gameChar_x-10, gameChar_y-68, 3);
        ellipse(gameChar_x, gameChar_y-68, 3);
        ellipse(gameChar_x+10, gameChar_y-68, 3);
        ellipse(gameChar_x+18, gameChar_y-68, 3);
        // sapphires
        fill(15,82,186);
        ellipse(gameChar_x-14, gameChar_y-68, 3);
        ellipse(gameChar_x-5, gameChar_y-68, 3);
        ellipse(gameChar_x+5, gameChar_y-68, 3);
        ellipse(gameChar_x+14, gameChar_y-68, 3);
        
        // eyeballs
        stroke(255,221,153);
        strokeWeight(0.5);
        fill(255);
        ellipse(gameChar_x-6, gameChar_y-54, 15);
        ellipse(gameChar_x+6, gameChar_y-54, 15);

        //irises
        noStroke();
        fill(25,178,255);
        ellipse(gameChar_x-6, gameChar_y-54, 8.5);
        ellipse(gameChar_x+6, gameChar_y-54, 8.5);

        // pupils
        noStroke();
        fill(0);
        ellipse(gameChar_x-6, gameChar_y-54, 7);
        ellipse(gameChar_x+6, gameChar_y-54, 7);

        // eyebrows
        stroke(84,42,0);
        strokeWeight(0.5);
        fill(110,55,0);
        quad(gameChar_x-16, gameChar_y-61,
             gameChar_x-3, gameChar_y-63, 
             gameChar_x-3, gameChar_y-61, 
             gameChar_x-16, gameChar_y-59);
        quad(gameChar_x+16, gameChar_y-61,
             gameChar_x+3, gameChar_y-63, 
             gameChar_x+3, gameChar_y-61, 
             gameChar_x+16, gameChar_y-59);

        //nose
        fill(255,230,179);
        strokeWeight(0.5);
        stroke(0);
        beginShape();
        vertex(gameChar_x, gameChar_y-50);
        vertex(gameChar_x-3, gameChar_y-43);
        vertex(gameChar_x+2, gameChar_y-43);
        endShape();

        // mouth
        noStroke();
        fill(0);
        ellipse(gameChar_x, gameChar_y-37, 14, 7);
        //hands
        stroke(161,109,227);
        strokeWeight(0.5);
        fill(255,230,179);
        ellipse(gameChar_x-18.5, gameChar_y-23, 11, 10);
        ellipse(gameChar_x+18.5, gameChar_y-23, 11, 10);

        // boots
        stroke(103,103,103);
        fill(41,36,33);
        ellipse(gameChar_x-9, gameChar_y-5, 14, 12);
        ellipse(gameChar_x+9, gameChar_y-7, 14, 12);

	}
    else if(lives == 0)
    {
        // sad gameChar for game over
        // body
        stroke(161,109,227);
        strokeWeight(1);
        fill(120,81,169);
        ellipse(gameChar_x, gameChar_y-20, 44, 35);
        noStroke();
        fill(248,248,255);
        // fluffy collar across
        ellipse(gameChar_x-14, gameChar_y-28, 3);
        ellipse(gameChar_x-12, gameChar_y-28, 3);
        ellipse(gameChar_x-10, gameChar_y-27.5, 3);
        ellipse(gameChar_x-8, gameChar_y-27.5, 3);
        ellipse(gameChar_x-6, gameChar_y-27, 3);
        ellipse(gameChar_x-4, gameChar_y-27, 3);
        ellipse(gameChar_x-2, gameChar_y-26.5, 3);
        ellipse(gameChar_x, gameChar_y-26, 3);
        ellipse(gameChar_x+2, gameChar_y-26.5, 3);
        ellipse(gameChar_x+4, gameChar_y-27, 3);
        ellipse(gameChar_x+6, gameChar_y-27, 3);
        ellipse(gameChar_x+8, gameChar_y-27.5, 3);
        ellipse(gameChar_x+10, gameChar_y-27.5, 3);
        ellipse(gameChar_x+12, gameChar_y-28, 3);
        ellipse(gameChar_x+14, gameChar_y-28, 3);
        //fluffy lining down
        ellipse(gameChar_x, gameChar_y-24, 3);
        ellipse(gameChar_x, gameChar_y-22, 3);
        ellipse(gameChar_x, gameChar_y-20, 3);
        ellipse(gameChar_x, gameChar_y-18, 3);
        ellipse(gameChar_x, gameChar_y-16, 3);
        ellipse(gameChar_x, gameChar_y-14, 3);
        ellipse(gameChar_x, gameChar_y-12, 3);
        ellipse(gameChar_x, gameChar_y-10, 3);
        ellipse(gameChar_x, gameChar_y-8, 3);
        ellipse(gameChar_x, gameChar_y-6, 3);
        ellipse(gameChar_x, gameChar_y-4, 3);


        // head
        stroke(255,204,102);
        strokeWeight(0.5);
        fill(255,230,179);
        ellipse(gameChar_x, gameChar_y-50, 40);

        // hair
        noStroke();
        fill(115,38,0);
        //fringe
        ellipse(gameChar_x-15, gameChar_y-65, 7);
        ellipse(gameChar_x-10, gameChar_y-66, 7);
        ellipse(gameChar_x-5, gameChar_y-66, 7);
        ellipse(gameChar_x, gameChar_y-66, 7);
        ellipse(gameChar_x+5, gameChar_y-66, 7);
        ellipse(gameChar_x+10, gameChar_y-66, 7);
        ellipse(gameChar_x+15, gameChar_y-65, 7);
        // left locks
        ellipse(gameChar_x-18, gameChar_y-60, 7);
        ellipse(gameChar_x-19, gameChar_y-55, 7);
        ellipse(gameChar_x-19, gameChar_y-50, 7);
        ellipse(gameChar_x-19, gameChar_y-45, 7);
        ellipse(gameChar_x-19, gameChar_y-40, 7);
        ellipse(gameChar_x-19, gameChar_y-35, 7);
        ellipse(gameChar_x-18, gameChar_y-30, 7);
        // right locks
        ellipse(gameChar_x+18, gameChar_y-60, 7);
        ellipse(gameChar_x+19, gameChar_y-55, 7);
        ellipse(gameChar_x+19, gameChar_y-50, 7);
        ellipse(gameChar_x+19, gameChar_y-45, 7);
        ellipse(gameChar_x+19, gameChar_y-40, 7);
        ellipse(gameChar_x+19, gameChar_y-35, 7);
        ellipse(gameChar_x+18, gameChar_y-30, 7);

        // beard
        noStroke();
        fill(115,38,0);
        //upper
        ellipse(gameChar_x-15, gameChar_y-40.5, 7, 5);
        ellipse(gameChar_x-10, gameChar_y-41, 7, 5);
        ellipse(gameChar_x-5, gameChar_y-42, 7, 5);
        ellipse(gameChar_x, gameChar_y-43, 7, 5);
        ellipse(gameChar_x+5, gameChar_y-42, 7, 5);
        ellipse(gameChar_x+10, gameChar_y-41, 7, 5);
        ellipse(gameChar_x+15, gameChar_y-40.5, 7, 5);
        //lower
        ellipse(gameChar_x-18, gameChar_y-37, 7, 5);
        ellipse(gameChar_x-15, gameChar_y-33, 7, 5);
        ellipse(gameChar_x-10, gameChar_y-32, 7, 5);
        ellipse(gameChar_x-5, gameChar_y-31, 7, 5);
        ellipse(gameChar_x, gameChar_y-30, 7, 5);
        ellipse(gameChar_x+5, gameChar_y-31, 7, 5);
        ellipse(gameChar_x+10, gameChar_y-32, 7, 5);
        ellipse(gameChar_x+15, gameChar_y-33, 7, 5);
        ellipse(gameChar_x+18, gameChar_y-37, 7, 5);

        // crown
        noStroke();
        fill(255,215,0);
        beginShape();
        vertex(gameChar_x-18, gameChar_y-65);
        vertex(gameChar_x-20, gameChar_y-75);
        vertex(gameChar_x-15, gameChar_y-70);
        vertex(gameChar_x-10, gameChar_y-75);
        vertex(gameChar_x-5, gameChar_y-70);
        vertex(gameChar_x, gameChar_y-75);
        vertex(gameChar_x+5, gameChar_y-70);
        vertex(gameChar_x+10, gameChar_y-75);
        vertex(gameChar_x+15, gameChar_y-70);
        vertex(gameChar_x+20, gameChar_y-75);
        vertex(gameChar_x+18, gameChar_y-65);
        endShape(CLOSE);
        // Jewels
        noStroke();
        //rubies
        fill(132,27,45);
        ellipse(gameChar_x-18, gameChar_y-68, 3);
        ellipse(gameChar_x-10, gameChar_y-68, 3);
        ellipse(gameChar_x, gameChar_y-68, 3);
        ellipse(gameChar_x+10, gameChar_y-68, 3);
        ellipse(gameChar_x+18, gameChar_y-68, 3);
        // sapphires
        fill(15,82,186);
        ellipse(gameChar_x-14, gameChar_y-68, 3);
        ellipse(gameChar_x-5, gameChar_y-68, 3);
        ellipse(gameChar_x+5, gameChar_y-68, 3);
        ellipse(gameChar_x+14, gameChar_y-68, 3);
        // eyeballs
        stroke(255,221,153);
        strokeWeight(0.5);
        fill(255);
        ellipse(gameChar_x-7, gameChar_y-54, 15);
        ellipse(gameChar_x+7, gameChar_y-54, 15);

        //irises
        noStroke();
        fill(25,178,255);
        ellipse(gameChar_x-6, gameChar_y-52, 8.5);
        ellipse(gameChar_x+6, gameChar_y-52, 8.5);

        // pupils
        noStroke();
        fill(0);
        ellipse(gameChar_x-6, gameChar_y-52, 7);
        ellipse(gameChar_x+6, gameChar_y-52, 7);

        // eyebrows
        stroke(84,42,0);
        strokeWeight(0.5);
        fill(110,55,0);
         quad(gameChar_x-16, gameChar_y-59,
             gameChar_x-3, gameChar_y-61, 
             gameChar_x-3, gameChar_y-59, 
             gameChar_x-16, gameChar_y-57);
        quad(gameChar_x+16, gameChar_y-59,
             gameChar_x+3, gameChar_y-61, 
             gameChar_x+3, gameChar_y-59, 
             gameChar_x+16, gameChar_y-57);

        //nose
        fill(255,230,179);
        strokeWeight(0.5);
        stroke(0);
        beginShape();
        vertex(gameChar_x, gameChar_y-50);
        vertex(gameChar_x-3, gameChar_y-43);
        vertex(gameChar_x+2, gameChar_y-43);
        endShape();

        // mouth
        fill(0);
        noStroke();
        arc(gameChar_x, gameChar_y-34, 12, 12, PI, 0);

        //hands
        stroke(161,109,227);
        strokeWeight(0.5);
        fill(255,230,179);
        ellipse(gameChar_x-18, gameChar_y-22, 11, 10);
        ellipse(gameChar_x+18, gameChar_y-22, 11, 10);

        // boots
        stroke(103,103,103);
        fill(41,36,33);
        ellipse(gameChar_x-9, gameChar_y-3, 14, 12);
        ellipse(gameChar_x+9, gameChar_y-3, 14, 12);
    }
    else
	{
        // standing facing forwards
        // body
        stroke(161,109,227);
        strokeWeight(1);
        fill(120,81,169);
        ellipse(gameChar_x, gameChar_y-20, 44, 35);
        noStroke();
        fill(248,248,255);
        // fluffy collar across
        ellipse(gameChar_x-14, gameChar_y-28, 3);
        ellipse(gameChar_x-12, gameChar_y-28, 3);
        ellipse(gameChar_x-10, gameChar_y-27.5, 3);
        ellipse(gameChar_x-8, gameChar_y-27.5, 3);
        ellipse(gameChar_x-6, gameChar_y-27, 3);
        ellipse(gameChar_x-4, gameChar_y-27, 3);
        ellipse(gameChar_x-2, gameChar_y-26.5, 3);
        ellipse(gameChar_x, gameChar_y-26, 3);
        ellipse(gameChar_x+2, gameChar_y-26.5, 3);
        ellipse(gameChar_x+4, gameChar_y-27, 3);
        ellipse(gameChar_x+6, gameChar_y-27, 3);
        ellipse(gameChar_x+8, gameChar_y-27.5, 3);
        ellipse(gameChar_x+10, gameChar_y-27.5, 3);
        ellipse(gameChar_x+12, gameChar_y-28, 3);
        ellipse(gameChar_x+14, gameChar_y-28, 3);
        //fluffy lining down
        ellipse(gameChar_x, gameChar_y-24, 3);
        ellipse(gameChar_x, gameChar_y-22, 3);
        ellipse(gameChar_x, gameChar_y-20, 3);
        ellipse(gameChar_x, gameChar_y-18, 3);
        ellipse(gameChar_x, gameChar_y-16, 3);
        ellipse(gameChar_x, gameChar_y-14, 3);
        ellipse(gameChar_x, gameChar_y-12, 3);
        ellipse(gameChar_x, gameChar_y-10, 3);
        ellipse(gameChar_x, gameChar_y-8, 3);
        ellipse(gameChar_x, gameChar_y-6, 3);
        ellipse(gameChar_x, gameChar_y-4, 3);

        // head
        stroke(255,204,102);
        strokeWeight(0.5);
        fill(255,230,179);
        ellipse(gameChar_x, gameChar_y-50, 40);

        // hair
        noStroke();
        fill(115,38,0);
        //fringe
        ellipse(gameChar_x-15, gameChar_y-65, 7);
        ellipse(gameChar_x-10, gameChar_y-66, 7);
        ellipse(gameChar_x-5, gameChar_y-66, 7);
        ellipse(gameChar_x, gameChar_y-66, 7);
        ellipse(gameChar_x+5, gameChar_y-66, 7);
        ellipse(gameChar_x+10, gameChar_y-66, 7);
        ellipse(gameChar_x+15, gameChar_y-65, 7);
        // left locks
        ellipse(gameChar_x-18, gameChar_y-60, 7);
        ellipse(gameChar_x-19, gameChar_y-55, 7);
        ellipse(gameChar_x-19, gameChar_y-50, 7);
        ellipse(gameChar_x-19, gameChar_y-45, 7);
        ellipse(gameChar_x-19, gameChar_y-40, 7);
        ellipse(gameChar_x-19, gameChar_y-35, 7);
        ellipse(gameChar_x-18, gameChar_y-30, 7);
        // right locks
        ellipse(gameChar_x+18, gameChar_y-60, 7);
        ellipse(gameChar_x+19, gameChar_y-55, 7);
        ellipse(gameChar_x+19, gameChar_y-50, 7);
        ellipse(gameChar_x+19, gameChar_y-45, 7);
        ellipse(gameChar_x+19, gameChar_y-40, 7);
        ellipse(gameChar_x+19, gameChar_y-35, 7);
        ellipse(gameChar_x+18, gameChar_y-30, 7);

        // beard
        noStroke();
        fill(115,38,0);
        //upper
        ellipse(gameChar_x-15, gameChar_y-40.5, 7, 5);
        ellipse(gameChar_x-10, gameChar_y-41, 7, 5);
        ellipse(gameChar_x-5, gameChar_y-42, 7, 5);
        ellipse(gameChar_x, gameChar_y-43, 7, 5);
        ellipse(gameChar_x+5, gameChar_y-42, 7, 5);
        ellipse(gameChar_x+10, gameChar_y-41, 7, 5);
        ellipse(gameChar_x+15, gameChar_y-40.5, 7, 5);
        //lower
        ellipse(gameChar_x-18, gameChar_y-37, 7, 5);
        ellipse(gameChar_x-15, gameChar_y-33, 7, 5);
        ellipse(gameChar_x-10, gameChar_y-32, 7, 5);
        ellipse(gameChar_x-5, gameChar_y-31, 7, 5);
        ellipse(gameChar_x, gameChar_y-30, 7, 5);
        ellipse(gameChar_x+5, gameChar_y-31, 7, 5);
        ellipse(gameChar_x+10, gameChar_y-32, 7, 5);
        ellipse(gameChar_x+15, gameChar_y-33, 7, 5);
        ellipse(gameChar_x+18, gameChar_y-37, 7, 5);

        // crown
        noStroke();
        fill(255,215,0);
        beginShape();
        vertex(gameChar_x-18, gameChar_y-65);
        vertex(gameChar_x-20, gameChar_y-75);
        vertex(gameChar_x-15, gameChar_y-70);
        vertex(gameChar_x-10, gameChar_y-75);
        vertex(gameChar_x-5, gameChar_y-70);
        vertex(gameChar_x, gameChar_y-75);
        vertex(gameChar_x+5, gameChar_y-70);
        vertex(gameChar_x+10, gameChar_y-75);
        vertex(gameChar_x+15, gameChar_y-70);
        vertex(gameChar_x+20, gameChar_y-75);
        vertex(gameChar_x+18, gameChar_y-65);
        endShape(CLOSE);
        // Jewels
        noStroke();
        //rubies
        fill(132,27,45);
        ellipse(gameChar_x-18, gameChar_y-68, 3);
        ellipse(gameChar_x-10, gameChar_y-68, 3);
        ellipse(gameChar_x, gameChar_y-68, 3);
        ellipse(gameChar_x+10, gameChar_y-68, 3);
        ellipse(gameChar_x+18, gameChar_y-68, 3);
        // sapphires
        fill(15,82,186);
        ellipse(gameChar_x-14, gameChar_y-68, 3);
        ellipse(gameChar_x-5, gameChar_y-68, 3);
        ellipse(gameChar_x+5, gameChar_y-68, 3);
        ellipse(gameChar_x+14, gameChar_y-68, 3);
        
        // eyeballs
        stroke(255,221,153);
        strokeWeight(0.5);
        fill(255);
        ellipse(gameChar_x-7, gameChar_y-54, 15);
        ellipse(gameChar_x+7, gameChar_y-54, 15);

        //irises
        noStroke();
        fill(25,178,255);
        ellipse(gameChar_x-6, gameChar_y-54, 8.5);
        ellipse(gameChar_x+6, gameChar_y-54, 8.5);

        // pupils
        noStroke();
        fill(0);
        ellipse(gameChar_x-6, gameChar_y-54, 7);
        ellipse(gameChar_x+6, gameChar_y-54, 7);

        // eyebrows
        stroke(84,42,0);
        strokeWeight(0.5);
        fill(110,55,0);
        rect(gameChar_x-15, gameChar_y-61, 13, 2);
        rect(gameChar_x+2, gameChar_y-60, 13, 2);

        //nose
        fill(255,230,179);
        strokeWeight(0.5);
        stroke(0);
        beginShape();
        vertex(gameChar_x, gameChar_y-50);
        vertex(gameChar_x-3, gameChar_y-43);
        vertex(gameChar_x+2, gameChar_y-43);
        endShape();

        // mouth
        stroke(0);
        strokeCap(ROUND);
        strokeWeight(1);
        line(gameChar_x-6, gameChar_y-37, gameChar_x+6, gameChar_y-38);
        strokeCap(SQUARE);
        //hands
        stroke(161,109,227);
        strokeWeight(0.5);
        fill(255,230,179);
        ellipse(gameChar_x-18, gameChar_y-20, 11, 10);
        ellipse(gameChar_x+18, gameChar_y-20, 11, 10);

        // boots
        stroke(103,103,103);
        fill(41,36,33);
        ellipse(gameChar_x-9, gameChar_y-4, 14, 12);
        ellipse(gameChar_x+9, gameChar_y-4, 14, 12);
    
	}
}
