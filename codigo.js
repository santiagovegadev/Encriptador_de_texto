const text_area = document.querySelector(".text_area");
const text_area_encriptado = document.querySelector(".text_area_encriptado");
const ningun_mensaje = document.querySelector(".ningun_mensaje");
const btn_copiar = document.querySelector(".btn_copiar");

function btnEncriptar() {
        const textoEncriptado = encriptar(text_area.value);
        text_area_encriptado.value = textoEncriptado;
        text_area.value = "";
        text_area_encriptado.style.backgroundImage = "none"
        ningun_mensaje.textContent= ""
        btn_copiar.style.visibility = "visible"

}

function btnDesencriptar() {
        const textoDesencriptado = desencriptar(text_area.value);
        text_area_encriptado.value = textoDesencriptado;
        text_area.value = "";
        text_area_encriptado.style.backgroundImage = "none"
        ningun_mensaje.textContent= ""
        btn_copiar.style.visibility = "visible"
}

function copiar() {
        var contenido = document.querySelector(".text_area_encriptado");
        contenido.select();
        if (document.execCommand("copy")) {
                text_area_encriptado.value= "";
                btn_copiar.style.visibility = "hidden";
                
                
        }
        
      }





// Función para encriptar un texto
        function encriptar(texto) {
        // Reemplazar "e" con "enter"
        texto = texto.toLowerCase();

        texto = texto.replace(/e/g, "enter");

        // Reemplazar "i" con "imes"
        texto = texto.replace(/i/g, "imes");

        // Reemplazar "a" con "ai"
        texto = texto.replace(/a/g, "ai");

        // Reemplazar "o" con "ober"
        texto = texto.replace(/o/g, "ober");

        // Reemplazar "u" con "ufat"
        texto = texto.replace(/u/g, "ufat");

        // Devolver texto encriptado
        return texto;
        }

        // Función para desencriptar un texto
        function desencriptar(texto_encriptado) {
        // Reemplazar "ufat" con "u"
        texto_encriptado = texto_encriptado.replace(/ufat/g, "u");

        // Reemplazar "ober" con "o"
        texto_encriptado = texto_encriptado.replace(/ober/g, "o");

        // Reemplazar "ai" con "a"
        texto_encriptado = texto_encriptado.replace(/ai/g, "a");

        // Reemplazar "imes" con "i"
        texto_encriptado = texto_encriptado.replace(/imes/g, "i");

        // Reemplazar "enter" con "e"
        texto_encriptado = texto_encriptado.replace(/enter/g, "e");

        // Devolver texto desencriptado
        return texto_encriptado;
        }


