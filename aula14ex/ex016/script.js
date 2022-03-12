function contar(){  
 let ini = document.querySelector(`input#txti`)
 let fim = document.querySelector(`input#txtf`)
 let passo = document.querySelector(`input#txtp`)
 let res = document.querySelector(`div#res`)
 
if (ini.value.length == 0 || fim.value.length == 00 || passo.value.length == 0){
    // window.alert('[ERRO] Faltam dados')
res.innerHTML = `Impossivel contar`}else{
        res.innerHTML = 'CONTANDO: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p= Number(passo.value)
        if(p<=0){
            window.alert('passo invalido! considerando passo 1 ')
            p=1
        }
        if ( i < f){
        //contagem crescente
        for (let c = i; c<=f; c+=p){
            res.innerHTML += `${c}  \u{1F607}` 
        }
    }else{
            // contagem regressiva
            for (let c = i;c >= f; c-=p){
                res.innerHTML += `${c} \u{1f607}`
            }
        }
        
        res.innerHTML += `\u{1f3c1}`
    }
}
