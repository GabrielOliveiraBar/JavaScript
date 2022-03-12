function tabuada(){
    let num  = document.querySelector(`input#txtn`)
    let tab = document.querySelector(`seltab`)

   if(num.value.length == 0) {
  window.alert('Por favor, digite um número')
} else{
     let n = Number(num.value)
     let c = 1
     for (let n ; c <= 10;c++ ){
         let item = document.createElement('option')
         item.txt = `${n} x ${c}  = ${n*c}`
        tab.appendChild(item) 
        
     }
}

}