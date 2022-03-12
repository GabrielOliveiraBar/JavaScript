// clearTimeout 


var x = 3 ;

let myTimer = setTimeout(function(){
console.log("o x é 3");
},3000);

x = 5;

if(x > 3){
    clearTimeout(myTimer);
    console.log("O x passou de 3")};

// clearInterval

var myInterval = setInterval(function(){
console.log("toto da cabeça kkkkk");
}, 500);


setTimeout(function() {
    console.log("Deus não me deixou ficar toto.");
    clearInterval(myInterval);
}, 1500);