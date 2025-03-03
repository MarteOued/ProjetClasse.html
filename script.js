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
    
        function filterMovies(genre) {
            let allMovies = document.querySelectorAll('.movie');
            let extraMovies = document.getElementById('extraMovies');

            allMovies.forEach(movie => {
                if (genre === 'all') {
                    movie.style.display = 'inline-block';
                } else {
                    if (movie.classList.contains(genre)) {
                        movie.style.display = 'inline-block';
                    } else {
                        movie.style.display = 'none';
                    }
                }
            });

            // Cacher les films supplémentaires si on filtre
            extraMovies.classList.add('hidden');
            document.getElementById('toggleBtn').textContent = "Plus de films";
        }

        function toggleMovies() {
            let extraMovies = document.getElementById('extraMovies');
            let toggleBtn = document.getElementById('toggleBtn');

            if (extraMovies.classList.contains('hidden')) {
                extraMovies.classList.remove('hidden');
                toggleBtn.textContent = "Moins de films";
            } else {
                extraMovies.classList.add('hidden');
                toggleBtn.textContent = "Plus de films";
            }
        }
        function showPopup() {
            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let message = document.getElementById("message").value;

            if (name === "" || email === "" || message === "") {
                alert("⚠️ Oups ! Tous les champs doivent être remplis avant d'envoyer votre message.");
                return;
            }

            document.getElementById("popupName").textContent = name;
            document.getElementById("popupEmail").textContent = email;
            document.getElementById("popupMessage").textContent = message;

            document.getElementById("popup").style.display = "block";
            document.getElementById("popupOverlay").style.display = "block";
        }

        function closePopup() {
            document.getElementById("popup").style.display = "none";
            document.getElementById("popupOverlay").style.display = "none";
        }

    