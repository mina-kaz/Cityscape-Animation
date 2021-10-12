class Cloud
{
	// Create and initialise the object
	constructor(x,y,r,spd)
	{
    this.x = x;
    this.y = y;
    this.r = r;
    this.speed = spd;
		this.cloudLength = 3 * this.r;
	}
  move()
  {
    this.x += this.speed;
		// Move the cloud to the other side if it is out of bounds
		if (this.x > canvas.width + this.cloudLength)
		{
			this.x = - this.cloudLength;
		}
		else if (this.x < - this.cloudLength)
		{
			this.x = canvas.width + this.r;
		}
  }
	// Draw the cloud
  draw()
  {
    draw.beginPath();
    draw.arc(this.x, this.y, this.r, Math.PI, - 0.5 * Math.PI);
    draw.arc(this.x + this.r, this.y - this.r, this.r, Math.PI, 0);
    draw.arc(this.x + (2 * this.r), this.y, this.r, - 0.5 * Math.PI, 0);
    draw.moveTo(this.x - this.r, this.y);
    draw.lineTo(this.x + this.cloudLength, this.y);
    draw.fillStyle = "#E7E6DF";
    draw.fill();
    draw.strokeStyle = "white";
    draw.stroke();
  }
}
