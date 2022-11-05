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
// const stuffs: any[] = [1, 2, 3, 4, true, 'afdsf', {}];
// 타입이 숫자 또는 문자로만 이루어진 배열
const stuffs: (number | string)[] = [1, 2, 3, 4, 'asdfs'];

const coords: (Coord | Loc)[] = [];
coords.push({ lat: 321.213, long: 23.334 });
coords.push({ x: 1, y: 34 });

// 리터럴 타입 - 꼭 유니온 타입과 연관이 있는 것은 아니지만 종종 유니온 타입과 함께 쓰임
let zero: 0 = 0;
// zero = 2; Error -> zero의 타입은 숫자 0만을 가지는 리터럴 타입
let hi: 'hi' = 'hi';
// hi = 'Hi' Error -> hi의 타입은 문자 'hi'만을 가지는 리터럴 타입
let mood: 'Sad' | 'Happy' = 'Happy';
mood = 'Sad';

type DayOfWeek =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday';

let today: DayOfWeek = 'Tuesday';
// today = 'weds' Error -> today의 타입은 DayOfWeek의 리터럴 타입만을 가질 수 있다.
