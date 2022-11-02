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
// 튜플의 특이한 방식 - push()나 pop()으로 어떤 타입이든 막지 않는다.
goodRes.push(123);
goodRes.pop();
goodRes.pop();
