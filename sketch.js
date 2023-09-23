function setup() {
    createCanvas (800, 800)
  }
  
  function draw() {
    
    
    // default sky
    fill(178, 219, 255);
    rect(100, 100, 400, 400);
    fill(250, 250, 200);
    circle(230, 280, 200);
    
    // CHANGING SKIES
     drawNight();
    // drawDuskDawn();
     drawRain();
    // drawSnow();
    // drawClouds();
    
    
    
    
    // window border
    fill(60,60,60);
    noStroke()
    // left v
    rect(90, 110, 25, 400);
    // right v
    rect(475, 90, 30, 420);
    // bottom v
    rect(100, 475, 400, 35);
    // top v
    rect(90, 90, 400, 25);
    
    // window panes
    rect(290, 100, 15, 400)
    rect(100, 290, 400, 15)
  }
  
  function drawNight(){
    frameRate(1);
    let color1 = color(34, 17, 82);
    let color2 = color(168, 66, 88);
  
    setGradient(100, 100, 400, 400, color1, color2, "Y");
    
      for (let counter = 0; counter < 10; counter += 1) {
      let xpos = random(100, 500);
      let ypos = random(100, 500);
      noStroke();   
      circle(xpos, ypos, 5);
      fill("white");
    }
  
    for (let counter = 0; counter < 50; counter += 1) {
      let xpos = random(100, 450);
      let ypos = random(100, 450);
      noStroke();
      circle(xpos, ypos, 2);
      fill("white");
    }
  
    for (let counter = 0; counter < 10; counter += 1) {
      let xpos = random(100, 450);
      let ypos = random(100, 450);
      noStroke();    
      circle(xpos, ypos, 5);
      fill(255, 240, 240, 127);
    }
  }
  
  function drawDuskDawn() {
    let color1 = color(200, 100, 250, 150); 
    let color2 = color(250, 200, 200, 150); 
    setGradient(100, 100, 400, 400, color1, color2, "Y");
  }
  
  function drawRain() {
    let color1 = color(50, 50, 80, 150);
    let color2 = color(250, 200, 200, 150);
  
    setGradient(100, 100, 400, 400, color1, color2, "Y");
  
    for (let counter = 0; counter < 100; counter += 1) {
      let xpos = random(100, 475);
      let ypos = random(100, 475);
      noStroke();
      fill(255, 255, 255, 100); // Adjust alpha to make ellipses more transparent
      ellipse(xpos, ypos, 2, 20);
    }
  
    for (let counter = 0; counter < 100; counter += 1) {
      let xpos = random(100, 475);
      let ypos = random(100, 475);
      noStroke();
      fill(255, 255, 255, 100); // Adjust alpha to make ellipses more transparent
      ellipse(xpos, ypos, 1, 10);
    }
  }
  
  function drawSnow(){
    let color1 = color(134, 117, 182, 150);
    let color2 = color(268, 166, 188, 150);
  
    setGradient(100, 100, 400, 400, color1, color2, "Y");
    
      for (let counter = 0; counter < 20; counter += 1) {
      let xpos = random(100, 475);
      let ypos = random(100, 475);
      noStroke();   
      circle(xpos, ypos, 5);
      fill("white");
    }
  
    for (let counter = 0; counter < 100; counter += 1) {
      let xpos = random(100, 450);
      let ypos = random(100, 450);
      noStroke();
      circle(xpos, ypos, 2);
      fill("white");
    }
  
    for (let counter = 0; counter < 20; counter += 1) {
      let xpos = random(100, 450);
      let ypos = random(100, 450);
      noStroke();    
      circle(xpos, ypos, 5);
      fill(255, 240, 240, 127);
    }
  }
  
  function drawClouds(){
    frameRate(2);
    for (let counter = 0; counter < 20; counter += 1) {
      let xpos = random(180, 400);
      let ypos = random(180, 410);
      noStroke(); 
      fill(255, 255, 255, 75);
      ellipse(xpos, ypos, 150, 80);
    }
  }
  
  
  function setGradient(x, y, w, h, c1, c2, axis) {
    noFill();
    if (axis == "Y") {
      // Top to bottom gradient
      for (let i = y; i <= y + h; i++) {
        var inter = map(i, y, y + h, 0, 1);
        var c = lerpColor(c1, c2, inter);
        stroke(c);
        line(x, i, x + w, i);
      }
    } else if (axis == "X") {
      // Left to right gradient
      for (let j = x; j <= x + w; j++) {
        var inter2 = map(j, x, x + w, 0, 1);
        var d = lerpColor(c1, c2, inter2);
        stroke(d);
        line(j, y, j, y + h);
      }
    }
  }
  