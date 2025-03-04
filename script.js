// Partie 1 : Entrée pour la verification de l'âge
   // JAVASCRIPT
    
        document.addEventListener("DOMContentLoaded", function() { //trim() enlève les espaces avant et après la saisie
            let age = prompt("Veuillez entrer votre âge :");
            if (age === null || age.trim() === "" || isNaN(age) || age < 18) { // isNaN() vérifie si age n'est pas un nombre
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
    
        function filterMovies(genre) { // querySelectorAll() permet de sélectionner plusieurs éléments d'un coup.C'est utile pour appliquer des styles ou modifier plusieurs éléments à la fois.
            let allMovies = document.querySelectorAll('.movie'); // allMovies permet de filtrer les films selon leur genre.
            let extraMovies = document.getElementById('extraMovies'); //  permet de montrer ou cacher des films supplémentaires.

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
            let moviesContainer = document.getElementById('movies');
            let toggleBtn = document.getElementById('toggleBtn');
        
            if (extraMovies.classList.contains('hidden')) {
                extraMovies.classList.remove('hidden');
        
                // Insérer les films supplémentaires AVANT les films existants
                moviesContainer.insertBefore(extraMovies, moviesContainer.firstChild);
        
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
        // Partie 7: Footer 
        document.addEventListener("DOMContentLoaded", function () {
            // Création du bouton
            let scrollTopBtn = document.createElement("button");
            let arrowIcon = document.createElement("span");
    
            // Ajout du texte et icône (flèche vers le haut)
            arrowIcon.innerHTML = "⬆️";
            scrollTopBtn.appendChild(arrowIcon);
    
            // Ajout des classes et styles
            scrollTopBtn.id = "scrollTopBtn";
            scrollTopBtn.style.position = "fixed";
            scrollTopBtn.style.bottom = "20px";
            scrollTopBtn.style.right = "20px";
            scrollTopBtn.style.width = "50px";
            scrollTopBtn.style.height = "50px";
            scrollTopBtn.style.background = "#ff4d4d";
            scrollTopBtn.style.color = "white";
            scrollTopBtn.style.border = "none";
            scrollTopBtn.style.borderRadius = "50%";
            scrollTopBtn.style.cursor = "pointer";
            scrollTopBtn.style.display = "none";
            scrollTopBtn.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.2)";
            scrollTopBtn.style.transition = "opacity 0.3s ease-in-out";
    
            // Ajout du bouton au DOM
            document.body.appendChild(scrollTopBtn);
    
            // Fonction pour gérer l'affichage du bouton
            window.addEventListener("scroll", function () {
                if (window.scrollY > 200) {
                    scrollTopBtn.style.display = "block";
                } else {
                    scrollTopBtn.style.display = "none";
                }
            });
    
            // Fonction pour remonter en haut avec une animation fluide
            scrollTopBtn.addEventListener("click", function () {
                window.scrollTo({ top: 0, behavior: "smooth" });
            });
        });

    