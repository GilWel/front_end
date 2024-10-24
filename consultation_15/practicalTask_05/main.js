// создать список названий городов(City) и областей (Couhty) Калифорнии содержащих "San"
//https://en.wikipedia.org/wiki/List_of_cities_and_towns_in_California

const table = document.querySelector('.sortable');

// делаем массив из NodeList (добавляем (Array.from))
const links = Array.from(table.querySelector('tbody').querySelectorAll('a'));

const names = links.map(link =>link.textContent).filter(city =>city.includes('San'));

    

