const express = require('express');

const app = express();
const port = process.env.PORT || 3000

app.get("/", (req:Express.Request, res: { json: (arg0: string) => void; }) => {
  res.json("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
