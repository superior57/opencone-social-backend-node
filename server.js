const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");


const rimraf = require('rimraf');
const app = express();
const http = require('http')
const { Server } = require('socket.io');
const server = http.createServer(app);
const io = new Server(server);

const getIOInstance = () => {
  return io;
}


// routes...
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
const contacts = require("./routes/api/contacts");
const chat = require("./routes/api/chat")(getIOInstance);
const comments = require("./routes/api/comments");

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


// socket server
let interval;
io.on('connection', (socket) => {
  console.log('a user connected');
  // if (interval) {
  //   clearInterval(interval);
  // }
  // interval = setInterval(() => sendMessage(socket), 1000);

  socket.on("disconnect", () => {
    console.log("Client disconnected");
    // clearInterval(interval);
  });
  
});

const sendMessage = socket => {
  const response = new Date();
  // Emitting a new message. Will be consumed by the client
  socket.emit("sendMessage", response);
};


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
app.use("/api/contacts", contacts);
app.use("/api/chat", chat);
app.use("/api/comments", comments);

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

server.listen(port, () => console.log(`Server running on port ${port}`));
