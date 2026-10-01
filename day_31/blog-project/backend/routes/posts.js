// toutes les routes liées à la ressource "posts" (articles de blog).

const express = require("express");
const router = express.Router();
const { posts, getNextId } = require("../data/posts");

