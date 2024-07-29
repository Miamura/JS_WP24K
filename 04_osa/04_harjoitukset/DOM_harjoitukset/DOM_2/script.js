/* 
Kirjoita JavaScript-koodi, joka lisää tapahtumankäsittelijän napille.

Kun nappia klikataan, funktion tulisi:
- Hakea arvo syötekentästä.
- Luoda uusi <li> elementti ja asettaa sen tekstisisältö syötekentän arvoksi.
- Lisätä uusi <li> elementti hedelmälistan <ul>-elementtiin.

Varmista, että syötekenttä tyhjennetään hedelmän lisäämisen jälkeen.
*/

document.getElementById("addFruitBtn").addEventListener("click", function () {
  var fruitInput = document.getElementById("fruitInput");
  var fruitName = fruitInput.value;

  var newFruit = document.createElement("li");
  newFruit.textContent = fruitName;

  var fruitList = document.getElementById("fruitList");
  fruitList.appendChild(newFruit);

  fruitInput.value = "";
});
