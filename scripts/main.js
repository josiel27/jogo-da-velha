//Importando file events-click.js
importJs('events-click.js');
importJs('notifications.js');

var workspace = document.getElementById("workspace");

var jogoNew = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];

function initGame() {
  console.log('bkgGame', workspace)
  var bkgGame = document.createElement("div");
  bkgGame.className = "background-game";

  var idLineCont = 0;

  jogoNew.forEach(line => {
    var idSpaceCont = 0;
    var newLine = document.createElement("div");
    newLine.id = 'ln' + ++idLineCont;
    newLine.className = 'line';

    line.forEach(spaceText => {
      var newSpace = document.createElement("div");
      var newText = document.createElement("p");
      newText.appendChild(document.createTextNode(spaceText));
      newSpace.id = `ln${idLineCont}-space${++idSpaceCont}`;
      newSpace.className = 'space';
      newSpace.appendChild(newText);
      newLine.appendChild(newSpace);
    });
    bkgGame.appendChild(newLine)
  });
  workspace.appendChild(bkgGame);
}


initGame();

function createNewGame() {
  workspace.innerHTML = "";
  dismissNotifications();
  initGame();
  initEventsClick();
}


function importJs(file) {
  var imported = document.createElement('script');
  imported.type = 'text/javascript';
  imported.src = 'scripts/' + file;
  document.body.appendChild(imported);
}

