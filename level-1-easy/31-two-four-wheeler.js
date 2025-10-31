// Write a function to check if a vehicle is a 2 or a 4 wheeler

const wheels = 2;
console.log(checkVehicleType(wheels));

function checkVehicleType(wheels) {
  if (wheels === 2) return 'Two-wheeler';
  if (wheels === 4) return 'Four-wheeler';

  return "Invalid";
}