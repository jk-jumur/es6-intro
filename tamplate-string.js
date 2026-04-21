const firstName = 'jk';
const lastName = 'jumur';
const aboutMe = `my name is ${firstName}`;
console.log(aboutMe);

const fullName = `my name is ${firstName} ${lastName}`;
console.log(fullName);

const givMe = `give me money ${(2+4+5)*6+500}`
console.log(givMe);

function getCardHTML(name, description, price){
       const div = `
          <div class="card">
             <h2>${name.toUpperCase()} borolox</h2>
             <p>Price:$ ${price}</p>
             <p>${description}</p>
          </div>
       `;

         console.log(div);
}

getCardHTML('iphone 12', 'This is the latest model', 999)