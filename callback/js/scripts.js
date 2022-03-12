
// callback function

function exibir(num){
console.log("A operação resulta em: " + num);
}

function soma (a,b,cb){
    var op = a+b;
   cb(op);
}

function multiplicar(a,b, callback){
    var op = a*b;
    callback(op);
   
}

soma(2,2, exibir);
multiplicar(2,4,exibir);