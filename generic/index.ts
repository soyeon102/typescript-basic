// 내장 제네릭
const nums: Array<number> = [];
const colors: Array<string> = [];

const inputEl = document.querySelector<HTMLInputElement>("#username")!;
inputEl.value = "Hacked!";

const btn = document.querySelector<HTMLButtonElement>(".btn")!;

/*   
  아래와 같은 코드 대신에 generic을 사용해 
  어떤 타입이 들어가도 상관없도록 한다

  function numberIdentity(item: number): number {
    return item;
  }
  function stringIdentity(item: string): string {  
    return item;
  }
  function booleanIdentity(item: boolean): boolean {
    return item;
  }
  function anyIdentity(item: any): any {
    return item;
  }
*/

interface Cat {
  name: string;
  bread: string;
}

function identity<Type>(item: Type): Type {
  return item;
}

// 호출 시 지정해 준 타입이 Type 부분에 적용된다
identity<string>("hi!");
identity<number>(7);
identity<Cat>({
  name: "cat name",
  bread: "cat bread",
});

function getRandomElement<T>(list: T[]): T {
  const randomIdx = Math.floor(Math.random() * list.length);
  return list[randomIdx];
}

getRandomElement<string>(["a", "b", "c"]);
// 타입을 지정하지 않아도 타입스크립트가 알아서 타입을 추론함
getRandomElement([1, 3, 523, 214, 23]);

// 다른 타입을 함께 작성할 때는 T 다음에 U를 붙이는 것이 관례다.
function merge<T, U>(obj1: T, obj2: U) {
  return {
    ...obj1,
    ...obj2,
  };
}

// merge<{name: string, {pets: string[]}}>({name: 'colt'}, {pets: ['blue', 'elton']})
const comboObj = merge({ name: "colt" }, { pets: ["blue", "elton"] });
