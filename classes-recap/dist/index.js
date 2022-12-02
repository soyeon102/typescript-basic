'use strict';

class Player {
  /* 
    static을 붙이면 개별 인스턴스가 아닌 클래스 자체에 속하게 된다.
    player1.description = undefined,
    Player.description = "Player In Our Game"
    로 반환된다.
  */
  static description = 'Player In Our Game';

  #score = 0;
  numLives = 10;

  // 클래스를 인스턴스화할 때마다 자바스크립트가 자동으로 실행
  // 보통 동적인 값을 constructor에 저장
  constructor(first, last) {
    this.first = first;
    this.last = last;
    this.#secret();
  }

  static randomPlayer() {
    return new Player('Andy', 'Samberg');
  }

  get fullName() {
    return `${this.first} ${this.last}`;
  }

  set fullName(newName) {
    const [first, last] = newName.split(' ');
    this.first = first;
    this.last = last;
  }

  get score() {
    return this.#score;
  }

  set score(newScore) {
    if (newScore < 0) {
      throw new Error('Score must be positive!');
    }
    this.#score = newScore;
  }

  // getScore() {
  //   return this.#score;
  // }

  updateScore(newScore) {
    this.#score = newScore;
  }

  taunt() {
    console.log(`first: ${this.first}, last: ${this.last}`);
  }

  loseLife() {
    this.numLives -= 1;
  }
  #secret() {
    console.log("Don't access outside Class");
  }
}

// 클래스 확장
class AdminPlayer extends Player {
  constructor(first, last, powers) {
    // 부모 클래스에 있는 constructor() 함수를 참조
    super(first, last);
    this.powers = powers;
  }

  isAdmin = true;
}
const admin = new AdminPlayer('admin', 'mCadmin', ['delete', 'restore words']);

console.log(admin);

const player1 = new Player('blue', 'steele');
player1.taunt();
console.log(player1.numLives); // 10
player1.loseLife();
console.log(player1.numLives); // 9

/* 
  클래스 밖에서도 값에 접근하여 변경 가능
  player1.score = -3454433;
  클래스 안에 변수에 '#' 을 붙여 프라이빗 필드 생성
  player1.#score 로 밖에서도 접근 불가능하므로
  player1.getScore()로 접근
  만약 getter 함수인 get score()를 만든다면
  player1.score로 접근
*/
player1.updateScore(28);
player1.score = 234;
player1.fullName = 'Adam amy';
console.log(player1);

Player.randomPlayer();
