let valores = [2, 6, 7, 3, 4]
valores.sort()






/*for(let num =0; num<valores.length;num++){
    console.log(`A posição ${num} tem o valor ${valores[num]}`)
}*/

// forma simplificada de for para (array)vetores e obejetos

for (let num in valores){
    console.log( `a posição ${num}  tem o valor ${valores[num]}`)
}


