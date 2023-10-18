$(document).ready(function() {

  var changeHeight = $("#change");

  var titre = $("#title");

  changeHeight.on("click", function() {
    // Modifiez la taille du texte avec une animation en utilisant jQuery
    titre.animate({ fontSize: "72px" }, 2000); // Animation de 2 secondes
  });
});
