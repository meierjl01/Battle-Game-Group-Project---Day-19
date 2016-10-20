var header=$('header');
var main= $('main');

var lisaCharacter=$('<div class="character"><img src="pics/Lisa.png"><p>Lisa Simpson is a ruthless character and has a huge thirst for blood. She is top of her class and #1 in kickin ass! She plays a mean sax and has the brains to defeat any character in her way</p></div>');
var bartCharacter=$('<div class="character"><img src="pics/bart.png"><p>Bart Simpson is a rad dude. He has a ton of friends and is the coolest kid around. Hes got a blackbelt in karate and pranks like no other. This character is a force to be reckoned with.</p></div>');
var homerCharacter=$('<div class="character"><img src="pics/homer.png"><p>Homer Simpson is a mean drunk. When not drinking duff beers and eating donuts, you can find him beating up his kids and driving his car drunk into his house.</p></div>');

main.append(lisaCharacter,bartCharacter,homerCharacter);
