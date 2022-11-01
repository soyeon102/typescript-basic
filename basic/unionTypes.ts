// 유니온 타입 - 여러 타입을 가질 수 있음
let age: number | string = 21;
age = 21;
age = '24';

type Coord = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  long: number;
};

let coordinates: Coord | Loc = { x: 1, y: 34 };
coordinates = { lat: 321.213, long: 23.334 };

function printAge(age: number | string): void {
  console.log(`You are ${age} years old`);
}

printAge(23);
printAge('87');

/*
  price의 타입이 완벽히 정해지지 않은 상태에서는 아래 두 코드 모두 에러 발생 
  function calculateTax(price: number | string, tax: number) {  
    price = price.replace('$', '');
    return price * tax;
  } 
*/

// 타입 좁히기(Type Narrowing) - 타입을 확인하는 단계를 추가하는 것
function calculateTax(price: number | string, tax: number) {
  if (typeof price === 'string') {
    price = parseFloat(price.replace('$', ''));
  }
  return price * tax;
}
calculateTax(45, 0.07);
calculateTax('$45', 0.07);

// const nums: number[] = [1, 2, 3, 4];
// const stuff: any[] = [1, 2, 3, 4, true, 'afdsf', {}];
const stuff: (number | string)[] = [1, 2, 3, 4, 'asdfs'];

const coords: (Coord | Loc)[] = [];
coords.push({ lat: 321.213, long: 23.334 });
coords.push({ x: 1, y: 34 });
