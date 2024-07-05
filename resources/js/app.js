document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section-1');
    let currentSectionIndex = 0;
    let isTransitioning = false;

    const showSection = (index) => {
        sections.forEach((section, i) => {
            section.classList.toggle('visible', i === index);
        });
    };

    const handleScroll = (event) => {
        if (isTransitioning) return;

        isTransitioning = true;
        const direction = (event.deltaY > 0) ? 1 : -1;
        const nextSectionIndex = currentSectionIndex + direction;

        if (nextSectionIndex >= 0 && nextSectionIndex < sections.length) {
            currentSectionIndex = nextSectionIndex;
            showSection(currentSectionIndex);
        }

        setTimeout(() => {
            isTransitioning = false;
        }, 600); // Adjust this value to match or slightly exceed your CSS transition duration
    };

    showSection(currentSectionIndex);
    window.addEventListener('wheel', handleScroll);

    // Dark mode toggle
    const toggleButton = document.getElementById('toggle');
    const body = document.body;

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark');
    });
});
