<!DOCTYPE html>
<html>
<head>
    <title>Jeu de devinette</title>
    <link rel="stylesheet" type="text/css" href="./assets/style.css">
</head>
<body>
    <h1>Jeu de devinette</h1>
    <form>
        <label for="numberInput">Entrez un nombre entre 0 et 100 :</label>
        <input type="number" id="numberInput" min="0" max="100" required>
        <button type="button" id="playButton">Jouer</button>
    </form>
    <div id="msg"></div>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="./assets/script.js"></script>
</body>
</html>
