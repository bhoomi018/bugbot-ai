 
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser"); // to parse POST request data
const path = require("path");

dotenv.config(); // Load env variables
const app = express();
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.static(path.join(__dirname, "public")));
  app.set("view engine", "ejs");
  app.set("views", path.join(__dirname, "views"));
  app.get("/", (req, res) => {
    res.render("index"); // index.ejs will be the homepage with form later
  });
      
  const PORT = process.env.PORT || 8000;
  app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  });
