$(document).ready(function() {
  // Attend que le document soit prêt

  // Sélectionnez le bouton par son ID
  var deleteButton = $("#delete");

  // Ajoutez un gestionnaire d'événements pour le clic sur le bouton
  deleteButton.on("click", function() {
    // Sélectionnez tous les paragraphes
    var paragraphes = $("p");

    // Parcourez tous les paragraphes et supprimez leur contenu
    paragraphes.each(function() {
      $(this).empty(); // Supprime le contenu du paragraphe
    });
  });
});
