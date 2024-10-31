import Route from "./Route.js";

//definir ici vos routes
export const allRoutes = [
    new Route("/", "Acceuil", "/pages/home.html",),
    new Route("/galerie", "La galerie", "/pages/galerie.html"),
    new Route("/signin", "Connexion", "/pages/auth/signin.html", "/js/signin.js"),
    new Route("/signup", "Inscription", "/pages/auth/signup.html", "/js/signup.js"),
    new Route("/account", "Mon compte", "/pages/auth/account.html"),
    new Route("/editPassword", "Modifier mot de passe", "/pages/auth/editPassword.html"),
    new Route("/allResa", "Les reservations", "/pages/Reservations/allResa.html"),
    new Route("/reserver", "Reserver", "/pages/Reservations/reserver.html"),

];

//le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";