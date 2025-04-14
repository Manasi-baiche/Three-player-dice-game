// Initialize player scores
let player1Score = 0;
let player2Score = 0;
let player3Score = 0;

// Get DOM elements
const player1ScoreEl = document.getElementById('player1Score');
const player2ScoreEl = document.getElementById('player2Score');
const player3ScoreEl = document.getElementById('player3Score');

const player1DiceEl = document.getElementById('player1Dice');
const player2DiceEl = document.getElementById('player2Dice');
const player3DiceEl = document.getElementById('player3Dice');

const rollButton = document.getElementById('rollButton');
const winnerEl = document.getElementById('winner');

// Function to roll dice for a player
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

// Event listener for the roll dice button
rollButton.addEventListener('click', function() {
    // Roll dice for all players
    const player1Roll = rollDice();
    const player2Roll = rollDice();
    const player3Roll = rollDice();

    // Update dice display
    player1DiceEl.textContent = player1Roll;
    player2DiceEl.textContent = player2Roll;
    player3DiceEl.textContent = player3Roll;

    // Update scores
    player1Score += player1Roll;
    player2Score += player2Roll;
    player3Score += player3Roll;

    // Update score display
    player1ScoreEl.textContent = `Score: ${player1Score}`;
    player2ScoreEl.textContent = `Score: ${player2Score}`;
    player3ScoreEl.textContent = `Score: ${player3Score}`;

    // Check if any player has reached the winning score
    if (player1Score >= 20) {
        winnerEl.textContent = 'Player 1 Wins!';
        rollButton.disabled = true;
    } else if (player2Score >= 20) {
        winnerEl.textContent = 'Player 2 Wins!';
        rollButton.disabled = true;
    } else if (player3Score >= 20) {
        winnerEl.textContent = 'Player 3 Wins!';
        rollButton.disabled = true;
    }
});
