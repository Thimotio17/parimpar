const ehParouImpar = (numero) => {

    let array = numero.split("")
    let soma = 0;

    array.array.forEach(elemento =>{
        
    soma += +elemento
    });

    if(soma % 2 ==0){
        return "Impar"
       }
        return "Par"
       }

       module.exports = {
        ehParouImpar
       }

