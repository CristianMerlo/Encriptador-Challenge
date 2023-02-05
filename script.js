
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function encriptar() {
	var texto = document.querySelector(".mensaje_encriptado").value;
	var textoCifrado = texto
    .replace(/a/gi, "ai")
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

	document.querySelector(".mensaje_desencriptado").value = textoCifrado;
}

const boton1 = document.querySelector(".btn_encriptar");
boton1.onclick = encriptar;

function desencriptar() {
	var texto = document.querySelector(".mensaje_encriptado").value;
	var textoCifrado = texto
    .replace(/ai/gi, "a")
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
	document.querySelector(".mensaje_desencriptado").value = textoCifrado;
}

const boton2 = document.querySelector(".btn_desencriptar");
boton2.onclick = desencriptar;

function copiar() {

let texto = document.getElementById('mensaje_desencriptado');
texto.select();
texto.setSelectionRange(0, 99999);
document.execCommand ('copy'); 
}
