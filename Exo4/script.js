document.getElementById("myForm").addEventListener("submit", function(event) {
    console.log("Soumission du formulaire")
    event.preventDefault(); // Empêche la soumission du formulaire par défaut

    // Récupération des valeurs des champs
    var title = document.getElementById("title").value;
    var content = document.getElementById("content").value;
    var category = document.getElementById("category").value;

    // Affichage des données dans une alerte
    var message = "Titre : " + title + "\nContenu : " + content + "\nCatégorie : " + category;
    alert(message);
});