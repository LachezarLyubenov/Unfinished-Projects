var bird;
var walls = [];

function setup() {
  createCanvas(500, 500);
  bird = new Bird();
  walls.push(new Wall());
}

function draw() {
  background(0);

  for (var i = walls.length - 1; i >= 0; i--) {
    walls[i].show();
    walls[i].update();

    if (walls[i].hits(bird)) {
      console.log("HIT");
    }

    if (walls[i].offscreen()) {
      walls.splice(i, 1);
    }
  }

  bird.update();
  bird.show();
  bird.groundOrTop();

  if (frameCount % 100 == 0) {
    walls.push(new Wall());
  }


}

function pressKey() {
  if (key == ' ') {
    bird.up();
  }
}