
function contar(){
    let inicio = document.getElementById("inicio")
    let fim = document.getElementById("fim")
    let passo = document.getElementById("passo")
    const result = document.getElementById("resultado")
    
    
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert("Favor inserir um número no campo vazio.")
        result.innerHTML = ("Impossível iniciar a contagem!")
    }else{
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        
        result.innerHTML = "Contando: <br> "

    if(p <= 0){
            alert("Passo inválido! o mesmo séra considerado = 1")
            p = 1
                        
        }
        
     if(i < f){
        for(let c = i; c <= f; c = c + p){
            result.innerHTML += (`&#128073; ${c} `)
        }
     }
     else{
        for(let c = i; c >= f; c = c - p){
            result.innerHTML += (`&#128073; ${c} `)
        }
     }
}    
    result.innerHTML += (`\uD83C\uDFC1`)
    
}    
