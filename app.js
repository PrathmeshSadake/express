import express from "express";
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.urlencoded());
app.use("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title" /><button type="submit">Add product</button></form>'
  );
});
app.use("/product", (req, res, next) => {
  console.log(req.body.title);
  res.redirect("/");
});
app.get("/", (req, res) => res.send("Hello"));
app.listen(3000);
