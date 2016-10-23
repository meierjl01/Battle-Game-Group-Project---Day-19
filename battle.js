var main = $('main');
var header = $('header');
var screenDiv = $('.screen');

function battleRender(character) {
  character.health = 7;
  Homer.health=7;
    screenDiv.empty();
    screenDiv.css('background-image', 'url(pics/springfield.jpg)');
    //change based on character user selected
    var userDiv = $('<div class="userChar">' +
        //health will change when opponent attacks
        '<h3 class="charHealth">Health: ' + character.health + '</h3>' +
        '<h2 class="charactername">' + character.name + '</h2>' +
        '<div class="characterpic"><img class = "char-pic" src="' + character.picture + '"/></div>' +
        '<button class="attack">Attack</button>' +
        '<button class="heal">Heal</button>' +
        '<button class="special">SPECIAL</button></div>');
    var versusDiv = $('<div class="versus"><img class="vspic" src="pics/vs.png"></div>');
    var compDiv = $('<div class="compChar">' +
        //health change when user attacks
        '<h3 class="bossHealth">Health: ' + Homer.health + '</h3>' +
        '<h2 class="charactername">Homer</h2>' +
        '<div class="homerpic"><img class="homer-pic"src="pics/homer.png"/></div>' +
        '</div>');
    screenDiv.append(userDiv, versusDiv, compDiv);
    //fighting stuff




    $('.special').on('click', function(e) {
        var VS = $('.vspic');
        var bossHealth = $('.bossHealth');
        var characterHealth = $('.charHealth');
        var specialGif = $('<img class="moveGif" src="' + character.specialGif + '"/>');
        var bossGif = $('<img class="moveGif" src="' + Homer.specialGif + '">');
        var dyingcharacter=$('<img src="'+character.dyingPic+'"/>');
        var dyingHomer=$('<img src="'+Homer.dyingPic+'"/>');
        var homerdiv=$('.homerpic');
        var characterdiv=$('.characterpic');
        //character special attack
        character.specAttack(Homer);
        bossHealth.text("health: " + Homer.health);
        VS.hide();
        versusDiv.prepend(specialGif);
        $('.attack').prop('disabled', true);
        $('.heal').prop('disabled', true);
        $('.special').prop('disabled', true);
        setTimeout(function() {
        $('.attack').prop('disabled', false);
            $('.heal').prop('disabled', false);
            if(character.health<=5){
              characterdiv.html(dyingcharacter);
            }
            if(Homer.health<=5){
              homerdiv.html(dyingHomer);
            }
            if (character.health <= 0) {
                renderGameOver(Homer);
            } if (Homer.health <= 0) {
                renderGameOver(character);
            }
}, 5000);
      setTimeout(function(){
        specialGif.hide();
      },3000);
        //homers Attack
        setTimeout(function() {
            versusDiv.prepend(bossGif);
            Homer.specAttack(character);
            characterHealth.text("health: " + character.health);

        }, 3000);
        setTimeout(function() {
            bossGif.hide();
        }, 5000);

        setTimeout(function() {
          $('.special').prop('disabled', false);
        }, 30000);

    });
    $('.attack').on('click', function(e) {
      var VS = $('.vspic');
      var bossHealth = $('.bossHealth');
      var characterHealth = $('.charHealth');
      var attackGif = $('<img class="moveGif" src="' + character.attackGif + '"/>');
      var bossGif = $('<img class="moveGif" src="' + Homer.attackGif + '">');
      var dyingcharacter=$('<img src="'+character.dyingPic+'"/>');
      var dyingHomer=$('<img src="'+Homer.dyingPic+'"/>');
      var homerdiv=$('.homerpic');
      var characterdiv=$('.characterpic');
      character.attack(Homer);
      bossHealth.text("health: " + Homer.health);
      VS.hide();
      versusDiv.prepend(attackGif);
      $('.attack').prop('disabled', true);
      $('.heal').prop('disabled', true);
      setTimeout(function() {
      $('.attack').prop('disabled', false);
          $('.heal').prop('disabled', false);
          if(character.health<=5){
            characterdiv.html(dyingcharacter);
          }
          if(Homer.health<=5){
            homerdiv.html(dyingHomer);
          }
          if (character.health <= 0) {
              renderGameOver(Homer);
          } if (Homer.health <= 0) {
              renderGameOver(character);
          }
}, 5000);
    setTimeout(function(){
      attackGif.hide();
    },3000);
      //homers Attack
      setTimeout(function() {
          versusDiv.prepend(bossGif);
          Homer.attack(character);
          characterHealth.text("health: " + character.health);

      }, 3000);
      setTimeout(function() {
          bossGif.hide();
      }, 5000);

    });
    $('.heal').on('click', function(e) {
        Homer.heal(character);
        var VS = $('.vspic');
        var bossHealth = $('.bossHealth');
        var characterHealth = $('.charHealth');
        var healGif = $('<img class="moveGif" src="' + character.healGif + '"/>');
        var bossGif = $('<img class="moveGif" src="' + Homer.healGif + '">');
        var dyingcharacter=$('<img src="'+character.dyingPic+'"/>');
        var dyingHomer=$('<img src="'+Homer.dyingPic+'"/>');
        var homerdiv=$('.homerpic');
        var characterdiv=$('.characterpic');
        var homerpic=$('<img class="homer-pic"src="pics/homer.png"/>');
        var characterpic=$('<img class = "char-pic" src="' + character.picture + '"/>');
        characterHealth.text("health: " + character.health);
        VS.hide();
        versusDiv.prepend(healGif);
        $('.attack').prop('disabled', true);
        $('.special').prop('disabled', true);
        $('.heal').prop('disabled', true);
        setTimeout(function() {
        $('.attack').prop('disabled', false);
        if(character.health>=6){
          characterdiv.html(characterpic);

        }
        if(Homer.health>=6){
          homerdiv.html(homerpic);
        }
  }, 5000);
      setTimeout(function(){
        healGif.hide();
      },3000);
        //homers Attack
        setTimeout(function() {
            versusDiv.prepend(bossGif);
            character.heal(Homer);
            bossHealth.text("health: "+Homer.health);
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
