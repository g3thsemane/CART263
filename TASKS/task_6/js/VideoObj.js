class VideoObj {
  constructor(x, y, w, h, videoElement, context) {
    this.videoElement = videoElement;
    this.context = context;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.shapeX = 10;
    this.shapeY = 10;
    this.shapeCol = "#000000";

    this.blur = 0;
    this.sepia = 0;
    this.hue = 0;
    this.invert = 0;

    let blurInput = document.getElementById("blurnum");
    this.userProvidedBlur = 0;

    let sepiaSlider = document.getElementById("sepianum");
    let hueSlider = document.getElementById("huenum");
    let invertSlider = document.getElementById("invertnum");

    let self = this;

    blurInput.addEventListener("input", function () {
      self.blur = blurInput.value;
    });

    sepiaSlider.addEventListener("input", function () {
      self.sepia = sepiaSlider.value;
    });

    hueSlider.addEventListener("input", function () {
      self.hue = hueSlider.value;
    });

    invertSlider.addEventListener("input", function () {
      self.invert = invertSlider.value;
    });
  }

  display() {
    this.context.save();

    this.context.filter = `
    blur(${this.blur}px)
    sepia(${this.sepia}%)
    hue-rotate(${this.hue}deg)
    invert(${this.invert}%)
  `;

    this.context.drawImage(this.videoElement, this.x, this.y, this.w, this.h);

    // rectangle on top
    this.context.fillStyle = this.shapeCol;
    this.context.fillRect(this.shapeX, this.shapeY, 50, 50);

    this.context.restore();
  }

  //called when rectangle color is to be updated
  changeColor(newCol) {
    this.shapeCol = newCol;
  }
  //called when rectangle Pos is to be updated
  updatePositionRect(mx, my) {
    if (!Number.isFinite(mx) || !Number.isFinite(my)) {
      return;
    }

    let mouseX = mx;
    let mouseY = my;
    this.shapeX = mouseX - 25; // Center the rectangle on the mouse
    this.shapeY = mouseY - 25;
  }
  update(videoElement) {
    this.videoElement = videoElement;
  }
}
