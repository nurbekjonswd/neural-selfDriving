const canvas = document.getElementById("myCanvas");

canvas.width = 300;

const cxt = canvas.getContext("2d");
const car = new Car(150, 100, 30, 50);

car.draw(cxt);

animate();

function animate() {
  canvas.height = window.innerHeight;
  car.update(), car.draw(cxt);
  requestAnimationFrame(animate);
}
