//«FizzBuzz»

// Напишите функцию fizzBuzz(n), принимающую как аргумент натуральное число. Функция должна выводить в консоль числа от 1 до n, заменяя числа:
// 
// • кратные трём — на fizz; • кратные пяти — на buzz; • кратные и трём, и пяти одновременно — на fizzbuzz.
function fizzBuzz(n) {
    for (i = 1; i <= n; i++) {
         value1=(i % 3 == 0 && i % 5 == 0);
         value2=(i % 3 == 0);
         value3=(i % 5 == 0);

        switch (i) {

            case value1:
                console.log("fizzBuzz");
              
            case value2:
                console.log("fizz");
                
            case value3:
                console.log("buzz");
           
            default:
                console.log(i);
                break;
        }
    }
}

fizzBuzz(30);