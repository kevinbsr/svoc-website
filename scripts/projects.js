document.addEventListener('DOMContentLoaded', () => {
    const ProjectCards = document.querySelectorAll('.project-card');

    ProjectCards.forEach(card => {
        card.addEventListener('click', (event) => {
            if (event.target.closest('a')) {
                return;
            }

            const isAlreadyActive = card.classList.contains('is-active');

            ProjectCards.forEach(c => c.classList.remove('is-active'));
            if (!isAlreadyActive) {
                card.classList.add('is-active');
            }
        })
    });
})

document.addEventListener('click', (event) => {
    if (!event.target.closest('.project-card')) {
        ProjectCards.forEach(c => c.classList.remove('is-active'));
    }
})