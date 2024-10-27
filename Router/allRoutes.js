import Route from "./Route.js";

//definir ici vos routes
export const allRoutes = [
    new Route("/", "Acceuil", "/pages/home.html",),
    new Route("/galerie", "La galerie", "/pages/galerie.html"),
    new Route("/signin", "Connexion", "/pages/auth/signin"),
    new Route("/signup", "Inscription", "/pages/auth/signup.html"),
    new Route("/account", "Mon compte", "/pages/auth/account.html"),
    new Route("/editPassword", "Modifier mot de passe", "/pages/auth/editPassword.html"),

];

//le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";