var vitoria = 0;
var empate = 0;
var derrota = 0;

const escolheuPedra = document.getElementById("pedraUsuario");

escolheuPedra.addEventListener('click', function() {
    const resultadoTela = document.getElementById("resultadoTela");
    resultadoTela.innerHTML = "";

    const pedra = document.getElementById("pedraPc");
    pedra.style.border = "none";
    pedra.style.borderColor = "none";

    const papel = document.getElementById("papelPc");
    papel.style.border = "none";
    papel.style.borderColor = "none";

    const tesoura = document.getElementById("tesouraPc");
    tesoura.style.border = "none";
    tesoura.style.borderColor = "none";


    for (i = 0; i < 1; i++) {

        let a = Math.floor(Math.random() * 3 + 1);

        if (a === 1) {
            // pedra
            let resultadoFinal = "EMPATE";
            empate += 1;
            const resultadoTela = document.getElementById("resultadoTela");
            const resultado = document.createElement("div");
            resultado.innerHTML = resultadoFinal;
            resultadoTela.appendChild(resultado);
            const pedra = document.getElementById("pedraPc");
            pedra.style.border = "solid 4px";
            pedra.style.borderColor = "green";


        } else if (a === 2) {
            // papel

            let resultadoFinal = "VOCÊ PERDEU";
            derrota += 1;
            const resultadoTela = document.getElementById("resultadoTela");
            const resultado = document.createElement("div");
            resultado.innerHTML = resultadoFinal;
            resultadoTela.appendChild(resultado);
            const pedra = document.getElementById("papelPc");
            pedra.style.border = "solid 4px";
            pedra.style.borderColor = "green";

        } else if (a === 3) {
            // tesoura

            let resultadoFinal = "VOCÊ GANHOU";
            vitoria += 1;
            const resultadoTela = document.getElementById("resultadoTela");
            const resultado = document.createElement("div");
            resultado.innerHTML = resultadoFinal;
            resultadoTela.appendChild(resultado);
            const pedra = document.getElementById("tesouraPc");
            pedra.style.border = "solid 4px";
            pedra.style.borderColor = "green";
        }

        console.log(a);
        console.log("Você Ganhou: " + vitoria);
        console.log("Você Empatou: " + empate);
        console.log("Você Perdeu: " + derrota);
    }

});

const escolheuPapel = document.getElementById('papelUsuario');
escolheuPapel.addEventListener('click', function() {

    const resultadoTela = document.getElementById("resultadoTela");
    resultadoTela.innerHTML = "";

    const pedra = document.getElementById("pedraPc");
    pedra.style.border = "none";
    pedra.style.borderColor = "none";

    const papel = document.getElementById("papelPc");
    papel.style.border = "none";
    papel.style.borderColor = "none";

    const tesoura = document.getElementById("tesouraPc");
    tesoura.style.border = "none";
    tesoura.style.borderColor = "none";

    for (i = 0; i < 1; i++) {

        let a = Math.floor(Math.random() * 3 + 1);

        if (a === 1) {

            let resultadoFinal = "VOCÊ GANHOU";
            vitoria += 1;
            const resultadoTela = document.getElementById("resultadoTela");
            const resultado = document.createElement("div");
            resultado.innerHTML = resultadoFinal;
            resultadoTela.appendChild(resultado);
            const pedra = document.getElementById("pedraPc");
            pedra.style.border = "solid 4px";
            pedra.style.borderColor = "green";

        } else if (a === 2) {

            let resultadoFinal = "EMPATE";
            empate += 1;
            const resultadoTela = document.getElementById("resultadoTela");
            const resultado = document.createElement("div");
            resultado.innerHTML = resultadoFinal;
            resultadoTela.appendChild(resultado);
            const pedra = document.getElementById("papelPc");
            pedra.style.border = "solid 4px";
            pedra.style.borderColor = "green";

        } else if (a === 3) {

            let resultadoFinal = "VOCÊ PERDEU";
            derrota += 1;
            const resultadoTela = document.getElementById("resultadoTela");
            const resultado = document.createElement("div");
            resultado.innerHTML = resultadoFinal;
            resultadoTela.appendChild(resultado);
            const pedra = document.getElementById("tesouraPc");
            pedra.style.border = "solid 4px";
            pedra.style.borderColor = "green";
        }
        console.log(a);
        console.log("Você Ganhou: " + vitoria);
        console.log("Você Empatou: " + empate);
        console.log("Você Perdeu: " + derrota);
    }

});

const escolheuTesoura = document.getElementById('tesouraUsuario');

escolheuTesoura.addEventListener('click', function() {

    const boxStorage = document.getElementById("resultadoTela");
    boxStorage.innerHTML = "";

    const pedra = document.getElementById("pedraPc");
    pedra.style.border = "none";
    pedra.style.borderColor = "none";

    const papel = document.getElementById("papelPc");
    papel.style.border = "none";
    papel.style.borderColor = "none";

    const tesoura = document.getElementById("tesouraPc");
    tesoura.style.border = "none";
    tesoura.style.borderColor = "none";

    for (i = 0; i < 1; i++) {

        let a = Math.floor(Math.random() * 3 + 1);

        if (a === 1) {

            let resultadoFinal = "VOCÊ PERDEU";
            derrota += 1;
            const resultadoTela = document.getElementById("resultadoTela");
            const resultado = document.createElement("div");
            resultado.innerHTML = resultadoFinal;
            resultadoTela.appendChild(resultado);
            const pedra = document.getElementById("pedraPc");
            pedra.style.border = "solid 4px";
            pedra.style.borderColor = "green";

        } else if (a === 2) {

            let resultadoFinal = "VOCÊ GANHOU";
            vitoria += 1;
            const resultadoTela = document.getElementById("resultadoTela");
            const resultado = document.createElement("div");
            resultado.innerHTML = resultadoFinal;
            resultadoTela.appendChild(resultado);
            const pedra = document.getElementById("papelPc");
            pedra.style.border = "solid 4px";
            pedra.style.borderColor = "green";


        } else if (a === 3) {

            let resultadoFinal = "EMPATE";
            empate += 1;
            const resultadoTela = document.getElementById("resultadoTela");
            const resultado = document.createElement("div");
            resultado.innerHTML = resultadoFinal;
            resultadoTela.appendChild(resultado);
            const pedra = document.getElementById("tesouraPc");
            pedra.style.border = "solid 4px";
            pedra.style.borderColor = "green";

        }
        console.log(a);
        console.log("Você Ganhou: " + vitoria);
        console.log("Você Empatou: " + empate);
        console.log("Você Perdeu: " + derrota);
    }

});