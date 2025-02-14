document.addEventListener("DOMContentLoaded", () => {
    const confettiCount = 100; // Number of confetti pieces
    const confettiContainer = document.body;

    for (let i = 0; i < confettiCount; i++) {
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");

        let colors = ["#FFD700", "#FF69B4", "#FF4500", "#00FF7F", "#00CED1"];
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDuration = Math.random() * 3 + 2 + "s"; // Different speeds
        confetti.style.animationDelay = Math.random() * 2 + "s"; // Staggered start
        confetti.style.width = Math.random() * 10 + 5 + "px"; // Random size
        confetti.style.height = confetti.style.width; // Keep it square

        confettiContainer.appendChild(confetti);
    }
});
