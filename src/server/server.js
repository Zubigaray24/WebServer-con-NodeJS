const exp = require('constants');
const express = require('express');
const path = require('path');


const startServer = (options) => {

  //Se desestructura el objeto options para obtener las propiedades port y public_path. 
  //Si public_path no está definido en options, se asigna el valor 'public' por defecto.
  const { port, public_path = 'public' } = options;

  //Se crea una instancia de la aplicación Express con const app = express();.
  const app = express();

  //Para poder usar middlewares hay que usar la palabra use.
  //Luego, se configura un middleware para servir archivos estáticos 
  //desde la carpeta especificada en public_path usando app.use(express.static(public_path)). 
  //Esto significa que cualquier archivo en esa carpeta (como imágenes, hojas de estilo o scripts) 
  //estará disponible públicamente en la ruta del servidor. El middleware express.static permite 
  //que Express sirva automáticamente los archivos estáticos (como HTML, CSS, imágenes, etc.) sin 
  //necesidad de escribir rutas específicas para cada uno.
  app.use(express.static(public_path))

  //La siguiente línea captura todas las rutas que no han sido manejadas previamente por otros middlewares o rutas.
  //Cuando se recibe una solicitud HTTP GET en cualquier ruta (*), se ejecuta la función de manejo de la solicitud.
  //En esta función, se construye la ruta completa al archivo index.html dentro de la carpeta especificada por public_path.
  app.get('*', (req, res) => {
    const indexPath = path.join(__dirname + `../../../${public_path}/index.html`)
    res.sendFile(indexPath)
  })

  //Inicia el servidor en el puerto especificado en port.
  app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`)
  })
}

module.exports = {
  startServer
}