class Car {
  constructor(x, y, width, height) {
    this._x = x;
    this._y = y;
    this._width = width;
    this._height = height;

    this.speed = 0;
    this.acceliration = 0.2;
    this.maxSpeed = 3;
    this.friction = 0.3;
    this.controls = new Controls();
  }

  update() {
    if (this.controls.forward) {
      this.speed += this.acceliration;
      console.log((this.speed += this.acceliration));
    }
    if (this.controls.reverse) {
      this.speed -= this.acceliration;
      console.log((this.speed -= this.acceliration));
    }

    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed;
    }
    if (this.speed < -this.maxSpeed / 2) {
      this.speed = -this.maxSpeed / 2;
    }

    if (this.speed > 0) {
      this.speed -= this.friction;
    }
    if (this.speed < 0) {
      this.speed += this.friction;
    }
    // if (Math.abs(this.speed) < this.friction) {
    //   this.speed = 0;
    // }

    if (this.controls.left) {
      this._x -= 2;
    }
    if (this.controls.right) {
      this._x += 2;
    }

    this._y -= this.speed;
  }

  draw(cxt) {
    cxt.beginPath();

    cxt.rect(
      this._x - this._width / 2,
      this._y - this._height / 2,

      this._width,
      this._height
    ),
      cxt.fill();
  }
}
