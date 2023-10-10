<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Exercice 2</h1>
    <form id="formulaire">
        <label for="nom">Nom :</label>
        <input type="text" id="nom" name="nom" value="John"><br><br>

        <label for="prenom">Prenom :</label><br>
        <input id="prenom" name="prenom" value="Rasley"></input><br><br>

        <label for="email">Email :</label>
        <input type="email" id="email" name="email" value="johndoe@example.com"><br><br>

        <input type="submit" value="Envoyer">
        <input type="button" value="Réinitialiser" onclick="resetForm()">
    </form>
</body>
<script src="./script.js"></script>
</html>