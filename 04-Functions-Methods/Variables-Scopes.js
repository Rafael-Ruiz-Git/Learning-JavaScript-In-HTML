var globalVar = "globalVar";
let globalLet = "globalLet";

function checkGlobalScope (){
    console.log(globalVar);
    console.log(globalLet);
}

checkGlobalScope(); 

function localScope(){
  var localVar = "localVar";
  let localLet = "localLet";

      console.log(localVar);
    console.log(localLet);
}

localScope();
 
//this gives an error because it's declared inside a function
// console.log(localVar);
// console.log(localLet);


// for block scope var is available outside the function but not the let

function blockscope (){
if(true) {
  var blockVar ="blockVar";
  let blockLet ="blockLet";

console.log(blockVar);
console.log(blockLet);

}

console.log(blockVar);
// console.log(blockLet); this is not defined
}

blockscope();

function OuterFunction(){
  var outerVar = "outerVar";
  let outerLet = "outerLet";

  function innerFunction( ){
  var innerVar = "innerVar";
  let innerLet = "innerLet";

  console.log(outerVar);
  console.log(outerLet);
  }
innerFunction();
}
// console.log(innerVar);
// console.log(innerLet);

OuterFunction();





