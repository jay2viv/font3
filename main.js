var leftWristX= 0;
var rightWristX = 0;
dif = 0

function preload()
{

}

function setup()
{
    Canvas = createCanvas(500,500);
    Canvas.position(800, 100);

    video = createCapture(VIDEO);
    video.size(500,500)

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw()
{
    background("blue");
    textSize(dif)
    text("Jay", 150, 230);


}

function modelLoaded()
{
    console.log("Posenet is Initialized")
}

function gotPoses(results)
{
    if(results.length > 0){
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;

        dif = leftWristX - rightWristX;
        dif = Math.round(dif)
        document.getElementById("size").innerHTML = "size: " + dif;
    }
}