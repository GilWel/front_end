// Создайте функцию getCenturies, которая принимает массив лет
//  и возвращает массив столетий. Рекомендуется использовать
//   метод map. Пример работы функции:

  const years = [1900, 1899, 2001, 2000, 1455, 14];

   function getCenturies (years) {
     return years.map(year => Math.ceil(year/100));
  }
     console.log(getCenturies(years));