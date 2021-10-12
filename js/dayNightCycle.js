class DayNightCycle{
	// Create and initialise the object
	constructor(cx, cy, cw, ch, r, a, spd)
	{
		this.ellipseX = cx;
		this.ellipseY = cy;
		this.ellipseW = cw;
		this.ellipseH = ch;
		this.sun = new Sun(this.ellipseX, this.ellipseY, this.ellipseW, this.ellipseH, r, a);
	  this.moon = new Moon(this.ellipseX, this.ellipseY, this.ellipseW, this.ellipseH,  r, -a);
		this.spd = spd;
	}
	cycle()
	{
    var day = true;
		if (this.sun.y < canvas.height / 2)
  	{
      // Clear the canvas and set it as blue (day)
      var clearCanvas = draw.createLinearGradient(0, 0, 1000, 0);
      clearCanvas.addColorStop(0,"#1E88E5");
      clearCanvas.addColorStop(1,"#E3F2FD");

      draw.fillStyle = clearCanvas;
      draw.clearRect(0, 0, canvas.width, canvas.height);
    }
		else
		{
      // Clear the canvas and set it as black (night)
      draw.fillStyle = "black";
      draw.fillRect(0, 0, canvas.width, canvas.height);
      day = false;
    }
		// Draw and animate the sun and the moon on screen 
		this.sun.move(this.spd);
		this.sun.draw();
		this.moon.move(this.spd);
		this.moon.draw();
    return day;
	}
}
