const express = require("express");
const bodyParser = require('body-parser');
const path = require("path");
const pagesRouter = require("./routes/pages");
const apiRouter = require("./routes/apiRouter");
const connectToDatabase = require("./database/connect");
const cookieParser = require("cookie-parser");



const app = express();
const PORT = 3000;

connectToDatabase();

app.use(
  cookieParser,
  bodyParser.json(),
  pagesRouter,
  apiRouter,
  express.static(path.join(__dirname, "public")),

);

app.listen(PORT, () => {
  console.log(`Server is running at PORT http://localhost:${PORT}`);
}); 
