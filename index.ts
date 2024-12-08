import express from "express";
import cors from "cors";
import corsOptions from "./src/config/cors/cors";
import morgan from "morgan";
import routes from "./src/routes/router";

const app = express();
const port = process.env.PORT || 3000;

// middlewares
app.use(cors(corsOptions));
app.use(morgan("dev"));

app.get("*", routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
