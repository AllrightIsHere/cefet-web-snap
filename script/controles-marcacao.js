// Exercício 00

const checkboxEl = document.querySelector('#visibilidade-das-marcacoes');

checkboxEl.addEventListener('input', (e) => {
    const marksNodeEl = document.querySelectorAll('.marcacao');

    marksNodeEl.forEach(el => {
        el.style.display = checkboxEl.checked ? 'none' : '';
    });
});

// Exercício 02

const marcacoesNodeElm = document.querySelectorAll('.marcacao');

const inputXDaMarcacaoEl = document.querySelector('#x-da-marcacao');
const inputYDaMarcacaoEl = document.querySelector('#y-da-marcacao');
const inputLarguraDaMarcacaoEl = document.querySelector('#largura-da-marcacao');
const inputAlturaDaMarcacaoEl = document.querySelector('#altura-da-marcacao');
const inputTituloDaMarcacaoEl = document.querySelector('#titulo-da-marcacao');
const inputConteudoDaMarcacaoEl = document.querySelector('#conteudo-da-marcacao');
const inputCorDaMarcacaoEl = document.querySelector('#cor-da-marcacao');
const inputFormatoRetangularEl = document.querySelector('input[value="formato-retangular"]');
const inputFormatoOvalEl = document.querySelector('input[value="formato-oval"]');


function atualizaControles(marcacaoEl) {
    inputXDaMarcacaoEl.value = parseInt(marcacaoEl.style.left);
    inputYDaMarcacaoEl.value = parseInt(marcacaoEl.style.top);
    inputLarguraDaMarcacaoEl.value = parseInt(marcacaoEl.style.width);
    inputAlturaDaMarcacaoEl.value = parseInt(marcacaoEl.style.height);
    inputTituloDaMarcacaoEl.value = marcacaoEl.dataset.titulo;
    inputConteudoDaMarcacaoEl.value = marcacaoEl.dataset.conteudo;
    inputCorDaMarcacaoEl.value = marcacaoEl.dataset.cor;
    const formatoOvalChecked = marcacaoEl.classList.contains('formato-oval');
    inputFormatoRetangularEl.checked = !formatoOvalChecked;
    inputFormatoOvalEl.checked = formatoOvalChecked;
}

marcacoesNodeElm.forEach(marcacaoEl => {
    marcacaoEl.addEventListener('click', (e) => {
        // remove a classe selecionada atual
        const removeSelectEl = document.querySelector('.marcacao.selecionada');
        if (removeSelectEl) {
            removeSelectEl.classList.remove('selecionada');
        }

        // adiciona a ao elemento clicado
        const selectedEl = e.currentTarget;
        selectedEl.classList.add('selecionada');

        // atualiza os inputs
        atualizaControles(selectedEl);
    });
});

// atualiza a marcação selecionada atual
atualizaControles(document.querySelector('.marcacao.selecionada'));

// Exercício 03

// Modificando a cada mudança
document.addEventListener('change', (e) => {
    const selectedMarkEl = document.querySelector('.marcacao.selecionada');
    const currentTarget = e.target;
    const value = currentTarget.value;

    if (currentTarget === inputXDaMarcacaoEl) selectedMarkEl.style.left = `${value}px`;
    else if (currentTarget === inputYDaMarcacaoEl) selectedMarkEl.style.top = `${value}px`;
    else if (currentTarget === inputLarguraDaMarcacaoEl) selectedMarkEl.style.width = `${value}px`;
    else if (currentTarget === inputAlturaDaMarcacaoEl) selectedMarkEl.style.height = `${value}px`;
    else if (currentTarget === inputTituloDaMarcacaoEl) selectedMarkEl.dataset.titulo = value;
    else if (currentTarget === inputConteudoDaMarcacaoEl) selectedMarkEl.dataset.conteudo = value;
    else if (currentTarget === inputCorDaMarcacaoEl) selectedMarkEl.dataset.cor = value;
    else if (currentTarget === inputFormatoRetangularEl && inputFormatoRetangularEl.checked) selectedMarkEl.classList.remove('formato-oval');
    else if (currentTarget === inputFormatoOvalEl && inputFormatoOvalEl.checked) selectedMarkEl.classList.add('formato-oval');
});