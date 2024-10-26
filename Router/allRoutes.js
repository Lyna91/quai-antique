import Route from "./Route.js";

//definir ici vos routes
export const allRoutes = [
    new Route("/", "Acceuil", "/pages/home.html",),
    new Route("/galerie", "La galerie", "/pages/galerie.html"),
    new Route("/signin", "Connexion", "/pages/signin.html"),

];

//le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";