var slowPanel, y;

function indexParallex() {
    y = window.pageYOffset;
    slowPanel = document.getElementById('first-panel');
    slowPanel.style.top = y * .5 + 'px';
}

window.addEventListener('scroll', indexParallex);