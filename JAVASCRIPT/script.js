// alert('HELLO WORLD!!');
// 變數 Varible

var x = 100;
var y = 999;
console.log(x,y);

let a = 987;
let b = 666;
console.log(a,b);
/*
    變數命名規則

    1. 首字必為英文、底線或錢字號
    2. 大小寫有別
    3. 符號僅可使用底線與錢字號
    4. 不可使用保留字

*/

var x = 'hello';
console.log(x);


/* 
    var vs let,const
    1. let,const 不可重複宣告
    2. var為function scope,let,constant為block scope

*/

//常數 Constant Varible
// const不可重新賦值,let可以

const i = 6;

console.log(i);

/* 
    i = 666;
    會出現錯誤，因為不可重新賦值給i
*/


