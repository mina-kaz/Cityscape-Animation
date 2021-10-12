class Building
{
	// Create and initialise the object
	constructor(x, y, w, orient, wndW, wndH, space)
	{
		this.x = x;
		this.y = y;
		this.width = w;
		this.windowXOffset = 10;
		this.windowYOffset = 20;
		this.windowOffset = 60;
		this.windowHeight = 30;
    this.windowOrient = orient;
    this.tableWindowHeight = wndH;
    this.tableWindowWidth = wndW;
    this.tableRoofSpace = space;
		this.windowCol = "#5F5E5E";
	}
	// Change the colour of the window
	colorWindows(day)
	{
		if (day)
		{
			this.windowCol = "#5F5E5E";
		}
		else
		{
			this.windowCol = "#E9DD76";
		}
	}
	draw()
	{
    // Set the colour of the buildings and draw it on screen
    var colorbuilding = draw.createLinearGradient(0, 0, 1000, 0);
    colorbuilding.addColorStop(0,"#424242");
    colorbuilding.addColorStop(1,"#CECCCA");
    draw.fillStyle = colorbuilding;
    draw.fillRect(this.x, this.y, this.width, canvas.height - this.y);

		// Set the colour of the roof top of the buildings and draw it
		draw.fillStyle = "#B6B3B3";
    draw.fillRect(this.x + (2 * this.windowXOffset),
				 this.y - this.windowYOffset,
				 this.width - (4 * this.windowXOffset), 20);

		var windowStartX = this.x + this.windowXOffset;
    draw.fillStyle = this.windowCol;

    if (this.windowOrient == "horizontal")
    {
				// Draw horizontal windows
        for (var windowStartY = this.y + this.windowYOffset; windowStartY < canvas.height - this.windowOffset; windowStartY += this.windowOffset)
				{
           draw.fillRect(windowStartX, windowStartY, this.width - (2 * this.windowXOffset), this.windowHeight);
			  }
    }

    else if (this.windowOrient == "vertical")
    {
       this.windowXOffset = 30;
        var windowStartY = this.y + this.windowOffset;
				// Draw vertical windows
        for (var windowStartX = this.x + this.windowXOffset; windowStartX < this.x + this.width - this.windowXOffset; windowStartX += this.windowOffset)
				{
            draw.fillRect(windowStartX, windowStartY, this.windowHeight, canvas.height - this.y - (2 * this.windowOffset));
				}
    }
    else if (this.windowOrient == "table")
    {
			draw.fillStyle = "#BD8C56";
			draw.fillRect(this.x, this.y, this.width, canvas.height - this.y);
				// Draw the table windows
        for (var tableWindowY = this.y + this.tableRoofSpace; tableWindowY < canvas.height; tableWindowY += this.tableWindowHeight)
        {
              for (var tableWindowX = this.x; tableWindowX < this.width + this.x; tableWindowX += this.tableWindowWidth)
              {
									draw.fillStyle = "white";
									draw.fillRect(tableWindowX, tableWindowY, this.tableWindowWidth, this.tableWindowHeight);
									draw.strokeStyle = "#BD8C56";
                  draw.strokeRect(tableWindowX, tableWindowY, this.tableWindowWidth, this.tableWindowHeight);

              }
        }
    }
		else {
		{		// Draw the shadow of the building in the distance
				draw.fillStyle = "#6F736F";
				draw.fillRect(this.x, this.y, this.width, canvas.height - this.y);
				draw.fillStyle = "#6F736F";
		    draw.fillRect(this.x + (2 * this.windowXOffset),
						 this.y - this.windowYOffset,
						 this.width - (4 * this.windowXOffset), 20);

		}
		}
 }
}
