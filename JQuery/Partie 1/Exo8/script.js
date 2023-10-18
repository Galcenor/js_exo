$(document).ready(function() {
  // Attend que le document soit prêt

  // Sélectionnez le bouton par son ID
  var btnAddBorder = $("#addborder");

  // Ajoutez un gestionnaire d'événements pour le clic sur le bouton
  btnAddBorder.on("click", function() {
    // Sélectionnez le conteneur et ajoutez une bordure en utilisant la méthode css()
    $("#allparagraphes").css({
      "border": "2px solid black", // Ajoute une bordure de 2 pixels de large en noir
      "padding": "10px" // Ajoute un espacement de 10 pixels à l'intérieur de la bordure
    });
  });
});
