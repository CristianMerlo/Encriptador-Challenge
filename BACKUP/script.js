const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

let input = document.querySelector(".text-area");
let code = document.querySelector(".resultado-area");
let botonCopiar = document.querySelector(".btn-copiar");

let borraAcentos = (str) => {
return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
};

function btnEncriptar () {
let textoEncriptado = encriptarTexto (input.value);
code.value = textoEncriptado;
input.value = "";
code.style.backgroundImage = "none";
code.style.divclassList.display = "show";
}

function encriptarTexto (stringEncriptado) {
let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
stringEncriptado = borraAcentos(stringEncriptado).toLowerCase ();
for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptado.includes (matrizCodigo[i][0])) {
    stringEncriptado = stringEncriptado.replaceAll (matrizCodigo[i][0], matrizCodigo[i][1]);
    }
}
botonCopiar.style.display = "block";
return stringEncriptado;
}

function btnDesencriptar () {
let textoEncriptado = desencriptarTexto (input.value);
code.value = textoEncriptado;
input.value = "";
code.style.backgroundImage = "none";
code.style.divclassList.display = "show";
}

function desencriptarTexto (stringDesencriptado) {
let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
stringDesencriptado = stringDesencriptado.toLowerCase ();
for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptado.includes (matrizCodigo[i][1])) {
    stringDesencriptado = stringDesencriptado.replaceAll (matrizCodigo[i][1], matrizCodigo[i][0])
    }
}
botonCopiar.style.display = "block";
return stringDesencriptado;
}

function copiar () {
var copyText = document.querySelector(".resultado-area");
copyText.select();
copyText.setSelectionRange(0, 99999);
navigator.clipboard.writeText(copyText.value)
copyText.value = "";
alert("Texto Copiado")
}

