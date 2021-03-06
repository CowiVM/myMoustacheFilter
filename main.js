nose_x = 0
nose_y = 0

function setup() {
    canvas = createCanvas(350, 300)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(350, 300)
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotPoses)
}

function take_snapshot() {
    save("My Filter Image.png")
}

function modelLoaded() {
    console.log("PoseNet is Initialized");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        console.log(" nose_x =" + results[0].pose.nose.x);
        console.log(" nose_y =" + results[0].pose.nose.y);
        nose_x = results[0].pose.nose.x
        nose_y = results[0].pose.nose.y
    }
}

function draw() {
    image(video, 0, 0, 350, 300);
    image(img, nose_x -25, nose_y, 50, 30);
}

function preload() {
    img = loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}