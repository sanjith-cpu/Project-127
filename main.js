song="";
song2=""
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;

function preload() {
    song = loadSound("music1.mp3");
    song2 = loadSound("music2.mp3");
}

 function setup() {
    canvas = createCanvas(500,400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video,0,0,500,400);
    fill("#FF0000");
    stroke("#FF0000");

    circle(leftWristX,leftWristY,20);
    InNumberleftWristY= Number(leftWristY);
    remove_decimals= floor(InNumberleftWristY);
}

function play() {
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function modelLoaded() {
    console.log('PoseNet Is Inialized');
}

function gotPoses(results) {
if(results.length>0)
{
    console.log(results);
    leftWristX=results[0].pose.leftWrist.x;
    leftWristY=results[0].pose.leftWrist.y;
    console.log("leftWristX=" + leftWristX + "leftWristY=" +leftWristY);

    rightWristX=results[0].pose.rightWrist.x;
    rightWristY=results[0].pose.rightWrist.y;
    console.log("rightWristX=" + rightWristX + "rightWristY=" +rightWristY);
}
}