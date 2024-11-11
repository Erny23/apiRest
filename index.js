const express = require('express');
const morgan = require('morgan');
const router = require("./routes/router");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(morgan("dev"));

app.get("*", router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});