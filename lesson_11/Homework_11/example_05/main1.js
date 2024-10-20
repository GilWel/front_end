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
const calculateCost = (bucket, products) => {
    let totalKost = 0;
    for (let product in bucket) {
        const quantity = bucket[product];
        for (let warehouse in products) {
            const price = products[warehouse][product];
            if (price) {
              
                totalKost += quantity * price;
            }
        }
    }
    return totalKost;
}
const total = calculateCost(bucket, products);
console.log(total);