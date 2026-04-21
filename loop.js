const numbers = [1, 2, 4, 43, 45];

for(let number of numbers){
      console.log(number);
}

const employee = {
      name: 'jani na',
      salary: 20000,
      position: 'junior developer',
}

for(let key in employee){
     const value = employee[key];
    console.log(key, value);
}