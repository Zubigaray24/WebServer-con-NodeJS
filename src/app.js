const { envs } = require('./config/env')
const { startServer } = require('./server/server')

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

