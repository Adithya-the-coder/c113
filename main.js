function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(250, 150);
    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video, 0, 0, 640, 480);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    rect(50, 30, 520, 40);
    rect(50, 410, 520, 40);
    fill(0, 0, 255);
    stroke(0, 0, 255);
    rect(30, 50, 40, 350);
    rect(570, 50, 40, 350);
    fill(0, 255, 0);
    stroke(0, 255, 0);
    circle(50, 50, 70);
    circle(590, 430, 70);    
    fill(255, 255, 0);
    stroke(255, 255, 0);
    circle(50, 430, 70); 
    circle(590, 50, 70);  
}
function saveSnapshot(){
    save("border.png");
}