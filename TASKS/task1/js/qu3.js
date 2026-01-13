"use stricts";


let rect1 = {

    x: 50,
    y: 50,
    width: 50,
    height: 50,

    fill: {

        r: 255,
        g: 0,
        b: 0
    }
}


let rect2 = {

    x: 300,
    y: 250,
    width: 50,
    height: 50,

    fill: {

        r: 0,
        g: 255,
        b: 0
    }
}


let rect3 = {

    x: 500,
    y: 400,
    width: 50,
    height: 50,

    fill: {

        r: 0,
        g: 0,
        b: 255
    }
}

function setup() {

    createCanvas(600, 600);
}

function draw() {
    background(0);
    drawRectangles();
    moveRect3();
    keyPressed();
    mouseClicked();
}

function drawRectangles() {

    fill(rect1.fill.r, rect1.fill.g, rect1.fill.b);
    rect(rect1.x, rect1.y, rect1.width, rect1.height);

    fill(rect2.fill.r, rect2.fill.g, rect2.fill.b);
    rect(rect2.x, rect2.y, rect2.width, rect2.height);

    fill(rect3.fill.r, rect3.fill.g, rect3.fill.b);
    rect(rect3.x, rect3.y, rect3.width, rect3.height);
}

function moveRect3() {

    rect3.y = rect3.y - 1;

    if (rect3.y > height || rect3.y < 0) {

        rect3.y = height;
    }

    if (rect2.x > width || rect2.x < 0) {
        rect2.x = 0;
    }

    if (rect1.x > width || rect1.x < 0) {
        rect1.x = 0;
    }
}

function keyPressed() {

    if (keyIsDown(32)) {
        rect2.x = rect2.x + 10;
    }
}

function mouseClicked() {

    if (mouseIsPressed) {
        rect1.x += 10;
    }
}

