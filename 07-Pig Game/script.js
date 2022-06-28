//selectig the elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const cur0El = document.querySelector('#current--0');
const cur1El = document.querySelector('#current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, playing, playerActive, currentScore;

// initial values
function init() {
  scores = [0, 0];
  playing = true;
  playerActive = 0;
  currentScore = 0;

  cur0El.textContent = 0;
  cur1El.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
}
init();

// implemeting roll dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. generate random dice roll
    let numberRolled = Math.trunc(Math.random() * 6) + 1;
    diceEl.src = `dice-${numberRolled}.png`;

    if (numberRolled !== 1) {
      currentScore += numberRolled;
      document.getElementById(`current--${playerActive}`).textContent =
        currentScore;
      console.log(playerActive);
    } else {
      //switch is done bitch
      switchPlayer();
    }
  }
});

function switchPlayer() {
  document.getElementById(`current--${playerActive}`).textContent = 0;
  currentScore = 0;
  playerActive = playerActive === 0 ? 1 : 0;
  console.log('1 rolled bitch');
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

// implementing hold functionality
btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. adicionar o current score pro player ativo
    scores[playerActive] += currentScore;
    document.getElementById(`score--${playerActive}`).textContent =
      scores[playerActive];

    // 2. verificar se o usuário ganhou ou não
    if (scores[playerActive] >= 20) {
      // finish the game
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${playerActive}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${playerActive}`)
        .classList.remove('player--active');
    } else {
      // switch to the next player
      switchPlayer();
    }
  }
});

// implement the init (play again) functionality
btnNew.addEventListener('click', init);
