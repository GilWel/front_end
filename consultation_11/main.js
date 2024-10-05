
function quadratNumber (n){
    const result = n**2;
    return result;
}
    function minusValue (n){
   const result = n-1;
   return result;
    }
    

console.log("=============Variant1=============");

const functionCallback = (array, func) => {
  const newArray = [];
  for(let i = 0; i < array.length; i++) {
    newArray.push(func(array[i]));
  }
  return newArray;

}
console.log(functionCallback([2,3,4,5,6,7,8,9,10], quadratNumber));

console.log("==============Varian2===============");

const functionMap = (arr, func) => {

   const  newArr = [];

  for (let i = 0; i < arr.length; i++) {
   
    newArr.push(func(arr[i]));
  
  }
  return newArr;

}
console.log(functionMap([5,9,8,7,6,5,4,81,56], minusValue));
