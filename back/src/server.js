const express = require("express");
const cors = require('cors')
const server = express();
const PORT = 3001;
const router = require("./routes/index");
const favsRouters = require("./routes/favsRouters");

server.use(cors())
server.use(express.json());
server.use("/rickandmorty", router);
server.use('/favs', favsRouters)

server.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto: ${PORT}`);
});
