import express from "express";
const app = express();
app.use((req, res, next) => {
  console.log("Middleware 1");
  next();
});
app.use((req, res, next) => {
  console.log("Middleware 2");
  next();
});
app.listen(3000);
