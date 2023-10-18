  $(document).ready(function() {
    
    var zoomPicture = $("#zoom");

    // Ajoutez un gestionnaire d'événement "mouseenter" (survol)
    zoomPicture.mouseenter(function() {
      // Modifiez la taille de l'image au survol (par exemple, doublez la largeur)
      zoomPicture.css({
        width: zoomPicture.width() * 2
      });
    });

    // Ajoutez un gestionnaire d'événement "mouseleave" (quand la souris quitte l'image)
    zoomPicture.mouseleave(function() {
      // Rétablissez la taille de l'image à sa taille d'origine
      zoomPicture.css({
        width: "" // Réinitialise la largeur
      });
    });
  });
