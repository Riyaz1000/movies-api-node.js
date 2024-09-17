import express from "express";

import {
  movieIndex,
  movieCreate,
  movieUpdate,
  movieDelete,
} from "../controllers/movies.controllers.js";

const router = express.Router();

// CRUD functionalities of movies

// GET => get means data ah fetch pani eduthutu vandhu kaatum (GET - READING)
router.get("/", movieIndex);

// POST => for creating movies
router.post("/", movieCreate);

// PUT => for updating movies
router.put("/:id", movieUpdate);

// DELETE => deleting movies
router.delete("/:id", movieDelete);

export default router;
