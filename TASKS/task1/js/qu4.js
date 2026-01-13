"use strict";

let rect1 = {

    x: 0,
    y: 0,
    width: 200,
    height: 600,

    fill: {
        r: 0,
        g: 200,
        b: 225,
    }
}

let rect2 = {
    x: 200,
    y: 0,
    width: 200,
    height: 600,


    fill: {
        r: 0,
        g: 20,
        b: 225,
    }
}

let rect3 = {

    x: 400,
    y: 0,
    width: 200,
    height: 600,

    fill: {
        r: 5,
        g: 20,
        b: 125,
    }
}



function setup() {

    createCanvas(600, 600);
}

function draw() {

    background(0);
    drawRectangles();

    /*if (mouseX < 200 && mouseX > 200 && mouseX < 400 && mouseX > 400 && mouseX < 600) {
        rect1.fill = 255;
    }*/

    if (mouseX < 200) {
        rect1.fill = {
            r: 255,
            g: 255,
            b: 255,

        };
    } else {
        rect1.fill = {
            r: 0,
            g: 200,
            b: 225,
        };
    }

    if (mouseX < 400 && mouseX > 200) {
        rect2.fill = {
            r: 255,
            g: 255,
            b: 255,

        };
    } else {
        rect2.fill = {
            r: 0,
            g: 20,
            b: 225,
        };
    }


    if (mouseX < 600 && mouseX > 400) {
        rect3.fill = {
            r: 255,
            g: 255,
            b: 255,

        };
    } else {
        rect3.fill = {
            r: 5,
            g: 20,
            b: 125,
        };
    }
}

function drawRectangles() {

    fill(rect1.fill.r, rect1.fill.g, rect1.fill.b);
    rect(rect1.x, rect1.y, rect1.width, rect1.height);
    fill(rect2.fill.r, rect2.fill.g, rect2.fill.b);
    rect(rect2.x, rect2.y, rect2.width, rect2.height);
    fill(rect3.fill.r, rect3.fill.g, rect3.fill.b);
    rect(rect3.x, rect3.y, rect3.width, rect3.height);
}

