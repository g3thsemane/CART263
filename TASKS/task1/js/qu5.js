"use strict";

let counter = 0;

let square1 = {

    x: 50,
    y: 50,
    size: 50,
    color: [200, 30, 2]
}

function setup() {
    createCanvas(750, 750);
}

function draw() {
    background(100, 0, 100);

    if (mouseSquareOverlap()) {
        square1.color = [225, 65, 20];
    } else {
        square1.color = [200, 30, 2];
    }

    drawSquare();

}

function drawSquare() {

    rect(square1.x, square1.y, square1.size, square1.size);
    fill(square1.color);
    noStroke();
}

function mouseSquareOverlap() {

    return (mouseX >= square1.x && mouseX <= square1.x + square1.size && mouseY >= square1.y && mouseY <= square1.y + square1.size);
}

function mousePressed() {

    if (mouseSquareOverlap()) {
        counter += 1;
        console.log(counter);
    }
}
