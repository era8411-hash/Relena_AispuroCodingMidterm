const albumSketch = (p) => {
  let albumList = [
    "Origin of Symmetry", "OK Computer", "Black Holes and Reveluations",
    "Currents", "Meteora", "Thank you Happy Birthday", "Demon Days",
    "Breach", "Regional at Best", "Unreal Unearth", "In Rainbows",
    "Absolution", "Danger Days: TTLOTFK", "Cage the Elephant",
    "The Downward Spiral", "IGOR", "Paramore", "Dookie",
    "Enema of the State", "the record",
  ];

  let album;
  let font, font2;
  let speed = 10;
  let num = 0;
  let numCycles = 0;
  let choosing = false;
  let x;

  p.preload = () => {
    font  = p.loadFont("fonts/font.ttf");
    font2 = p.loadFont("fonts/font2.ttf");
  };

  p.setup = () => {
    p.createCanvas(window.innerWidth, window.innerHeight);
    p.background(255);
  };

  p.draw = () => {
    p.background("white");

    p.fill("black");
    if (font) p.textFont(font);
    p.textAlign(p.CENTER);
    p.textSize(30);

    p.push();
    p.fill("blue");
    if (font2) p.textFont(font2);
    p.textAlign(p.CENTER);
    p.textSize(p.map(p.mouseX, 0, p.width, 30, 50));
    p.text("CLICK FOR ALBUM!!!", p.width / 2, 100);
    p.text("CLICK FOR ALBUM!!!", p.width / 2, p.height - 100);
    p.pop();

    if (p.frameCount % speed === 0 && choosing) {
      x = Math.floor(p.random(albumList.length));
      num++;

      if (num >= numCycles) {
        choosing = false;
        album = albumList.splice(x, 1)[0];
      }
    }

    if (albumList.length > 0 && x !== undefined) album = albumList[x];

    if (album) {
      p.fill("black");
      if (font2) p.textFont(font2);
      p.text(album, p.width / 2, p.height / 2);
    }
  };

  p.mousePressed = () => {
    if (albumList.length > 0) {
      choosing = true;
      num = 0;
      numCycles = Math.floor(p.random(30));
      x = Math.floor(p.random(albumList.length));
    } else {
  
      albumList = [
        "Origin of Symmetry","OK Computer","Black Holes and Reveluations",
        "Currents","Meteora","Thank you Happy Birthday","Demon Days",
        "Breach","Regional at Best","Unreal Unearth","In Rainbows",
        "Absolution","Danger Days: TTLOTFK","Cage the Elephant",
        "The Downward Spiral","IGOR","Paramore","Dookie",
        "Enema of the State","the record",
      ];
    }
  };

  p.windowResized = () => p.resizeCanvas(window.innerWidth, window.innerHeight);
};
