function setup() {
    canvas = createCanvas(350, 300)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide(350,300)
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotPoses)
}

function draw() {
    image(video, 0, 0, 350, 300)
}

function take_snapshot() {
    save("My Filter Image.png")
}

function modelLoaded() {
    console.log("PoseNet Is Initialized");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        console.log("nose_x = " + results[0].pose.nose.x);
        console.log("nose_y = " + results[0].pose.nose.y);
    }
}