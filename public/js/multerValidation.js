document.addEventListener("DOMContentLoaded", function () { 

const archivoInput = document.getElementById('archivo');

archivoInput.addEventListener('change',validarArchivo)

function validarArchivo() {
  
  const archivo = archivoInput.files[0];
      if (archivo) {
        const extensionesValidas = ['.jpg', '.jpeg', '.png', '.gif'];
        function obtenerExtension(nombreArchivo) {
          return '.' + nombreArchivo.split('.').pop();
        }
        const extension = obtenerExtension(archivo.name);
        console.log('Archivo:', archivo);
        console.log('Extension:', extension);

        if (extensionesValidas.includes(extension.toLowerCase())) {
          
        } else {
          alert('Tipo de archivo no permitido. Por favor, elige un archivo JPG, JPEG, PNG o GIF.');
        }
      } 
    }



})