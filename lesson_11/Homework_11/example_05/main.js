const bucket = {
    display: 20,
    videocard: 100,
    cpu: 40,
}
const products = {
    warehouse1: {
        videocard: 12.5,
    },
    warehouse2: {
        display: 56.2,
        cpu: 150,
    },
}

const getSumm = (basket, prices) => {
const allPricesInOne = {};
let arrOfWarehousesName = Object.keys(prices);

arrOfWarehousesName.forEach(
    (warehouseName) =>{
       
        allPricesInOne = {...prices[warehouseName],...allPricesInOne}
    }
);
console.log(allPricesInOne);

let summ = 0;
const arrayOfProductsInBasket = Object.keys(basket);
arrayOfProductsInBasket.forEach(

    (product)=>{
       summ  += (basket[product] * allPricesInOne[product]);
    }
);
return summ;
console.log(summ);
}
getSumm(bucket, products);