// 기본 타입 정리
let 이름 : string = 'kim';
let 나이 : number = 50;
let 결혼했니 : boolean = false;
let 회원들 : string[] = ['kim', 'park']
let 내정보 : { age : number } = { age : 20 };

// union type
let 회원명단 : (string | number)[] = [1, '2', 3];
let 오브젝트 : { a : string | number } = { a : 123 };

// any type(타입실드해제)
let 성명 : any;
성명 = 123;
성명 = true;
성명 = [];

// unknown type(모든 자료형 허용)
let 성함 : unknown;
성함 = 123;
성함 = {};

let 연세 : string | number;
// string 타입 + 1 (허용)
// number 타입 + 1 (허용)
// string | number + 1 (불가)

// 함수타입지정법
function 함수(x : number) : number {
    return x * 2;
}

// void 타입(return 방지)
function 함수1(x : number) : void {
    console.log(x);
}
함수1(3)

// 옵션파라미터
function 함수2(x? : number) : void {
    console.log(x);
}
함수2()
// 변수? : number 는 변수 : number | undefined 와 같다.

// Type Narrowing(Type이 아직 하나로 확정되지 않았을 경우)
// 대표적인 Narrowing 방법 : typeof 연산자
// 어떤 변수가 타입이 아직 불확실하면 if문 등으로 Narrowing 해줘야 조작가능
function 내함수(x : number | string) {
    if(typeof x === 'string') {
        return x + '1'
    } else {
        return x + 1
    }
}

내함수(123);

// Narrowing으로 판정해주는 문법들
// typeof 변수
// 속성명 in 오브젝트자료
// 인스턴스 instanceof 부모

// assertion 문법 : 타입 덮어쓰기(if문 필요없다)
// assertion 문법의 용도
// 1. Narrowing 할 때 쓴다.
// 2. 무슨 타입이 들어올지 100% 확실할 때 쓴다.
function 내함수2(x : number | string) {
    let array : number[] = [];
    array[0] = x as number;
}

내함수2(123);

// type Alias(타입변수)
type Animal = { name : string, age: number }
let 동물 : Animal = { name: 'kim', age: 20 }

// const 변수는 등호로 재할당만 막고 object 수정은 자유롭게 가능하다
// readonly 쓰면 object 자료 수정도 막을 수 있다.
// object 속성 안에도 ? 사용 가능하다.
type Girlfriend = {
    readonly name: string
}

const 여친 : Girlfriend = {
    name: '엠버'
}

// type alias extend(union type으로 합치기 가능하다)
type Name = string;
type Age = number;
type Person = Name | Age;
// & 연산자로 object 타입을 합칠 수 있다.
type PositionX = { x : number };
type PositionY = { y : number };

type NewType = PositionX & PositionY

let position : NewType = { x : 10, y : 20 }

// 같은 이름의 type 변수 재정의 불가

// literal type : 특정 글자나 숫자만 가질 수 있게 제한을 두는 타입
// 장점 : 변수에 뭐가 들어올지 더 엄격하게 관리가능하고 자동완성 힌트
let 접니다 : '대머리' | '솔로';

function 함수3 (a : '가위' | '바위' | '보') : ('가위' | '바위' | '보')[]{
    return ['가위']
}

var 자료 = {
    name : 'kim'
} as const

function 내함수3(a : 'kim') {

}

내함수3(자료.name)

// as const : object는 literal type 지정을 알아서 해준다.
// 장점
// 1. object value 값을 그대로 타입으로 지정해준다.
// 2. object 속성들에 모두 readonly 붙여준다.
// object 자료를 완전히 잠구고 싶으면 as const를 쓴다.