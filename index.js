var 이름 = 'kim'; // Union type
function 함수(x) {
    return x * 2;
} // 이 함수는 파라미터로 number, return 값으로 number
var john = { name: 'kim' };
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
