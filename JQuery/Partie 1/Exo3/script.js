var inputElement = document.getElementById("inputshow");

var buttonShow = document.getElementById("show");

// Ajoutez un gestionnaire d'événements pour le clic sur le bouton
buttonShow.addEventListener("click", function() {
  // Récupérez la valeur de l'input
  var valeur = inputElement.value;

  // Affichez la valeur dans une alerte
  alert("La valeur de l'input est : " + valeur);

  // Affichez la valeur dans la console
  console.log("La valeur de l'input est : " + valeur);
});
