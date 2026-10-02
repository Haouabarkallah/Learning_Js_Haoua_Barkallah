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

router.get("/",(req, res) =>{
    let resultat =[...posts]; // copie pour ne jamais muter les données originales
    const { search, category, sort} = req.query;

    if (search) {
        const termeRecherche = search.toLowerCase();
        resultat = resultat.filter(
            (post) =>
              post.title.toLowerCase().includes(termeRecherche) || post.excerpt.toLowerCase().includes(termeRecherche)
        );
    }

    if (category){
        resultat = resultat.filter(
            (post)=> post.category.toLowerCase() === category.toLowerCase()
        );
    }
    if (sort === "ancien") {
        resultat.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else {
        // "recent" par defaut
        resultat.sort((a,b))
    }

    res.json({
        total: resultat.length,
        posts: resultat,
    });

});
/**
 * GET /api/posts/categories
 * Retourne la liste des catégories uniques (utile pour construire un <select> côté front).
 * ⚠️ Cette route doit être déclarée AVANT "/:id", sinon Express interprète
 * "categories" comme une valeur d'id !
 */
router.get("/categories", (req, res) =>{
    const categories =[...new Set(posts.map((p)=> p.category))];
    res.json(categories);
});

/***
 * GET/api/posts/:id
 * retourne un seule article par son id
 */
router.get("/:id", (req, res) =>{
    const id =Number(req.params.id);
    const post = posts.find((p) => p.id === id);

    if (!post){
        return res.status(404).json({ erreur: `Aucun article trouvé avec l'id ${id}`});
    }

    res.json(post);
});