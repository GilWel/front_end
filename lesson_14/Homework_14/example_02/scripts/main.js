// Есть массив обьектов ссылок со свойствами text и href. Тут нам нужна страничка. Нужно выввести на страничку все ссылки 
// из массива в виде списка ul. Пример массива ссылок:
const links = [
  {
    text: "Главная",
    href: "/",
  },
  {
    text: "О нас",
    href: "/about/",
  },
  {
    text: "Цены",
    href: "/price/",
  },
  {
    text: "Контакты",
    href: "/contacts/",
  },
];

const listOfLinks = document.querySelector('ul');

 const linksModified = links.map (link => {
  const listItem = document.createElement('li');
  const anchor = document.createElement('a');

  anchor.href = link.href;
  anchor.textContent = link.text;

  listItem.append(anchor);

  return listItem;

  
})
  
listOfLinks.append(...linksModified);