import express from "express";
import cors from "cors";
import {corsOptions, localOptions} from "./src/config/cors/cors";
import morgan from "morgan";
import routes from "./src/routes/router";

const app = express();
const port = process.env.PORT || 3000;

// middlewares
if (process.env.NODE_ENV === 'production' || process.env.MODE) {
  app.use(cors(corsOptions));
} else {
  app.use(cors(localOptions));
}
app.use(morgan("dev"));

// Solicitudes GET
app.get("*", routes);

// Conexión
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
