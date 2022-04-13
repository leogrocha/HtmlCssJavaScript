var ponteiro = document.getElementById("ponteiro"); //Selecionando o circulo principal
var ctxPonteiro = ponteiro.getContext("2d"); // Definindo o contexto 2d
ctxPonteiro.fillStyle = "black"; // Definindo o estilo do circulo principal
ctxPonteiro.beginPath(); // Iniciando o caminho
ctxPonteiro.arc(100, 75, 30, 0, 2 * Math.PI, false); // Definindo o caminho do circulo principal
ctxPonteiro.fill(); // Preenchendo o circulo principal
ctxPonteiro.closePath(); // Finalizando o caminho




// ctxPonteiro.moveTo(100, 75); // Definindo o ponto inicial do ponteiro
// ctxPonteiro.lineTo(100, 50); // Definindo o ponto final do ponteiro










