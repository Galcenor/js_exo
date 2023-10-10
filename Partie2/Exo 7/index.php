<html>
<head>
<title> Password Matching Validation </title>
</head>
<body>
<form>
<h1 style="color:green">Exercice 7</h1>
<!-- Entrer le Mot de Passe -->
<td> Entrez le Mot de Passe </td>
<input type = "password" name = "pswd1"> <br><br>

<!-- Confirmer -->
<td> Retapez le Mot de Passe  </td>
<input type = "password" name = "pswd2"> <br><br>

<!-- Click to validate confirm password -->
<button type = "submit" onclick="matchPassword()">Submit</button>

<!-- Click to reset fields -->
<button type = "reset" value = "Reset" >Reset</button>
</form>
</body>
<script src="./script.js"></script>
</html>