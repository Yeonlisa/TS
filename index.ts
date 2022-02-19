// 타입: string, number, boolean, null, undefined, bigint, [], {} 등
// string[] : array안에 string만 들어올 수 있다
// { name? : string } = { name: 'kim' } :  name 속성은 옵션이다
type 내타입 = string | number // Type alias

let 이름 : 내타입 = 'kim'; // Union type

function 함수(x : number) : number{
    return x * 2
} // 이 함수는 파라미터로 number, return 값으로 number

type Member = {
    [key : string] : string,
}
let john : Member = { name: 'kim' }

class User {
    name : string;
    constructor(name : string) {
        this.name = name;
    }
}