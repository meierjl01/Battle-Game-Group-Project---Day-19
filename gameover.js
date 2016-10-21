var screenDiv = $('.screen');

function renderGameOver(name) {
    screenDiv.empty();
    var header = $('<h1 class="game-over-header">' + name.name + ' wins!</h1>');
    var winner = $('<div class ="game-over-gif"><img src ='+ name.winGif +' /></div>');

    screenDiv.prepend(head);
    screenDiv.append(winner);

    setTimeout(function() {
      renderHomepage();
    }, 10000);
}
