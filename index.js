    // 1-masala
// let max;

// function res(a, b ,c) {
//     if (a > b) {
//         max = a;
//     } else {
//         max = b;
//     }

//     if (max < c) {
//         max = c;
//     }

//     return max;
// }

// console.log(res(3, 4, 8));




    // 2-masala
// let n = +prompt(`Sonni kiriting...`);
// let counter = 0;

// function res() {
//     let counterI = 0;
//     for (let i = 0; i <= n; i++) {
//         for (let j = 0; j <= i; j++) {
//             if (i % j == 0) {
//                 counterI++;
//             }
//         }
//     }

//     if (counterI == 2) {
//         counter++;
//     }
// }

// console.log(counter);



    // 3-masala
// let n = +prompt(`Sonni kiriting...`);
// let counter = 0;


//     for (let i = 0; i <= n; i++) {
//         if (i % 2 == 1) {
//             counter++;
//         }
//     }


// console.log(counter);



    // 4-masala
// let n = +prompt(`Sonni kiriting...`);
// let counter = 0;

// for (let i = 0; i <= n; i++) {
//     if (n % i == 0) {
//         counter++;
//     }
// }

// console.log(counter);



    // 5-masala
// n = +prompt(`Sonni kiriting...`);

// function res(n) {
//     if (n % 3 == 0 && n % 5 == 0) {
//         return n ** 2
//     } else {
//         return n ** 3
//     }
// }

// console.log(res(n));




    // 6-masala
// let a = +prompt(`Birinchi sonni kiriting...`);
// let b = +prompt(`Ikkinchi sonni kiriting...`);
// let c;
// let m = 1;

// while (a >= 1) {
//     c = a % 10;
//     m *= c;
//     a = Math.trunc(a / 10);
// }

// let d;
// let x = 1;

// while (b >= 1) {
//     d = b % 10;
//     x *= d;
//     b = Math.trunc(b / 10)
// }

// if (m > x) {
//     console.log(m);    
// } else {
//     console.log(x);
// }




    // 7-masala
// let n = +prompt(`Sonni kiriting...`);
// let counter = 0;
// let res;

// function arg(n) {
//     for (let i = 0; i <= n; i++) {
//         if (n % i == 0) {
//             counter++
//         }
//     }

//     if (counter == 2) {
//         res = "Tub son";
//     } else {
//         res = 'Tub son emas'
//     }

//     return res
// }

// console.log(arg(n));