
function enterGithabUsers() {
    const createTask = document.querySelector('body');
    const inputTask = document.createElement('input')
    createTask.append(inputTask);

    const buttonElement = document.createElement('button');
    buttonElement.textContent = 'Добавить пользователя';
    createTask.append(buttonElement);

    buttonElement.addEventListener('click', buttonClickHandler);

    function buttonClickHandler() {
        const newUser = inputTask.value;
        if (newUser) {

            fetch(`https://api.github.com/users/${newUser}`)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    doSomethinWithData(data)
                    inputTask.value = '';

                })
        }
    }
}

function doSomethinWithData(users) {

    const bodyElement = document.querySelector('body');
    const userName = document.createElement('h1');
    userName.textContent = users.name || users.login;
    bodyElement.append(userName);
    // console.log(userName);


    const userAvatar = document.createElement('img');
    userAvatar.src = users.avatar_url;
    userAvatar.style.width = '300px';
    bodyElement.append(userAvatar);
}
enterGithabUsers();

//картинку сделать поменьше, создать input и button , в input писать имя и после нажатия на кнопку - появилось имя и картинка от пользователя
