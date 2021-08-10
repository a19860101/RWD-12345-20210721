// if
let x = 0;
if(x > 0){
    console.log('success');
}

// if...else
if(x > 0){
    console.log('success')
}else{
    console.log('error');
}

//if...elseif
if(x > 0){
    console.log('正數');
}else if(x < 0){
    console.log('負數');
}else{
    console.log('error!!!');
}

//三元運算子

// let result = x > 0 ? 'success':'error';
// console.log(result);
// console.log(x > 0 ? 'ok':'error');

let result = x > 0 ? '正': x < 0 ? '負' : 'error@';
console.log(result);

//switch
let s = 0;

switch(s){
    case 0:
        console.log(0);
        break;
    case 10:
        console.log(10);
        break;
    case 100:
        console.log(100);
        break;
    default:
        console.log('ERROR!');
}

switch(true){
    case s > 0:
        console.log('正');
        break;
    case s < 0:
        console.log('負');
        break;
    default:
        console.log('err');
}