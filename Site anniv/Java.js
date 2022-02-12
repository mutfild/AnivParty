var Icode = document.getElementById('code');
var reponse = document.getElementById('reponse');

var Code1 = "eline";
var dateNvlAn = "31/12/2021";
var CodeDate = 43178;
var ph = "SUCE";

var Fin = "jai baisé ta femme";

Icode.onkeypress = function(e){
    if (!e) e = window.event;
    var keyCode = e.code || e.key;
    if (keyCode == 'Enter'){
      // Enter pressed
      var code = document.querySelector('input').value;
      TestCode(code);
      return false;
    }
  }


function TestCode(code){
  if(code == Code1){
    reponse.innerHTML = "Code Bon Chakaux QI = 256";
    window.open('Code1.html', '_blank').focus();
  }
  else if(code == dateNvlAn){
    reponse.innerHTML = "Code Bon Chakaux QI = 256";
    window.open('Code3.html', '_blank').focus();
  }
  else if(code == "ciseaux"){
    reponse.innerHTML = "Non mais cherchez dans la pièce bande de cons";
  }
  else if(code == 43178){
    reponse.innerHTML = "Code Bon Chakaux QI = 256";
    window.open('Code4.html', '_blank').focus();
  }
  else if(code == 1991){
    reponse.innerHTML = "Le cadenas connard";
  }

  else if(code == Fin){
    reponse.innerHTML = "LEEEEEESS GOOOOOOOOOO";
    window.open('Fin.html', '_blank').focus();
  }
  else if(code == ''){
    reponse.innerHTML = "Oh rentre un code salope";
  }
  else{
    reponse.innerHTML = "Code faux la vie t trop nul";
  }
}

