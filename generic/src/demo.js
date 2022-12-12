"use strict";
// tsx 파일 작성 시 후행 쉼표를 붙여준다
const getRandomElementDemo = (list) => {
    const randomIdx = Math.floor(Math.random() * list.length);
    return list[randomIdx];
};
