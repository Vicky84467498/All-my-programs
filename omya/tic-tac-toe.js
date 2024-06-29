document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.cell');
    const statusDisplay = document.getElementById('status');
    const restartButton = document.getElementById('restart');
    const winModal = document.getElementById('winModal');
    const closeModal = document.getElementById('closeModal');
    const winMessage = document.getElementById('winMessage');
    let currentPlayer = 'X';
    let gameActive = true;
    let gameState = ['', '', '', '', '', '', '', '', ''];

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function handleCellPlayed(clickedCell, clickedCellIndex) {
        gameState[clickedCellIndex] = currentPlayer;
        clickedCell.innerHTML = currentPlayer;
        clickedCell.classList.add('rotate');

        void clickedCell.offsetWidth;
        setTimeout(() => {
            clickedCell.classList.remove('rotate');
        }, 200);
    }

    function handlePlayerChange() {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        statusDisplay.innerHTML = `It's ${currentPlayer}'s turn`;
    }

    function handleResultValidation() {
        let roundWon = false;
        for (let i = 0; i < winningConditions.length; i++) {
            const winCondition = winningConditions[i];
            let a = gameState[winCondition[0]];
            let b = gameState[winCondition[1]];
            let c = gameState[winCondition[2]];
            if (a === '' || b === '' || c === '') {
                continue;
            }
            if (a === b && b === c) {
                roundWon = true;
                break;
            }
        }

        if (roundWon) {
            statusDisplay.innerHTML = `Player ${currentPlayer} has won!`;
            winMessage.innerHTML = `Player ${currentPlayer} has won!`;
            winModal.style.display = 'block';
            gameActive = false;
            return;
        }

        let roundDraw = !gameState.includes('');
        if (roundDraw) {
            statusDisplay.innerHTML = 'Game ended in a draw!';
            gameActive = false;
            return;
        }

        handlePlayerChange();
    }

    function handleCellClick(clickedCellEvent) {
        const clickedCell = clickedCellEvent.target;
        const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

        if (gameState[clickedCellIndex] !== '' || !gameActive) {
            return;
        }

        handleCellPlayed(clickedCell, clickedCellIndex);
        handleResultValidation();
    }

    function handleRestartGame() {
        gameActive = true;
        currentPlayer = 'X';
        gameState = ['', '', '', '', '', '', '', '', ''];
        statusDisplay.innerHTML = `It's ${currentPlayer}'s turn`;
        cells.forEach(cell => {
            cell.innerHTML = '';
            cell.classList.remove('rotate');
        });
        winModal.style.display = 'none';
        startGameAnimation();
    }

    function startGameAnimation() {
        cells.forEach(cell => {
            cell.classList.add('rotate');
            void cell.offsetWidth;
            setTimeout(() => {
                cell.classList.remove('rotate');
            }, 500);
        });
    }

    cells.forEach(cell => cell.addEventListener('click', handleCellClick));
    restartButton.addEventListener('click', handleRestartGame);
    closeModal.addEventListener('click', () => winModal.style.display = 'none');

    statusDisplay.innerHTML = `It's ${currentPlayer}'s turn`;
    startGameAnimation();
});
