function fazGet(url){
    let request = new XMLHttpRequest();
    request.open('GET', url, false);
    request.send();
    return request.responseText;
}

function criarLinha(usuario) {
    console.log(usuario);
    linha = document.createElement('tr');
    TdId = document.createElement('td');
    tdLogin = document.createElement('td');
    TdId.innerHTML = usuario.id;
    tdLogin.innerHTML = usuario.login;

    linha.appendChild(TdId);
    linha.appendChild(tdLogin);

    return linha;

}

function main() {
    let data = fazGet("https://api.github.com/users/leogrocha");
    let usuarios = JSON.parse(data);
    let tabela = document.getElementById("tabela");
    
    
        let linha = criarLinha(usuarios);
        tabela.appendChild(linha);
}

main();