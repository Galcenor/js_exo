

<!DOCTYPE html>
 
<head>
    <title>Double Mot de Passe</title>
    <link rel="stylesheet" href="./style.css">
</head>
 
<body>
    <div class="main">
        <div class="image">
            <h2>Exercice 7</h2>
        </div>
        <div class="pass">
            <input id="pass"
                   type="password"
                   name="pass"
                   placeholder="Entrez le Mot de Passe"
                   required>
            <input id="confirm_pass"
                   type="password"
                   name="confirm_pass"
                   placeholder="Confirmez le Mot de Passe" required
                   onkeyup="validate_password()">
        </div>
        <span id="wrong_pass_alert"></span>
        <div class="buttons">
            <button id="create"
                    class="submit_btn"
                    onclick="wrong_pass_alert()">
                Envoyez
            </button>
        </div>
    </div>
    <script src="./script.js"></script>
</body>
</html>