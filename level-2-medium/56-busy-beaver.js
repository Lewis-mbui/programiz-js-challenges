// Write a function to solve the Busy Beaver problem. 
// The Busy Beaver function, denoted as BB(n), is the 
// maximum number of steps an n-state Turing machine can take 
// before stopping.
// If n = 1, BB(1) is 1
// for n > 1, the number of steps is BB(n) = BB(n - 1) * 2 + 2
// e.g for n = 2 --> BB(2) = 1 * 2 + 2 = 4

const n = 3;
console.log(busyBeaver(n));


function busyBeaver(n) {
 if (n === 1) return 1;

 return busyBeaver(n - 1) * 2 + 2;
}