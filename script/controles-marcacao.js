const checkboxEl = document.querySelector('#visibilidade-das-marcacoes');

checkboxEl.addEventListener('input', (e) => {
    const marksNodeEl = document.querySelectorAll('.marcacao');

    marksNodeEl.forEach(el => {
        el.style.display = checkboxEl.checked ? 'none' : '';
    });
});