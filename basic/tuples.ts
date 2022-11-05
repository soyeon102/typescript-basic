// Tuples - 배열 타입이지만 고정된 길이와 타입을 갖는 배열.
// const RgbColors: number[] = [23, 45, 234];
const RgbColors: [number, number, number] = [23, 45, 234];

// 배열 타입의 순서 변경 시 에러 발생
type HTTPResponse = [number, string];
const goodRes: HTTPResponse = [200, 'OK'];

const responses: HTTPResponse[] = [
  [404, 'Not Found'],
  [200, 'OK'],
];
// goodRes[0] = '200'  Error -> 원래 값의 타입을 변경할 수 없음

/*  
  튜플 특징
  push()나 pop() 메서드로 배열에 어떤 변수를 추가하거나 제거해도 막지 않는다.
  goodRes 배열에 추가할 수 있는 타입은 number 또는 string 지정되어 있다.
  pop()을 세 번 실행해 빈 배열을 만든 후에 push('str') 한다면 더 이상 튜플은 패턴을 따르지 않는다.
  이것이 튜플의 한계이다.
*/
goodRes.push(123);
goodRes.pop();
goodRes.pop();
goodRes.pop();
