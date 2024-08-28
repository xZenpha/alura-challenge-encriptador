const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

const codigos = [
  { normal: "e", encriptado: "enter" },
  { normal: "i", encriptado: "imes" },
  { normal: "a", encriptado: "ai" },
  { normal: "o", encriptado: "ober" },
  { normal: "u", encriptado: "ufat" },
];

function btnEncriptar() {
  actualizarMensaje(encriptarDesencriptar(textArea.value, "encriptar"));
}

function btnDesencriptar() {
  actualizarMensaje(encriptarDesencriptar(textArea.value, "desencriptar"));
}

function encriptarDesencriptar(texto, tipo) {
  return codigos.reduce((resultado, codigo) => {
    const [buscar, reemplazar] =
      tipo === "encriptar"
        ? [codigo.normal, codigo.encriptado]
        : [codigo.encriptado, codigo.normal];

    return resultado.replaceAll(buscar, reemplazar);
  }, texto.toLowerCase());
}

function actualizarMensaje(texto) {
  mensaje.value = texto;
  textArea.value = "";
}

function copiarTexto() {
  navigator.clipboard
    .writeText(mensaje.value)
    .then(() => {
      alert("Texto copiado al portapapeles");
    })
    .catch((err) => {
      console.error("Error al copiar el texto: ", err);
    });
}
