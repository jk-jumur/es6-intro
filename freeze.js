const queen = { name: 'jk', age: 24, kingdom: 'pride lands'};
// Object.freeze(queen)
Object.seal(queen);
delete king.age; //[etar mane hocche queen object er age name property ta delete hoi jabe]
queen.king = 'i dont no who is the king'; //[ekhane property and value set kora hoise]
queen.name = 'queen jannat' //[ekhane proprty er value change kora hoise]
console.log(queen);