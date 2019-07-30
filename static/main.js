var socket = io();

var textArea = document.getElementById("thisiswherethestuffgoes");

textArea.addEventListener("input", function(ev) {
  socket.emit("text", textArea.value);
  console.log(textArea.value);
});

socket.on("text", function(data) {
    textArea.value = data;
});
