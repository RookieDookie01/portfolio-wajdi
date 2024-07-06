// const sections = document.querySelectorAll('.section-1');
// let currentSectionIndex = 0;
// let isTransitioning = false;

// const showSection = (index) => {
//     sections.forEach((section, i) => {
//         section.classList.toggle('visible', i === index);
//     });
// };

// const handleScroll = (event) => {
//     if (isTransitioning) return;

//     isTransitioning = true;
//     const direction = (event.deltaY > 0) ? 1 : -1;
//     const nextSectionIndex = currentSectionIndex + direction;

//     if (nextSectionIndex >= 0 && nextSectionIndex < sections.length) {
//         currentSectionIndex = nextSectionIndex;
//         showSection(currentSectionIndex);
//     }

//     setTimeout(() => {
//         isTransitioning = false;
//     }, 600); // Adjust this value to match or slightly exceed your CSS transition duration
// };

// showSection(currentSectionIndex);
// window.addEventListener('wheel', handleScroll);


document.addEventListener("DOMContentLoaded", () => {
    const modeBtn = document.getElementById("mode");
    const body = document.body;
    let currentMode = "light";

    // Function to toggle night mode
    function toggleNightMode() {
        if (currentMode === "light") {
            currentMode = "dark";
            body.classList.add("dark");
            body.classList.remove("light");
            modeBtn.textContent = "Day Mode";
        } else {
            currentMode = "light";
            body.classList.add("light");
            body.classList.remove("dark");
            modeBtn.textContent = "Night Mode";
        }
        console.log(currentMode);
    }

    // Event listener for mode button click
    modeBtn.addEventListener("click", () => {
        toggleNightMode();
    });
});