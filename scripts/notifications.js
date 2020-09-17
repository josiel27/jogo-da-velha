
var winNotification = document.getElementById('winNotification');
var notification = document.getElementById('winnerPlayer');
var notificationDraw = document.getElementById('drawGame');


function showNotification() {
  winNotification.textContent = 'O Player ' + ((turnPlayer === 1) ? "2" : "1") + ' venceu!';
  notification.style.display = 'block';
}

function showNotificationDraw() {
  notificationDraw.style.display = 'block';
}

function dismissNotifications() {
  notification.style.display = 'none';
  notificationDraw.style.display = 'none';
}