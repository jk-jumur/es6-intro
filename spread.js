const numbers =  Math.max(2, 3, 4, 8, 9, 5, 7);
console.log(numbers);

// spread operator
//array
const numbers2 = [3, 5, 6, 7, 89, 67, 85];
const max = Math.max(...numbers2);
// console.log(...numbers2);
// console.log(max);
// console.log(numbers2);

const params = [33, 44, 3];
function sum(x,y,z){
    console.log(x, y, z);
     return x+y+z;
}

 const result = sum(...params);
 console.log(result);

 const arr1 = [3, 4, 5, 6, 7]
//  const arr2 = [...arr1];
   const arr2 = [22, ...arr1, 66, 78, 90];
//  arr2.push(4);
 console.log(arr1);
  console.log(arr2);


  //object

  const person = { name: 'Alice', age: 24};
//   const person2 = person;
  const person2 = {...person, designation:'CA officer and developer'};
  person.salary = 36000;
  console.log(person);
  console.log(person2);
