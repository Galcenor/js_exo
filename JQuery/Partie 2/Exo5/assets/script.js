$(document).ready(function() {

  var input = $("#myInput");


  input.focus(function() {
    input.css("border", "5px solid green"); // Bordure verte
  });

  // Gestionnaire d'événement lorsque le champ de saisie perd le focus
  input.blur(function() {
    input.css("border", "5px solid red"); // Bordure rouge
  });
});