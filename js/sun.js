class Sun{
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
	}
	// Move the sun along the path of an eclipse
	move(spd)
	{
		this.angle += spd;
		this.x = this.ellipseX + this.ellipseW * Math.cos(this.angle);
		this.y = this.ellipseY + this.ellipseH * Math.sin(this.angle);
	}
  draw()
  {
		// Draw the shape of the sun
    draw.beginPath();
    draw.shadowBlur = 20;
    draw.shadowColor = "#E1D363";
    draw.fillStyle = "yellow";
    draw.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    draw.fill();
    draw.strokeStyle = "white";
    draw.lineWidth = 2;
    draw.stroke();
    draw.shadowBlur = 0;
  }
}
