//Forma vieja: const { envs } = require('./config/env')
//Forma nueva
import { envs } from './config/env.js'

//Forma vieja: const { startServer } = require('./server/server')
//Forma nueva
import { startServer } from './server/server.js'

const main = () => {
  startServer({
    port: envs.PORT,
    public: envs.PUBLIC_PATH
  })
}

/*
Funcion agnostica auto convocada, 
agnostica porque no tiene nombre y 
autoconvocada porque la ejecutamos con los parentesis del final
*/
(async () => {
  main();
})();

