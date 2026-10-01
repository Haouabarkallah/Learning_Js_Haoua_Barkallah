// base de données pour stock les articles
// un simple tableau d'objets

let posts = [
    {
        id: 1,
        title: " Comprendre les closures en Javascript",
        excerpt: "Les closures sont un concept clé souvent mal compris par les debutants.",
        content:" Une closure permet à une fonction de se souvenir des variables de son environnement de création, après que cet environnement ait disparu. C'est la base de l'encapsulation en JS...",
        category:"javascript",
        author:"Awa Ndiaye",
        date: "2026-08-01",
    },
    {
        id: 2,
        title: "Introduction à Express.js",
        excerpt: "Express est le framework web le plus populaire pour Node.js. ",
        content:" Express simplifie la création de serveurs HTTP et d'API REST en Node.js grâce à un système de routes et de middlewares très flexible... ",
        category:"backend",
        author:"Karim Traoré",
        date: "2026-08-05",
    },
    {
    id: 3,
    title: "Le modèle CSS Grid expliqué simplement",
    excerpt: "CSS Grid révolutionne la mise en page sur le web.",
    content:
      "Contrairement à Flexbox qui est unidimensionnel, CSS Grid permet de construire des mises en page en deux dimensions (lignes et colonnes) facilement...",
    category: "css",
    author: "Fatou Diop",
    date: "2026-08-10",
    },
    {
    id: 4,
    title: "Async/Await : écrire du code asynchrone lisible",
    excerpt: "async/await simplifie énormément la gestion des promesses.",
    content:
      "async/await est du sucre syntaxique au-dessus des Promises qui permet d'écrire du code asynchrone qui ressemble à du code synchrone, bien plus lisible que les chaînes de .then()...",
    category: "javascript",
    author: "Awa Ndiaye",
    date: "2026-08-14",
    },
    
]