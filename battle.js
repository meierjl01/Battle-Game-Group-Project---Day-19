var main = $('main');
var header = $('header');
var screenDiv = $('.screen');

function battleRender(character) {
    character.health =20;
    Homer.health = 20;
    screenDiv.empty();
    screenDiv.css('background-image', 'url(pics/springfield.jpg)');
    //change based on character user selected
    var userDiv = $('<div class="userChar">' +
        //health will change when opponent attacks
        '<h3 class="charHealth">Health: ' + character.health + '</h3>' +
        '<div class="health-outline"><div class="character-health-meter"></div></div>' +
        '<h2 class="charactername">' + character.name + '</h2>' +
        '<div class="characterpic"><img class = "char-pic" src="' + character.picture + '"/></div>' +
        '<button class="attack">Attack</button>' +
        '<button class="heal">Heal</button>' +
        '<button class="special">SPECIAL</button></div>');
    var versusDiv = $('<div class="versus"><img class="vspic" src="pics/vs.png"></div>');
    var compDiv = $('<div class="compChar">' +
        //health change when user attacks
        '<h3 class="bossHealth">Health: ' + Homer.health + '</h3>' +
        '<div class="health-outline"><div class="boss-health-meter"></div></div>' +
        '<h2 class="charactername">Homer</h2>' +
        '<div class="homerpic"><img class="homer-pic"src="pics/homer.png"/></div>' +
        '</div>');
    screenDiv.append(userDiv, versusDiv, compDiv);
    //fighting stuff
    var VS = $('.vspic');
    var bossHealth = $('.bossHealth');
    var characterHealth = $('.charHealth');
    var specialGif = $('<img class="moveGif" src="' + character.specialGif + '"/>');
    var bossSpecGif = $('<img class="moveGif" src="' + Homer.specialGif + '">');
    var attackGif = $('<img class="moveGif" src="' + character.attackGif + '"/>');
    var bossGif = $('<img class="moveGif" src="' + Homer.attackGif + '">');
    var healGif = $('<img class="moveGif" src="' + character.healGif + '"/>');
    var bossHealGif = $('<img class="moveGif" src="' + Homer.healGif + '">');
    var dyingcharacter = $('<img src="' + character.dyingPic + '"/>');
    var dyingHomer = $('<img src="' + Homer.dyingPic + '"/>');
    var homerdiv = $('.homerpic');
    var characterdiv = $('.characterpic');
    var characterHealthMeter = $('.character-health-meter');
    var bossHealthMeter = $('.boss-health-meter');
    var fatalityButton=$('<button class="fatality">FATATLITY</button>');
    var fatalityattack=$('.fatality');
    var fatalityGif=$('<img class="fatality-gif" src='+character.fatality+'>');
    var fatalitySound=new Audio('pics/fatalitysound.wav');
    // var homerattackedSound = new Audio('pics/Homer - Scream, crash.wav');
    // var homerDyingSound = new Audio('pics/homerdontfeelsogood.wav');
    // var bartattacksound= new Audio('pics/bartattacksound.wav');
function  whoWon(){
  if (character.health <= 0) {
      renderGameOver(Homer);
      Homer.winSound.play();
  }
  else if (Homer.health<=0){
       renderGameOver(character);
       character.winSound.play();
  }

}
userDiv.append(fatalityButton);
fatalityButton.prop('disabled',true);
function fatality(){
  if(character.health>=4 && Homer.health<=3){
    fatalityButton.prop('disabled',false);

  }

}
    function checkHealth() {
        if (character.health <= 5) {
            characterdiv.html(dyingcharacter);

        }
        if (Homer.health <= 5) {
          homerdiv.html(dyingHomer);
        }
        if (bossHealthMeter.width() > 117.5) {
            bossHealthMeter.css('background', 'green');
        }
        if (characterHealthMeter.width() > 117.5) {
            characterHealthMeter.css('background', 'green');
        }
        if (bossHealthMeter.width() <= 117.5) {
            bossHealthMeter.css('background', 'yellow');
        }
        if (characterHealthMeter.width() <= 117.5) {
            characterHealthMeter.css('background', 'yellow');
        }
        if (bossHealthMeter.width() <= 47) {
            bossHealthMeter.css('background', 'red');
        }
        if (characterHealthMeter.width() <= 47) {
            characterHealthMeter.css('background', 'red');
        }
    }


    $('.special').on('click', function(e) {
                //character special attack
                character.specAttack(Homer);
                character.specialSound.play();
                bossHealthMeter.width(11.75 * Homer.health + 'px');
                bossHealth.text("health: " + Homer.health);
                VS.hide();
                versusDiv.prepend(specialGif);
                if(specialGif.hide()){
                  specialGif.show();
                }

                $('.attack').prop('disabled', true);
                $('.heal').prop('disabled', true);
                $('.special').prop('disabled', true);
                setTimeout(function() {
                    $('.attack').prop('disabled', false);
                    $('.heal').prop('disabled', false);
                    setTimeout(function() {
                        specialGif.hide();
                        whoWon();
                    }, 3000);
                    if(Homer.health>=1){
                    //homers Attack
                    setTimeout(function() {
                        Homer.specialSound.play();
                        versusDiv.prepend(bossSpecGif);
                        if(bossSpecGif.hide()){
                          bossSpecGif.show();
                        }
                        Homer.specAttack(character);
                        characterHealth.text("health: " + character.health);
                        characterHealthMeter.width(11.75 * character.health + 'px');
                        checkHealth();
                      }, 3000);
                    setTimeout(function() {
                        bossSpecGif.hide();
                        whoWon();
                    }, 5000);
}
                    setTimeout(function() {
                        $('.special').prop('disabled', false);
                    }, 30000);
                    checkHealth();
                    fatality();

                });
                    });
                $('.attack').on('click', function(e) {
                    character.attackSound.play();
                    character.attack(Homer);
                    bossHealth.text("health: " + Homer.health);
                    bossHealthMeter.width(11.75 * Homer.health + 'px');
                    VS.hide();
                    versusDiv.prepend(attackGif);
                    if(attackGif.hide()){
                      attackGif.show();
                    }

                    $('.attack').prop('disabled', true);
                    $('.heal').prop('disabled', true);
                    $('.special').prop('disabled', true);
                    setTimeout(function() {
                        $('.special').prop('disabled', false);
                        $('.attack').prop('disabled', false);
                        $('.heal').prop('disabled', false);
                    }, 5000);
                    setTimeout(function() {
                      whoWon();
                        attackGif.hide();
                    }, 3000);
                        //homers Attack
                        if(Homer.health>=1){
                        setTimeout(function() {
                            versusDiv.prepend(bossGif);
                            Homer.attackSound.play();
                            if(bossGif.hide()){
                              bossGif.show();
                            }
                            Homer.attack(character);
                            characterHealth.text("health: " + character.health);
                            characterHealthMeter.width(11.75 * character.health + 'px');
                            checkHealth();
                        }, 3000);
                        setTimeout(function() {
                            bossGif.hide();
                            whoWon();
                        }, 5000);
}
                    fatality();
                    });

                    $('.heal').on('click', function(e) {
                        character.healSound.play();
                        Homer.heal(character);
                        characterHealth.text("health: " + character.health);
                        characterHealthMeter.width(11.75 * character.health + 'px');
                        VS.hide();
                        versusDiv.prepend(healGif);
                        if(healGif.hide()){
                          healGif.show();
                        }
                        $('.attack').prop('disabled', true);
                        $('.special').prop('disabled', true);
                        $('.heal').prop('disabled', true);
                        setTimeout(function() {
                            $('.attack').prop('disabled', false);
                            $('special').prop('disabled', false);
                            checkHealth();
                        }, 5000);
                        setTimeout(function() {
                            healGif.hide();
                        }, 3000);

                        //homers heal
                        setTimeout(function() {
                            versusDiv.prepend(bossHealGif);
                            Homer.healSound.play();
                            if(bossHealGif.hide()){
                              bossHealGif.show();
                            }
                            character.heal(Homer);

                            bossHealth.text("health: " + Homer.health);
                            bossHealthMeter.width(11.75 * Homer.health + 'px');
                            characterHealth.text("health: " + character.health);
                            checkHealth();

                        }, 3000);
                        setTimeout(function() {
                            bossHealGif.hide();
                        }, 5000);

                        setTimeout(function() {
                            $('.heal').prop('disabled', false);
                        }, 30000);

                    });
                    fatality();
                    $('.fatality').on('click',function(e){

                      screenDiv.css('background-image','url("pics/fatalitybackground.jpg")');
                      userDiv.fadeOut();
                      compDiv.fadeOut();
                      setTimeout(function(){
                        versusDiv.prepend(fatalityGif);
                        fatalitySound.play();
                      },1000);
                      setTimeout(function(){
                      renderGameOver(character);
                      character.winSound.play();
                    },6000);
                    });
              }





                // battleRender();
