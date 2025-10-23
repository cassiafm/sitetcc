document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('know-more-btn');
    const img = btn.querySelector('.onHoverSeta');

    btn.addEventListener('mouseenter', () => {
        img.src = 'img/selected_setabotao.png';
    });

    btn.addEventListener('mouseleave', () => {
        img.src = 'img/setabotao.svg';
    });
});
