$(document).ready(function() {
  // Attend que le document soit prêt

  // Sélectionnez le bouton par son ID
  var hide = $("#hideParagraphe");

  var show = $("#showParagraphe");

  var secret = $(".hide");

  // Ajoutez un gestionnaire d'événements pour le clic sur le bouton
  hide.on("click", function() {
    // Sélectionnez le paragraphe à cacher par sa classe "hide" et appliquez-la
    secret.css("visibility", "hidden");
  });

  show.on("click", function() {
    secret.css("visibility", "");
  })
});
