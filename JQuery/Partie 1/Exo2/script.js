$(document).ready(function() {
    // Attend que le document soit prêt
  
    // Sélectionnez l'élément <p> par son ID
    var paragraphe = $("#changetoh");
  
    // Créez un nouvel élément <h1> avec le texte souhaité
    var nouveauTitre = $("<h1>Nouveau titre en H1</h1>");
  
    // Remplacez l'élément <p> par l'élément <h1>
    paragraphe.replaceWith(nouveauTitre);
  });