//«FizzBuzz»

// Напишите функцию fizzBuzz(n), принимающую как аргумент натуральное число. Функция должна выводить в консоль числа от 1 до n, заменяя числа:
// 
// • кратные трём — на fizz; • кратные пяти — на buzz; • кратные и трём, и пяти одновременно — на fizzbuzz.
function fizzBuzz(n) {
    for (i = 1; i <= n; i++) {

                if (i % 3 === 0 && i % 5 === 0) {
                    console.log("fizzBuzz");

                } else if (i % 3 === 0) {
                    console.log("fizz");

                } else if (i % 5 === 0) {
                    console.log("buzz");
                } else {
                    console.log(i);
                }
            }
        }




        fizzBuzz(30);


//         switch (fizzBuzz) {

//             case (i % 3 == 0 && i % 5 == 0):
//                 console.log("fizzBuzz");
//                 break;
//             case (i % 3 == 0):
//                 console.log("fizz");
//                 break;
//             case (i % 5 == 0):
//                 console.log("buzz");
//                 break;


//         }


//     }
// }
// fizzBuzz(5);