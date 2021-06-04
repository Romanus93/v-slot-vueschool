const object = { a: 1, b: 2 };
// const { a, b } = object;
object.a =2 ;
console.log(object.a);
// console.log(a);
const { a, b } = object;
console.log(a);
console.log(b);

const animal = {
  name: '멍멍이',
  type: '개'
};

const { name: nickname } = animal
console.log(nickname);
console.log(animal);

const obj = { hi,lie}
console.log(obj.hi);