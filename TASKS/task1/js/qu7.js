"use strict";


let circleSize = 40;

let circleColor;

let shapeChange = true;

function setup() {
    createCanvas(600, 600);
    randomColor();
}

function draw() {
    background(0);

    for (let y = circleSize / 2; y < height; y += circleSize) {
        for (let x = circleSize / 2; x < width; x += circleSize) {
            fill(circleColor);
            ellipse(x, y, circleSize);

            if (shapeChange) {
                ellipse(x, y, circleSize);
            }
            else {
                rectMode(CENTER);
                rect(x, y, circleSize, circleSize);
            }
        }
    }
}

function randomColor() {
    circleColor = color(random(255), random(255), random(255));
}

function keyPressed() {
    if (key === ' ') {
        randomColor();
    }
}

function mousePressed() {
    shapeChange = !shapeChange;
}
