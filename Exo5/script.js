document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche la soumission du formulaire par défaut

    // Récupération des valeurs des champs
    var nb1 = parseFloat(document.getElementById("nb1").value);
    var nb2 = parseFloat(document.getElementById("nb2").value);

    // Vérification que les champs ne sont pas vides et que les valeurs sont des nombres
    if (!isNaN(nb1) && !isNaN(nb2)) {
        // Addition des deux nombres
        var result = nb1 + nb2;

        // Affichage du résultat dans une alerte
        alert("Résultat de l'addition : " + result);
    } else {
        // Affichage d'un message d'erreur si les champs ne sont pas valides
        alert("Veuillez entrer des nombres valides dans les champs.");
    }
});