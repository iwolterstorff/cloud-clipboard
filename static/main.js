if (!window.isSecureContext) {
  here = new URL(window.location);
  here.protocol = "https:";
  window.location = here.href;
}


var socket = io();

var textArea = document.getElementById("thisiswherethestuffgoes");

textArea.addEventListener("input", function(ev) {
  socket.emit("text", textArea.value);
});

socket.on("text", function(data) {
  textArea.value = data;
});

function copyToClipboard() {
  navigator.clipboard.writeText(textArea.value);
}
