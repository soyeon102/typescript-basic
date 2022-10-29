function square(num: number) {
  return num * num;
}

// 매개변수를 annotation으로 지정해주지 않으면 any 타입이 할당됨
function greet(person) {
  return `Hi there, ${person}`;
}

const doSomething = (persion: string, age: number, isFunny: boolean) => {};

// 매개변수에 기본 값을 아래와 같이 지정해줄 수 있다
function setValue(num: number = 9) {
  return num + num;
}

square(3);
// square('hi') Error
// square(true) Error

greet(3);
greet('John');

doSomething('Tony', 23, true);
// doSomething('Tony'); Error -> 더 적거나 더 많은 인수를 전달하는 경우, 타입의 순서가 맞지 않는 경우 에러 발생

setValue();
