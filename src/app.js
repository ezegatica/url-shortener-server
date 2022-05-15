// Dependencias
const express = require("express");
const cookieParser = require("cookie-parser")
const cors = require("cors")
const config = require('./config')
const morgan = require("morgan");
//Import Rutas
const rutasTools = require('./Routers/Herramientas.routes');
const rutasRoot = require('./Routers/Root.routes');
const rutasUsuario = require("./Routers/User.routes");
const rutasURL = require("./Routers/Link.routes");
const rutasVentas = require("./Routers/Ventas.routes");
const handle404 = require("./Middleware/redirect.mw")
// start
const app = express();

// setup
app.use(express.json())
app.use(cookieParser())
app.use(cors());
app.use(express.static('./assets'))
app.use(morgan('dev'));

// routes
app.use("/", rutasRoot)
app.use("/auth", rutasUsuario)
app.use("/url", rutasURL)
app.use('/herramientas', rutasTools);
app.use('/ventas', rutasVentas);
app.use(handle404)


module.exports = app;