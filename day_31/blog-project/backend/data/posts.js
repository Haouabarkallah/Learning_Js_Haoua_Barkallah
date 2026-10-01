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
    {
    id: 5,
    title: "Créer une API REST avec Node.js",
    excerpt: "Les principes REST appliqués concrètement avec Express.",
    content:
      "REST (Representational State Transfer) définit un ensemble de conventions pour construire des APIs : utiliser les verbes HTTP (GET, POST, PUT, DELETE), des URLs basées sur des ressources, etc...",
    category: "backend",
    author: "Karim Traoré",
    date: "2026-08-20",
    },
    {
    id: 6,
    title: "Flexbox vs Grid : lequel choisir ?",
    excerpt: "Un comparatif pratique entre les deux systèmes de mise en page CSS.",
    content:
      "Flexbox excelle pour aligner des éléments sur un seul axe (ligne ou colonne), tandis que Grid est plus adapté aux mises en page complexes en deux dimensions...",
    category: "css",
    author: "Fatou Diop",
    date: "2026-08-25",
    },
    {
    id: 7,
    title: "Les bases de l'Event Loop en JavaScript",
    excerpt: "Comprendre pourquoi setTimeout(fn, 0) ne s'exécute pas immédiatement.",
    content:
      "JavaScript est mono-thread, mais utilise une boucle d'événements (event loop) pour gérer les opérations asynchrones sans bloquer l'exécution du programme...",
    category: "javascript",
    author: "Moussa Kane",
    date: "2026-09-01",
    },
    {
    id: 8,
    title: "Sécuriser une API avec des tokens JWT",
    excerpt: "Introduction à l'authentification sans état (stateless).",
    content:
      "JWT (JSON Web Token) permet d'authentifier des utilisateurs sans que le serveur ait besoin de stocker une session. Le token contient lui-même les informations nécessaires...",
    category: "backend",
    author: "Karim Traoré",
    date: "2026-09-05",
    },
]