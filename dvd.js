const dvdSketch = (p) => {
  let img;
  let imgSize = 20;
  let d, v;
  let dVel = 10;
  let vVel = 7;

  p.preload = () => {
    img = p.loadImage("images/dvdlogo.png");
  };

  p.setup = () => {
    p.createCanvas(window.innerWidth, window.innerHeight);
    p.background(0);
    p.pixelDensity(1);
    p.imageMode(p.CENTER);

    d = p.width / 2;
    v = p.height / 2;
  };

  p.draw = () => {
    p.loadPixels();
    p.frameRate(10);
    let index = 0;

    for (let y = 0; y < p.height; y++) {
      for (let x = 0; x < p.width; x++) {
        p.pixels[index] = p.random(255);
        p.pixels[index + 1] = p.random(255);
        p.pixels[index + 2] = p.random(255);
        p.pixels[index + 3] = 255;
        index += 4;
      }
    }

    p.updatePixels();

    d += dVel;
    v += vVel;

    if (d > p.width - img.width / imgSize / 2 || d < img.width / imgSize / 2) {
      dVel = -dVel;
    }
    if (v > p.height - img.height / imgSize / 2 || v < img.height / imgSize / 2) {
      vVel = -vVel;
    }

 
    if (img) {
      p.image(img, d, v, img.width / imgSize, img.height / imgSize);
    }
  };

  p.windowResized = () => {
    p.resizeCanvas(window.innerWidth, window.innerHeight);
  };
};
