const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

// app.use((req,res, next) => {
//     console.log("hi i am middleware");
//     next();
// });

// app.use((req, res, next) => {
//     req.time =  new Date(Date.now()).toString();
//     console.log(req.method , req.hostname , req.time);
//     next()
// })
app.use("/api", (req, res, next) => {
  let { token } = req.query;
  if (token == "give access") {
    next();
  }
  throw new ExpressError(401, "ACCESS DENIED");
});

app.get("/err", (req, res) => {
  abcd = abcd;
});

app.get("/admin", (req, res) => {
  let {password} = req.query;
  if(password == "tanisha") {
    res.send("access granted");
  }
  else{
    throw new ExpressError(
      403,
      "This page belongs to tanisha jhunjhunwala , request denied"
    );
  }
  
});

app.use((err, req, res, next) => {
  let { status = 500, message = "some message occured" } = err;
  res.status(status).send(message);
});

app.get("/api", (req, res) => {
  res.send("data");
});

app.get("/", (req, res) => {
  res.send("hi , i am root");
});
app.get("/random", (req, res) => {
 res.send("data");
});


app.listen(8000, () => {
  console.log("app is listening at port 8080");
});
