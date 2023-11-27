const hello = function () {
  return `Hello world!`;
}

function callbackMoto(callbackSaki) {
  document.getElementById("output").textContent = callbackSaki();
}

callbackMoto(hello);