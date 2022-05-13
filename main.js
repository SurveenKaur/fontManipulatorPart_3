leftWristX=0;
rightWrist=0;
difference=0;

function setup(){
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    video=createCapture(VIDEO);
    video.size(550,550);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPosses);
}

function modelLoaded(){
    console.log('posenet is intialized');
}


function gotPosses(results){
    if(results.length>0){
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference= floor(leftWristX-rightWristX);
        console.log("rightWristX= "+ rightWristX + "leftWristX= "+ leftWristX + "difference= "+ difference);

        
    }
}

function draw(){
    background('pink');
    textSize(difference);
    fill('red');
    text("Surveen",200,300);
}