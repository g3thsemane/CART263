class DrawingBoard {
  /* Constructor */
  constructor(canvas, context, drawingBoardId) {
    this.canvas = canvas;
    this.context = context;
    this.objectsOnCanvas = [];
    let self = this;
    this.drawingBoardId = drawingBoardId;
    //each element has a mouse clicked and a mouse over
    this.canvas.addEventListener("click", function (e) {
      self.clickCanvas(e);
    });

    this.canvas.addEventListener("mousemove", function (e) {
      self.overCanvas(e);
    });
  }

  overCanvas(e) {
    this.canvasBoundingRegion = this.canvas.getBoundingClientRect();
    this.mouseOffsetX = parseInt(e.clientX - this.canvasBoundingRegion.x);
    this.mouseOffsetY = parseInt(e.clientY - this.canvasBoundingRegion.y);

    if (this.drawingBoardId === "partA") {
      for (let i = 0; i < this.objectsOnCanvas.length; i++) {
        this.objectsOnCanvas[i].targetX = this.mouseOffsetX;
        this.objectsOnCanvas[i].targetY = this.mouseOffsetY;
      }
    }
  }

  clickCanvas(e) {
    this.canvasBoundingRegion = this.canvas.getBoundingClientRect();
    this.mouseOffsetX = parseInt(e.clientX - this.canvasBoundingRegion.x);
    this.mouseOffsetY = parseInt(e.clientY - this.canvasBoundingRegion.y);

    if (this.drawingBoardId === "partA") {
      let randomRadius = Math.random() * 30 + 10;
      let colors = ["red", "blue", "white", "green", "purple", "pink"];
      let randomColor = colors[parseInt(Math.random() * colors.length)];

      this.addObj(
        new CircularObj(
          this.mouseOffsetX,
          this.mouseOffsetY,
          randomRadius,
          randomColor,
          "#E6E6FA",
          this.context,
        ),
      );
    }
    if (this.drawingBoardId === "partD") {
      for (let i = 0; i < this.objectsOnCanvas.length; i++) {
        if (this.objectsOnCanvas[i].changeColor) {
          this.objectsOnCanvas[i].changeColor(this.getRandomColor());
        }
      }
    }
  }
  /* method to add obj to canvas */
  addObj(objToAdd) {
    this.objectsOnCanvas.push(objToAdd);
  }

  /* method to add display objects on canvas */
  display() {
    for (let i = 0; i < this.objectsOnCanvas.length; i++) {
      this.objectsOnCanvas[i].display();
    }
  }

  /* method to add animate objects on canvas */
  animate(volume) {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = 0; i < this.objectsOnCanvas.length; i++) {
      this.objectsOnCanvas[i].update(volume);
      this.objectsOnCanvas[i].display();
    }
  }

  run(videoElement, mx, my) {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = 0; i < this.objectsOnCanvas.length; i++) {
      let obj = this.objectsOnCanvas[i];

      if (obj.updatePositionRect) {
        obj.updatePositionRect(mx, my);
      }

      obj.update(videoElement);
      obj.display();
    }
  }

  getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
  }
}
