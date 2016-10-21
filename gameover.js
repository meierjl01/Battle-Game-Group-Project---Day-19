var header = $('header');
var main = $('main');
var screenDiv = $('.screen');

//locationhash will actually go at the bottom of the battle page's function
location.hash = "#gameover";

console.log('hi');

function renderGameOver() {
    header.empty();
    screenDiv.empty();
    main.empty();
    var head = $('<h1 class="game-over-header">Game Over!</h1>');
    //need to include code that says who won in header also

    //include gif or pic (both?) for each possible winner
    var winner = $('<div class ="game-over-gif"><img src="pics/atleastyoutried.gif" /></div>');

    header.append(head);
    main.append(winner);

    setTimeout(function() {
        location.hash = '';
    }, 10000);
}

// renderGameOver();
