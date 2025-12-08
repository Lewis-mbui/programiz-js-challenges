// Write a function to find the true equations in a given array.
// A true equation is one where the mathematical expression 
// before the equals sign equates exactly to the value after 
// the equals sign. e.g. '2+2=4' is a true equation

const equations = ['2+2=4', '3*3=6', '1+1=3', '5/5=1'];
console.log(findTrueEquations(equations));

function safeEval(expr) {
  return Function(`"use strict"; return (${expr});`)();
}

function findTrueEquations(equations) {
  return equations.filter(eq => {
    const [lhs, rhs] = eq.split("=");
    return safeEval(lhs) === Number(rhs);
  });
}


// function evaluate(expr) {
//   // Remove spaces
//   expr = expr.replace(/\s+/g, "");

//   // Handle + and - (lowest precedence)
//   let idx = expr.search(/[-+](?=[^()+\-*/]*$)/);
//   if (idx > 0) {
//     let op = expr[idx];
//     return op === "+"
//       ? evaluate(expr.slice(0, idx)) + evaluate(expr.slice(idx + 1))
//       : evaluate(expr.slice(0, idx)) - evaluate(expr.slice(idx + 1));
//   }

//   // Handle * and /
//   idx = expr.search(/[*/]/);
//   if (idx > 0) {
//     let op = expr[idx];
//     return op === "*"
//       ? evaluate(expr.slice(0, idx)) * evaluate(expr.slice(idx + 1))
//       : evaluate(expr.slice(0, idx)) / evaluate(expr.slice(idx + 1));
//   }

//   // Base case: pure number
//   return Number(expr);
// }

// function findTrueEquations(equations) {
//   return equations.filter(eq => {
//     const [lhs, rhs] = eq.split("=");
//     return evaluate(lhs) === Number(rhs);
//   });
// }