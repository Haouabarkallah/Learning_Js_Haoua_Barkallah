// le point d'entrée de notre API Express

const express = require("express");
const cors = require("cors");
const postsRouter = require("./routes/posts");

const app = express();
const PORT = process.env.PORT || 3000;


// Middlewares 
app.use(cors()); // autorise le frontend (servi depuis une autre origine/ports ) à appeler l'api
app.use(express.json()); // permet de lire req.body en JSON (pour es requetes POST/PUT)

/// petit middleware "logger" fait main , pour voir chaque requette dans le terminal

app.use((req, res, next)=> {
    console.log(`${new Date().toDateString} - ${req.method} {req.url}`);
    next(); // Important : passe la main au middleware/route suivante
});
 


    
