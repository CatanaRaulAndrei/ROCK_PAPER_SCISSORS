const card = document.getElementById('card');
const rulesBtn = document.getElementById('btn-rules');
const closeBtn = document.getElementById('btn-close');
const buttonPressed = document.querySelectorAll('.btn-rounded');
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const containerSection = document.getElementById('container-section');
const winnerText = document.getElementById('winnerText');
const winnerLooserSection = document.getElementById('winner_looser');
const playerIcon = document.getElementById('playerIcon');
const computerIcon = document.getElementById('computerIcon');
const reset = document.getElementById('reset');
const computerChoises = ['rock', 'paper', 'scissors'];
let playerChoise = undefined;
let playerCounter = 0;
let computerCounter = 0;
// Event listeners
rulesBtn.addEventListener('click', openRules);
closeBtn.addEventListener('click', closeRules);
buttonPressed.forEach(button => button.addEventListener('click', play));
reset.addEventListener('click', restart);

// Functions
function play(button) {
    displayHide();
    playerChoise = button.target.id;
    let computerChoise = getComputerChoise();
    const winner = getWinner(playerChoise, computerChoise);
    updateScore(winner);
    displayIcons(playerChoise, computerChoise);
    displayWinner(winner, playerChoise, computerChoise);
    console.log(`P: ${playerChoise},C: ${computerChoise},W: ${winner}`);
}


function restart() {
    containerSection.style.display = 'flex';
    winnerLooserSection.style.display = 'none';
}

function displayHide() {
    containerSection.style.display = 'none';
    winnerLooserSection.style.display = 'flex';
}

function openRules() {
    card.style.display = "inline-block";
}
function closeRules() {
    card.style.display = "none";
}

function getComputerChoise() {
    return computerChoises[Math.floor(Math.random() * computerChoises.length)];
}

function getWinner(playerChoise, computerChoise) {
    if (playerChoise === computerChoise) {
        return 'DRAW';
    }
    else if (playerChoise === 'rock' && computerChoise === 'paper') {
        return 'COMPUTER';
    }
    else if (playerChoise === 'rock' && computerChoise === 'scissors') {
        return 'PLAYER';
    }
    else if (playerChoise === 'paper' && computerChoise === 'rock') {
        return 'PLAYER';
    }
    else if (playerChoise === 'paper' && computerChoise === 'scissors') {
        return 'COMPUTER';
    }
    else if (playerChoise === 'scissors' && computerChoise === 'rock') {
        return 'COMPUTER';
    }
    else if (playerChoise === 'scissors' && computerChoise === 'paper') {
        return 'PLAYER';
    }

}

function updateScore(winner) {
    if (winner === 'PLAYER') {
        ++playerCounter;
        playerScore.innerText = playerCounter;
    }
    else if (winner === 'COMPUTER') {
        ++computerCounter;
        computerScore.innerText = computerCounter;
    }
}

function displayWinner(winner, playerChoise, computerChoise) {
    if (winner === 'PLAYER') {
        winnerText.innerText = winner;
        reset.classList.add('win');
        reset.classList.remove('draw');
        reset.classList.remove('loose');
        playerIcon.innerHTML = `
        <h2><span class="stxt">PLAYER</span> PICKET</h2>
    <button class="btn-rounded1 btn-${playerChoise} winner_icon" id="playerIconBtn">
      <span class="wrapper1">
        <i class="fas fa-hand-${playerChoise} fa-9x"></i>
      </span>
    </button>
    `;

    } else if (winner === 'DRAW') {
        winnerText.innerText = winner;
        reset.classList.remove('win');
        reset.classList.add('draw');
        reset.classList.remove('loose');
    }
    else if (winner === 'COMPUTER') {
        winnerText.innerText = winner;
        reset.classList.remove('win');
        reset.classList.remove('draw');
        reset.classList.add('loose');
        computerIcon.innerHTML = `
        <h2><span class="stxt">COMPUTER</span> PICKET</h2>
        <button class="btn-rounded1 btn-${computerChoise} winner_icon" id="computerIconBtn">
          <span class="wrapper1">
            <i class="fas fa-hand-${computerChoise} fa-9x"></i>
          </span>
        </button>
        `;
    }
}

function displayIcons(playerChoise, computerChoise) {
    playerIcon.innerHTML = `
    <h2><span class="stxt">PLAYER</span> PICKET</h2>
    <button class="btn-rounded1 btn-${playerChoise}" id="playerIconBtn">
      <span class="wrapper1">
        <i class="fas fa-hand-${playerChoise} fa-9x"></i>
      </span>
    </button>
`
    computerIcon.innerHTML = `
    <h2><span class="stxt">PLAYER</span> PICKET</h2>
    <button class="btn-rounded1 btn-${computerChoise}" id="computerIconBtn">
      <span class="wrapper1">
        <i class="fas fa-hand-${computerChoise} fa-9x"></i>
      </span>
    </button>
`
}
