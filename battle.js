var main = $('main');
function battleRender () {
  //change based on character user selected
  var userDiv = $('<div class="userChar">'+
//health will change when opponent attacks
'<h3>Health</h3>'+
'<h2>Name</h2>'+
'<img src="pics/bart.png"/>'+
'<button class="attack">Choke</button>'+
'<button class="block">Block</button>'+
//change innerText for super based on character
'<button class="super">Super</button></div>');

  var compDiv = $('<div class="compChar">'+
  //health change when user attacks
'<h3>Health</h3>'+
'<h2>Name</h2>'+
'<img src="pics/homer.png"/>'+
'</div>');
main.append(userDiv, compDiv);
}
battleRender();
console.log('your linked up!');
