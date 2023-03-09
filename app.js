const canvas = document.getElementById("myCanvas");
canvas.height = window.innerHeight;
canvas.width = 300;

const cxt = canvas.getContext("2d");
const car = new Car(150, 100, 30, 50);

car.draw(cxt);
