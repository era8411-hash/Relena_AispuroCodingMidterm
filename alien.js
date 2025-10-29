const alienSketch = (p) => {
  let alien = {
    x: 0,
    y: 0,
    img: null
  };

  let osc1, osc2;
  let freq = 220;
  let freqMod = 0;

  p.preload = () => {
    alien.img = p.loadImage("images/alienpng.png");
  };

  p.setup = () => {
    p.createCanvas(window.innerWidth, window.innerHeight);
    p.background("black");

    osc1 = new p5.Oscillator("triangle");
    osc2 = new p5.Oscillator("triangle");

    osc1.start();
    osc2.start();

    osc1.amp(0);
    osc2.amp(0);

    if (alien.img) alien.img.resize(120, 120);
  };

  p.draw = () => {
    p.background("black");

    alien.x = p.noise(p.frameCount / 100) * p.width;
    alien.y = p.noise(p.frameCount / 100 + 100) * p.height;

    if (alien.img) {
      p.image(alien.img, alien.x, alien.y);
    }

    freqMod = p.map(alien.x, 0, alien.y, -15, 15);
    osc1.freq(freq);
    osc2.freq(freq + freqMod);
    osc1.amp(0.5);
    osc2.amp(0.5);
  };

  p.windowResized = () => {
    p.resizeCanvas(window.innerWidth, window.innerHeight);
  };
};
