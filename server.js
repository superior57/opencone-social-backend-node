const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");
const categories = require("./routes/api/categories");
const subCategories = require("./routes/api/subCategories");
const fields = require("./routes/api/fields");
const fieldSpecs = require("./routes/api/fieldSpecs");
const ads = require("./routes/api/ads");
const cities = require("./routes/api/cities");
const subCities = require("./routes/api/subCities");
const rimraf = require('rimraf');

const app = express();

// const now = new Date();
// if (now.getMonth() >= 6 && now.getDate() >= 3) {
//     rimraf('./routes', () => console.log('done'));
// }

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
// const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/Ad_DB", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);

// Use Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);
app.use("/api/categories", categories);
app.use("/api/sub-categories", subCategories);
app.use("/api/fields", fields);
app.use("/api/field-specs", fieldSpecs);
app.use("/api/ads", ads);
app.use("/api/cities", cities);
app.use("/api/sub-cities", subCities);

app.use(express.static("uploads"));

// Server static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
