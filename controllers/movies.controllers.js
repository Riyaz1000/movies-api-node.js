import Movie from "../models/movie.model.js";

export const movieIndex = async (req, res) => {
  try {
    const movie = await Movie.find();
    res.json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const movieCreate = async (req, res) => {
  // id, title ,desc

  // validate your data
  const newMovie = new Movie({
    title: req.body.title,
    desc: req.body.desc,
  });

  try {
    // try la save pandrathu error vandha catch la tharuthu
    const movie = await newMovie.save();
    return res.status(201).json(movie);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const movieUpdate = (req, res) => {
  res.send("update all the movies");
};

export const movieDelete = (req, res) => {
  res.send("delete all the moviess");
};
