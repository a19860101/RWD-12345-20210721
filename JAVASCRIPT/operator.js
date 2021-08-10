// 運算子


let x = 100;
let y = -60;

let a = 100; // Number
let b = '100'; // String


//算術運算子
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);//求餘數

//比較運算子
console.log(x > y);
console.log(x >= y);
console.log(x < y);
console.log(x <= y);
console.log(x == y);
console.log(x === y);//值與資料型態皆須相同
console.log(a === b);//值與資料型態皆須相同
console.log(x != y);

//指定(賦值)運算子
// console.log(x += 3); //x = x + 3
// console.log(x -= 3); //x = x - 3
// console.log(x *= 3); //x = x * 3
// console.log(x /= 3); //x = x / 3
// console.log(x %= 3); //x = x % 3

// console.log(x+y);

//邏輯運算子 && || !
console.log(x > 0 && y > 0);
console.log(x > 0 || y > 0);

let z = 0;
console.log(!z);

//  |  -> shift + \

// 字串運算子

let s = 'HELLO';
let s2 = 'WORLD!';
// console.log(s + ' ' + s2);
// console.log(s + a);

let user = 'John';
// 字串樣板

console.log(`hello ${user}`);
console.log(`${s} ${user}`);

// 三元運算子