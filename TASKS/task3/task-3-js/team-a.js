setup_A();
/** THEME: CALM  */
function setup_A() {
  console.log("in a");
  /**************************************************** */
  //get the buttons
  activateButtons(`#TEAM_A`, "ani_canvA", aniA, aniB, aniC, aniD);
  /**************** ANI A ************************************ */
  /** PUT ALL YOUR CODE FOR INTERACTIVE PATTERN A INSIDE HERE */
  /**************** ANI A ************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:)
   * 1: create a creative, visual pattern using text, divs as shapes, images ... 
   * 2: add in mouseclick event listener(s) somewhere to make the sketch interactive
   *
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function  -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/

  function aniA(parentCanvas) {
    console.log("in aniA -teamA");

    const cellSize = 24;
    const gap = 4;
    const offsetX = 10;
    const offsetY = 30;
    const bounds = parentCanvas.getBoundingClientRect();
    const cols = Math.max(
      1,
      Math.floor((bounds.width - offsetX * 2 + gap) / (cellSize + gap))
    );
    const rows = Math.max(
      1,
      Math.floor((bounds.height - offsetY * 2 + gap) / (cellSize + gap))
    );

    const positions = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        positions.push({
          x: offsetX + c * (cellSize + gap),
          y: offsetY + r * (cellSize + gap),
        });
      }
    }

    parentCanvas.addEventListener("click", (e) => {
      if (positions.length === 0) return;

      const rect = parentCanvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      const pos = nearestGridPosition(clickX, clickY);
      spawnCircle(pos.x, pos.y, cellSize);
    });

    function nearestGridPosition(x, y) {
      let best = positions[0];
      let bestDist = Infinity;
      for (let i = 0; i < positions.length; i++) {
        const dx = positions[i].x - x;
        const dy = positions[i].y - y;
        const d = dx * dx + dy * dy;
        if (d < bestDist) {
          bestDist = d;
          best = positions[i];
        }
      }
      return best;
    }

    function spawnCircle(x, y, size) {
      const circle = document.createElement("div");
      circle.classList.add("TEAM_A_circle");
      circle.style.width = size + 'px';
      circle.style.height = size + 'px';
      circle.style.left = x + 'px';
      circle.style.top = y + 'px';
      circle.style.backgroundColor = randomColor();
      circle.dataset.size = String(size);
      parentCanvas.appendChild(circle);

    }

    function randomColor() {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return `rgb(${r}, ${g}, ${b})`;
    }
  }


  /****************ANI B ************************************ */
  /** PUT ALL YOUR CODE FOR INTERACTIVE PATTERN B INSIDE HERE */
  /****************ANI B ************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:).
   * 1: create a creatve, visual pattern using text, divs as shapes, images ... 
   * 2: add in mouseover event listener(s) somewhere to make the sketch interactive
   *
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/

  function aniB(parentCanvas) {
    console.log("in ani-B -teamA");

  }
  /****************ANI C ************************************ */
  /** PUT ALL YOUR CODE FOR INTERACTIVE PATTERN C INSIDE HERE */
  /****************ANI C************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:)
   * 1: use the PROVIDED keyup/down callbacks `windowKeyDownRef` and/or `windowKeyUpnRef` to handle keyboard events
   * 2: create an interactive pattern/sketch based on keyboard input. Anything goes.
   * 
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/

  /* TASK: make an interactive pattern .. colors, shapes, sizes, text, images....
   * using  ONLY key down and/or keyup -- any keys::
   */

  function aniC(parentCanvas) {
    console.log("in ani-C -teamA");

    /*** THIS IS THE CALLBACK FOR KEY DOWN (* DO NOT CHANGE THE NAME *..) */
    windowKeyDownRef = function (e) {
      //code for key down in here
      console.log(e);
      console.log("a-down");
    };

    /*** THIS IS THE CALLBACK FOR KEY UP (*DO NOT CHANGE THE NAME..) */
    windowKeyUpRef = function (e) {
      console.log("a-up");
      console.log(e);
    };
    //DO NOT REMOVE
    window.addEventListener("keydown", windowKeyDownRef);
    window.addEventListener("keyup", windowKeyUpRef);
  }

  /****************ANI D************************************ */
  /** PUT ALL YOUR CODE FOR INTERACTIVE PATTERN D INSIDE HERE */
  /****************ANI D************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:).
   * 1: create a creative, visual pattern using text, divs as shapes, images ...
   * 2: add in animation using requestAnimationFrame somewhere to make the sketch animate :)
   *
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/
  function aniD(parentCanvas) {
    console.log("in ani-D -teamA");

    const ball = document.createElement("div");
    ball.classList.add("TEAM_A_ball");
    parentCanvas.appendChild(ball);

    const size = 24;
    const bounds = parentCanvas.getBoundingClientRect();
    let x = (bounds.width - size) / 2;
    let y = (bounds.height - size) / 2;
    let vx = 2.2;
    let vy = 1.6;

    ball.style.width = size + "px";
    ball.style.height = size + "px";

    function animate() {
      x += vx;
      y += vy;

      if (x <= 0) {
        x = 0;
        vx *= -1;
      } else if (x + size >= bounds.width) {
        x = bounds.width - size;
        vx *= -1;
      }

      if (y <= 0) {
        y = 0;
        vy *= -1;
      } else if (y + size >= bounds.height) {
        y = bounds.height - size;
        vy *= -1;
      }

      ball.style.left = x + "px";
      ball.style.top = y + "px";

      requestAnimationFrame(animate);
    }

    parentCanvas.addEventListener("click", () => {
      vx = (Math.random() - 0.5) * 4;
      vy = (Math.random() - 0.5) * 4;
    });

    animate();
  }
}
