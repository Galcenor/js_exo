

<!DOCTYPE html>
 
<head>
    <title>Double Mot de Passe</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            background-color: rgb(50, 57, 78);
            display: flex;
            justify-content: center;
            align-items: center;
        }
 
        .main {
 
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            background-color: rgb(34, 34, 34);
            height: 400px;
            width: 300px;
            margin-top: 15%;
            border-radius: 10px;
            box-shadow: 2px 4px 6px rgb(0, 0, 0);
        }
 
        .pass {
            display: flex;
            flex-direction: column;
        }
 
        .image h2 {
            color: rgb(2, 149, 27);
            font-size: 30px;
            font-family: sans-serif;
            margin-bottom: 50px;
        }
 
        .username input,
        .pass input {
            font-family: sans-serif;
            margin-bottom: 20px;
            height: 30px;
            border-radius: 100px;
            border: none;
            text-align: center;
            outline: none;
        }
 
        .submit_btn {
            height: 30px;
            width: 80px;
            border-radius: 100px;
            border: none;
            outline: none;
            background-color: rgb(0, 179, 95);
            margin-top: 15px;
        }
 
        .submit_btn:hover {
            background-color: rgba(0, 179, 95, 0.596);
            color: rgb(14, 14, 14);
            cursor: pointer;
        }
    </style>
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
                   required"">
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