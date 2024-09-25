// console.log("Hello world");

// типы данных в JS

// 1. Number (все числа дробные )
// 2. Boolean (да или нет)
// 3. String  (Строка)
// 4. Undefined (нет определенного значения)
// 5. Null   (ноль)
// 6. BigInt  (натуральные числа)//
// 7. Symbol (генерирует какое то значение)//
// 8. Object (ссылочный тип данных)

// Объвление переменных
  let a = "a"
  console.log(typeof a);
  a = 5;
  console.log(typeof a);

  const b = "abc"
  const c = a;
  console.log("c=" + c);
  a=10;
  console.log("c=" + c);
  
  //ссылочный тип данных

  let objA = {a:1};
  let objB = objA;
  objA.a = 5;
  console.log(objB)

  // Значения в переменных
  let x = null; // typeof null возвращает object.
  x - undefined;

  console.log(typeof x);
  x = 10; // x number


  let y = 11;
//   let z = Number("5"); - практически не используется

// var z = 10; уже не используется, устаревший способ.

//Названия переменных
// a-Z
// 0-9
// _
// $
//  нельзя начинать с цифры
// cavelCase2
// нельзя использовать зарезервированные слова (for, class..)








