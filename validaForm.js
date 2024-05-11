function validaCampos () {
    let nome = document.getElementById("firstName").value;
    let validaNome = false;

    let sobrenome = document.getElementById("secondName").value;
    let validaSobrenome = false;

    let email = document.getElementById("email").value;
    let validaEmail = false;

    let telefone = document.getElementById("number").value;
    let validaTelefone = false;

    let senha = document.getElementById("password").value;
    let validaSenha = false;
    let confirmacaoSenha = document.getElementById("confirmPassword").value;

    if (nome === ""){
        alert("Por favor, informe o seu primeiro nome.");
    } else {
        validaNome = true;
    }

    if (sobrenome === ""){
        alert("Por favor, informe o seu sobrenome.");
    } else {
        validaSobrenome = true;
    }

    if (email === ""){
        alert("Por favor, informe o seu e-mail.");
    } else {
        validaEmail = true;
    }

    if (telefone === ""){
        alert("Por favor, informe o seu telefone.");
    } else {
        validaTelefone = true;
    }

    if (senha === ""){
        alert("Por favor, insira sua senha.");
    } else {
        validaSenha = true;
    }

    if (confirmacaoSenha === ""){
        alert("Por favor, confirme sua senha.");
    }

    if (senha.length < 8){
        alert("A senha deve conter, no mínimo, 8 (oito) caracteres")
    }

    if (senha !== confirmacaoSenha){
        alert("A senha não está confirmada corretamente! Certifique-se de preencher os dois campos igualmente");
    } /* o operador !== verifica se as duas variáveis são estritamente iguais, exibindo um alert na tela caso não sejam
     caso sejam, o fluxo segue*/     
     
    /* falta criar uma verificação do radio button
    não achei nada na internet a respeito que use somente JS puro
    postei minha dúvida no Stack OverFlow e tô esperando para ver se obtenho resposta*/

    if (validaNome && validaSobrenome && validaEmail && validaTelefone && validaSenha !== ""){
        let userData = JSON.parse(localStorage.getItem('userData') || '[]')

        

        userData.push(
            {
                nomeRegistrado: nome,
                sobrenomeRegistrado: sobrenome,
                emailRegistrado: email,
                telRegistrado: telefone,
                senhaRegistrada: senha
                /* não faço a menor ideia de como buscar o gênero */ 
            }
            )       

        localStorage.setItem('userData', JSON.stringify(userData))
    } else {
        alert("Preencha os campos!")
    }; 
}
