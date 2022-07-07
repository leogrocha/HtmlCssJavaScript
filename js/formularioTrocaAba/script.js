function trocaAbaCadastro(aba) {
    [].forEach.call(document.querySelectorAll(".opcaoCadastro"), function (el) {
        el.classList.remove("active");
    });
    document.getElementById(aba).className += ' active';

    var dadosGerais = document.querySelector('.dadosGerais');
    var quadroEndereco = document.querySelector('.quadroEndereco');
    var quadroDadosBancarios = document.querySelector('.quadroDadosBancarios');

    if(aba === 'opcao-dados-gerais'){
        dadosGerais.style.display = 'block';
        quadroEndereco.style.display = 'none';
        quadroDadosBancarios.style.display = 'none';
    } else if(aba === 'opcao-dados-endereco'){
        dadosGerais.style.display = 'none';
        quadroEndereco.style.display = 'block';
        quadroDadosBancarios.style.display = 'none';
    } else if (aba === 'opcao-dados-bancarios') {
        dadosGerais.style.display = 'none';
        quadroEndereco.style.display = 'none';
        quadroDadosBancarios.style.display = 'block';
    }

    

    
    
}
