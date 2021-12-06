// exercício 04

const filtroEl = document.querySelector('#filtro-da-foto');

const imgEl = document.querySelector('.foto-anotada > img');

filtroEl.addEventListener('change', (e) => {
    imgEl.style.filter = filtroEl.value;
});

// Desafio 01
const inputFile = document.querySelector('#imagem');

inputFile.addEventListener('change', (e) => {
    const file = e.target.files && e.target.files.length ? e.target.files[0] : null;

    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();

        reader.addEventListener('load', (e) => {
            imgEl.src = e.target.result;
        });

        reader.readAsDataURL(file);
    }


});
