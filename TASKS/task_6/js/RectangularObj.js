class RectangularObj {
  constructor(x, y, w, h, f_color, s_color, context) {
    // We write instructions to set up a Flower here
    // Position and size information
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.fill_color = f_color;
    this.stroke_color = s_color;
    this.startAngle = 0;
    this.endAngle = Math.PI * 2; //full rotation
    this.context = context;
    this.rotation = 0; // New property for rotation
    this.isMoving = false; // Track if currently moving
  }

  display() {
    // Save the context state
    this.context.save();

    // Translate to the center of the rectangle
    this.context.translate(this.x + this.width / 2, this.y + this.height / 2);

    // Rotate
    this.context.rotate(this.rotation);

    // Draw the rectangle centered at the origin
    this.context.fillStyle = this.fill_color; // change the color we are using
    this.context.fillRect(
      -this.width / 2,
      -this.height / 2,
      this.width,
      this.height,
    );
    this.context.strokeStyle = this.stroke_color; // change the color we are using
    this.context.lineWidth = 2; //change stroke
    this.context.strokeRect(
      -this.width / 2,
      -this.height / 2,
      this.width,
      this.height,
    );

    // Restore the context state
    this.context.restore();
  }

  update(volume) {
    const threshold = 40;

    if (volume > threshold) {
      if (!this.isMoving) {
        // Change color when starting to move
        this.fill_color = this.getRandomColor();
        this.stroke_color = this.getRandomColor();
        this.isMoving = true;
      }
      // ROTATE based on volume when sound is strong
      this.rotation += volume * 0.002; // Increases rotation speed with volume
    } else {
      this.isMoving = false;
    }
    // Stop rotating when volume is low - rotation property stays the same
  }

  getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }
}