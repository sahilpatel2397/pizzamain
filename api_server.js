/**
 * Required External Modules
 */

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const path = require("path")
const { messagesRouter } = require("./messages/messages.router");



/**
 * App Variables
 */
 const port = process.env.PORT || 3001;
 const appPort = process.env.SERVER_PORT || 3000;
 const clientOrigins = `https://pizza42sahil.herokuapp.com`;
const app = express();
const apiRouter = express.Router();

/**
 *  App Configuration
 */
 //app.use(morgan("dev"));
app.use(helmet());
app.use(cors({ origin: clientOrigins }));
app.use(express.json());

app.use("/api", apiRouter);

apiRouter.use("/messages", messagesRouter);
app.use(express.static(path.join(__dirname, 'build')));


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use(function (err, req, res, next) {
  console.log(err);
  res.status(500).send(err.message);
});

/**
 * Server Activation
 */

app.listen(port, () =>
  console.log(`API Server listening on port ${port}`)
);
