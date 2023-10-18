 $(document).ready(function() {
    
    var title = $("#titles");
    var greenBtn = $("#btnGreen");
    var yellowBtn = $("#btnYellow");
    var redBtn = $("#btnRed");

    // Ajoutez un gestionnaire d'événement pour le bouton vert
    greenBtn.click(function() {
      title.css("color", "green");
    });

    // Ajoutez un gestionnaire d'événement pour le bouton jaune
    yellowBtn.click(function() {
      title.css("color", "yellow");
    });

    // Ajoutez un gestionnaire d'événement pour le bouton rouge
    redBtn.click(function() {
      title.css("color", "red");
    });
  });
