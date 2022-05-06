function Log2n(n) {
    return (n > 1) ? 1 + Log2n(n / 2) : 0;
}

console.log(Log2n(32));




// function fatorial(n) {
//     if(n == 1) {
//         return 1;
//     } else {
//         return n * fatorial(n-1);
//     }
// }

// console.log(fatorial(1));
// console.log(fatorial(2));
// console.log(fatorial(3));
// console.log(fatorial(4));
// console.log(fatorial(5));