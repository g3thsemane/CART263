// /*window.onload = setup;


// function setup() {
//   console.log("in week 4 ;)")

//   window.setTimeout(addTimeoutText, 2000);
//   function addTimeoutText() {
//     let parent = document.getElementById("parent");
//     parent.innerHTML += " NEW TEXT TO APPEAR ";
//   }
// }*/

// ///////////////////////////////////////////

// window.onload = function () {
//   console.log("timers running");


//   let shades = [
//     "#7fb3d5", //grey blue first
//     "#76d7c4",
//     "#f7dc6f",
//     "#eb984e",
//     "#cb4335",
//     "#8e44ad",
//     "#2e4053",
//     "#e5e7e9",
//   ];

//   for (let i = 0; i < 24; i++) {
//     //for each x - make a column of changing y's
//     let gridCol = [];
//     for (let j = 0; j < 24; j++) {
//       //create a grid cell with a div
//       let parent = document.getElementById("parent");
//       let d = document.createElement("div");
//       d.classList.add("grid-cell");
//       parent.appendChild(d);

//       d.style.left = (i + 1) * 25 + "px";
//       d.style.top = (j + 1) * 25 + "px";
//     }
//   }


//   /*//the divisor
//   let num = 2;
//   //access the divs
//   let gridCells = document.querySelectorAll(".grid-cell");
//   for (let index = 0; index < gridCells.length; index++) {
//     if (index % num === 0) {
//       gridCells[index].style.background = shades[0];
//     } else {
//       gridCells[index].style.background = shades[1];
//     }
//   }*/
//   let gridCells = document.querySelectorAll(".grid-cell");
//   let num = 24;
//   let currentShade = 0;
//   for (let index = 0; index < gridCells.length; index++) {
//     //check if we reach the 24th
//     if (index % 24 === 0) {
//       //switch the shade ...
//       if (currentShade === 0) {
//         currentShade = 1;
//       } else {
//         currentShade = 0;
//       }
//     }
//     gridCells[index].style.background = shades[currentShade];
//   }

//   let changingNum = 0;
//   setInterval(animate_cells_mod_rows, 1000);

//   function animate_cells_mod_rows() {
//     console.log(changingNum);
//     drawGrid();
//     changingNum += 1;

//     if (changingNum === 8) {
//       changingNum = 0;
//     }
//   }

//   function drawGrid() {
//     for (let index = 0; index < gridCells.length; index++) {

//       //check what the remainder is ...
//       if (index % changingNum === 0) {
//         gridCells[index].style.background = shades[0];
//       }
//       else if (index % changingNum === 1) {
//         gridCells[index].style.background = shades[1];
//       }
//       else if (index % changingNum === 2) {
//         gridCells[index].style.background = shades[2];
//       }
//       else if (index % changingNum === 3) {
//         gridCells[index].style.background = shades[3];
//       }
//       else if (index % changingNum === 4) {
//         gridCells[index].style.background = shades[4];
//       }
//       else if (index % changingNum === 5) {
//         gridCells[index].style.background = shades[5];
//       }
//       else if (index % changingNum === 6) {
//         gridCells[index].style.background = shades[6];
//       }
//       else if (index % changingNum === 7) {
//         gridCells[index].style.background = shades[7];
//       }

//     }
//   }
// }

window.onload = function () {

  // let speed = 1000;
  // //window.setInterval(addText, speed);
  // addText()
  // function addText() {

  //   console.log("adding");
  //   console.log(speed);
  //   let sp = document.createElement("span");
  //   sp.textContent = " adding Text ";
  //   sp.classList.add("appearInText");
  //   document.getElementById("parent").appendChild(sp);
  //   if (speed > 100) {
  //     speed -= 100;
  //   }
  //   setTimeout(addText, speed);
  // }
  let particleDiv = document.createElement("div");
  particleDiv.id = "particle";
  document.querySelector("#parent").appendChild(particleDiv);
  particleDiv.style.left = "25px";
  particleDiv.style.top = "25px";

  window.requestAnimationFrame(animate);

  function animate() {
    let p = document.getElementById("particle");
    p.style.left = parseInt(p.style.left) + 2 + "px";
    p.style.top = parseInt(p.style.top) + 3 + "px";
  }

  let speedX = 2;
  let speedY = 3;

  window.requestAnimationFrame(animate);
  function animate() {
    let p = document.getElementById("particle");
    p.style.left = parseInt(p.style.left) + speedX + "px";
    p.style.top = parseInt(p.style.top) + speedY + "px";
    window.requestAnimationFrame(animate);
    checkBounds(document.getElementById("parent"), p);

  }

  function checkBounds(parent, p) {
    let bounds = parent.getBoundingClientRect();

    if (parseInt(p.style.left) > bounds.right) {
      speedX *= -1;

    } else if (parseInt(p.style.left) < bounds.left) {
      speedX *= -1;
    }

    if (parseInt(p.style.top) > bounds.bottom) {
      speedY *= -1;

    } else if (parseInt(p.style.top) < bounds.top) {
      speedY *= -1;
    }
  }




}