// adicionar atributo
let subtitle = document.querySelector('.subtitle')

subtitle.setAttribute("id", "titulo-2");

var btn =  document.querySelector('button#btn');

btn.setAttribute("disabled", "disabled");

// remover atributo

let par = document.querySelector('#paragrafo')

par.removeAttribute("id")
