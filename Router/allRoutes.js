import Route from "./Route.js";

//definir ici vos routes
export const allRoutes = [
    new Route("/", "Acceuil", "/pages/home.html",[]),
    new Route("/galerie", "La galerie", "/pages/galerie.html", []),
    new Route("/signin", "Connexion", "/pages/auth/signin.html", ["disconnected"], "/js/signin.js"),
    new Route("/signup", "Inscription", "/pages/auth/signup.html", ["disconnected"], "/js/signup.js"),
    new Route("/account", "Mon compte", "/pages/auth/account.html",["client", "admin"]),
    new Route("/editPassword", "Modifier mot de passe", "/pages/auth/editPassword.html",["client", "admin"]),
    new Route("/allResa", "Les reservations", "/pages/Reservations/allResa.html", ["client"]),
    new Route("/reserver", "Reserver", "/pages/Reservations/reserver.html", ["client"]),

];

//le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";