// условный оператор
const age =15;

if( age < 12) {
    console.log("вы ребенок");
    
}else if (age <18 && age >=12){
    console.log("вы подросток");
    
}else {
    console.log("вы взрослый");
}

if(age >6){
    console.log("вы большой ребенок");
}

// switch

const day = "Monday";

switch(day){
    case "Monday":
        console.log("первый день недели");
        break;
    case "Tuesday":
        console.log("второй день недели");  
        break;
        default: console.log("3 и дальше");


}

// тернарный оператор

const result = (5<10)? true:false;
const result1 = (age <18)? "вы еще не взрослый": "вы уже взрослый";
console.log(result);
console.log(result1);

// с помощью if

let resultWithIf;
if (age < 18) {
    resultWithIf = "вы еще не взрослый";
}else{
    resultWithIf = "вы уже взрослый";
}



console.log("a","b")