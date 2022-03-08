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