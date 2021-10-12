class Tree
{
  // Create and initialise the object
  constructor(x,y)
  {
    this.x = x;
    this.y = y;
    this.radiusX = 50;
    this.radiusY = 75;
    this.trunkHeight = this.y - 110;
    this.sideBranchH = this.y - 150;
    this.middleBranchH = this.y - 210;
    this.middleFoliageH = this.y - 180;
    this.foliageOffset = 30;
    this.leftBranchOffset = 70;
    this.rightBranchOffset = 80;
  }
  draw()
  {

    draw.beginPath();
    // Draw Right Eclipse
    draw.ellipse(this.x + this.foliageOffset, this.sideBranchH, this.radiusX, this.radiusY, Math.PI / 4 , 0, 2 * Math.PI);

    // Draw Middle Eclipse
    draw.ellipse(this.x, this.middleFoliageH, this.radiusX, this.radiusY, Math.PI , 0, 2 * Math.PI);

    // Draw Left Eclipse
    draw.ellipse(this.x - this.foliageOffset, this.sideBranchH, this.radiusX, this.radiusY, - Math.PI / 4 , 0, 2 * Math.PI);
    draw.fillStyle = "#8AB185";
    draw.fill();
    draw.beginPath();

    // Draw Trunk
    draw.moveTo(this.x, this.y); //300 980
    draw.lineTo(this.x, this.trunkHeight);
    draw.strokeStyle = "#5E4003";
    draw.lineWidth = 13;
    draw.stroke();

    // Draw Left Branch
    draw.moveTo(this.x, this.trunkHeight);
    draw.lineTo(this.x - this.leftBranchOffset, this.sideBranchH);

    // Draw Middle Branch
    draw.moveTo(this.x, this.trunkHeight);
    draw.lineTo(this.x, this.middleBranchH);

    // Draw Right Branch
    draw.moveTo(this.x, this.trunkHeight);
    draw.lineTo(this.x + this.rightBranchOffset, this.sideBranchH);
    draw.lineWidth = 5;
    draw.stroke();
  }
}
