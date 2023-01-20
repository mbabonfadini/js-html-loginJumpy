export default function ehCPF(campo,element){
    const cpf = campo.value.replace(/\.|-/g,"")
    if(validaPrimeiroDigito(cpf) || validaSegundoDigito(cpf) || validaNumerosRepetidos(cpf)){
        campo.setCustomValidity("Por favor inserir um CPF válido!")
        
    }
   
}

const numerosRepetidos = ['00000000000',
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999'
    ]

function validaNumerosRepetidos(cpf){
    return numerosRepetidos.includes(cpf)
}

function validaPrimeiroDigito(cpf){
    let soma = 0
    let multiplicador = 10

    for(let posicao =0;posicao < 9; posicao++){
        soma += cpf[posicao]*multiplicador
        multiplicador--
    }
    soma = (soma*10)%11 

    if(soma== 10|| soma == 11){
        soma=0
    }
    return soma != cpf[9]
}

function validaSegundoDigito(cpf){
    let soma = 0
    let multiplicador = 11

    for(let posicao =0;posicao < 10; posicao++){
        soma += cpf[posicao]*multiplicador
        multiplicador--
    }
    soma = (soma*10)%11 

    if(soma== 10|| soma == 11){
        soma=0
    }
    return soma != cpf[10]
}