function printName(person: { first: string; last: string }): void {
  console.log(`${person.first} ${person.last}`);
}
printName({ first: 'Thomas', last: 'Jenkins' });
// printName({ first: 'Thomas', last: 'Jenkins', age: 20 }); -> Error
let singer = { first: 'Thomas', last: 'Jenkins', age: 20 };
printName(singer);
/* 
  객체 리터럴을 직접 전달하는 경우 annotation을 지정하지 않은 키에 대해서는 오류 발생
  그러나 singer와 같이 사전에 변수로 정의하는 과정을 거치면 지정된 프로퍼티만 검사하고 
  나머지는 무시하면서 오류가 발생하지 않는다.
*/

// 객체 타입을 사용하는 변수를 가질 수 있다.
let coordinate: { x: number; y: number } = { x: 34, y: 32 };

// 객체 리터럴 형태의 반환 타입 annotation을 가지는 함수를 만들 수 있다.
function makeCoordinate(): { x: number; y: number } {
  return { x: Math.random(), y: Math.random() };
}

// Type Alias - 타입 별칭
type Points = {
  x: number;
  y: number;
  // ?로 선택적 프로퍼티 요소를 설정할 수 있다.
  z?: number;
};

/* 
  function doublePoint(point: {x: number, y, number}): {x: number, y: number}{
    return {x: point.x * 2, y: point.y *2};
  }; 
*/
function doublePoint(point: Points): Points {
  return { x: point.x * 2, y: point.y * 2 };
}

// 중첩 객체 타입
type Person = {
  name: string;
  age: number;
  parentNames: Parents;
};

type Parents = {
  mom: string;
  dad: string;
};

const describePerson = (person: Person): string => {
  return `Person: ${person.name}, Age: ${person.age}, Parents: ${person.parentNames.mom}, ${person.parentNames.dad}`;
};
describePerson({
  name: 'Jlimmy',
  age: 10,
  parentNames: { mom: 'Kim', dad: 'Steve' },
});

// Type alias 활용
type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: {
    producer: string;
    writer: string;
  };
};

function calculatePayout(song: Song): number {
  return song.numStreams * 0.3333;
}

function printSong(song: Song): void {
  console.log(`${song.title} - ${song.artist}`);
}

const mySong = {
  title: 'Unchained Melody',
  artist: 'Righteous Brothers',
  numStreams: 12873321,
  credits: {
    producer: 'Phil Spector',
    writer: 'Alex North',
  },
};

calculatePayout(mySong);
printSong(mySong);

// readOnly 제어
type User = {
  readonly id: number;
  username: string;
};

const user: User = {
  id: 1234,
  username: 'catgurl',
};
// user.id = 32341 Error -> readOnly 값 변경 시 에러 발생

// 교차 타입
type Circle = {
  radius: number;
};
type Colorful = {
  color: string;
};
type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
  radius: 4,
  color: 'yellow',
};

// 교차 타입 & 타입 추가
type Cat = {
  numLives: number;
};
type Dog = {
  breed: string;
};
type CatDog = Cat &
  Dog & {
    age: number;
  };

const christy: CatDog = {
  numLives: 7,
  breed: 'Husky',
  age: 9,
};
