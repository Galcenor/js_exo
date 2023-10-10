function validate_password() {
 
    var pass = document.getElementById('pass').value;
    var confirm_pass = document.getElementById('confirm_pass').value;
    // Demande si les deux mot de passes sont les mêmes
    if (pass != confirm_pass) {
        // Met une couleur et indique que les deux mot de passe ne sont pas identique
        document.getElementById('wrong_pass_alert').style.color = 'red';
        document.getElementById('wrong_pass_alert').innerHTML
            = '☒ Veuillez à utiliser le même mot de passe';
        // Permet de ne pas pouvoir cliquer sur le bouton
        document.getElementById('create').disabled = true;
        document.getElementById('create').style.opacity = (0.4);
    } else {
        // Met une couleur et indique que les deux mot de passe sont identique
        document.getElementById('wrong_pass_alert').style.color = 'green';
        document.getElementById('wrong_pass_alert').innerHTML =
            '🗹 Les deux mot de passe sont identiques';
        // Permet de pouvoir cliquer sur le bouton
        document.getElementById('create').disabled = false;
        document.getElementById('create').style.opacity = (1);
    }
}

function wrong_pass_alert() {
    if (document.getElementById('pass').value != "" &&
        document.getElementById('confirm_pass').value != "") {
        alert("Votre mot de passe à été envoyer");
    } else {
        alert("Veuillez à remplir ce qu'il manque");
    }
}