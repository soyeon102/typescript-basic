function square(num: number) {
  return num * num;
}

square(3);
// square('hi') Error
// square(true) Error

// 매개변수를 annotation으로 지정해주지 않으면 any 타입이 할당됨
function fnGreet(person) {
  return `Hi there, ${person}`;
}

fnGreet(3);
fnGreet('John');

const doSomething = (persion: string, age: number, isFunny: boolean) => {};
doSomething('Tony', 23, true);
// doSomething('Tony'); Error -> 더 적거나 더 많은 인수를 전달하는 경우, 타입의 순서가 맞지 않는 경우 에러 발생

// 매개변수에 기본 값을 아래와 같이 지정해줄 수 있다
function setValue(num: number = 9) {
  return num + num;
}

// 기본값이 지정되어 있다면 인수를 전달하지 않아도 에러가 나지 않는다.
setValue();

/* 함수명 뒤의 annotation은 반환값의 타입을 의미.
return도 없고 annotation도 작성하지 않으면 함수의 반환값의 타입은 void가 된다.
험수가 길어지고 반환값을 찾기 어려운 경우에 사용하면 함수의 반환값을 명백하게 알 수 있다. */
const fnAnnotation = (num: number): number => {
  return num * num;
};

// 유니온 타입 - 여러 종류의 타입 반환
function randomNum(num: number) {
  if (Math.random() < 0.5) {
    return num.toString();
  }
  return num;
}

/* map에서 color 매개변수에는 annotation은 쓸 필요가 없다.
이미 colors의 컨텍스트에서 타입이 정해지므로 greet() 함수와 달리 annotation을 쓸 필요가 없음 */
const colorsArr = ['red', 'orange', 'yellow'];
colorsArr.map((color) => {
  return color.toString();
});

// void - return 값이 없는 함수의 타입
// 만약 void로 annotaion을 명시하고 return 값이 있다면 return에 오류 발생
function printTwice(msg: string): void {
  console.log(msg);
  console.log(msg);
}

// never - 함수를 반환하지 않는 경우, 함수가 멈추지 않고 무한 루프가 돌아야 하는 경우에 사용
/* void는 undefined 상태로 반환한 함수의 타입이므로 엄밀히 따지면 값이고
never은 절대 반환할 기회를 가지면 안되는 함수 타입이라는 차이가 있다. */
function makeError(msg: string): never {
  throw new Error(msg);
}
function gameLoop(): never {
  while (true) {
    console.log('GAME LOOP RUNNING');
  }
}
