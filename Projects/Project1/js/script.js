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
    //Set of keys that are used for the game, preventing default browser behaviour for these keys
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

      //Start the game if space is pressed and the isn't already running
      if (e.key === " " && !state.running) startGame();
    }
  });

  //Implement movement through key pressing
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

    //Normalize
    const len = Math.hypot(x, y);
    state.dirX = x / len;
    state.dirY = y / len;
  }

  ////////// Utility and configuration //////////

  //Keeping everything within the game area
  function clamp(v, min, max) {
    return Math.max(min, Math.min(max, v));
  }

  //A rectangle collision check, used for checking if the player has been hit by an ad
  function rectsOverlap(a, b) {
    return !(
      a.x + a.w < b.x ||
      a.x > b.x + b.w ||
      a.y + a.h < b.y ||
      a.y > b.y + b.h
    );
  }

  function getGameRect() {
    const r = gameElmnt.getBoundingClientRect();
    return { w: r.width, h: r.height };
  }

  ////////// Ads //////////

  //Array of pop up advertisements with varying text
  const adPop = [
    {
      title: "Your Mac has 7 viruses!",
      body: "Immediate ation required. Click now to repair",
      cta: "REPAIR",
    },
    {
      title: "Claim your prize",
      body: "You've beeen selected for a reward. Hurry!",
      cta: "CLAIM",
    },
    {
      title: "Hot singles near you",
      body: "There is hoards of hot singles ready to mingle!",
      cta: "OPEN",
    },
    { title: "System Update", body: "Restart required.", cta: "RESTART" },
    { title: "Limited time offer", body: "Buy before it's gone.", cta: "BUY" },
  ];

  //Picks random content from adPop, creates a div, and fills the HTML with the selected content
  function makeAdElement() {
    const data = adPop[(Math.random() * adPop.length) | 0];
    const elmnt = document.createElement("div");
    elmnt.className = "ad";
    elmnt.innerHTML = `
    <div class="titlebar">
        <div class="dots">
            <span class="dot close"></span>
            <span class="dot min"></span>
            <span class="dot max"></span>
        </div>
        <div>${data.title}</div>
    </div>
    <div class="body">
        <div>${data.body}</div>
        <span class="cta">${data.cta}</span>
    </div>
    `;
    return elmnt;
  }

  //Spawning an ad in front of the player
  function spawnAd() {
    //Allow maximum ads
    if (state.ads.length >= adMax) return;

    //Game boundaries
    const { w: gw, h: gh } = getGameRect();

    //Compute a spawn point in fronnt of the player
    const forwardDist = 220 + Math.random() * 180;
    const sideOffset = Math.random() * 180 - 90;

    //Perpendicular direction
    const px = -state.dirY;
    const py = state.dirX;

    //Base spawn position so ads appear ahead of where the user is going
    const baseX = state.x + state.dirX * forwardDist + px * sideOffset;
    const baseY = state.y + state.dirY * forwardDist + py * sideOffset;

    //Random ad size
    const aw = 170 + Math.random() * 60;
    const ah = 105 + Math.random() * 45;

    //Keeping the ad inside bounds
    const x = clamp(baseX, 0, gw - aw);
    const y = clamp(baseX, 0, gh - ah);

    //Including drift so the ad moves slightly giving it a more "alive" feel
    const drift = 30 + Math.random() * 70;
    const dx = px * drift * (Math.random() < 0.5 ? -1 : 1);
    const dy = py * drift * (Math.random() < 0.5 ? -1 : 1);

    //Creating the DOM element, and appending
    const elmnt = makeAdElement();
    elmnt.style.width = `${aw}px`;
    elmnt.style.width = `${ah}px`;
    elmnt.style.left = `${x}px`;
    elmnt.style.top = `${y}px`;
    elmnt.style.zIndex = String(10 + state.ads.length);

    gameElmnt.appendChild(elmnt);

    //Storing ad object
    state.ads.push({
      elmnt,
      x,
      y,
      w: aw,
      h: ah,
      tx: clamp(x + dx, 0, gw - aw),
      ty: clamp(y + dy, 0, gh - ah),
    });
  }

  //Moving ads slightly as to not have a static
  function updateAds(dt) {
    const ease = 1 - Math.pow(0.001, dt);
    for (const ad of state.ads) {
      ad.x += (ad.tx - ad.x) * ease;
      ad.y += (ad.ty - ad.y) * ease;
      ad.elmnt.style.left = `${ad.x}px`;
      ad.elmnt.style.top = `${ad.y}px`;
    }
  }

  //Clearing the ads, for starting and restarting the game
  function clearAds() {
    for (const ad of state.ads) ad.elmnt.remove();
    state.ads.length = 0;
  }

  ////////// Game Loop //////////

  //Player positioning
  function setPlayerPos() {
    playerElmnt.style.left = `${state.x}px`;
    playerElmnt.style.top = `${state.y}px`;
  }

  //The "actual" game loop, constantly running and updating
  function tick(ts) {
    //Getting the time elapsed since last frame
    const dt = state.lastTS ? (ts - state.lastTs) / 1000 : 0;
    state.lastTs = ts;

    state.t += dt;

    //Increasing spawn time of ads over time
    state.spawnInterval = Math.max(
      adSpawnPlus,
      adSpawnBase - state.t * adSpeed,
    );

    //Keyboard input influences direction
    readInput();
    state.vx = state.dirX * playerSpeed;
    state.vy = state.dirY * playerSpeed;

    //Connecting to user positioj
    state.x += state.vx * dt;
    state.y += state.vy * dt;

    //Boundaries
    const { w: gw, h: gh } = getGameRect();
    if (state.x < 0) {
      state.x = 0;
      state.dirX *= -1;
    }
    if (state.y < 0) {
      state.y = 0;
      state.dirY *= -1;
    }
    if (state.x > gw - playerSize) {
      state.x = gw - playerSize;
      state.dirX *= -1;
    }
    if (state.y > gh - playerSize) {
      state.y = gh - playerSize;
      state.dirY *= -1;
    }

    setPlayerPos();

    //Spawning the ads
    const current = performance.now();

    if (current >= state.nextSpawnAt) {
      spawnAd();
      //Shaking effect
      const shake = Math.random() * 120 - 60;
      state.nextSpawnAt = current + state.spawnInterval + shake;
    }

    updateAds(dt);

    //Collision detection and consequence
    const playerRect = {
      x: state.x,
      y: state.y,
      w: playerSize,
      h: playerSize,
    };

    for (const ad of state.ads) {
      const adRect = { x: ad.x, y: ad.y, w: ad.w, h: ad.h };
      if (rectsOverlap(playerRect, adRect)) {
        endGame();
        return;
      }
    }

    //Score
    state.score = Math.floor(state.t * 10);
    document.querySelector("#score").textContent = String(state.score);

    //Loop
    requestAnimationFrame(tick);
  }
})();
