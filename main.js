import express from "express";
import movieRoutes from "./routes/movies.routes.js";
import connectDB from "./lib/db.js";

const app = express();
const PORT = 6969;

app.get("/", (req, res) => {
  res.json({ msg: "hello students..!!!" });
});

// connect DB

connectDB();

// USING MIDDLEWARES

app.use("/movies", movieRoutes);

app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
});
