// Night Mode Toggle Handling
document.addEventListener("DOMContentLoaded", () => {
    const modeBtn = document.getElementById("mode");
    const body = document.body;
    let currentMode = localStorage.getItem("mode") || "light";

    function applyMode(mode) {
        if (mode === "dark") {
            body.classList.add("dark");
            body.classList.remove("light");
            modeBtn.querySelector(".fa-sun").style.display = "none";
            modeBtn.querySelector(".fa-moon").style.display = "inline";
        } else {
            body.classList.add("light");
            body.classList.remove("dark");
            modeBtn.querySelector(".fa-sun").style.display = "inline";
            modeBtn.querySelector(".fa-moon").style.display = "none";
        }
        console.log(mode); 
    }

    function toggleNightMode() {
        if (currentMode === "light") {
            currentMode = "dark";
        } else {
            currentMode = "light";
        }
        applyMode(currentMode);
        localStorage.setItem("mode", currentMode);
    }

    modeBtn.addEventListener("click", () => {
        toggleNightMode();
    });
    applyMode(currentMode);
});

// Curtain Animation Handling
document.addEventListener('DOMContentLoaded', () => {
    // Opening curtain effect
    setTimeout(() => {
        document.querySelector('.curtain.top').classList.add('expand');
        document.querySelector('.curtain.bottom').classList.add('expand');
    }, 200);

    // Attach event listeners to all .next-page links
    document.querySelectorAll('.next-page').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('.curtain.top').classList.remove('expand');
            document.querySelector('.curtain.bottom').classList.remove('expand');
            document.querySelector('.curtain.top').classList.add('close');
            document.querySelector('.curtain.bottom').classList.add('close');
            
            setTimeout(() => {
                window.location.href = e.target.href;
            }, 500); // Match the transition time
        });
    });
});