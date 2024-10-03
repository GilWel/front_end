const time = "08:30";

let arrC = time.split(':');

console.log(arrC);

const minutes = +arrC[1];
console.log(minutes);

console.log(typeof minutes);

// if (0 < minutes && minutes <=15){
//     console.log("Это 1 четверть");
// } else if ( minutes <=30){
//     console.log("Это 2 четверть");
// }else if ( minutes <=45){
//     console.log("Это 3 четверть");
// }else{ 
//     console.log("Это 4 четверть");
// }

console.log(`это ${Math.ceil(minutes/15)} четверть`);







