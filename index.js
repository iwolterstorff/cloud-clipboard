const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const port = process.env.PORT || 3000;

let textContents = "";

io.on("connection", socket => {
  socket.emit("text", textContents);
  socket.on("text", data => {
    textContents = data;
    io.sockets.emit("text", textContents);
  });
});

app.use(express.static("static", { index: "main.html" }));
http.listen(port, () => console.log(`Express running on port ${port}`));
