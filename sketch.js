function setup()
{
	//create a canvas for the robot
	createCanvas(500, 500);
}

function draw()
{
	strokeWeight(6);
//
	//robots head
	fill(250,200,200);
	rect(100, 100, 300, 300, 30);


	//robots antenna
	fill(250, 250, 0);
	ellipse(250, 70, 60, 60);

	fill(200, 0, 200);
	rect(210, 80, 80, 30);

	//robots eyes
	fill(255);
	ellipse(175, 200, 80, 80);
	point(175, 200);
	ellipse(325, 200, 80, 80);
	point(325, 200);


	//robots nose
	fill(255, 0, 0);
//	triangle(250, 220, 200, 300, 300, 300);
    ellipse(250,255,75,75);

	//robots ears
	rect(80, 180, 30, 100);
	rect(390, 180, 30, 100);

    
    
    var mouth = -20;
	//robots mouth
    translate(20,0)
	noFill();
	beginShape();
	vertex(175 + mouth, 340 + mouth);
	vertex(200 + mouth, 370 + mouth);
	vertex(225 + mouth, 340 + mouth);
	vertex(250 + mouth, 370 + mouth);
	vertex(275 + mouth, 340 + mouth);
	vertex(300 + mouth, 370 + mouth);
	vertex(325 + mouth, 340 + mouth);
	endShape();
}