const filtroEl = document.querySelector('#filtro-da-foto');

const imgEl = document.querySelector('.foto-anotada > img');

filtroEl.addEventListener('change', (e) => {
    imgEl.style.filter = filtroEl.value;
});