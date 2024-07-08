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
            modeBtn.querySelector(".fa-sun").style.display = "none";
            modeBtn.querySelector(".fa-moon").style.display = "inline";
        } else {
            currentMode = "light";
            body.classList.add("light");
            body.classList.remove("dark");
            modeBtn.querySelector(".fa-sun").style.display = "inline";
            modeBtn.querySelector(".fa-moon").style.display = "none";
        }
        console.log(currentMode); // Check if this logs correctly
    }

    modeBtn.addEventListener("click", () => {
        toggleNightMode();
    });
});
