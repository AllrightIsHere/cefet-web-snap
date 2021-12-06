const balaozinhoEl = document.querySelector('#balaozinho');

const marcacoesNodeEl = document.querySelectorAll('.marcacao');

function mouseEntrou(e) {
    const marcacao = e.currentTarget;
    balaozinhoEl.innerHTML = `<h2>${marcacao.dataset.titulo}</h2>
    <p>${marcacao.dataset.conteudo}</p>`;
    balaozinhoEl.style.color = marcacao.dataset.cor;
    balaozinhoEl.style.top = `${e.pageY}px`;
    balaozinhoEl.style.left = `${e.pageX}px`;
}

function mouseSaiu(e) {
    balaozinhoEl.innerHTML = '';
}

function mouseMovimentou(e) {
    balaozinhoEl.style.top = `${e.pageY}px`;
    balaozinhoEl.style.left = `${e.pageX}px`;
}

marcacoesNodeEl.forEach(marcacao => {
    marcacao.addEventListener('mouseover', mouseEntrou);
    marcacao.addEventListener('mouseout', mouseSaiu);
    marcacao.addEventListener('mousemove', mouseMovimentou);
})