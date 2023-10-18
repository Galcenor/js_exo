$(document).ready(function() {
  // Attend que le document soit prêt

  // Sélectionnez le bouton par son ID
  var boutonSupprimer = $("#removebtn");

  var paragraphes = $(".remove");

  // Ajoutez un gestionnaire d'événements pour le clic sur le bouton
  boutonSupprimer.on("click", function() {
    // Sélectionnez les paragraphes et supprimez-les du DOM en utilisant la méthode remove()
    paragraphes.remove();
  });
});
