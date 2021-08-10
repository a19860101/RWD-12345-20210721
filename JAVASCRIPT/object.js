// let user = new Object();
// user.name = 'John';
// user.mail = 'asdf@gmail.com';
// user.age = '18';

let user = {
    name:'John',
    mail:'asdf@gmail.com',
    age:'18'
}

// console.log(user);
// console.log(user.name);
// console.log(user['mail']);

let drinks = [
    {
        name: '紅茶',
        price: 20,
        size: '750ml'
    },
    {
        name: '綠茶',
        price: 20,
        size: '750ml'
    },
    {
        name: '奶茶',
        price: 20,
        size: '750ml'
    },
    {
        name: '珍珠奶茶',
        price: 30,
        size: '500ml'
    },
    {
        name: '冰淇淋紅茶',
        price: 40,
        size: '500ml'
    }
];
// console.log(drinks);
// console.log(drinks[2]);
// console.log(drinks[2].name);

drinks.forEach(function(data,idx){
    console.log(data.name);
})

let drinks_name = drinks.map(function(data){
    return data.name;
})
console.log(drinks_name);

let drinks_price = drinks.map(function(data){
    return data.price
})
console.log(drinks_price);

let drinks_total = drinks_price.reduce(function(a,b){
    return a + b;
})

console.log(drinks_total);


for(let data of drinks){
    console.log(data.name);
}

