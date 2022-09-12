// console.log('hello world!')
//
// let a = 2;
// let b = 4;
// let sum = a + b;
// console.log(sum)

function equalParity(a, b){
    return(a % 2 === 0 && b % 2 === 0 || a % 2 !== 0 && b % 2 !== 0)? true : false;
}

console.log(equalParity(2, 4))
