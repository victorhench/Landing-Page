const grade = document.querySelector(".atracoes__grade");
const anterior = document.querySelector(".carrossel__anterior");
const proximo = document.querySelector(".carrossel__proximo");
const indicadores = document.querySelectorAll(".indicador");
const cards = document.querySelectorAll(".atracao");

let indice = 0;

function atualizarCarrossel() {
    const largura = document.querySelector(".carrossel__janela").offsetWidth;
    const deslocamento = indice * largura;

    grade.style.transform = `translateX(-${deslocamento}px)`;

    indicadores.forEach((indicador, i) => {
        indicador.classList.toggle("ativo", i === indice);
    });
}

proximo.addEventListener("click", () => {
    indice++;

    if (indice >= cards.length) {
        indice = 0;
    }

    atualizarCarrossel();
});

anterior.addEventListener("click", () => {
    indice--;

    if (indice < 0) {
        indice = cards.length - 1;
    }

    atualizarCarrossel();
});

indicadores.forEach((indicador, i) => {
    indicador.addEventListener("click", () => {
        indice = i;
        atualizarCarrossel();
    });
});

window.addEventListener("resize", atualizarCarrossel);

atualizarCarrossel();