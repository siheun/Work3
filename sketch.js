let angle = 0;
let ima;
let cam;
let ima2;
let maxD;
let ma;
let w = 50;
let ln = 0;

function preload() {
  ima = loadImage('images/1a');
  ima2 = loadImage('images/s1.jpg');
}

function setup() {
  createCanvas(756, 1008, WEBGL);
  //cam = createCapture(VIDEO);
  //cam.size(320, 240);
  //cam.hide();
 ortho(-400, 400, -400, 400, 1, 2000);
 perspective(1, 8/6, 0.1, 2000);

 ma = atan(cos(QUARTER_PI));
 maxD = dist(0, 0, 100, 100);


}

function draw() {
  let dx = mouseX - width / 2;
  let dy = mouseY - height / 2;
  let v = createVector(dx, dy, 0);
  v.div(100);


  //ambientLight(255);
  directionalLight(255, 255, 255, v);
  pointLight(255, 255, 255, 0, -200, 0);
  //pointLight(255, 0, 255, 200, 0, 0);

  background(175);

 for (let y = -100 ; y < (height - 500); y += 70){
 for (let z = -100 ; z < (height - 100); z += 70){
  for (let x = 450; x < (width - 100) ; x += 70) {
    push();
   let d = dist(x, z, width/2, height/2);
   let offset = map(d, 0, maxD, -PI, PI);
   let a = angle + offset;
   let h = floor(map(sin(a), -1, 1, 10, 50));

  translate(x-(width/2-100), y -(height/2-100), z -(height/2-100));

   rotateX(-ma);
   //rotateY(-PI/4);
   rotateY(angle);

    // rotateX(angle);
    // rotateY(angle * 0.3);
    // rotateZ(angle * 1.2);

    texture(ima);
    box(w, h, w);
    pop();
  }
}
}



  translate(0, 0,-300);
  ambientMaterial(255);
  texture(ima2);
  plane(1024, 768);


  angle += 0.03;

  ln += 0.5;
  if ( ln > 600) {
    ln = 0;
  }




}
