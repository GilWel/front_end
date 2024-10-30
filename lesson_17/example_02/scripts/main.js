console.log('Start');

const setTimeID =setTimeout(
    ()=> {
        console.log('timeout 5000')
     },
     5000  
        
);
 console.log(setTimeID);

setTimeout(
    ()=> {
        console.log('timeout 5000')
     },
     5000  
    
);
//вырезает 
clearTimeout(setTimeID);
console.log('Finish')
