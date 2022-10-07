const express = require("express");
const car = require("./models/car.js");
const db = require("./db/db.js");
const exphbs = require("express-handlebars");
const router = require("./routes/routes.js");
const app = express();
const PORT = 3000;

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/vagancy", router);

db.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Esta rodando na porta: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
