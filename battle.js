var main = $('main');
var header = $('header');
var screenDiv = $('.screen');

function battleRender(character) {
  character.health = 20;
  Homer.health=20;
    screenDiv.empty();
    body.css('background-image', 'url(pics/springfield.jpg)');
    //change based on character user selected
    var userDiv = $('<div class="userChar">' +
        //health will change when opponent attacks
        '<h3 class="charHealth">Health: ' + character.health + '</h3>' +
        '<h2>' + character.name + '</h2>' +
        '<img class = "char-pic" src="' + character.picture + '"/>' +
        '<button class="attack">Attack</button>' +
        '<button class="heal">Heal</button>' +
        //change innerText for super based on character
        '<button class="special">' + character.special + '</button></div>');
    var versusDiv = $('<div class="versus"><img class="vspic" src="pics/vs.png"></div>');
    var compDiv = $('<div class="compChar">' +
        //health change when user attacks
        '<h3 class="bossHealth">Health: ' + Homer.health + '</h3>' +
        '<h2>Homer</h2>' +
        '<img class="homer-pic"src="pics/homer.png"/>' +
        '</div>');
    screenDiv.append(userDiv, versusDiv, compDiv);
    //fighting stuff




    $('.special').on('click', function(e) {
        var VS = $('.vspic');
        var bossHealth = $('.bossHealth');
        var characterHealth = $('.charHealth');
        var specialGif = $('<img class="specialGif" src="' + character.specialGif + '"/>');
        var bossGif = $('<img class="bossGif" src="' + Homer.specialGif + '">');
        var specialAttackname = $('<p class="attack-name">You attacked Homer with a ' + character.special + '</p>');
        var bossSpecialAttackName = $('<p>Homer attacked you with a ' + Homer.special + '</p>');
        //character special attack
        character.specAttack(Homer);
        bossHealth.text("health: " + Homer.health);
        VS.hide();
        versusDiv.prepend(specialGif);
        versusDiv.prepend(specialAttackname);
        $('.attack').prop('disabled', true);
        $('.heal').prop('disabled', true);
        $('.special').prop('disabled', true);
        setTimeout(function() {
        $('.attack').prop('disabled', false);
            $('.heal').prop('disabled', false);
            if (character.health <= 0) {
                renderGameOver(Homer);
            } else if (Homer.health <= 0) {
                renderGameOver(character);
            }
}, 5000);
      setTimeout(function(){
        specialGif.hide();
        specialAttackname.hide();
      },3000);
        //homers Attack
        setTimeout(function() {
            versusDiv.prepend(bossGif);
            versusDiv.prepend(bossSpecialAttackName);
            Homer.specAttack(character);
            characterHealth.text("health: " + character.health);

        }, 3000);
        setTimeout(function() {
            bossGif.hide();
            bossSpecialAttackName.hide();
        }, 5000);

        setTimeout(function() {
          $('.special').prop('disabled', false);
        }, 30000);
        if (character.health <= 0) {
            renderGameOver(Homer);
        } else if (Homer.health <= 0) {
            renderGameOver(character);
        }

    });
    $('.attack').on('click', function(e) {
      var VS = $('.vspic');
      var bossHealth = $('.bossHealth');
      var characterHealth = $('.charHealth');
      var attackGif = $('<img class="specialGif" src="' + character.attackGif + '"/>');
      var bossGif = $('<img class="bossGif" src="' + Homer.attackGif + '">');
      var attackname = $('<p class="attack-name">You attacked Homer</p>');
      var bossattackName = $('<p>Homer attacked you</p>');
      character.attack(Homer);
      bossHealth.text("health: " + Homer.health);
      VS.hide();
      versusDiv.prepend(attackGif);
      versusDiv.prepend(attackname);
      $('.attack').prop('disabled', true);
      $('.heal').prop('disabled', true);
      setTimeout(function() {
      $('.attack').prop('disabled', false);
          $('.heal').prop('disabled', false);
          if (character.health <= 0) {
              renderGameOver(Homer);
          } else if (Homer.health <= 0) {
              renderGameOver(character);
          }
}, 5000);
    setTimeout(function(){
      attackGif.hide();
      attackname.hide();
    },3000);
      //homers Attack
      setTimeout(function() {
          versusDiv.prepend(bossGif);
          versusDiv.prepend(bossattackName);
          Homer.attack(character);
          characterHealth.text("health: " + character.health);

      }, 3000);
      setTimeout(function() {
          bossGif.hide();
          bossattackName.hide();
      }, 5000);
      if (character.health <= 0) {
          renderGameOver(Homer);
      } else if (Homer.health <= 0) {
          renderGameOver(character);
      }

    });
    $('.heal').on('click', function(e) {
        character.heal(character);
        var VS = $('.vspic');
        var bossHealth = $('.bossHealth');
        var characterHealth = $('.charHealth');
        var healGif = $('<img class="specialGif" src="' + character.healGif + '"/>');
        var bossGif = $('<img class="bossGif" src="' + Homer.healGif + '">');
        //character special attack
        character.attack(Homer);
        bossHealth.text("health: " + Homer.health);
        VS.hide();
        versusDiv.prepend(healGif);
        $('.attack').prop('disabled', true);
        $('.special').prop('disabled', true);
        $('.heal').prop('disabled', true);
        setTimeout(function() {
        $('.attack').prop('disabled', false);

  }, 5000);
      setTimeout(function(){
        healGif.hide();
      },3000);
        //homers Attack
        setTimeout(function() {
            versusDiv.prepend(bossGif);
            Homer.heal(Homer);
            characterHealth.text("health: " + character.health);

        }, 3000);
        setTimeout(function() {
            bossGif.hide();
        }, 5000);

          setTimeout(function(){
          $('.heal').prop('disabled', false);
        }, 30000);
    });

}



// battleRender();
