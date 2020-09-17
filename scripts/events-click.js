var turnPlayer = 1;
var endGame = false;

const idSpaces = [
  'ln1-space1', 'ln1-space2', 'ln1-space3',
  'ln2-space1', 'ln2-space2', 'ln2-space3',
  'ln3-space1', 'ln3-space2', 'ln3-space3'
];

const possiblesTests = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function initEventsClick() {
  var workspace = document.getElementById("workspace");
  const lines = workspace.firstChild.children;

  for (let numLine = 0; numLine < lines.length; numLine++) {
    for (let numSpace = 0; numSpace < lines[numLine].children.length; numSpace++) {
      var space = lines[numLine].children;
      document.getElementById(`${space[numSpace].id}`).addEventListener('click', markSpace);
    }
  }
  turnPlayer = 1;
  endGame = false;
}

function markSpace(idSpace) {
  if (endGame) {
    return;
  }
  const spaceText = idSpace.srcElement.firstChild;
  if (spaceText.textContent === '') {
    if (turnPlayer === 1) {
      turnPlayer = 2;
      spaceText.textContent = 'X';
    } else {
      turnPlayer = 1;
      spaceText.textContent = 'O';
    }
  }
  verifyGameOver();
}

function verifyGameOver() {
  (turnPlayer === 1) ? verifyTurn("O") : verifyTurn("X");
}

function verifyTurn(turn) {
  possiblesTests.forEach(tests => {
    if (verifySpaces(turn, tests[0], tests[1], tests[2])) {
      return;
    }
  });
}

function verifySpaces(turn, numOne, numTwo, numThree) {
  if (getElem(idSpaces[numOne]) === turn && getElem(idSpaces[numTwo]) === turn && getElem(idSpaces[numThree]) === turn) {
    console.log('FIMX ' + numOne, numTwo, numThree);
    gameOver(numOne, numTwo, numThree);
    return true;
  }
  return false;
}


function getElem(id) {
  return document.getElementById(`${id}`).firstChild.textContent;
}

function gameOver(numOne, numTwo, numThree) {

  showNotification();
  paintWinner(idSpaces[numOne]);
  paintWinner(idSpaces[numTwo]);
  paintWinner(idSpaces[numThree]);
  endGame = true;
}

function paintWinner(elemParam) {
  document.getElementById(`${elemParam}`).style.backgroundColor = "lightgreen";
}

initEventsClick();
