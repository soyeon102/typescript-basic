// interface - type과 유사하지만 객체에만 쓰인다는 특징이 있다.
interface Point {
  x: number;
  y: number;
}

const pt: Point = { x: 123, y: 1234 };

interface PersonInfo {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
  // sayHi: () => string; 아래와 같은 표현
  sayHi(): string;
}

const thomas: PersonInfo = {
  first: 'Thomas',
  last: 'Hardy',
  nickname: 'Tom',
  id: 21342,
  sayHi: () => {
    return 'Hello';
  },
};

interface Product {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
}

const shoes: Product = {
  name: 'Blue Suede Shoes',
  price: 100,
  applyDiscount(amount: number) {
    const newPrice = this.price * (1 - amount);
    this.price = newPrice;
    return this.price;
  },
};

shoes.applyDiscount(0.4);

// interface 확장
interface DogInfo {
  name: string;
  age: number;
}

interface DogInfo {
  breed: string;
  bark(): string;
}

const elton: DogInfo = {
  name: 'Elton',
  age: 0.5,
  breed: 'Australian Shepherd',
  bark() {
    return 'Woof Woof!';
  },
};

// interface 상속
interface ServiceDog extends DogInfo {
  job: 'drug sniffer' | 'bomb' | 'guide';
}

const chewy: ServiceDog = {
  name: 'Chewy',
  age: 4.5,
  breed: 'Lab',
  bark() {
    return 'Bark!';
  },
  job: 'guide',
};

// interface 다중 상속
interface Human {
  name: string;
}

interface Employee {
  readonly id: number;
  email: string;
}

interface Engineer extends Human, Employee {
  level: string;
  languages: string[];
}

const pierre: Engineer = {
  name: 'Pierre',
  id: 5453,
  email: 'pierre@gmail.com',
  level: 'senior',
  languages: ['JS', 'Python'],
};

/* 
  interface와 type의 차이점
  - interface는 객체 형태만 가능 
    예를 들어 type Color = 'red' | 'blue' 는 가능하나 interface는 이러한 형태로 사용할 수 없다.
  - interface는 이미 생성한 것을 다시 열어서 내용을 추가하는 것이 가능하다.
  - 확장하는 경우, interface는 extends 사용, type은 & 사용  
*/
