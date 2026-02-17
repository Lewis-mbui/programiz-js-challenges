const totalChocolates = 19
const totalChildren = 3
console.log(divideChocolates(totalChocolates, totalChildren));

function divideChocolates(totalChocolates, totalChildren) {
  const chocolatesPerChild = Math.floor(totalChocolates / totalChildren);
  const remainingChocolates = (totalChocolates % totalChildren);

  return [chocolatesPerChild, remainingChocolates];
}