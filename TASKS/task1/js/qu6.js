"use strict";

let counter = 0;

function setup() {

    createCanvas(600, 600);
}

function draw() {

    background(0);

    testText();


    fill(255);
    textAlign(CENTER, TOP);
    textSize(24);

    for (let i = 0; i <= 9; i++) {
        text(i, 40 + i * 50, 10);
    }

    for (let y = 1; y <= 15; y++) {
        text(y, 10, 20 + y * 35);
    }
}

function testText() {

    fill(255);
    textAlign(CENTER);
    textSize(32);
    text("test", width / 2, height / 2);
}