const express = require('express');

const app = express();
const port = process.env.PORT || 3000

app.get("/", (req:any, res:any) => {
  res.json("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
