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


/**
 * Construit l'URL de l'API avec les filtres actuels (search, category, sort)
 * en utilisant URLSearchParams, qui gère automatiquement l'encodage.
 */

function construireUrl() {
    const params = new URLSearchParams();
    if (inputRecherche.value.trim()) params.set('search', inputRecherche.value.trim());
    if (selectCategorie.value) params.set('category', selectCategorie.value);
    if (selectTri.value) params.set('sort', selectTri.value);
    return `${API_URL}?${params.toString()}`;
}

/**
 * Récupère les articles depuis l'API et met à jour l'affichage.
 * Utilise async/await + try/catch pour une gestion d'erreurs propre.
 */

async function chargerArticles() {
    messageEtat.textContent = 'Chargement des articles...';
    try {
        const response = await fetch(construireUrl());

        if (!response.ok) {
            throw new Error(`Erreur serveur: ${response.status}`);
        }

        const donnees = await response.json();
        afficherArticles(donnees.posts);

        messageEtat.textContent = donnees.total === 0 ? 'Aucun article ne correspond à votre recherche.' : `${donnees.total} article(s) trouvé(s).`;
    } catch (erreur) {
       
        messageEtat.textContent = `Impossible de charger les articles : ${erreur.message}`;
        console.error(erreur);
    }
}

 
/**
 * Génère et insère les cartes d'articles dans le DOM.
 */
function afficherArticles(articles) {
    grilleArticles.innerHTML = articles
    .map((article) => `
        <article class="carte-article" data-id="${article.id}">
            <span class="categorie">${article.category}</span>
            <h2>${article.title}</h2>
            <p>${article.excerpt}</p>
            <div class="meta">Par ${article.author} . ${formaterDate(article.date)}</div>
        </article>
    `)
    .join("");
        
}

/**
 * Récupère un article précis par son id et l'affiche dans la modale.
 */
async function afficherDetailArticle(id) {
    try {
        const reponse = await fetch(`${API_URL}/${id}`);
        if (!reponse.ok) 
            throw new Error("Article introuvable");
        
        const article = await reponse.json();

        detailArticle.innerHTML = `
            <span class="categorie">${article.category}</span>
            <h2>${article.title}</h2>
            
            <div class="meta">Par ${article.author} . ${formaterDate(article.date)}</div>
            <div class="contenu">${article.content}</div>
        `;
        modale.classList.remove('masquee');
    } catch (erreur) {
        alert( erreur.message);
    }
}

/**
 * Charge la liste des catégories depuis l'API pour remplir le <select>.
 */
async function chargerCategories() {
    try {
        const reponse = await fetch(`${API_URL}/categories`);
        const categories = await reponse.json();

        categories.forEach((categorie) => {
            const option = document.createElement('option');
            option.value = categorie;
            option.textContent = categorie.charAt;(0).toUpperCase() + categorie.slice(1);

            selectCategorie.appendChild(option);
        });
    } catch (erreur) {
        
        console.error("Impossible de charger les catégories : ",erreur);
    }    
}   

// ecouteur d'evenements
// recherche "en direct" avec debounce (attend 400ms apres la derniere frappe)

inputRecherche.addEventListener("input", debounce(chargerArticles, 400));

// filters : rechargement imediat au changement
selectCategorie.addEventListener("change", chargerArticles);
selectTri.addEventListener("change", chargerArticles);

// delegation d'evenement pour les cartes d'articles : un seul listener pour toutes les artess (meme futures)
grilleArticles.addEventListener("click", (event) => {
    const carte = event.target.closest(".carte-article");
    if (carte) {
        const id = carte.dataset.id;
        afficherDetailArticle(id);
    }
});