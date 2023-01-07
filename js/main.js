const form = document.querySelector("form")
const dados = document.querySelectorAll(".entrada")
const statusCadastro = document.querySelector('.avisoPrincipal')
var avisos = []

form.addEventListener("submit",(evento)=>{
    evento.preventDefault()
    
    confereDados()
    
})

function confereDados(){
    let informacoes = []

    avisos.forEach((element)=>{
        element.remove()
    })

    avisos = []

    dados.forEach((element)=>{
        let item = element.value.trim()
        informacoes.push(item)
        if(item === ""){
            element.parentElement.appendChild(constroiAviso())
            avisos.push(element.parentElement.querySelector(".aviso"))
            statusCadastro.style.color = 'var(--cor-alert)'
            statusCadastro.innerHTML = 'Campos obrigatórios não registrados.'
        }
     })

    if(informacoes.includes("") == false){
        dados.forEach((element)=>{
          element.value = ""  
        })
        statusCadastro.style.color = 'var(--cor-alert-positivo)'
        statusCadastro.innerHTML = 'Sucesso!'
    }
        
}

function constroiAviso(){
    let mensagem = document.createElement("p")
    mensagem.innerHTML = 'Campo Obrigatório*'
    mensagem.classList.add('aviso')
    return mensagem
}
