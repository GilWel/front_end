

function countSymbolsFD(text){
    const resultJfFunc = (typeof text=== "string")? text.length:"No string";
    return resultJfFunc;
}
const resultOfArrowFunction= countSymbolsFD("Hello!");
console.log(resultOfArrowFunction);

const resultOfFunctionDeclaration = countSymbolsFD("Hello!!!");
console.log(resultOfFunctionDeclaration);