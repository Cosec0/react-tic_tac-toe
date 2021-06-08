class Game{
    checkWinner(gameBoard, currentPlayer) {
        //checking horizantally
        if(gameBoard[0] === currentPlayer && gameBoard[1] === currentPlayer && gameBoard[2] === currentPlayer) {
            return true;
        }
        if(gameBoard[3] === currentPlayer && gameBoard[4] === currentPlayer && gameBoard[5] === currentPlayer) {
            return true;
        }
        if(gameBoard[6] === currentPlayer && gameBoard[7] === currentPlayer && gameBoard[8] === currentPlayer) {
            return true;
        }

        //checking vertically
        if(gameBoard[0] === currentPlayer && gameBoard[3] === currentPlayer && gameBoard[6] === currentPlayer) {
            return true;
        }
        if(gameBoard[1] === currentPlayer && gameBoard[4] === currentPlayer && gameBoard[7] === currentPlayer) {
            return true;
        }
        if(gameBoard[2] === currentPlayer && gameBoard[5] === currentPlayer && gameBoard[8] === currentPlayer) {
            return true;
        }

        //checking diagonally
        if(gameBoard[0] === currentPlayer && gameBoard[4] === currentPlayer && gameBoard[8] === currentPlayer) {
            return true;
        }
        if(gameBoard[2] === currentPlayer && gameBoard[4] === currentPlayer && gameBoard[6] === currentPlayer) {
            return true;
        }

        return false;
    }
}

export default Game;