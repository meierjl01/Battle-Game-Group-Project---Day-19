var screenDiv = $('.screen');

function renderGameOver(name) {
    screenDiv.empty();
    var header = $('<h2 class="game-over-header">' + name.name + ' wins!</h2>');
    var winner = $('<div class ="game-over-gif"><img src ='+ name.winGif +' /></div>');
    var gameover = $('<div class="game-over-image"><img src="pics/gameover.png" /></div>');
    screenDiv.prepend(header);
    screenDiv.append(gameover);
    screenDiv.append(winner);

    setTimeout(function() {
      screenDiv.empty();
      renderHomepage();
    }, 10000);
}
