class Road {
  constructor(x, width, laneCount = 3) {
    this.x = x;
    this.width = width;
    this.laneCount = laneCount;

    this.left = x - width / 2;
    this.right = x + width / 2;

    const infinity = 1000000;

    this.top = -infinity;
    this.bottom = infinity;
  }

  getLaneCenter(laneIndex) {
    const laneWidth = this.width / this.laneCount;
    return (
      this.left +
      laneWidth / 2 +
      Math.min(laneIndex, this.laneCount - 1) * laneWidth
    );
  }

  draw(cxt) {
    cxt.lineWidth = 5;
    cxt.strokeStyle = "white";

    for (let i = 0; i <= this.laneCount; i++) {
      const x = lept(this.left, this.right, i / this.laneCount);

      if (i > 0 && i < this.laneCount) {
        cxt.setLineDash([20, 20]);
      } else {
        cxt.setLineDash([]);
      }

      cxt.beginPath();
      cxt.moveTo(x, this.top);
      cxt.lineTo(x, this.bottom);
      cxt.stroke();
    }
  }
}
