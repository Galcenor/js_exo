  $(document).ready(function() {

    var text = $("#p");
    var hideBtn = $("#hide");
    var showBtn = $("#show");

    // Ajoutez un gestionnaire d'événement pour le bouton "Hide"
    hideBtn.click(function() {
      text.hide(); // Cache le paragraphe
    });

    // Ajoutez un gestionnaire d'événement pour le bouton "Show"
    showBtn.click(function() {
      text.show(); // Affiche le paragraphe
    });
  });
