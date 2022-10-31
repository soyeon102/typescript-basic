const activeUsers: string[] = [];
activeUsers.push('Tony');

const ageList: number[] = [34, 56, 13];
ageList[0] = 99;
// ageList[0] = 'any' Error

//const bools: boolean[] = [];  아래 코드와 같다.
const bools: Array<boolean> = [];

type Point = {
  x: number;
  y: number;
};
const coord: Point[] = [];
coord.push({ x: 23, y: 8 });
// coord.push({ x: 23, y: '8' }); Error -> 객체에는 type Point에 지정된 숫자 타입만 가능

// 다차원 배열
const borad: string[][] = [
  ['x', 'o', 'x'],
  ['x', 'o', 'x'],
  ['x', 'o', 'x'],
];
