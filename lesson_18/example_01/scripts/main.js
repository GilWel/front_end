const buttonElement = document.querySelector('button');
const inputElement = document.querySelector('input');
//  console.log('Почти первая строка');

const btnClickHandler = () => {
    // const bodyElement = document.querySelector('body');
    // bodyElement.append('Hello!');

    console.log('Строка после завершения асинхронной операции');

}// Колбек отбработчик
// buttonElement.addEventListener('click', btnClickHandler);

const waitForCkickPromise = new Promise((fullfill, reject) => {
   
        // console.log('Браузер начал асинхронную операцию(ждет клик');

        buttonElement.addEventListener('click', () => {
            if (inputElement.value) {
                fullfill(inputElement.value);
            } else {
                reject('Не введено значение');
            }
        })

        });


        // console.log("Строка 16 кода");
        // console.log("Строка 17 кода");

        // waitForCkickPromise.then(()=> {
        //     console.log('Нажали, ураааа!')
        // });
        // waitForCkickPromise.then((result) => {
        //     console.log('Результат ввода = ', result);
        // });

        waitForCkickPromise
        .then((result) => {
             const bodyElement = document.querySelector('body');
         bodyElement.append(result);
            
        });

        waitForCkickPromise
        .catch((err)=>{
            console.log('Я не смог выполнить промис успешно, потому что:', err)
        })

        .finally(
            ()=> {
                console.log('Фух, промис завершился. Асинхронную операцию выполнили. Задание выполнено!')
            }
        )
// then - после успешного завершения
// console.log("Строка 26 кода");