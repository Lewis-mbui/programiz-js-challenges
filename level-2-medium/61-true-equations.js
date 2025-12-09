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



// function findTrueEquations(equations) {

//   // 1. Convert infix expression (e.g. "2+3*2") into tokens
//   const tokenize = (expr) => {
//     const tokens = [];
//     let current = "";

//     for (let char of expr) {
//       // If it's a digit, build a number
//       if (/\d/.test(char)) {
//         current += char;
//       } else {
//         // push completed number
//         if (current !== "") {
//           tokens.push(Number(current));
//           current = "";
//         }
//         // push operator
//         if (/[+\-*/]/.test(char)) tokens.push(char);
//       }
//     }

//     // push last number if any
//     if (current !== "") tokens.push(Number(current));

//     return tokens;
//   };

//   // 2. Define operator precedence
//   const precedence = {
//     "+": 1,
//     "-": 1,
//     "*": 2,
//     "/": 2
//   };

//   // 3. Convert tokens to Reverse Polish Notation (RPN)
//   const toRPN = (tokens) => {
//     const output = [];
//     const ops = [];

//     for (let token of tokens) {
//       if (typeof token === "number") {
//         output.push(token);
//       } else {
//         // operator
//         while (
//           ops.length &&
//           precedence[ops.at(-1)] >= precedence[token]
//         ) {
//           output.push(ops.pop());
//         }
//         ops.push(token);
//       }
//     }

//     // pop remaining ops
//     while (ops.length) output.push(ops.pop());

//     return output;
//   };

//   // 4. Evaluate RPN expression
//   const evalRPN = (rpn) => {
//     const stack = [];

//     for (let token of rpn) {
//       if (typeof token === "number") {
//         stack.push(token);
//       } else {
//         const b = stack.pop();
//         const a = stack.pop();

//         switch (token) {
//           case "+": stack.push(a + b); break;
//           case "-": stack.push(a - b); break;
//           case "*": stack.push(a * b); break;
//           case "/": stack.push(a / b); break;
//         }
//       }
//     }

//     return stack[0];
//   };

//   // 5. Tie everything together
//   const isTrueEquation = (eq) => {
//     const [lhs, rhs] = eq.split("=");

//     const tokens = tokenize(lhs);
//     const rpn = toRPN(tokens);
//     const left = evalRPN(rpn);

//     return left === Number(rhs);
//   };

//   return equations.filter(isTrueEquation);
// }
