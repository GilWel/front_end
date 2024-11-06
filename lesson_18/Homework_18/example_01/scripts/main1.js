const getToDpInfo = async () => {

    const randomJokePromise = await fetch('https://jsonplaceholder.typicode.com/todos');

     const resultOfRandom = await randomJokePromise.json();

     toDoListOfBody(resultOfRandom.slice(0, 15));
}
getToDpInfo();


function toDoListOfBody(resposeBody) {

      const objElements = resposeBody.map(
        (elementOfArray) => {
            const objElement = document.createElement('li');
            objElement.textContent = (`${elementOfArray.title}, completed: ${elementOfArray.completed}`);
            return objElement;
        })
        document.body.append(...objElements);
    }
    
   
        

