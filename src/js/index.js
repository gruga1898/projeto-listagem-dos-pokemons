const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const imagemBotaotrocaDeTema = document.querySelector(".imagem-botao")

const body = document.querySelector("body");
console.log(body);

botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");

    if (modoEscuroAtivo) {
        imagemBotaotrocaDeTema.setAttribute("src", "src/imagens/sun.png");

    } else {
        imagemBotaotrocaDeTema.setAttribute("src", "src/imagens/moon.png");

    }
});