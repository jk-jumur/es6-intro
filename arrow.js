console.log(add(10, 20));
// function declaration
function add(num1, num2){
       const total = num1 + num2;
       return total;
}
// function expression

  const add2 = function(num1 ,num2) {
         return num1 + num2;
  }

//   console.log(add(40, 30));


  //arrow function

  const add3 = (num1, num2) => num1 + num2;
//   console.log(add3(50, 60));

  const multiple = (a, b) => a * b;

  const tenTimes = x => x * 10;
  const tenTimes2 = (x) => x * 10;
  const getPi = () => 3.1416;
//   console.log(tenTimes(3));
  const isEven = num => num % 2=== 0;
  console.log(isEven(3));

  const addAll = (a, b, c, d, e, f) => a + b + c + d+ e + f;
//   console.log(addAll(1,2,3,4,5,6));

const divide = (p ,q) => p / q;
console.log(divide(2 ,4));

const diff = (a, b) => a -b;
console.log(diff(1000, 500));

//document.getElementById('btn').addEventListener('click', () =>{});
document.getElementById('btn').addEventListener('click', (event) => {});


 