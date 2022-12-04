class Player {
  /* 
    public과 private은 타입스크립트 고유 기능
    public: default 값으로 어디서든 접근 가능하다는 것을 명시적으로 알림
    private: 외부에서는 값에 접근하는 경우 오류가 발생. 자식 클래스에서 접근 불가능
    protected: 외부에서 값 접근 불가능. private과 달리 상속한 자식 클래스에서 접근 가능
  */
  public readonly first: string;
  public readonly last: string;
  private _score: number = 0;
  protected playerNum: number = 1;

  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
    this.secretMethod();
  }

  secretMethod(): void {
    console.log('SECRET!');
  }

  get fullName() {
    return `${this.first} ${this.last}`;
  }

  get score(): number {
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
  public isAdmin: boolean = true;
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
  constructor(
    public first: string,
    public last: string,
    private score: number
  ) {}
}

/* ========================= 인터페이스 ========================= */
interface Colorful {
  color: string;
}

interface Printable {
  print(): void;
}

class Bike implements Colorful {
  constructor(public color: string) {}
}

class Jacket implements Colorful, Printable {
  constructor(public brand: string, public color: string) {}

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
abstract class Employee {
  constructor(public first: string, public last: string) {}
  abstract getPay(): number;
  greet() {
    console.log('HELLO!');
  }
}

class FullTimeEmployee extends Employee {
  constructor(first: string, last: string, private salary: number) {
    super(first, last);
  }

  getPay(): number {
    return this.salary;
  }
}

class PartTimeEmployee extends Employee {
  constructor(
    first: string,
    last: string,
    private hourlyRate: number,
    private hoursWorked: number
  ) {
    super(first, last);
  }

  getPay(): number {
    return this.hourlyRate * this.hoursWorked;
  }
}

const betty = new FullTimeEmployee('Betty', 'White', 95000);
const bill = new PartTimeEmployee('Bill', 'Billerson', 24, 1100);
console.log(betty.getPay());
console.log(bill.getPay());
