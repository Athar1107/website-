const confettiCanvas = document.getElementById("confettiCanvas");
const confettiCtx = confettiCanvas.getContext("2d");

confettiCanvas.width = window.innerWidth;
confettiCanvas.height = window.innerHeight;

function startConfetti() {
    confettiCanvas.style.display = "block";
    // Add confetti animation logic here (or use a confetti library)
}

function stopConfetti() {
    confettiCanvas.style.display = "none";
}
