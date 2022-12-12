"use strict";
// 내장 제네릭
const nums = [];
const colors = [];
const inputEl = document.querySelector("#username");
inputEl.value = "Hacked!";
const btn = document.querySelector(".btn");
function identity(item) {
    return item;
}
// 호출 시 지정해 준 타입이 Type 부분에 적용된다
identity("hi!");
identity(7);
identity({
    name: "cat name",
    bread: "cat bread",
});
function getRandomElement(list) {
    const randomIdx = Math.floor(Math.random() * list.length);
    return list[randomIdx];
}
getRandomElement(["a", "b", "c"]);
// 타입을 지정하지 않아도 타입스크립트가 알아서 타입을 추론함
getRandomElement([1, 3, 523, 214, 23]);
// 다른 타입을 함께 작성할 때는 T 다음에 U를 붙이는 것이 관례다.
function merge(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
// merge<{name: string, {pets: string[]}}>({name: 'colt'}, {pets: ['blue', 'elton']})
const comboObj = merge({ name: "colt" }, { pets: ["blue", "elton"] });
