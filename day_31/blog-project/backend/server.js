// le point d'entrée de notre API Express

const express = require("express");
const cors = require("cors");
const postsRouter = require("./routes/posts");

const app = express();
const PORT = process.env.PORT || 3000;



    
