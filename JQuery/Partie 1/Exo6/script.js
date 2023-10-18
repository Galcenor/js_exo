$(document).ready(function() {
  // Attend que le document soit prêt

  // Sélectionnez les paragraphes à cacher
  var paragraphes = $("p");

  // Sélectionnez le bouton par son ID
  var hideButton = $("#hide");

  var showButton = $("#show");

  // Ajoutez un gestionnaire d'événements pour le clic sur le bouton
  hideButton.on("click", function() {
    // Cachez les paragraphes en utilisant la méthode hide()
    paragraphes.hide();
  });

  // Pour pouvoir réafficher les paragraphes
  showButton.on("click", function() {
    paragraphes.show();
  })
});
