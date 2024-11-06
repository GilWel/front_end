// function getTodos(){
//     fetch (`https://jsonplaceholder.typicode.com/todos`)

// }
const getTodos = async()=> {
    try{
        const response = await fetch (`https://jsonplaceholder.typicode.com/todos`);
    const data = await response.json();

    console.log(data);
    }catch{
        console.log('Произошла непредвиденная ошибка');
    }finally {
        console.log('Этот код сработает в любом случае');
    }
    
    }
    getTodos();

 console.log('Асинхронную функцию запустили и пошли дальше')

 