const express = require('express');
const routes = require('./src/routes/router');

const app = express();
const port = process.env.PORT || 3000

app.get("*", routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
