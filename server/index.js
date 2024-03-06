const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const app = express();
const server = http.createServer(app);
const io = socketio(server);
const router = require("./router");
app.use(router);
io.on("connection", () => {
  console.log("We have a new connection");
  socket.on("disconnect", () => {
    console.log("user left");
  });
});
app.listen(3000, () => {
  console.log("server listening");
});
