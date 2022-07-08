let tipopessoa = "";

function verificandoTipoPessoa() {
    //const documento = '270.646.920-07';
    const documento = "26.246.306/0001-16";

    if (documento.length === 14){
        tipopessoa = "PF";
        document.querySelector('.tipopessoapj').style.display = 'none';
    }
    else{
        tipopessoa = "PJ";
        document.querySelector('.tipopessoapf').style.display = 'none';
    }
}

window.onload = function () {
    verificandoTipoPessoa();
}

function trocaAbaCadastro(aba) {
    console.log(aba);

    if (tipopessoa === "PF") {

        [].forEach.call(document.querySelectorAll(".opcaoCadastro_pf"), function (el) {
            el.classList.remove("active");
        });
        document.getElementById(aba).className += ' active';

        var dadosGerais = document.querySelector('.dadosGerais_pf');
        var quadroEndereco = document.querySelector('.quadroEndereco_pf');
        var quadroDadosBancarios = document.querySelector('.quadroDadosBancarios_pf');

        console.log(aba);

        if (aba === 'opcao-dados-gerais_pf') {
            dadosGerais.style.display = 'inherit';
            quadroEndereco.style.display = 'none';
            quadroDadosBancarios.style.display = 'none';
        } else if (aba === 'opcao-dados-endereco_pf') {
            dadosGerais.style.display = 'none';
            quadroEndereco.style.display = 'inherit';
            quadroDadosBancarios.style.display = 'none';
        } else if (aba === 'opcao-dados-bancarios_pf') {
            dadosGerais.style.display = 'none';
            quadroEndereco.style.display = 'none';
            quadroDadosBancarios.style.display = 'inherit';
        }
    } else if (tipopessoa === "PJ") {

        [].forEach.call(document.querySelectorAll(".opcaoCadastro_pj"), function (el) {
            el.classList.remove("active");
        });
        document.getElementById(aba).className += ' active';

        var dadosGerais_pj = document.querySelector('.dadosGerais_pj');
        var quadroEndereco_pj = document.querySelector('.quadroEndereco_pj');
        var quadroDadosBancarios_pj = document.querySelector('.quadroDadosBancarios_pj');
        var dadosRepresentante_rep = document.querySelector('.dadosRepresentante_rep');

        if (aba === 'opcao-dados-gerais_pj') {
            dadosGerais_pj.style.display = 'inherit';
            quadroEndereco_pj.style.display = 'none';
            quadroDadosBancarios_pj.style.display = 'none';
            dadosRepresentante_rep.style.display = 'none';
        } else if (aba === 'opcao-dados-endereco_pj') {
            dadosGerais_pj.style.display = 'none';
            quadroEndereco_pj.style.display = 'inherit';
            quadroDadosBancarios_pj.style.display = 'none';
            dadosRepresentante_rep.style.display = 'none';
        } else if (aba === 'opcao-dados-bancarios_pj') {
            dadosGerais_pj.style.display = 'none';
            quadroEndereco_pj.style.display = 'none';
            quadroDadosBancarios_pj.style.display = 'inherit';
            dadosRepresentante_rep.style.display = 'none';
        } else if (aba === 'opcao-dados-representante_rep') {
            dadosGerais_pj.style.display = 'none';
            quadroEndereco_pj.style.display = 'none';
            quadroDadosBancarios_pj.style.display = 'none';
            dadosRepresentante_rep.style.display = 'inherit';
        }
    }

}

function salvar(){
    alert('Dados salvos com sucesso.....');
}