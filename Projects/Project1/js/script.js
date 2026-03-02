/*
 * CART 263 A
 * Project 1: You Can Run And You Can Hide But You Can't Run * And You Can't Hide
 *
 * Benjamin Merhi
 *
 * A game based on the invasive nature of pop up             * advertisements.
 *
 */

(() => {
  //Configuration variables
  const gameW = 900;
  const gameH = 600;

  const playerSize = 18;
  const playerSpeed = 260;

  const adSpawnBase = 550;
  const adSpawnPlus = 180;
  const adSpeed = 6;

  const adMax = 35;

  ////////// -- DOM elements -- //////////
  const gameElmnt = document.querySelector("#game");

  if (!gameElmnt) {
    throw new Error("Missing game element!");
  }

  //Creating the HUD and overlay elements
  const hudElmnt = document.createElement("div");

  hudElmnt.classname = "hud";
  hudElmnt.innerHTML = `
<div class = "panel" id="scorePanel">Score: <b id="score">0</b></div>
<div class="panel" id="statusPanel">Arrows / WASD to steer</div>
`;
  gameElmnt.appendChild(hudElmnt);

  const overlayElmnt = document.createElement("div");
  overlayElmnt.className = "overlay";
  overlayElmnt.innerHTML = `
<div class="card">
    <h1>POP UP!</h1>
    <p>To consume or not to consume, that is the question. </p>
<button id="startBtn">Start</button>
</div>
`;
  gameElmnt.appendChild(overlayElmnt);

  //Creating the player
  const playerElmnt = document.createElement("div");

  playerElmnt.className = "player";
  gameElmnt.appendChild(playerElmnt);

  ////////// -- Game -- //////////

  const state = {
    //Boolean to check game states
    running: false,
    gameover: false,

    //Game stats
    score: 0,
    thyme: 0,

    //Player position and velocity
    x: 120,
    y: 120,
    vx: playerSpeed,
    vy: 0,

    //Direction the player is moving in, used for steering
    dirX: 1,
    dirY: 0,

    //Array to hold the ad objects
    ads: [],
    nextSpawnAt: 0,
    spawnInterval: adSpawnBase,
    lastTs: 0,
  };

  ////////// -- Game Input -- //////////

  //Set to hold the keys that are currently being pressed
  const keys = new Set();
  window.addEventListener("keydown", (e) => {
    if (
      [
        "ArrowUp",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
        "w",
        "a",
        "s",
        "d",
        "W",
        "A",
        "S",
        "D",
        " ",
      ].includes(e.key)
    ) {
      e.preventDefault();
      keys.add(e.key);
      if (e.key === " " && !state.running) startGame();
    }
  });

  function readInput() {
    //Direction vector variables
    let x = 0,
      y = 0;

    //Check if any movement keys have been pressed
    const up = keys.has("ArrowUp") || keys.has("w") || keys.has("W");

    const down = keys.has("ArrowDown") || keys.has("s") || keys.has("S");

    const left = keys.has("ArrowLeft") || keys.has("a") || keys.has("A");

    const right = keys.has("ArrowRight") || keys.has("d") || keys.has("D");

    //Direction vector based on the key pressed
    if (up) y -= 1;
    if (down) y += 1;
    if (left) x -= 1;
    if (right) x += 1;

    //If there is no input, keep the curren direction
    if (x === 0 && y === 0) return;
  }

  window.addEventListener("keydown", (e) => {
    keys.add(e.key);
    console.log([...keys]);
  });

  window.addEventListener("keyup", (e) => {
    keys.delete(e.key);
    console.log([...keys]);
  });

  window.addEventListener("keydown", (e) => {
    console.log("down:", e.key);
  });

  window.addEventListener("keyup", (e) => {
    console.log("up:", e.key);
  });
})();
