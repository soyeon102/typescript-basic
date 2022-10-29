// Type Annotation - let, const, var 등으로 변수를 선언하고 뒤에 콜론(:)을 적어 타입을 지정. 직관적
let movieTitle: string = 'Amadeus';
movieTitle = 'Arrival';

let catNum: number = 9;
catNum += 1;

let gameOver: boolean = false;
gameOver = true;

// Type Inference - 할당된 변수를 토대로 타입을 추론
let tvsShow = 'Olive Kitteridge';
tvsShow = 'The other';

let isFunny = false;
isFunny = true;

// the any type - 어떤 타입이든 상관없이 지정할 수 있는 타입
let thing: any = 'hello';
thing = 1;
thing = false;
thing();

// Type Annotation으로 타입을 직접 할당해야 하는 경우도 존재
const movies = ['Arrival', 'The Thing', 'Aliens', 'Amadeus'];
let foundMovie; // 값을 할당하지 않은 상태에서는 타입이 any로 지정
// let foundMovie: string; -> 이렇게 Annotation으로 직접 지정해주는 것이 좋음. 즉, 암시적으로 any 타입 할당을 막기 위해 사용

for (let movie of movies) {
  if (movie === 'Amadeus') {
    foundMovie = 'Amadeus'; // 문자열을 할당해도 여전히 타입은 any
  }
}
