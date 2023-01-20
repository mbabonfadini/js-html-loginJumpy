form.addEventListener: 
    faz o submit dos dados inputados pelo usuário e passa por etapas de conferencia.
    <script>
        form.addEventListener("submit",(evento)=>{
            evento.preventDefault() 
    enviaDados()})
    </script>

função validaValor():
    Realiza a conferencia das informações inputadas pelo usuário, verificando se há itens vazios.
    <script>
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
        }
    Quando o valor inputado for vazio faz com que inclua uma tag <p>Campo Obrigatório*</p> destacado em vermelho abaixo do item que precisa ser validado. E uma tag <p class="avisoPrincipal"></p> recebe a informação de que o cadastro não foi finalizado devido os "Campos obrigatórios não terem sido registrados" também em vermelho:
            if(!validadorDeInput){
                mensagemErro.textContent = mensagem
                statusCadastro.style.color = 'var(--cor-alert)'
                statusCadastro.innerHTML = 'Campos obrigatórios não registrados.'
                return false
                else{
                mensagemErro.textContent = ""
                statusCadastro.innerHTML = ''
                return true}}
    Quando os dados sao inputados corretamente a tag <p class="avisoPrincipal"></p> recebe a informação de obteve sucesso no cadastro e que recebe uma coloração esverdeada:
            if(tudoCerto){
                    statusCadastro.style.color = 'var(--cor-alert-positivo)'
                    statusCadastro.innerHTML = 'Sucesso!'}
            <script>

Devido o jumpy ser um app foi pensado em uma versão mobile também, tendo 3 visões, até 720px, até 1080px e acima de 1080px, possibilitando o acesso em diversos dispositivos diferentes.
