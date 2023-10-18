  $(document).ready(function() {
    
    var alertBtn = $("#alertbtn");

    
    alertBtn.click(function(event) {
      // Récupérez le type de l'événement
      var eventType = event.type;

      // Affichez le type de l'événement dans une alerte
      alert("Type de l'événement : " + eventType);

      // Affichez le type de l'événement dans la console
      console.log("Type de l'événement : " + eventType);
    });
  });
