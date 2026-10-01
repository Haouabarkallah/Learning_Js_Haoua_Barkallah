// toutes les routes liées à la ressource "posts" (articles de blog).

const express = require("express");
const router = express.Router();
const { posts, getNextId } = require("../data/posts");

 
/**
 * GET /api/posts
 * Liste les articles, avec recherche et filtre optionnels via query params :
 *   ?search=motcle   → recherche dans le titre et l'extrait (insensible à la casse)
 *   ?category=css    → filtre par catégorie
 *   ?sort=recent      → tri (recent | ancien)
 *
 * Exemple : /api/posts?search=async&category=javascript
 */

router.get("/",(req,res) =>{
    let resultat =[...posts]; // copie pour ne jamais muter les données originales
    const { search, category, sort} = req.query;

    if (search) {
        const termeRecherche = search.toLowerCase();
        resultat = resultat.filter(
            (post) =>
                post.title.toLowerCase().includes(termeRecherche) || post.excerpt.toLowerCase().includes(termeRecherche)
        );
    }
})