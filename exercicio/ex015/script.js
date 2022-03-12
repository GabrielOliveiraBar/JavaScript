function verificar(){
   var data = new Date 
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res =document.querySelector('div#res')
   //ano de nascimento
   if (fano.value.length == 0 || Number (fano.value) > ano)
   {
       window.alert(`[erro] Verifique os dados e tente novamente`)}
       //para descobri se é homem  ou mulher
       else{
          var fsex = document.getElementsByName(`radsex`)
          var idade = ano - Number(fano.value)
          var gênero =  ``
          var img = document.createElement('img')
          img.setAttribute('id', 'foto')

          if (fsex[0].checked){
              gênero = `homem`
            if (idade >= 0 && idade <10){
                //criança
                img.setAttribute('src', 'criança homem250.jpg')
            }else if (idade < 21){
                //jovem
               
                img.setAttribute('src','eu250.jpg')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'adulto homem250.jpg')
            }
            else {
                //idoso
                img.setAttribute('src','velho homem250.jpg')
            }
        
              
     } else if (fsex[1].checked){
                  gênero = `mulher`
                  if(idade >= 0 && idade < 10){
                      //criança
                      img.setAttribute('src', 'criança mulher250.jpg')
                  }else if (idade < 21){
                      //jovem
                      img.setAttribute('src', 'jovem mulher250.jpg')
                  }else if (idade < 50){
                      //adulto
                      img.setAttribute('src','adulto mulher250.jpg')
                  }else{
                      //velho
                      img.setAttribute('src', 'velha mulher250.jpg')
                  }
                  
              }
              res.style.textAlign = 'center'
              res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
              res.appendChild(img)

               }
    }
