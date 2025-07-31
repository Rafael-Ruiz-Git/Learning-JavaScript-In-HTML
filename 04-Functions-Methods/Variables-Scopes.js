var globalVar = "globalVar";
let globalLet = "globalLet";

function checkGlobalScope (){
    console.log(globalVar);
    console.log(globalLet);
}

checkGlobalScope(); 

function localScope(){
  var localVar = "localVar";
  var localLet = "localLet";

      console.log(localVar);
    console.log(localLet);
}

localScope();

console.log(localVar);
console.log(localLet);

