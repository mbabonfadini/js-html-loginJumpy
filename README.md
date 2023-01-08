form.addEventListener: 
    faz o submit dos dados inputados pelo usuário e passa por etapas de conferencia.
    <script>
        form.addEventListener("submit",(evento)=>{
        evento.preventDefault() 
        confereDados()})
    </script>

função confereDados():
    Realiza a conferencia das informações inputadas pelo usuário, verificando se há itens vazios.
    <script>
        function confereDados(){
            let informacoes = []
            avisos.forEach((element)=>{
                element.remove()
            })
            avisos = []
            dados.forEach((element)=>{
                let item = element.value.trim()
                informacoes.push(item)
    Quando o valor inputado for vazio faz com que inclua uma tag <p>Campo Obrigatório*</p> destacado em vermelho abaixo do item que precisa ser validado. E uma tag <p class="avisoPrincipal"></p> recebe a informação de que o cadastro não foi finalizado devido os "Campos obrigatórios não terem sido registrados" também em vermelho:
            if(item === ""){
                element.parentElement.appendChild(constroiAviso())
                avisos.push(element.parentElement.querySelector(".aviso"))
                statusCadastro.style.color = 'var(--cor-alert)'
                statusCadastro.innerHTML = 'Campos obrigatórios não registrados.'
            }
            })
    Quando os dados sao inputados corretamente a tag <p class="avisoPrincipal"></p> recebe a informação de obteve sucesso no cadastro e que recebe uma coloração esverdeada:
            if(informacoes.includes("") == false){
            dados.forEach((element)=>{
            element.value = ""  
            })
            statusCadastro.style.color = 'var(--cor-alert-positivo)'
            statusCadastro.innerHTML = 'Sucesso!'
        }
        }
    <script>

função constroiAviso():
    Contrói uma tag p com o aviso de "Campo Obrigatório*" e adiciona a classe ".aviso"
    e retorna o elemento para que seja usado posterioremente:
    <script>
        function constroiAviso(){
            let mensagem = document.createElement("p")
            mensagem.innerHTML = 'Campo Obrigatório*'
            mensagem.classList.add('aviso')
            return mensagem
        }
    </script>

Devido o jumpy ser um app foi pensado em uma versão mobile também, tendo 3 visões, até 720px, até 1080px e acima de 1080px, possibilitando o acesso em diversos dispositivos diferentes.
