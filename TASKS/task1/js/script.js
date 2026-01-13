"use strict";

let ellipse1 = {

    x: 100,
    y: 100,
    width: 50,
    height: 80,

    fill: {
        r: 25,
        b: 25,
        g: 255,
    }

}

/*let ellipse2 = {

    x: 200,
    y: 150,
    width: 60,
    height: 90,

    fill: {
        r: 255,
        b: 25,
        g: 100,
    }

}*/


/*let ellipse3 = {

    x: 340,
    y: 200,
    width: 70,
    height: 20,

    fill: {
        r: 25,
        b: 255,
        g: 100,
    }
}*/

function setup() {
    createCanvas(600, 600);
    background(0);
    drawEllipse();


}

//function draw() {
//}


function drawEllipse() {

    fill(ellipse1.fill.r, ellipse1.fill.g, ellipse1.fill.b);
    ellipse(ellipse1.x, ellipse1.y, ellipse1.width, ellipse1.height);

    fill(ellipse1.fill.r + 100, ellipse1.fill.g - 150, ellipse1.fill.b + 80);
    ellipse(ellipse1.x + 100, ellipse1.y + 200, ellipse1.width + 15, ellipse1.height - 30);

    fill(ellipse1.fill.r + 50, ellipse1.fill.g - 200, ellipse1.fill.b + 100);
    ellipse(ellipse1.x + 300, ellipse1.y - 20, ellipse1.width - 25, ellipse1.height - 15);
}