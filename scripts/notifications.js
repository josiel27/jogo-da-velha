
var winNotification = document.getElementById('winNotification');
var notification = document.getElementById('winnerPlayer');

function showNotification() {
  winNotification.textContent = 'O Player ' + ((turnPlayer === 1) ? "2" : "1") + ' venceu!';

  notification.style.display = 'block';
}