// const randN = Math.random();

// funcion declfration (берет первое число заданное в скобках, если скобки пустые,  то берет первоначально заданное число со скобок)

function doubleNumber(n) {
    const res = n * 2;
    return res;
} 

const resDouble10 = doubleNumber(10);
console.log(resDouble10);

console.log(doubleNumber(50));


function quadratNumber(n) {
    const res = n * n ;
    return res;
}
const multNumber = quadratNumber(8);
console.log(multNumber);

//funcion expression

const doubleNumberExpression = function(n=1000){
    return n*2;

}
console.log(doubleNumberExpression(75));

// arrow function - стрелочная функция; 

const doubleNumberArrow = (n=1000) =>{
    return n*2;

}
console.log(doubleNumberExpression(275));


// =======================================
// Принимает как аргумент имя (строку), и возвращает нам строку "Привет, <имя>";
// если аргумент не строка, то возвращает сообщение "Введите корректное значение"
// использовать шаблонную строку

function greeting(name) {
              
       if (typeof name === "string"){
            return `Hallo ${name}`;
       }else{
            return "Введите корректировку"
            }
            }
        console.log(greeting("John"));  // значение вводим сюда, то есть в консоль

    
        const greetingArrow = (name) =>{
            if (typeof name === "string"){
                return `Hallo ${name}`;
           }else{
                return "Введите корректировку"
                }
                }
            console.log(greeting("Gilian"));


            const voidArg = (name) => {
                if (typeof name === "string"){
                    console.log(`Hallo ${name}`);
               }else{
                    console.log("Введите корректировку");
                    }
            }
            voidArg("Victor");
            
            
            const argument = (n) => {
                if (typeof n === "string"){
                    return `Количество символов в строке  ${n.length}`;
               }else{
                    return "Введите корректировку"
                    }
            }

            console.log(argument("Количество"))
        


            const argument2 = (n) => {
                if (typeof n === "string"){
                    const a = (`Количество символов в строке  ${n.length}`);
               }else{
                    const b = ("Введите корректировку");
                    }

                }



                const countSymbols = (text) =>  (typeof text === "string") ? text.length:"no String"

               // можно слово (text) писать без скобок, если у нас одно значение. Касается только стрелочных функций.
               // так же можно опустить фигурные скобки и удалить слово return. Но это все если у нас только одно условие.
                
                console.log(countSymbols("Hello People!"));
            






