nose_x=0;
nose_y=0;
function preload(){
clown_nose=loadImage('https://i.postimg.cc/dVbvmJTW/Gull-portrait-ca-usa.jpg');
}


function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(350,350);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
image(video,0,0,500,500);
fill( 255,50,90);
stroke(20,70,109);
circle(nose_x,nose_y,30);
image(clown_nose,nose_x,nose_y,30,40);
}

function take_snapshot(){
 save('Filter.png');
}

function modelLoaded(){
    console.log('poseNet is initialized');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nose_x=results[0].pose.nose.x+115;
        nose_y=results[0].pose.nose.y+115;
        console.log('nose X ',nose_x);
        console.log('nose Y ',nose_y);
    }
}


