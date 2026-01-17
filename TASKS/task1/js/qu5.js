"use strict";

let counter = 0;

let square1 = {

    x: 50,
    y: 50,
    size: 50,
    color: [200, 30, 2]
}

let ellipse1 = {

    x: 0,
    y: 0,
    color: [255, 255, 255]
}

let ellipseRadius = 0;

let ellipseAlpha = 0;

function setup() {
    createCanvas(750, 750);

    ellipse1.x = width / 2;
    ellipse1.y = height / 2;
}

function draw() {
    background(100, 0, 100);

    if (mouseSquareOverlap()) {
        square1.color = [225, 65, 20];
    } else {
        square1.color = [200, 30, 2];
    }

    drawSquare();

    for (let i = 0; i < counter; i++) {

        ellipse1.x = width / 2;
        ellipse1.y = height / 2;

        ellipseRadius = 10 + i * 30;
        ellipseAlpha = 5 + i * 5;

        drawEllipse();
    }

}

function drawSquare() {

    fill(square1.color);
    noStroke();
    rect(square1.x, square1.y, square1.size, square1.size);

}

function drawEllipse() {

    fill(ellipse1.color[0], ellipse1.color[1], ellipse1.color[2], ellipseAlpha);
    noStroke();
    ellipse(ellipse1.x, ellipse1.y, ellipseRadius * 2, ellipseRadius * 2);
}

function mouseSquareOverlap() {

    return (mouseX >= square1.x && mouseX <= square1.x + square1.size && mouseY >= square1.y && mouseY <= square1.y + square1.size);
}

function mousePressed() {

    if (mouseSquareOverlap()) {
        if (counter < 10) {
            counter += 1;
        }

        console.log(counter);
    }
}
