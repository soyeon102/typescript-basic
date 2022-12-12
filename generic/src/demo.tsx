// tsx 파일 작성 시 후행 쉼표를 붙여준다
const getRandomElementDemo = <T,>(list: T[]): T => {
  const randomIdx = Math.floor(Math.random() * list.length);
  return list[randomIdx];
};
