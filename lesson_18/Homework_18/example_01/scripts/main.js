const randomJokePromise = fetch('https://jsonplaceholder.typicode.com/todos');
randomJokePromise
    .then((resultOfRandom) => {
        return resultOfRandom.json();
    })
    .then((body) => {
        toDoListOfBody(body.slice(0, 15));
    })

    .catch((err) => {
        console.log('Необходимо проверить ссылку или поправить код', err)
    })

function toDoListOfBody(resposeBody) {

      const objElements = resposeBody.map(
        (elementOfArray) => {
            const objElement = document.createElement('li');
            objElement.textContent = (`${elementOfArray.title}, completed: ${elementOfArray.completed}`);
            return objElement;
        })
   
        document.body.append(...objElements);


}
