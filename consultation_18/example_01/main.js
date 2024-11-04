fetch("https://api.github.com/users/GilWel/repos")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        doSomethingWithData(data);
    })

function doSomethingWithData(repos) {
    console.log(repos[0]);


    const elementsFromRepos = repos.map(
        (oneElementOfArray) => {
            const liElement = document.createElement('li')
            liElement.textContent = oneElementOfArray.name
            return liElement;
        })

    console.log(elementsFromRepos);
    const liParentElement = document.createElement('ul');
    liParentElement.append(...elementsFromRepos);
    document.body.append(liParentElement);

}
