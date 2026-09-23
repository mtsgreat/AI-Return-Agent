const express = require("express");
const chatRoutes = require("./routes/chat.routes");

const app = express();

app.use(express.json());

app.use("/chat", chatRoutes);

module.exports = app;