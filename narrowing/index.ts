// typeof 가드
function triple(value: number | string) {
  if (typeof value === 'string') {
    return value.repeat(3);
  }

  // if문 안에 typeof로 분기를 나누어 주었으므로 if문 밖 value는 number 타입으로 지정된다.
  return value * 3;
}

// Truthiness Guards
function printLetters(word?: string) {
  // truthy 값인지, falsy 값인지 확인
  if (word) {
    for (let char of word) {
      console.log(char);
    }
  } else {
    // 빈 문자열은 string 이지만 truthy한 값이 아니므로 else의 word는 stirng | undefined 타입으로 지정된다.
    console.log('YOU DID NOT PASS IN A WORD!', word);
  }
}

// Equality narrowing
function someDemo(x: string | number, y: string | boolean) {
  // 두 매개변수가 같은 경우는 string 타입이므로 if문 안의 변수 타입은 string 이다.
  if (x === y) {
    x.toUpperCase();
  }
}

// in Operator narrowing
interface Movie {
  title: string;
  duration: number;
}

interface TVShow {
  title: string;
  numEpisodes: number;
  episodeDuration: number;
}

function getRuntime(media: Movie | TVShow) {
  if ('numEpisodes' in media) {
    const { numEpisodes, episodeDuration } = media;

    // return 을 하지 않으면 if문 밖 media의 타입은 Movie | TVShow 로 지정된다
    return numEpisodes * episodeDuration;
  }
  return media.duration;
}

console.log({ title: 'Amadus', duration: 140 });
console.log({ title: 'Spongebob', numEpisodes: 80, episodeDuration: 30 });

// instanceof Narrowing
function printFullDate(date: string | Date) {
  // 매개변수인 date가 특정 프로토타입 체인 내에 있는 경우(new 생성자 함수)인지 구별
  if (date instanceof Date) {
    // Date() 생성자는 toUTCString() 메서드를 사용할 수 있다.
    console.log(date.toUTCString());
  } else {
    // else문에는 자동으로 string 타입이 지정되므로 new Date() 함수에 값을 넣은 후 특정 메서드를 사용한다.
    console.log(new Date(date).toUTCString());
  }
}
// 동일한 키가 존재하는 경우에도 유용.
class User {
  constructor(public name: string) {}
}

class Company {
  constructor(public name: string) {}
}

function printName(entity: User | Company) {
  if (entity instanceof User) {
    entity;
  } else {
    entity;
  }
}

// Type Predicates (타입 명제)
interface Cat {
  name: string;
  numLives: number;
}

interface Dog {
  name: string;
  breed: string;
}

/*
  ture 또는 false 값을 반환하는 함수 생성
  함수의 리턴값을 타입을 반환하는 위치에 타입 명제를 작성
  parameter is Type 형태로 작성한다. (ex. animal is Cat)
*/
function isCat(animal: Cat | Dog): animal is Cat {
  // Cat임을 단언한 후 해당 키 값이 undefined인지 확인
  return (animal as Cat).numLives !== undefined;
}

function makeNoise(animal: Cat | Dog) {
  if (isCat(animal)) {
    return 'Meow';
  } else {
    return 'Woof';
  }
}

// discriminated unions (판별 유니온)
// 공통된 프로퍼티에 판별자를 추가
interface Rooster {
  name: string;
  weight: number;
  age: number;
  kind: 'rooster';
}

interface Cow {
  name: string;
  weight: number;
  age: number;
  kind: 'cow';
}

interface Pig {
  name: string;
  weight: number;
  age: number;
  kind: 'pig';
}

interface Sheep {
  name: string;
  weight: number;
  age: number;
  kind: 'sheep';
}

type FarmAnimal = Pig | Rooster | Cow | Sheep;

function getFarmAnimalSound(animal: FarmAnimal) {
  switch (animal.kind) {
    case 'rooster':
      return 'Cockadoodledoo!';
    case 'cow':
      return 'Moooo';
    case 'pig':
      return 'Oink';
    default:
      // We should never make it here, if we handled all cases correctly
      // const shouldNeverGetHee: never = animal
      // return shouldNeverGetHee

      /*
        Sheep 의 경우를 case로 처리해주지 않았기 때문에 default 에서 설정한 변수에는 오류가 발생. 
        따라서 추가 case를 만들고 처리하지 않으면 default에서 오류가 발생하면서 이를 알려준다.
      */

      const _exhaustiveCheck: never = animal;
      return _exhaustiveCheck;
  }
}

const stevie: Rooster = {
  name: 'Stevie Chicks',
  weight: 2,
  age: 1.5,
  kind: 'rooster',
};

getFarmAnimalSound(stevie);

//
