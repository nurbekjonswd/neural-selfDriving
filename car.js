class Car {
  constructor(x, y, width, height) {
    this._x = x;
    this._y = y;
    this._width = width;
    this._height = height;

    this.controls = new Controls();
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
