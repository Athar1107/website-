document.addEventListener("DOMContentLoaded", () => {
    const cells = document.querySelectorAll(".cell");
    const statusText = document.querySelector("#statusText");
    const restartBtn = document.querySelector("#restartBtn");
    const heartScoreEl = document.querySelector("#heartScore");
    const roseScoreEl = document.querySelector("#roseScore");
    const bgMusic = document.querySelector("#bgMusic");
    const winMusic = new Audio("win.mp3");
    const drawMusic = new Audio("draw.mp3");
    
    let currentPlayer = "💖"; 
    let board = ["", "", "", "", "", "", "", "", ""];
    let running = true;
    let heartWins = 0;
    let roseWins = 0;

    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    function updateCell(index) {
        if (board[index] !== "" || !running) return;
        
        board[index] = currentPlayer;
        cells[index].textContent = currentPlayer;
        cells[index].classList.add("pop");
        
        setTimeout(() => {
            cells[index].classList.remove("pop");
        }, 500);
        
        checkWinner();
    }

    function checkWinner() {
        let roundWon = false;
        
        for (let condition of winConditions) {
            let [a, b, c] = condition;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                roundWon = true;
                break;
            }
        }

        if (roundWon) {
            statusText.textContent = `${currentPlayer} Wins! 🎉`;
            winMusic.play();
            if (currentPlayer === "💖") heartWins++;
            else roseWins++;
            updateScore();
            startConfetti();
            setTimeout(stopConfetti, 5000);
            running = false;
        } else if (!board.includes("")) {
            statusText.textContent = "It's a Draw! 🤝";
            drawMusic.play();
            running = false;
        } else {
            switchPlayer();
        }
    }

    function switchPlayer() {
        currentPlayer = (currentPlayer === "💖") ? "🌹" : "💖";
        statusText.textContent = `${currentPlayer}'s Turn`;
    }

    function restartGame() {
        board = ["", "", "", "", "", "", "", "", ""];
        cells.forEach(cell => cell.textContent = "");
        running = true;
        currentPlayer = "💖";
        statusText.textContent = `${currentPlayer}'s Turn`;
        stopConfetti();
    }

    function updateScore() {
        heartScoreEl.textContent = heartWins;
        roseScoreEl.textContent = roseWins;
    }

    function startConfetti() {
        confetti.start();
    }

    function stopConfetti() {
        confetti.stop();
    }

    cells.forEach((cell, index) => {
        cell.addEventListener("click", () => updateCell(index));
    });

    restartBtn.addEventListener("click", restartGame);

    bgMusic.play();
    bgMusic.loop = true;
});
