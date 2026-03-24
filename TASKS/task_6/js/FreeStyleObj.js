class FreeStyleObj {
  constructor(x, y, length, f_color, s_color, context) {
    // We write instructions to set up a Flower here
    // Position and size information
    this.x = x;
    this.y = y;
    this.fill_color = f_color;
    this.stroke_color = s_color;
    this.theta = 0;
    this.length = length;
    this.yOffset = 20;
    this.angularSpeed = 0.07;
    this.context = context;
    this.isMoving = false; // Track if currently moving
  }

  display() {
    this.theta = 0; //reset everytime
    this.context.fillStyle = this.fill_color; // change the color we are using
    this.context.strokeStyle = this.stroke_color; // change the color we are using
    this.context.beginPath();
    this.context.moveTo(this.x, this.y);
    for (let i = this.x; i < this.x + this.length; i++) {
      this.context.lineTo(i, Math.sin(this.theta) * 5 + this.y);
      this.context.lineTo(i, Math.sin(this.theta) * 5 + this.y + this.yOffset);
      this.theta += this.angularSpeed;
    }
    this.context.stroke(); //set the stroke
  }

  update(volume) {
    //update freestyle - move left and right based on volume
    const threshold = 40;
    const minX = 0;
    const maxX = 400 - this.length; // Keep within canvas bounds

    if (volume > threshold) {
      if (!this.isMoving) {
        // Change color when starting to move
        this.fill_color = this.getRandomColor();
        this.stroke_color = this.getRandomColor();
        this.isMoving = true;
      }
      // Move left and right based on volume
      this.x += Math.sin(Date.now() * 0.005) * (volume * 0.1);

      // Constrain to drawing board limits
      if (this.x < minX) this.x = minX;
      if (this.x > maxX) this.x = maxX;
    } else {
      this.isMoving = false;
    }
    // Stop moving when volume is low - position stays the same
  }

  getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }
}