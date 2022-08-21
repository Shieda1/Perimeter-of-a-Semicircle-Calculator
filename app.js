// https://calculator.swiftutors.com/perimeter-of-a-semicircle-calculator.html

const v1 =  document.getElementById('v1');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const perimeterofaSemicircleRadio = document.getElementById('perimeterofaSemicircleRadio');
const radiusoftheSemicircleRadio = document.getElementById('radiusoftheSemicircleRadio');

let perimeterofaSemicircle;
const PI = Math.PI;
let radiusoftheSemicircle = v1; 

// labels of the inpust
const variable1 = document.getElementById('variable1');

perimeterofaSemicircleRadio.addEventListener('click', function() {
  variable1.textContent = 'Radius of the Semicircle';
  radiusoftheSemicircle = v1;
  result.textContent = '';
});

radiusoftheSemicircleRadio.addEventListener('click', function() {
  variable1.textContent = 'Perimeter of a Semicircle';
  perimeterofaSemicircle = v1;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(perimeterofaSemicircleRadio.checked)
    result.textContent = `Perimeter of a Semicircle = ${computePerimeterofaSemicircle().toFixed(5)}`;

  else if(radiusoftheSemicircleRadio.checked)
    result.textContent = `Radius of the Semicircle = ${computeRadiusoftheSemicircle().toFixed(5)}`;
})

// calculation

function computePerimeterofaSemicircle() {
  return (PI * Number(radiusoftheSemicircle.value)) + (2 * Number(radiusoftheSemicircle.value));
}

function computeRadiusoftheSemicircle() {
  return Number(perimeterofaSemicircle.value) / (PI + 2);
}