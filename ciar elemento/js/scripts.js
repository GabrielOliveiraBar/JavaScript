var novoParagrafo = document.createElement("p");



var texto =  document.createTextNode("Este é o conteúdo do paragráfo. ")

novoParagrafo.appendChild(texto);

console.log(novoParagrafo);

var body = document.querySelector("body");

console.log(body);

body.appendChild(novoParagrafo);

// inserir em um container

var container = document.getElementById("container");

console.log(container);

var el = document.createElement("span");

el.appendChild(document.createTextNode("texto do span"));

console.log(el);


container.appendChild(el);

// papa

var papa = document.querySelector("div#papa");


console.log(papa);

let le =  document.createElement("p");

console.log(le);

le.appendChild(document.createTextNode("eu sou toto da cabeça."));

console.log(le);

papa.appendChild(le)



