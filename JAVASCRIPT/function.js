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

function square(w,h){
    return w * h;
}

console.log(square(123,100));