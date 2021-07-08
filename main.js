noseX = "";
noseY = "";

function preload(){
    mustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function draw(){
    image(video,0,0,300,300);
    image(mustache,noseX-15,noseY-2,30,30);
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("PoseNest Is Intealised")
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

        console.log('noseX = ' + results[0].pose.nose.x);
        console.log('noseY = ' + results[0].pose.nose.y);
    }
}

function takesnapshot(){
    save('MyFilterPhoto.png');
}