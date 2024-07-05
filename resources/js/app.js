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


let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currentMode = "light";

modeBtn.addEventListener("click", () => {
    if(currentMode === "light"){
        currentMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        currentMode = "light";
        body.classList.add("light")
        body.classList.remove("dark")
    }
    console.log(currentMode);
}); 

const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark")
})