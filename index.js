// function createCircle(radius) {
//   return {
//     radius,
//     draw() {
//       console.log('draw');
//     }
//   }
// }

// const circle1 = createCircle(2);
// console.log(circle1)

// const numberArray = [40, 1, 5, 200];
// function compareNumbers(a, b) {
//   return a - b;
// }

// numberArray.sort(compareNumbers);
// console.log(numberArray);

// function playVideo() {
//   console.log(this);
// }

// playVideo();

// function Product(name, price) {
//   this.name = name;
//   this.price = price;
// }

// function Food(name, price) {
//   Product.call(this, name, price);
//   this.category = 'food';
// }

// const f1 = new Food('hot dog', 100)
// console.log(f1)

// const parentFunction = (person) => {
//   let coins = 3;

//   return () => {
//     coins -= 1;
//     if (coins > 0) console.log(`${person} has ${coins} left`)
//     else console.log(`${person} is out of coins`)
//   }
// }

// const son = parentFunction('son');
// const daughter = parentFunction('daughter');

// son();
// son();

// daughter();
// son();
// daughter();

// const nephew = parentFunction('nephew');
// nephew();

// btn1.onClick = clickHandler(12)
// btn2.onClick = clickHandler(14)

// function clickHandler (size) {
//   return function () {
//     document.body.style.fontSize = `{size}px`;
//   }
// }

// function func() {
//   console.log('hello');
// }

// func.exampleProp = 'hello';
// console.log(func)

// const obj = new func();
// console.log(obj)

// class Circle {
//   constructor(radius) {
//     this.radius = radius;

//     this.move = function() {
//       console.log('move');
//     }
//   }

//   draw() {
//     console.log('draw');
//   }
// }

// const c = new Circle(2);
// console.log(c);

// function Circle(radius) {
//   this.radius = radius;
//   this.move = function() {
//     console.log('move')
//   }
// }

// const c1 = new Circle(2);
// console.log(c1);

// const element = document.getElementById("demo");

// console.log(element.innerText);
// console.log(element.textContent);


// const regex = /(\d{4})-(\d{2})-(\d{2})/;
// const match = "2024-05-19".match(regex);

// const [, year, month, date] = match;
// console.log(year, month, date);

// const str = "Expression of Joy";
// const regex = /(?=[A-Z])/g;

// console.log(regex.test(str));
// const match = str.match(regex);
// console.log(match);

// const regex = /"\w+(?: +\w+)*"/;
// const str = `The wizard said "Magic is real" but the knight said "Steel is better".`
// const match = str.match(regex);
// console.log(match)

// const n = 4;
// console.log(isPrime(n));

// function isPrime(n) {
//   if (n < 2) return false;

//   for (let i = 2; i * i <= n; i++) {
//     if (n % i === 0) return false;
//   }

//   return true;
// }

// const n = 780;
// console.log(computePrimeFactors(n))

// function computePrimeFactors(n) {
//   const primeFactors = [];

//   for (let i = 2; i * i <= n; i++) {
//     if (n % i === 0) {
//       primeFactors.push(i);
//       while (n % i === 0) {
//         n /= i;
//       }
//     }
//   }
//   if (n !== 1) primeFactors.push(n);
//   return primeFactors;
// }

// const str = '-hello world&#I am lewiS';
// const arr = str.split(/[^a-z0-9]+/i);
// console.log(arr)

// console.log(''.toLowerCase())

const arr = [2, 1, 5, 4, 3, 0, 0];
console.log(nextPermutation(arr));

function nextPermutation(arr) {
  const n = arr.length;
  let breakIndex = -1;
  const arrCopy = [...arr];
  
  for (let i = n - 2; i > 0; i--) {
    if (arr[i] < arr[i + 1]) {
      breakIndex = i;
      break;
    }
  }
  
  console.log(breakIndex);
  if (breakIndex === -1) return [...arr].reverse();

  for (let i = n - 1; i > breakIndex; i--) {
    if (arrCopy[i] > arrCopy[breakIndex]) {
      [arrCopy[breakIndex], arrCopy[i]] = [arrCopy[i], arrCopy[breakIndex]];
      break;
    }
  }
  
  return arrCopy.slice(0, breakIndex + 1)
    .concat(arrCopy.slice(breakIndex + 1).reverse());
}