"use strict";
class Player {
    constructor(first, last) {
        this._score = 0;
        this.playerNum = 1;
        this.first = first;
        this.last = last;
        this.secretMethod();
    }
    secretMethod() {
        console.log('SECRET!');
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    // setter 함수는 반환 타입을 가질 수 없다
    set score(newScore) {
        if (newScore < 0) {
            throw new Error('Score cannot be negative');
        }
        this._score = newScore;
    }
}
class SuperPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    maxScore() {
        // this._score = 99999; -> private 은 자식 클래스에서 접근 불가능
        this.playerNum = 20;
    }
}
const elton = new Player('Elton', 'Steele');
elton.fullName;
elton.score = 99;
// readonly 값이기 때문에 아래와 같이 변경하는 것 불가능 (접근은 가능)
// elton.first = 'elton'
// private 값이기 때문에 외부에서 접근하는 것부터 불가능
// elton.score
// 파라미터 단축 구문
class ShortPlayer {
    constructor(first, last, score) {
        this.first = first;
        this.last = last;
        this.score = score;
    }
}
class Bike {
    constructor(color) {
        this.color = color;
    }
}
class Jacket {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    print() {
        console.log(`${this.color} ${this.brand} jacket`);
    }
}
const bike1 = new Bike('red');
const jacket1 = new Jacket('Prada', 'black');
/* ========================= Abstract 클래스 ========================= */
/*
  패턴을 정의하고 자식 클래스에서 시행되어야 하는 메서드를 정의하는 데 사용.
  new Employee() 인스턴스 생성 불가능.
  abstract 를 사용해 특정 기능 반드시 시행하도록 설정할 수 있다.
*/
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    greet() {
        console.log('HELLO!');
    }
}
class FullTimeEmployee extends Employee {
    constructor(first, last, salary) {
        super(first, last);
        this.salary = salary;
    }
    getPay() {
        return this.salary;
    }
}
class PartTimeEmployee extends Employee {
    constructor(first, last, hourlyRate, hoursWorked) {
        super(first, last);
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }
    getPay() {
        return this.hourlyRate * this.hoursWorked;
    }
}
const betty = new FullTimeEmployee('Betty', 'White', 95000);
const bill = new PartTimeEmployee('Bill', 'Billerson', 24, 1100);
console.log(betty.getPay());
console.log(bill.getPay());
