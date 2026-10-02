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

// utilitaire : debounce pour ne pas spammer l'API à chaque frappe de l'utilisateur

function debounce(fonction, delai) {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fonction(...args), delai);
    };
}

// utilitaire : formatage de la date en français
function formaterDate(dateISO) {
    return new Date(dateISO).toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
} 
