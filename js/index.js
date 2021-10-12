var buildings = [];
var clouds = [];
var trees = [];
var dayNightCycle;
function start ()
{
  canvas = document.getElementById("drawCanvas");
  draw = canvas.getContext("2d");
  // Place the following objects to the array
  buildings.push(new Building(700, 100, 300));
  buildings.push(new Building(450, 400, 200, "horizontal"));
  buildings.push(new Building(50, 270, 200));
  buildings.push(new Building(1080, 200, 200, "vertical"));
  buildings.push(new Building(90, 550, 300, "table", 60, 90, 90));
  buildings.push(new Building(670, 700, 400, "table", 80, 30, 60));

  trees.push(new Tree(300, 980));
  trees.push(new Tree(500, 960));
  trees.push(new Tree(1000, 980));
  trees.push(new Tree(1200, 940));

  clouds.push(new Cloud(100, 100, 30, 1.5));
  clouds.push(new Cloud(370, 370, 60, -1.5));
  clouds.push(new Cloud(730, 250, 60, -1.5));
  clouds.push(new Cloud(1000, 100, 30, 1.5));
  clouds.push(new Cloud(780, 570, 80, 1.5));

  dayNightCycle = new DayNightCycle(canvas.width / 2, 700, 900, 550, 100, -Math.PI / 2, 0.005);
  // Call the animate
  setInterval(animate, 36);
}
// Draw the Grass
function createGrass()
{
  draw.beginPath();
  draw.moveTo(-100, 1000);
  draw.quadraticCurveTo(0, 800, 950, 1000);
  draw.moveTo(550, 1000);
  draw.quadraticCurveTo(1400, 800, 1500, 1000);
  draw.fillStyle = "#567B48";
  draw.fill();
}
function animate()
{
  //Store the result of the day night cycle (Is it day or night?)
  var day = dayNightCycle.cycle();

  // Draw all the building on screen and colour the windows
  for (var b of buildings)
  {
    b.colorWindows(day);
    b.draw();
  }

  createGrass();
  // Draw all the trees on screen
  for (var t of trees)
  {
    t.draw();
  }
  // Draw all the clouds on screen
  for (var c of clouds)
  {
    c.move();
    c.draw();
  }


}
