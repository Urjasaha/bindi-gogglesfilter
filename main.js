noseX=0;
noseY=0;

gogglesX=0;
gogglesY=0;

function preload() {
    clown_nose = loadImage("https://i.postimg.cc/nzjNpvj9/b4.png");
    goggles= loadImage("https://i.postimg.cc/Kv0X7v2z/Sunglass-PNG.png");
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x -15;
        noseY = results[0].pose.nose.y -95;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);

        gogglesX = results[0].pose.nose.x -50;
        gogglesY = results[0].pose.nose.y -80;
        console.log("goggles x = " + results[0].pose.nose.x);
        console.log("goggles y = " + results[0].pose.nose.y);
    }
    }

function draw() {
     image(video, 0, 0, 300, 300);
     image(clown_nose, noseX, noseY, 45, 45);
     image(goggles, gogglesX, gogglesY, 120, 60);
}

function takesnapshot() {
    save('myFilterImage.png') 
}