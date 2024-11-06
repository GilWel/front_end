
const createTask = document.querySelector('body');
const inputTask = document.createElement('input')
createTask.append(inputTask);

const buttonElement = document.createElement('button');
buttonElement.textContent = 'Добавить пользователя';
createTask.append(buttonElement);

buttonElement.addEventListener('click', buttonClickHandler);

function buttonClickHandler() {

    userLogin = inputTask.value;
    
    inputTask.value='';

    if (userLogin) {


        const getUserInfo = async (userLogin) => {

            const response = await fetch(`https://api.github.com/users/${userLogin}`);

            const allDataAboutUser = await response.json();
            // console.log(allDataAboutUser);
            // console.log(allDataAboutUser.avatar_url.allDataAboutUser.name);


            const responsRepos = await fetch(allDataAboutUser.repos_url);
            const allUserRepos = await responsRepos.json();
            // console.log(allUserRepos);


             renderUserInfo(allDataAboutUser.avatar_url, allDataAboutUser.name || allDataAboutUser.login, allUserRepos);


        }
         getUserInfo(userLogin);

        function renderUserInfo(imgUrl, name, repos) {

            const userNameElement = document.createElement('p');
            userNameElement.textContent = name;

            const userAvatar = document.createElement('img');
            userAvatar.src = imgUrl;
            userAvatar.style.width = '150px';

            const listOfRepos = document.createElement('ul');
            // из массива получаем ли элементы (строки просто)
            const listElementOfReposNames = repos.map(
                (repoObj) => {
                    const repoNameElement = document.createElement('li');
                    repoNameElement.textContent = repoObj.name;
                    return repoNameElement
                })

            listOfRepos.append(...listElementOfReposNames)

            document.body.append(userNameElement, userAvatar, listOfRepos);
         
        }
    }
}








