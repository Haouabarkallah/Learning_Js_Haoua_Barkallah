// frontend vanilla js qui consomme l'API REST du backend pour afficher les articles de blog
const API_URL = 'http://localhost:3000/api/posts';

// selection des éléments du DOM

const inputRecherche = document.querySelector('#recherche');
const selectCategorie = document.querySelector('#filtre-categorie');
const selectTri = document.querySelector('#tri');
const grilleArticles = document.querySelector('#grille-articles');
const messageEtat = document.querySelector('#message-etat');
const modale = document.querySelector('#modale');
const detailArticle = document.querySelector('#detail-article');
const boutonFermerModale = document.querySelector('#fermer-modale');

