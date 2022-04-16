var btnVerificar = document.getElementById('btnVerificar');
btnVerificar.addEventListener(`click`, verificar);

function verificar() {

    var txtVelocidade = document.querySelector('input#velocidade');
    var resp = document.querySelector("div#resp");

    var velocidade = Number(txtVelocidade.value);
    resp.innerHTML = `<p>Velocidade atual: ${velocidade}</p>`;

    if (velocidade > 60)
        resp.innerHTML += `<p>Multado por excesso de velocidade.</p>`;
    else if ((velocidade > 50) && (velocidade <= 60))
        resp.innerHTML += `<p>Atenção! Você quase ultrapassou a velocidade permitida!</p>`;
    else
        resp.innerHTML += `<p>Você está dentro da velocidade segura!</p>`;

    console.log(txtVelocidade.value);
}

