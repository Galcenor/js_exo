$(document).ready(function() {
  var counter = 0;
  var logDiv = $("#log");

  $("#incrBtn").click(function() {
    if (counter < 10) { // Limite la valeur maximale à 10 (ou à votre choix)
      counter++;
      $("#counterValue").text(counter);
      logDiv.append("<p>Incremented: " + counter + "</p>");
    }
  });

  $("#decreBtn").click(function() {
    if (counter > 0) { // Bloque la valeur minimale à 0
      counter--;
      $("#counterValue").text(counter);
      logDiv.append("<p>Decremented: " + counter + "</p>");
    }
  });
});