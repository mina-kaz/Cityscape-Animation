class Moon{
	// Create and initialise the object
	constructor(cx, cy, cw, ch, r, a)
	{
		this.ellipseX = cx;
		this.ellipseY = cy;
		this.ellipseW = cw;
		this.ellipseH = ch;
		this.x = this.ellipseX + this.ellipseW * Math.cos(a);
		this.y = this.ellipseY + this.ellipseH * Math.sin(a);
		this.r = r;
		this.angle = a;
    this.cresentOffset = 63;
	}
	// Move the moon along the path of an eclipse
	move(spd)
	{
		this.angle += spd;
		this.x = this.ellipseX + this.ellipseW * Math.cos(this.angle);
		this.y = this.ellipseY + this.ellipseH * Math.sin(this.angle);
	}
	draw()
	{
		// Draw the shape of the moon
    draw.beginPath();
    draw.arc(this.x, this.y, this.r, 0.4 * Math.PI, 1.6 * Math.PI);
    draw.fillStyle = "#C0C0C0";
    draw.fill();
    draw.beginPath();
    draw.arc(this.x + this.cresentOffset, this.y, this.r, 0.6*Math.PI, 1.4 * Math.PI);
    draw.fillStyle = "black";
    draw.fill();
	}
}
