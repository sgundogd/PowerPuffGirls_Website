const visualizations = document.querySelectorAll('.visualization img');

const modal = document.createElement('div');
modal.classList.add('modal');
document.body.appendChild(modal);

const modalContent = document.createElement('img');
modalContent.classList.add('modal-content');
modal.appendChild(modalContent);

modal.addEventListener('click', () => {
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
});

visualizations.forEach((visualization) => {
    visualization.addEventListener('click', () => {
        modalContent.src = visualization.src;
        modal.style.display = 'block';
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    });
});
