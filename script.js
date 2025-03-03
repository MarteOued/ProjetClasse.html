// Partie 1 : Entrée pour la verification de l'âge
   // JAVASCRIPT
    
        document.addEventListener("DOMContentLoaded", function() {
            let age = prompt("Veuillez entrer votre âge :");
            if (age === null || age.trim() === "" || isNaN(age) || age < 18) {
                window.location.href = "https://www.imdb.com";
            } else {
                document.getElementById("cookieBox").style.display = "block";
            }
        });

        // Box de mise en garde cookies : permet d'Afficher un message concernant l'utilisation des cookies et un bouton pour accepter 

        function acceptCookies() { 
            document.getElementById("cookieBox").style.display = "none";
            document.getElementById("content").style.display = "block";
        }

        function refuseCookies() {
            alert("Vous devez accepter les cookies pour accéder au site.");
            window.location.href = "https://www.imdb.com";
        }
    