import ehCPF from "../js/valida_cpf.js"
const form = document.querySelector("form")
const dados = document.querySelectorAll(".entrada")
const statusCadastro = document.querySelector('.avisoPrincipal')
var avisos = []

dados.forEach(elemento=>{
    elemento.addEventListener("blur",()=>validaValor(elemento))
    elemento.addEventListener("invalid",evento => evento.preventDefault())
})

form.addEventListener("submit",(evento)=>{
    evento.preventDefault() 
    enviaDados()
    
})

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
]

const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF não tem caractéres suficientes."
    },
    telefone: {
        valueMissing: 'O campo de telefone não pode estar vazio.',
        tooShort: "O campo de CPF não tem caractéres suficientes."
    },
    senha: {
        valueMissing: 'O campo de senha não pode estar vazio.',
        tooShort: "A senha deve ter no minimo 8 caracteres"
    },
}

function enviaDados(){
    let tudoCerto = ""
    dados.forEach(elemento=>{
        if(validaValor(elemento)){
            statusCadastro.style.color = 'var(--cor-alert-positivo)'
            statusCadastro.innerHTML = 'Sucesso!'
        }
        else{
            statusCadastro.style.color = 'var(--cor-alert)'
            statusCadastro.innerHTML = 'Campos obrigatórios não registrados.'
        }
    })
        
}

// function constroiAviso(){
//     let mensagem = document.createElement("p")
//     mensagem.innerHTML = 'Campo Obrigatório*'
//     mensagem.classList.add('aviso')
//     return mensagem
// }

function validaValor(elemento){
    let mensagem = "";
    elemento.setCustomValidity("")

    if(elemento.name=="cpf" && elemento.value.length >=11){
        ehCPF(elemento)
    }

    tiposDeErro.forEach(erro=>{
        if(elemento.validity[erro]){
            mensagem = mensagens[elemento.name][erro]

        }
    })

    const mensagemErro = elemento.parentNode.querySelector(".aviso")
    const validadorDeInput =elemento.checkValidity();

    if(!validadorDeInput){
        mensagemErro.textContent = mensagem
        statusCadastro.style.color = 'var(--cor-alert)'
        statusCadastro.innerHTML = 'Campos obrigatórios não registrados.'
        return false
    }
    else{
        mensagemErro.textContent = ""
        statusCadastro.innerHTML = ''
        return true
    }
}