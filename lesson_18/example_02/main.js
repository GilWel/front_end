console.log('Начало кода');
const randomJokePromise = fetch('https://official-joke-api.appspot.com/random_joke');

console.log('Конец синхронного кода');

// const bodyOfRandomJoke = randomJokePromise.then(
//     (resultOfRequst)=> {
//        return resultOfRequst.json();
//     }
// )
// bodyOfRandomJoke.then(
//     (body) => {

//         console.log(body)
//     }
// )

randomJokePromise
    .then((resultOfRequst) => {
        return resultOfRequst.json();
    }
    )
    .then(
        (body) => {
            doSomeWithResponseBody(body);
            // console.log(body)

        }
    )
//  можно и так записать:

// fetch('https://official-joke-api.appspot.com/random_joke'

// )
// .then((resultOfRequst)=> {
//     return resultOfRequst.json();
//  }
// )
// .then(
// (body)=>{
//  console.log(body)
// }
// )

function doSomeWithResponseBody(responseBady) {
    const bodyElement = document.querySelector('body');
    const firstPartOfJokeElement =  document.createElement('p');
    firstPartOfJokeElement.textContent = `${responseBady.setup} ${responseBady.punchline}`
    bodyElement.append(firstPartOfJokeElement);
}
 