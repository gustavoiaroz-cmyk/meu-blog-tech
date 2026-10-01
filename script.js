const botoes = document.querySelectorAll(".botao-reacao");

botoes.forEach(function (botao) {
    let curtiu = false;

    botao.addEventListener("click", botaoClicado);

    function botaoClicado() {
        const texto = botao.querySelector("span");

        if (curtiu === false) {
            texto.textContent++;
            curtiu = true;
            botao.classList.add("ativo");
        } else {
            texto.textContent--;
            curtiu = false;
            botao.classList.remove("ativo");
        }
    }
});
