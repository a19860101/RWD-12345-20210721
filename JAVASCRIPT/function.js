// 函式宣告式(提升性)

function test(){
    let a = 100;
    return a;
}
console.log(test());

// let t = test();
// console.log(t);


// 函式表達
let test2 = function(){
    let a = 888;
    return a;
}

// console.log(test2());
// let t2 = test2();
// console.log(t2);


function user(name){
    return name;
}

console.log(user('Macheal'));

// function square(w,h){
//     return w * h;
// }
// let square = function(w,h){
//     return w * h;
// }

// console.log(square(123,100));

// 箭頭函式

//函式沒有參數
let a = ()=>{
    return 'a';
}
// 函式有一個參數(可省略小括號)
let b = b => {
    return b;
}
// 函式有兩個參數以上
let c = (x,y) => {
    return x+y;
}
// 如果函式的動作只有return,可省略大括號與return
let d = (i,j) => i*j;
console.log(d(11,12));

let e = data => data;
/*
    let e = function(data){
        return data;
    }

*/
console.log(e(123));


let obj = {
    name: 'john',
    active: function(){
        console.log(this);
    },
    active2: ()=>{
        console.log(this);
    }
}

obj.active();
obj.active2();