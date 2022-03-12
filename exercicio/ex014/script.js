function carregar(){
 var msg = window.document.querySelector(`div#msg`)
 var img = window.document.getElementById(`imagem`)   

var data = new Date()
var hora = data.getHours()
var hora = 21
msg.innerHTML = `Agora são ${hora} horas`
    if(hora  >= 0 && hora <12){
   msg.innerHTML += `<p>Bom Dia </p> `
        //Bom dia 
        img.src ="imagem de manhã250.jpeg"
        
    }
    else if (hora >= 12 && hora <= 18 ) {
    msg.innerHTML += `<p>Boa Tarde </p> `
    img.src = 'imagem de tarde250.jpeg' 
} 
    else {
    msg.innerHTML += `<p>Boa Noite </p> `
    img.src = 'imagem de noite250.jpeg'
      
    }
}
