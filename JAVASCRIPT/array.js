// let a = new Array();
// a[0] = 'Apple';
// a[1] = 'Banana';
// a[2] = 'Cat';
// console.log(a);

// let a = new Array('Apple','Banana','Cat');
// console.log(a);

let a = ['Banana','Egg','Cat','Apple','Dog'];
// console.log(a);
// console.log(a[0])
// console.log(a[1])
// console.log(a[2])
// console.log(a[3])

// console.log(a.length)

//陣列迭代

// for(let i=0;i<a.length;i++){
//     console.log(a[i]);
// }

//for...of 取得內容
// for(let item of a){
//     console.log(item);
// }

//for...in 取得索引值
// for(let item in a){
//     console.log(a[item],item);
// }

let drinks = ['紅茶','綠茶','珍珠奶茶','拿鐵'];

//push(),pop()
drinks.push('柳橙綠茶');
drinks.pop();

//unshift() shift()
drinks.unshift('水');
drinks.shift();

console.log(drinks);

//indexOf()

// console.log(drinks.indexOf('拿鐵123'));
let s = 'Hello';
// console.log(s.indexOf('d'));

// splice() 拼接
// drinks.splice(1,2,'茉莉綠茶','冰淇淋紅茶');
// drinks.splice(3,1);
// console.log(drinks);

//slice() 切片
let drinks_slice = drinks.slice(0,2);
// console.log(drinks_slice)


// split() 字串->陣列
let drinks_split = '滷肉飯,雞肉飯,貢丸湯' ;
// console.log(drinks_split.split(','))

// join() 陣列->字串
let drinks_join = drinks.join('');
// console.log(drinks_join)

// toString() 陣列->字串
// console.log(drinks.toString());

// sort()
// console.log(a.sort())

// reverse()
// console.log(a.reverse());

// console.log(a.sort().reverse())

// forEach
drinks.forEach(function(data,idx){
    console.log(data,idx);
});

// map 對應
let drinks_map = drinks.map(function(data,idx){
    return data.length == 2 ? data:undefined;
})

console.log(drinks_map)

// reduce
let num = [12,22,33,44,65];
let total = num.reduce(function(a,b){
    // console.log('a',a);
    // console.log('b',b);
    return a+b;
})
console.log(total);

// concat
console.log(a.concat(drinks));
console.log(drinks.concat(a));

let q = [...drinks,...a,'test'];
console.log(q);