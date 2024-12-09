import express from "express";
import cors from "cors";
import {corsOptions, localCors} from "./src/config/cors/cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import routes from "./src/routes/router";

const app = express(); // Servidor
const port = process.env.PORT || 3000; // Puerto
const isProduction = process.env.NODE_ENV === "production" // Modo

// middlewares
if (isProduction) {
  app.use(cors(corsOptions));
} else {
  app.use(cors(localCors));
}
app.use(bodyParser.json());
app.use(morgan(":remote-addr :method - :status - :url - :res[content-length] / :response-time ms"));

// Rutas
app.use("/", routes);

// Conexión
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
