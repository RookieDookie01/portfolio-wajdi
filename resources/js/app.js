document.addEventListener("DOMContentLoaded", () => {
    // Night Mode Toggle Handling
    const modeBtn = document.getElementById("mode");
    const body = document.body;
    let currentMode = "light";

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

    modeBtn.addEventListener("click", () => {
        toggleNightMode();
    });

    // //Scroll Handling
    // const sections = document.querySelectorAll('.section');
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
    //     }, 600);
    // };

    // showSection(currentSectionIndex);
    // window.addEventListener('wheel', handleScroll);
});