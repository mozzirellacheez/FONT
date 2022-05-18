function setup(){
    video=createCapture(VIDEO);
    video.size(550,550);

    canvas=createCanvas(550,500);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotPoses);
}

function modelloaded(){
    console.log("posenet is loaded");
}

 function gotPoses(results){
     if (results.length>0) {
         
     }
 }


 function draw(){
     background('#969A97');
 }