const employee = {
      name: 'jk',
      1 : 'Desk one',
      salary: 60000,
      family: {
          father: 'my super hero',
          mother: {
              name: 'the  greatest women of all time',
              age: 45,
          }

      },
      position: 'Software Engineer',
};

console.log(employee.family?.mother?.age)